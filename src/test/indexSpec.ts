import { request } from "http";
import * as index from "../index";
import express, { Express, Response, Request } from "express";

const app: Express = express();
const port = 2130;
const baseUrl = `http://localhost:${port}`;

describe("Index Route", function () {
	// beforeEach(function (done) {
	// 	window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
	// 	setTimeout(function () {
	// 		console.log("inside timeout");
	// 		done();
	// 	}, 500);
	// });

	it("should return 200 response code", () => {
		app.get(`${baseUrl}`, function (req, res) {
			expect(res.statusCode).toEqual(200);
		});
	});

	it("should Fall ", () => {
		app.get(`${baseUrl}`, function (req, res) {
			expect(res.statusCode).toEqual(404);
		});
	});
});
