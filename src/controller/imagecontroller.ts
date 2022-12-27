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

    let ext = path.extname(img);        // Extracting image extension
    let name = path.parse(img).name;    //Extract the image name
    let filePath = process.cwd()+`/public/img/${img}`;      //get image file path
     

    let thumbfolder = process.cwd()+`/public/img/thumbs`;  //get image thumbnail file path

    // check if image thumbnail folder exist if not create the folder 
    if (!fs.existsSync(thumbfolder)){
        fs.mkdirSync(thumbfolder);
        console.log('Thumb Folder Created Successfully.')
    }
    // create thumbnail using sharp js
    const data =  await sharp(filePath)
                        .resize({
                            width: w,
                            height: h
                            })
                        .toFile(`${thumbfolder}/${name}-${w}-${h}${ext}`) //create new thumbnai base on the extension, width and height
                        .then( (data: any) => { 
                            console.log(data);
                        })
                        .catch( (err: any) => console.warn(err));
    return data;
};

// check image if exist 
const checkImage = (path: any) =>{
    return fs.existsSync(path);
    
}

// show imgage
export const showImage:RequestHandler = (req, res) => {
    let filePath: string;
    let imagename = req.query.filename;
    let imagewidth:number = Number(req.query.width);
    let imageheight:number = Number(req.query.height);
   
    filePath = process.cwd()+`/public/img/${imagename}`;
    getMetadata(filePath);
    
    //check image if exist
    if(checkImage(filePath))
    {
        //check if image width and height is define in the get request from the brower
        if( imagewidth &&  imageheight  )
        {
            // Extracting file extension
            let ext = path.extname(imagename);
            let name = path.parse(imagename).name;
            filePath = process.cwd()+`/public/img/thumbs/${name}-${imagewidth}-${imageheight}${ext}`;
            console.log(checkImage(filePath));
            if(!checkImage(filePath)){
                imageThumbCreate(imagename,imagewidth,imageheight);  //create thumbsnail method
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
