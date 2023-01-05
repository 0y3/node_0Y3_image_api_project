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
    it("Should returns status code 200", function () {
        app.get(`${baseUrl}/api`, function (req, res, next) {
            expect(req.statusCode).toBe(200);
            expect(next).toBe(`server started at ${baseUrl}/api`);
        });
    });
});
