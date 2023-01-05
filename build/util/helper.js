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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPositive = exports.isNumeric = exports.getMetadata = exports.checkImage = exports.imageThumbCreate = void 0;
const fs = __importStar(require("fs"));
const path_1 = __importDefault(require("path"));
const sharp_1 = __importDefault(require("sharp"));
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type, prettier/prettier
const imageThumbCreate = (img, w, h) => __awaiter(void 0, void 0, void 0, function* () {
    const ext = path_1.default.extname(img); // Extracting image extension
    const name = path_1.default.parse(img).name; // Extract the image name
    const filePath = process.cwd() + `/public/img/${img}`; // get image file path
    const thumbfolder = process.cwd() + "/public/img/thumbs"; // get image thumbnail file path
    // check if image thumbnail folder exist if not create the folder
    if (!fs.existsSync(thumbfolder)) {
        fs.mkdirSync(thumbfolder);
        console.log("Thumb Folder Created Successfully.");
    }
    // create thumbnail using sharp js
    const data = yield (0, sharp_1.default)(filePath)
        .resize({
        width: w,
        height: h,
    })
        .toFile(`${thumbfolder}/${name}-${w}-${h}${ext}`) // create new thumbnai base on the extension, width and height
        .then((data) => {
        console.log(data);
    })
        .catch((err) => console.warn(err));
    return data;
});
exports.imageThumbCreate = imageThumbCreate;
// check image if exist
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const checkImage = (paths) => {
    return fs.existsSync(paths);
};
exports.checkImage = checkImage;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getMetadata = (paths) => __awaiter(void 0, void 0, void 0, function* () {
    const metadata = yield (0, sharp_1.default)(paths).metadata();
    console.log(metadata);
});
exports.getMetadata = getMetadata;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const isNumeric = (num) => (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num);
exports.isNumeric = isNumeric;
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const isPositive = (num) => (typeof num === "number" || (typeof num === "string" && num.trim() !== "")) &&
    !isNaN(num) &&
    num > 0;
exports.isPositive = isPositive;
