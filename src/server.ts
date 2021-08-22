import express, { Request, Response } from 'express'
import { Socket, Server } from 'socket.io'
import http from 'http'

const app = express()
const server = http.createServer(app);
const io = new Server(server)

app.get('/', (req: Request, res: Response) => {
  res.send('Hello socket')
})

io.on('connection', (socket: Socket) => {
  console.log('a user connected');

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

server.listen(3000, () => {
  console.log('listening on port 3000')
})
