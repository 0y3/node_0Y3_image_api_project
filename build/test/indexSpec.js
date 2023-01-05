"use strict";
var __importDefault =
	(this && this.__importDefault) ||
	function (mod) {
		return mod && mod.__esModule ? mod : { default: mod };
	};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 2130;
const baseUrl = `http://localhost:${port}`;
describe("Index Route", function () {
	describe("GET /", function () {
		it("returns status code 200", function (done) {
			app.get(`${baseUrl}`, function (req, res, next) {
				expect(res.statusCode).toBe(200);
				done();
			});
		});
		it("returns Api Route", function (done) {
			app.get(`${baseUrl}/api`, function (req, res, next) {
				expect(next).toBe(`server started at ${baseUrl}/api`);
				done();
			});
		});
	});
});
