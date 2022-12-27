// import { Request, Response, NextFunction } from 'express';
import { RequestHandler } from 'express';
import { ParsedQs } from 'qs';
const fs = require('fs');
const path = require("path");
const sharp = require('sharp');

const getMetadata = async (path: any) => {
    const metadata =  await sharp(path).metadata();
    console.log(metadata);
};

const imageThumbCreate = async (img:any,w:any,h:any) =>{

    // Extracting file extension
    let ext = path.extname(img);
    let name = path.parse(img).name;
    let filePath = process.cwd()+`/public/img/${img}`;
     

    let thumbfolder = process.cwd()+`/public/img/thumbs`;

    if (!fs.existsSync(thumbfolder)){
        fs.mkdirSync(thumbfolder);
        console.log('Thumb Folder Created Successfully.')
    }
    const data =  await sharp(filePath)
                        .resize({
                            width: w,
                            height: h
                            })
                        .toFile(`${thumbfolder}/${name}-${w}-${h}${ext}`)
                        .then( (data: any) => { 
                            console.log(data);
                        })
                        .catch( (err: any) => console.warn(err));
    return data;
};
const checkImage = (path: any) =>{
    return fs.existsSync(path);
    
}


export const showImage:RequestHandler = (req, res, next) => {
    let filePath: string;
    let imagename = req.query.filename;
    let imagewidth:number = Number(req.query.width);
    let imageheight:number = Number(req.query.height);
   
    filePath = process.cwd()+`/public/img/${imagename}`;
    getMetadata(filePath);
    
    if(checkImage(filePath))
    {
        if( imagewidth &&  imageheight  )
        {
            // Extracting file extension
            let ext = path.extname(imagename);
            let name = path.parse(imagename).name;
            filePath = process.cwd()+`/public/img/thumbs/${name}-${imagewidth}-${imageheight}${ext}`;
            console.log(checkImage(filePath));
            if(!checkImage(filePath)){
                imageThumbCreate(imagename,imagewidth,imageheight);
            }
        }
        // Reading the file
        fs.readFile(filePath,function (err: any, content: any) {
            res.end(content);
        });
    }
    else{
        res.writeHead(404, { "Content-Type": "text/plain" });
        res.end("404 Not Found");
    }
    
};
