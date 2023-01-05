import * as indexroutes from "../routes/api/indexroutes";
import express, { Express, Response, Request } from "express";

const app: Express = express();
const port = 2130;
const baseUrl = `http://localhost:${port}/api/`;

describe("Image Route", function () {
	it(`Should returns status code 200 & Start Server at ${baseUrl}/api`, function () {
		app.get(`${baseUrl}`, function (req, res, next) {
			expect(req.statusCode).toBe(200);
			expect(next).toBe(`server started at ${baseUrl}/api`);
		});
	});

	it("returns status code 200 and image if Exist", () => {
		app.get(`${baseUrl}image?filename=demo.jpg`, function (req, res, next) {
			expect(req.statusCode).toBe(200);
		});
	});
});
