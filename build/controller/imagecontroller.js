"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.showImage = void 0;
const fs = require('fs');
const path = require("path");
const sharp = require('sharp');
const getMetadata = (path) => __awaiter(void 0, void 0, void 0, function* () {
    const metadata = yield sharp(path).metadata();
    console.log(metadata);
});
const imageThumbCreate = (img, w, h) => __awaiter(void 0, void 0, void 0, function* () {
    // Extracting file extension
    let ext = path.extname(img);
    let name = path.parse(img).name;
    let filePath = process.cwd() + `/public/img/${img}`;
    let thumbfolder = process.cwd() + `/public/img/thumbs`;
    if (!fs.existsSync(thumbfolder)) {
        fs.mkdirSync(thumbfolder);
        console.log('Thumb Folder Created Successfully.');
    }
    const data = yield sharp(filePath)
        .resize({
        width: w,
        height: h
    })
        .toFile(`${thumbfolder}/${name}-${w}-${h}${ext}`)
        .then((data) => {
        console.log(data);
    })
        .catch((err) => console.warn(err));
    return data;
});
const checkImage = (path) => {
    return fs.existsSync(path);
};
const showImage = (req, res) => {
    let filePath;
    let imagename = req.query.filename;
    let imagewidth = Number(req.query.width);
    let imageheight = Number(req.query.height);
    filePath = process.cwd() + `/public/img/${imagename}`;
    getMetadata(filePath);
    if (checkImage(filePath)) {
        if (imagewidth && imageheight) {
            // Extracting file extension
            let ext = path.extname(imagename);
            let name = path.parse(imagename).name;
            filePath = process.cwd() + `/public/img/thumbs/${name}-${imagewidth}-${imageheight}${ext}`;
            console.log(checkImage(filePath));
            if (!checkImage(filePath)) {
                imageThumbCreate(imagename, imagewidth, imageheight);
            }
        }
        // Reading the file
        fs.readFile(filePath, function (err, content) {
            res.end(content);
        });
    }
    else {
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
};
exports.showImage = showImage;
