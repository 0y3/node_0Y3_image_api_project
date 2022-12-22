import express, { Express,Request, Response, Router } from 'express';
// import student from './student';
// import teachers from './teachers';

const routes:Router = express();

routes.get('/',(req:Request, res:Response) =>{
    res.send('Main Routes');
});

// routes.use('/teacher', teachers);
// routes.use('/student', student);
export default routes