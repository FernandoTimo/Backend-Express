export function Auth(req, res, next) {
  if (!!req.get('token')) {
    let token = req.get('token');
    req.token = token;
    next();
  } else {
    const protocol = req.protocol;
    const host = req.headers.host;
    const path = req.path;
    const url = `${protocol}://${host}${path}random`;
    res.status(200).json({
      ok: true,
      requiered: 'Esta es una ruta PROTEGIDA por `middlewares/Auth.js`',
      visita: url,
    });
  }
}
