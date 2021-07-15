export async function Index(req, res) {
  const { method, protocol, path, headers } = req;
  const url = `${method} => ${protocol}://${headers.host}${path}`;
  let token = req.token;
  res.status(200).json({ ok: true, url, token });
}
export async function BadRequest(req, res) {
  const { method, protocol, path, headers } = req;
  const url = `${method} => ${protocol}://${headers.host}${path}`;
  res.status(404).json({ ok: false, url, mensaje: 'Bad request`' });
}
