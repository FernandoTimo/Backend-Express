export function Auth(req, res, next) {
  if (!!req.get('token')) {
    let token = req.get('token');
    req.token = token;
    next();
  } else {
    const { method, protocol, headers } = req;
    const url = `${method} => ${protocol}://${headers.host}/random`;
    res.status(200).json({ ok: true, requiered: 'Auth error`', visita: url });
  }
}
