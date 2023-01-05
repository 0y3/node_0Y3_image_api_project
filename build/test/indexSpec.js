"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 2130;
const baseUrl = `http://localhost:${port}`;
describe("Api Index Route", function () {
    // beforeEach(function (done) {
    // 	window.jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
    // 	setTimeout(function () {
    // 		console.log("inside timeout");
    // 		done();
    // 	}, 500);
    // });
    it(`Should returns status code 200 & Start Server at ${baseUrl}/api`, () => {
        app.get(`${baseUrl}/api`, function (req, res) {
            expect(res.statusCode).toEqual(200);
        });
    });
    it("Should Fall ", () => {
        app.get(`${baseUrl}/api`, function (req, res) {
            expect(res.statusCode).toEqual(404);
        });
    });
});
