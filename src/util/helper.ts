import * as fs from "fs";
import path from "path";
import sharp from "sharp";

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, prettier/prettier
export const imageThumbCreate = async (img: string, w: number, h: number): Promise<void> => {
	const ext = path.extname(img); // Extracting image extension
	const name = path.parse(img).name; // Extract the image name
	const filePath = process.cwd() + `/public/img/${img}`; // get image file path

	const thumbfolder = process.cwd() + "/public/img/thumbs"; // get image thumbnail file path

	// check if image thumbnail folder exist if not create the folder
	if (!fs.existsSync(thumbfolder)) {
		fs.mkdirSync(thumbfolder);
		console.log("Thumb Folder Created Successfully.");
	}
	// create thumbnail using sharp js
	const data = await sharp(filePath)
		.resize({
			width: w,
			height: h,
		})
		.toFile(`${thumbfolder}/${name}-${w}-${h}${ext}`) // create new thumbnai base on the extension, width and height
		.then((data: unknown) => {
			console.log(data);
		})
		.catch((err: unknown) => console.warn(err));
	return data;
};

// check image if exist
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const checkImage = (paths: string): boolean => {
	return fs.existsSync(paths);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const getMetadata = async (paths: string): Promise<void> => {
	const metadata = await sharp(paths).metadata();
	console.log(metadata);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const isNumeric = (num: unknown): boolean =>
	(typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
	!isNaN(num as number);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const isPositive = (num: unknown): boolean =>
	(typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
	!isNaN(num as number) &&
	num > 0;
