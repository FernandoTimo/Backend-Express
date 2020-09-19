import { listen } from 'socket.io';
import twilio from 'twilio';
const clienteTwilio = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);
const socketsMain = (socket) => {
  socket.on('connection', (client) => {
    console.log(client.id);
    client.on('disconnect', () => {
      console.log('--');
    });
    // STORE --------------------------
    // STORE --------------------------
    // STORE --------------------------
    // STORE --------------------------
    // STORE --------------------------
    client.on('store-comprobante', (comprobante) => {
      clienteTwilio.messages
        .create({
          body:
            'Hola Benjamin, acabamos de recibir tu pedido, no te lo enviaremos nunca, esto es solo para que sepas que fuiste vilmente estafado',
          from: 'whatsapp:+14155238886',
          to: `whatsapp:${process.env.TWILIO_NUMBER_SENDER}`,
          // from: '+13345084568',
          // to: 'whatsapp:+51983443031',
        })
        .then((res) => console.log(res))
        .done();
      socket.emit('store-comprobante_recivido', 'recivido');
    });
    client.on('store-comprobante_validado', (StoreCode) => {
      socket.emit('store-comprobante_validado', StoreCode);
    });
  });
};
const sockets = (server) => {
  socketsMain(listen(server, { path: '/timoideas' }));
};
export default sockets;
