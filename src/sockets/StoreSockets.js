import twilio from 'twilio';
const clienteTwilio = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export function connectSockets(socket) {
  socket.on('connection', (client) => {
    console.log(client.id);
  });
}
