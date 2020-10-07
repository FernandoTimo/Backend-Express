export function Auth(req, res, next) {
  if (!!req.get('token')) {
    let token = req.get('token');
    req.token = token;
    next();
  } else {
    res.status(200).json({
      ok: true,
      requiered: 'Esta es una ruta protegida por `middlewares/Auth.js`',
      visita: 'http://localhost:4000/test',
    });
  }
}
