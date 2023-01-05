import * as indexroutes from "../routes/api/indexroutes";
import express, { Express, Response, Request } from "express";

const app: Express = express();
const port = 2130;
const baseUrl = `http://localhost:${port}`;

describe("Api Index Route", function () {
	it("Should returns status code 200", function () {
		app.get(`${baseUrl}/api`, function (req, res, next) {
			expect(req.statusCode).toBe(200);
			expect(next).toBe(`server started at ${baseUrl}/api`);
		});
	});
});
