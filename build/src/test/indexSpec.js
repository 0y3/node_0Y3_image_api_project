"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const port = 2130;
const baseUrl = `http://localhost:${port}`;
describe("Index Route", function () {
	describe("GET /", function () {
		it("returns status code 200", function (done) {
			express_1.request.get(`${baseUrl}`, function (error, response, body) {
				expect(response.statusCode).toBe(200);
				done();
			});
		});
		it("returns Api Route", function (done) {
			express_1.request.get(`${baseUrl}/api`, function (error, response, body) {
				expect(body).toBe(`server started at ${baseUrl}/api`);
				done();
			});
		});
	});
});
