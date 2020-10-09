/**
 * Genera un arreglo con una cantidad de elexxiones random apartir del arreglo que se le proporcione
 * @param {Array} a Arreglo completo
 * @param {Number} n Cantidad de elecciones a realizar
 */
export const randomPicksFromArray = (array, cantidad = 1) =>
  new Array(cantidad)
    .fill(null)
    .map(() => array[Math.floor(Math.random() * array.length)]);
