"use strict";
var __createBinding =
	(this && this.__createBinding) ||
	(Object.create
		? function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				var desc = Object.getOwnPropertyDescriptor(m, k);
				if (
					!desc ||
					("get" in desc ? !m.__esModule : desc.writable || desc.configurable)
				) {
					desc = {
						enumerable: true,
						get: function () {
							return m[k];
						},
					};
				}
				Object.defineProperty(o, k2, desc);
		  }
		: function (o, m, k, k2) {
				if (k2 === undefined) k2 = k;
				o[k2] = m[k];
		  });
var __setModuleDefault =
	(this && this.__setModuleDefault) ||
	(Object.create
		? function (o, v) {
				Object.defineProperty(o, "default", { enumerable: true, value: v });
		  }
		: function (o, v) {
				o["default"] = v;
		  });
var __importStar =
	(this && this.__importStar) ||
	function (mod) {
		if (mod && mod.__esModule) return mod;
		var result = {};
		if (mod != null)
			for (var k in mod)
				if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
					__createBinding(result, mod, k);
		__setModuleDefault(result, mod);
		return result;
	};
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showImage = void 0;
const helper = __importStar(require("../util/helper"));
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
// show imgage
const showImage = (req, res) => {
	let filePath;
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
			fs.readFile(filePath, function (_err, content) {
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
				const ext = path_1.default.extname(imagename);
				const name = path_1.default.parse(imagename).name;
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
						fs.readFile(filePath, function (_err, content) {
							res.end(content);
						});
					});
				} else {
					// Reading the Exitsting Image File
					console.log`get exitsting image`;
					fs.readFile(filePath, function (_err, content) {
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
exports.showImage = showImage;
