/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
import { StudentRoutes } from './app/modules/student/student.route';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorhandler';
import notFound from './app/middlewares/notFound';
import router from './app/routes';
const app: Application = express();

// parsers
app.use(cors());
app.use(express.json());

// application routes
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  res.status(200).json({
    status: 'success',
    message: 'Server is running on port: 5000',
  });
};

app.get('/', test);

// global error
app.use(globalErrorHandler);

// not Found
app.use(notFound);

export default app;
