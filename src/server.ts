import "express-async-errors";
import express, { NextFunction, Request, Response, urlencoded } from 'express';
import 'dotenv/config';
import cors from 'cors';
import { mainRouter } from './routes/main';
import helmet from 'helmet';
import { AppError } from "./errors/appError";

const server = express();

server.use(helmet());
server.use(cors());
server.use(urlencoded({ extended: true }));
server.disable('x-powered-by');
server.use(express.json());

server.use(express.json());

server.use(mainRouter);

server.use(
    (err: Error, req: Request, res: Response, next: NextFunction) => {
        if (err instanceof AppError) {
            return res.status(err.statusCode).json({
                status: "error",
                message: err.message
            });
        }

        return res.status(500).json({
            status: "error",
            message: `Internal server error - ${err.message}`
        });
    }
);

const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${port}`);
})
