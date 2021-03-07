export const Fecha = () => {
  const date = new Date();
  const fecha = `${date.getFullYear()}:${
    Number(date.getMonth() + 1) < 10
      ? '0' + Number(date.getMonth() + 1)
      : Number(date.getMonth() + 1)
  }:${date.getDate() < 10 ? '0' + date.getDate() : date.getDate()}-${
    date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
  }:${date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()}:${
    date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
  }`;
  return fecha;
};
