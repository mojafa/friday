import http from 'http';
import socketio from 'socket.io';
import express from 'express';
import mongoose from 'mongoose';
import {username , password ,cluster  , dbname} from '../config/mongo.config';



const port = 5001;

const app = express();

const server = http.createServer(app);
mongoose.connect(`mongodb://localhost:27017/${dbname}`);

const io = new socketio.Server(server, {cors: { origin: 'http://localhost:3000'}});

server.listen(process.env.PORT || port, () => {
  console.log(`Clover POS Socket listening at http://localhost:${port}`);
});
