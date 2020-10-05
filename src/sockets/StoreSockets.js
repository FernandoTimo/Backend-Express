import twilio from 'twilio';
const clienteTwilio = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export function StoreSockets(socket) {
  socket.on('connection', (client) => {
    console.log(client.id);
    console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    client.on('disconnect', () => {
      console.log('>-------------------------<');
    });
    client.on('store-comprobante', (comprobante) => {
      socket.emit('store-comprobante_recivido', 'recivido');
    });
    client.on('form-data', (data) => {
      console.log(data);
      socket.emit('client-form-data', data);
    });
    client.on('store-comprobante_validado', (StoreCode) => {
      socket.emit('store-comprobante_validado', StoreCode);
    });
  });
}
