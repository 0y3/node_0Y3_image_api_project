"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 2130;
const baseUrl = `http://localhost:${port}/api/`;
describe("Image Route", function () {
    it(`Should returns status code 200 & Start Server at ${baseUrl}`, function () {
        app.get(`${baseUrl}`, function (req, res, next) {
            expect(req.statusCode).toBe(200);
            expect(next).toBe(`server started at ${baseUrl}/api`);
        });
    });
    it(`returns status code 200 and image if Exist at sever ${baseUrl}image?filenamme=demo.jpg`, () => {
        app.get(`${baseUrl}image?filename=demmo.jpg`, function (req, res, next) {
            expect(req.statusCode).toBe(200);
            expect(next).toBe(`${baseUrl}image?filename=demmo.jpg`);
        });
    });
});
