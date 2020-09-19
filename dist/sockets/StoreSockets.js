"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StoreSockets = void 0;

var _twilio = _interopRequireDefault(require("twilio"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var clienteTwilio = (0, _twilio["default"])(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);

var StoreSockets = function StoreSockets(socket) {
  socket.on('connection', function (client) {
    console.log(client.id);
    console.log(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
    client.on('disconnect', function () {
      console.log('>-------------------------<');
    });
    client.on('store-comprobante', function (comprobante) {
      clienteTwilio.messages.create({
        body: 'Hola Fernando',
        from: 'whatsapp:+14155238886',
        to: "whatsapp:".concat(process.env.TWILIO_NUMBER_SENDER) // from: '+13345084568',
        // to: 'whatsapp:+51983443031',

      }).then(function (res) {
        return console.log(res);
      })["catch"](function (err) {
        return console.log(err);
      });
      socket.emit('store-comprobante_recivido', 'recivido');
    });
    client.on('store-comprobante_validado', function (StoreCode) {
      socket.emit('store-comprobante_validado', StoreCode);
    });
  });
};

exports.StoreSockets = StoreSockets;