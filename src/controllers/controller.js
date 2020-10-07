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
    musica: {
      ChillHop: `https://www.youtube.com/watch?v=7NOSDKb0HlU`,
      ChilledCow: `https://www.youtube.com/watch?v=5qap5aO4i9A`,
      GoodLife: `https://www.youtube.com/watch?v=36YnV9STBqc`,
      Jazz: `https://www.youtube.com/watch?v=DSGyEsJ17cI`,
      Clásica: `https://www.youtube.com/watch?v=2gO1v2GPMFk`,
      Rap: `https://www.youtube.com/watch?v=xDAcHbpl-F8`,
      Salsa: `http://radios.com.pe/embed/kalle/`,
      Boleros: `https://open.spotify.com/playlist/37i9dQZF1DX7YVXCfBlE4D`,
    },
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
    musica: {
      ChillHop: `https://www.youtube.com/watch?v=7NOSDKb0HlU`,
      ChilledCow: `https://www.youtube.com/watch?v=5qap5aO4i9A`,
      GoodLife: `https://www.youtube.com/watch?v=36YnV9STBqc`,
      Jazz: `https://www.youtube.com/watch?v=DSGyEsJ17cI`,
      Clásica: `https://www.youtube.com/watch?v=2gO1v2GPMFk`,
      Rap: `https://www.youtube.com/watch?v=xDAcHbpl-F8`,
      Salsa: `http://radios.com.pe/embed/kalle/`,
      Boleros: `https://open.spotify.com/playlist/37i9dQZF1DX7YVXCfBlE4D`,
    },
  });
};
