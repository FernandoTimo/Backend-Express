export const Index = async (req, res) => {
  const method = req.method;
  const protocol = req.protocol;
  const host = req.headers.host;
  const path = req.path;
  const url = `${method} => ${protocol}://${host}${path}`;
  let token = req.token;
  res.status(200).json({
    url: `${url}`,
    token,
  });
};
export const BadUrl = async (req, res) => {
  const protocol = req.protocol;
  const path = req.path;
  const host = req.headers.host;
  const method = req.method;
  const url = `${method} => ${protocol}://${host}${path}`;
  res.status(200).json({
    url: `${url}`,
    mensaje: 'Esta es una ruta NO PROTEGIDA por `middlewares/Auth.js`',
  });
};
