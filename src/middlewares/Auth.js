export function Auth(req, res, next) {
  if (!!req.get('token')) {
    let token = req.get('token');
    req.token = token;
    next();
  } else {
    res.status(200).json({ ok: false, message: 'No enviaste token' });
  }
}
