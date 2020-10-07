export function Auth(req, res, next) {
  if (!!req.get('token')) {
    let token = req.get('token');
    req.token = token;
    next();
  } else {
    res.status(200).json({
      ok: true,
      message: 'Este es el mensaje de `middlewares/Auth.js`',
    });
  }
}
