import '../utils/module-alias';
import dotenv from 'dotenv';
import express from "express";
import setupRoutes from '@src/main/routes';

dotenv.config({
    path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

const app = express();

app.use(express.json())
setupRoutes(app)


export default app;