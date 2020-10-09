/**
 * Genera un arreglo con una cantidad de elexxiones random apartir del arreglo que se le proporcione
 * @param {Array} a Arreglo completo
 * @param {Number} n Cantidad de elecciones a realizar
 */
export const randomPicksFromArray = (a, n) =>
  new Array(n).fill(null).map(() => a[Math.floor(Math.random() * a.length)]);
