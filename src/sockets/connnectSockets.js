export function connectSockets(socket) {
  socket.on('connection', (client) => {
    console.log(client.id);
  });
}
