import fs from 'fs';
/**
 * Genera ids en base 62 consecutivamente.
 * @param {String} label Nombre de la coleccion de IDs que servirá como referencia para esta coleccion
 */
export const Identificador = async (label) => {
  if (typeof label !== 'string' || !label.trim?.())
    throw new Error('Invalid label');
  const path = 'resources/Identificadores.json';
  if (!fs.existsSync(path) || fs.readFileSync(path).byteLength === 0) {
    !fs.existsSync('resources') &&
      fs.mkdirSync('resources', { recursive: true });
    fs.writeFileSync(path, JSON.stringify({ [label]: 0 }));
    return 0;
  }
  const CharsList =
    '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let ids = JSON.parse(fs.readFileSync(path));
  ids[label] = ids[label] ?? -1;
  let counter = ids[label] + 1,
    str = '',
    index;
  while (counter) {
    index = counter % CharsList.length;
    str = CharsList.charAt(index) + str;
    counter = (counter - index) / CharsList.length;
  }
  ids[label] += 1;
  fs.writeFileSync(path, JSON.stringify(ids));
  return str;
};

/**
 * Genera un ID con un tamaño máximo de 10 digitos
 * @param {Number} lenght Cantidad de dígitos que tendrá el id. Máximo valor = 10
 */
export const customID = (lenght = 10) => {
  if (lenght > 10) {
    throw new Error('La longitud máxima es 10');
  }
  const Id = Math.random()
    .toString(36)
    .slice(2, 2 + lenght);
  return Id.toUpperCase();
};
