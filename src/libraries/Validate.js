/**
 * Verifica que los objetos no tengan Keys ni Values vacios, devuelve el objeto validado o un error
 * @param {{}} object Objeto que se iterará para verificar que no tenga keys ni values vacios.
 * @param {[String]} keys Keys que se filtraran del objeto object para validarlos.
 */
export default async function ValidateObject(object, keys) {
  if (typeof object !== 'object' || !Object.entries(object).length)
    throw new TypeError('Invalid object');
  let Validated_Object = {};
  Object.entries(object).forEach((pair, index) => {
    const key = pair[0].trim();
    if (!keys || keys.includes(key)) {
      if (!key) throw new Error(`Key[${index}]`);
      const value = Object.entries(
        pair[1].trim?.() ?? pair[1].toPrecision?.() ?? pair[1]
      ).length;
      if (!value) throw new Error(`Value[${index}]`);
      Validated_Object[key] = pair[1].trim?.() || pair[1];
    }
  });
  return Validated_Object;
}
