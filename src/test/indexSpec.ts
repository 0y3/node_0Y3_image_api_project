import { request } from "http";
import * as index from "../index";
import express, { Express, Response, Request } from "express";

const app: Express = express();
const port = 2130;
const baseUrl = `http://localhost:${port}`;

describe("Index Route", function () {
	describe("GET /", function () {
		it("should return 200 response code", function (done) {
			app.get(`${baseUrl}`, function (req, res) {
				expect(res.statusCode).toEqual(200);
				done();
			});
		});

		it("should Fall ", function (done) {
			app.get(`${baseUrl}`, function (req, res) {
				expect(res.statusCode).toEqual(404);
				done();
			});
		});

		it("returns Api Route", function (done) {
			app.get(`${baseUrl}/api`, function (req, res, next) {
				expect(next).toBe(`server started at ${baseUrl}/api`);
				// done();
			});
		});
	});
});
