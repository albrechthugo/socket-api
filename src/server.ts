import express from 'express'
import http from 'http'
import { Socket } from 'socket.io';

const io = require('socket.io')(http, {
  cors: {
    origins: ['http://localhost:4200']
  }
});

const app = express()

app.get('/', (req, res) => {
  res.send('Hello socket')
})

io.on('connection', (socket: Socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

http.createServer(app).listen(3000, () => {
  console.log('listening on port 3000')
})
