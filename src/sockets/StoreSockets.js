import twilio from 'twilio';
const clienteTwilio = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
export const StoreSockets = (socket) => {
  socket.on('connection', (client) => {
    console.log(client.id);
    console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    client.on('disconnect', () => {
      console.log('>-------------------------<');
    });
    client.on('store-comprobante', (comprobante) => {
      // clienteTwilio.messages
      //   .create({
      //     body: 'Hola Fernando',
      //     from: 'whatsapp:+14155238886',
      //     to: `whatsapp:${process.env.TWILIO_NUMBER_SENDER}`,
      //     // from: '+13345084568',
      //     // to: 'whatsapp:+51983443031',
      //   })
      //   .then((res) => console.log(res))
      //   .catch((err) => console.log(err));
      socket.emit('store-comprobante_recivido', 'recivido');
    });
    client.on('store-comprobante_validado', (StoreCode) => {
      socket.emit('store-comprobante_validado', StoreCode);
    });
  });
};
