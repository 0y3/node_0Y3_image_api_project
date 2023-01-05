import * as fs from "fs";
import path from "path";
import sharp from "sharp";
import * as helper from "../util/helper";

describe("Helper ", function () {
	const filePath = process.cwd() + `/public/img/demo.jpg`;
	const width = 200;
	const height = 200;

	it(`Should be able to confirm if a image exist in image public folder`, () => {
		expect(helper.checkImage).toBeDefined();
		expect(helper.checkImage(filePath)).toBeTruthy();
	});

	it(`Should be able to confirm its Number`, () => {
		expect(helper.isNumeric).toBeDefined();
		expect(helper.isNumeric(width)).toBeTruthy();
		// expect(helper.isNumeric(20)).toBeInstanceOf(Number);
	});

	it(`Should be able to check its a Positive Number `, () => {
		expect(helper.isPositive).toBeDefined();
		expect(helper.isPositive(height)).toBeTruthy();
	});

	it(`Should be able get meta data using sharp npm`, () => {
		expect(helper.getMetadata).toBeDefined();
		expect(helper.getMetadata(filePath)).toBeTruthy();
	});

	it(`Should be able create Images Thumbnail using sharp npm`, () => {
		expect(helper.imageThumbCreate).toBeDefined();
		expect(helper.imageThumbCreate(filePath, width, height)).toBeTruthy();
	});
});
