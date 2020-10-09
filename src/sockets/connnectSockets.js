import { randomPicksFromArray } from '../libraries/randomPicksFromArray';
import { socket } from './socket';

socket.on('connection', (client) => {
  console.log(
    `\x1b[${randomPicksFromArray([
      31, //Rojo
      32, //Verde
      33, //Amarillo
      34, //Azul
      35, //Magenta
      36, //Cyan
    ])}mNuevoCliente:\x1b[0m`,
    client.id
  );
});
