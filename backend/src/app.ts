import express from 'express';
import * as cors from 'cors';
import router from './routers';
import mongoose from 'mongoose'
import cookieParser from 'cookie-parser'
import { username, password, cluster, dbname } from './config/mongo.config'


mongoose.connect(`mongodb+srv://${username}:${password}@${cluster}.mongodb.net/${dbname}?retryWrites=true&w=majority`);
// mongoose.connect(`mongodb://localhost:27017/friday`);


const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});




const app = express();
const options: cors.CorsOptions = {
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
  ],
  credentials: true,
  methods: 'GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE',
  origin: 'http://localhost:3000',
  preflightContinue: true,
};



app.use(cors.default(options));

app.use(cookieParser())
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));




router(app);

app.listen(5000, () => {
  console.log('The application is listening on port 5000!');
})