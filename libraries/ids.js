import fs from 'fs';

export const GenerarID = (type) => {
  let global = JSON.parse(fs.readFileSync('./src/models/global.json'));

  let num = global.type + 1;
  var order = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  var base = order.length;
  var str = '',
    r;
  while (num) {
    r = num % base;
    num -= r;
    num /= base;
    str = order.charAt(r) + str;
  }
  global.type += 1;
  fs.writeFileSync('./src/models/global.json', JSON.stringify(global));
  return str;
};

export const UserID = () => {
  const Id = Math.random().toString(36).slice(2, 7);
  return Id;
};
