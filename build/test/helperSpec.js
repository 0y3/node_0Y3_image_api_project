"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const helper = __importStar(require("../util/helper"));
describe("Helper Utility", function () {
    const filePath = process.cwd() + `/public/img/demo.jpg`;
    const width = 200;
    const height = 200;
    it(`Should be able to confirm if a image exist in image public folder`, () => {
        expect(helper.checkImage).toBeDefined();
        expect(helper.checkImage(filePath)).toBeTruthy();
    });
    it(`Should be able to confirm its Number`, () => {
        expect(helper.isNumeric).toBeDefined();
        expect(helper.isNumeric(width)).toBeTruthy();
        // expect(helper.isNumeric(20)).toBeInstanceOf(Number);
    });
    it(`Should be able to check its a Positive Number `, () => {
        expect(helper.isPositive).toBeDefined();
        expect(helper.isPositive(height)).toBeTruthy();
    });
    it(`Should be able get meta data using sharp npm`, () => {
        expect(helper.getMetadata).toBeDefined();
        expect(helper.getMetadata(filePath)).toBeTruthy();
    });
    it(`Should be able create Images Thumbnail using sharp npm`, () => {
        expect(helper.imageThumbCreate).toBeDefined();
        expect(helper.imageThumbCreate(filePath, width, height)).toBeTruthy();
    });
});
