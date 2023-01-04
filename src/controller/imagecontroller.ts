// import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from "express";
import * as helper from "../util/helper";
import * as fs from "fs";
import path from "path";

// show imgage
export const showImage: RequestHandler = (req, res) => {
	let filePath: string;
	const imagename = String(req.query.filename);
	const imagewidth = Number(req.query.width);
	const imageheight = Number(req.query.height);

	filePath = process.cwd() + `/public/img/${imagename}`;

	// check image if exist
	if (helper.checkImage(filePath)) {
		if (
			typeof req.query.width === "undefined" ||
			typeof req.query.height === "undefined"
		) {
			// Reading the Image file without width nor height
			fs.readFile(filePath, function (_err: unknown, content: unknown) {
				res.end(content);
			});
		}
		// check if image width and height is define in the get request from the brower
		else if (Boolean(imagewidth) && Boolean(imageheight)) {
			// Extracting file extension
			if (!helper.isPositive(imagewidth) || !helper.isPositive(imageheight)) {
				// check if it's a nagative number
				res.end("Image Width nor Height must be greater than 0");
			} else {
				const ext = path.extname(imagename);
				const name = path.parse(imagename).name;
				// eslint-disable-next-line prettier/prettier
				filePath =
					process.cwd() +
					`/public/img/thumbs/${name}-${imagewidth}-${imageheight}${ext}`;

				// Create ThumbNail Image
				if (!helper.checkImage(filePath)) {
					console.log`create image`;
					// eslint-disable-next-line prettier/prettier
					const data = helper.imageThumbCreate(
						imagename,
						imagewidth,
						imageheight,
					); // create thumbsnail method
					void data.then(() => {
						fs.readFile(filePath, function (_err: unknown, content: unknown) {
							res.end(content);
						});
					});
				} else {
					// Reading the Exitsting Image File
					console.log`get exitsting image`;
					fs.readFile(filePath, function (_err: unknown, content: unknown) {
						res.end(content);
					});
				}
			}
		} else {
			!helper.isNumeric(imagewidth) || !helper.isNumeric(imageheight)
				? res.end("Image Width nor Height is not numeric")
				: res.end("Image Width nor Height can not be empty");
		}
	} else {
		res.writeHead(404, { "Content-Type": "text/plan" });
		res.end("Image does no exist");
	}
};
