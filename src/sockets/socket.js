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
          mediaUrl:
            'https://instagram.faqp2-1.fna.fbcdn.net/v/t51.2885-15/e35/119065834_371305847368302_256366898104219625_n.jpg?_nc_ht=instagram.faqp2-1.fna.fbcdn.net&_nc_cat=106&_nc_ohc=7RdajyCUBoEAX_SBLlS&_nc_tp=18&oh=ade63601a217751b48a05fa52cd01ac1&oe=5F90EE96',
          // from: '+13345084568',
          // to: 'whatsapp:+51983443031',
        })
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
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
