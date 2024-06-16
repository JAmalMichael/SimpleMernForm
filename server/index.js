import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import userRouter from './routes/UserRoutes.js';

dotenv.config();

const app = express();
const port = 5000;

//middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

//Routes
app.use('server/user', userRouter)

//connection
mongoose.connect(process.env.CONNECTION_STRING, {
}).then(
    console.log("MongoDB Connected")
).catch(err => console.log(err));



app.listen(port, () => {
    console.log(`server is running on ${port}`);
})