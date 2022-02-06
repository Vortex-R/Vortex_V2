import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
dotenv.config();
import userRoute from './routes/user.js'
import contactRoute from './routes/contact.js'
import eventRoute from './routes/event.js'
import dotenv from 'dotenv';

const app = express();

app.use(bodyParser.json({ limit: '30mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }))
app.use(express.json());
app.use(cors());

app.use("/user", userRoute);
app.use("/contact", contactRoute);
app.use("/event", eventRoute);





const PORT = process.env.PORT || 4000;

mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server Running on Port: http://localhost:${PORT}`)))
    .catch((error) => console.log(`${error} did not connect`));