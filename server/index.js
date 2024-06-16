import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();

//middleware
app.use(cors());
app.use(bodyParser.json());

//Routes
// app.use('server/users', userRoutes);

//connection
mongoose.connect(process.env.CONNECTION_STRING, {
}).then(
    console.log("MongoDB Connected")
).catch(err => console.log(err));

const port = 3000;

app.listen(port, () => {
    console.log(`server is running on ${port}`);
})