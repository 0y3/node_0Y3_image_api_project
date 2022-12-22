"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import student from './student';
// import teachers from './teachers';
const routes = (0, express_1.default)();
routes.get('/', (req, res) => {
    res.send('Main Routes');
});
// routes.use('/teacher', teachers);
// routes.use('/student', student);
exports.default = routes;
