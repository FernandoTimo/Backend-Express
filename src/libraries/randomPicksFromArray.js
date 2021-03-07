/**
 * Genera un arreglo con una cantidad de elexxiones random apartir del arreglo que se le proporcione
 * @param {Array} array Arreglo completo
 * @param {Number} cantidad Cantidad de elecciones a realizar
 */
export const randomPicksFromArray = (array, cantidad = 1) =>
  new Array(cantidad)
    .fill(null)
    .map(() => array[Math.floor(Math.random() * array.length)]);
