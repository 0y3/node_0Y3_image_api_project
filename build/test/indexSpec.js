"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
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
