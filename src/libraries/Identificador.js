import fs from 'fs';

export const Identificador = async (name) => {
  if (typeof name !== 'string' || !name.trim?.())
    throw new Error('Invalid name');
  const path = 'resources/Identificadores.json';
  if (!fs.existsSync(path)) {
    fs.mkdirSync('resources', { recursive: true });
    fs.writeFileSync(path, JSON.stringify({ [name]: 1 }));
  }
  console.log(!!!JSON.parse(fs.readFileSync(path)));
  let global = JSON.parse(fs.readFileSync(path));
  if (!global[name]) {
    fs.writeFileSync(path, JSON.stringify({ [name]: 1 }));
    return '1';
  } else {
    let num = global[name] + 1;
    var order =
      '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var base = order.length;
    var str = '',
      r;
    while (num) {
      r = num % base;
      num -= r;
      num /= base;
      str = order.charAt(r) + str;
    }
    global[name] += 1;
    fs.writeFileSync(path, JSON.stringify(global));
    return str;
  }
};

export const customID = (lenght = 10) => {
  if (lenght > 10) {
    throw new Error('La longitud máxima es 10');
  }
  const Id = Math.random()
    .toString(36)
    .slice(2, 2 + lenght);
  return Id.toUpperCase();
};
