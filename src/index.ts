import express, { Express,Request, Response } from 'express';
import routes from './routes/api/index';

const app: Express = express();
const port =2130;

app.use('/api',routes);


app.listen(port,() =>{
    console.log(`server started at http://localhost:${port}`);
});