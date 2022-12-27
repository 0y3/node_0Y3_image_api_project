import express, { Express,Request, Response, Router } from 'express';
import * as imagecontroller from '../../controller/imagecontroller';

const routes = express.Router();
routes.get('/image',imagecontroller.showImage);

// routes.get('/',(req:Request, res:Response) =>{
//     res.send('Main Routes');
// });

export default routes