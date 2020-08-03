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
      Lofi: `https://www.youtube.com/watch?v=7NOSDKb0HlU`,
      Lofi: `https://www.youtube.com/watch?v=5qap5aO4i9A`,
      House: `https://www.youtube.com/watch?v=36YnV9STBqc`,
      Deep: `https://www.youtube.com/watch?v=ZS5vYxznLBc`,
      Tropical: `https://www.youtube.com/watch?v=UsSMbnFgTeA`,
      Jazz: `https://www.youtube.com/watch?v=DSGyEsJ17cI`,
      Jazz: `https://www.youtube.com/watch?v=hx2aDgengKo`,
      Bass: `https://www.youtube.com/watch?v=5xSqfVbSGwY`,
      Clásica: `https://www.youtube.com/watch?v=2gO1v2GPMFk`,
      Rap: `https://www.youtube.com/watch?v=xDAcHbpl-F8`,
      Reggaeton: `https://www.youtube.com/watch?v=EfckFxTcDGE`,
      Reggaeton: `https://www.youtube.com/watch?v=RlSDRqEbv1Y`,
      Salsa_Perú: `https://open.spotify.com/playlist/2ORZS5vXQelTb15lwJYssb`,
      Salsa_Fania: `https://open.spotify.com/artist/1OdyhpUABf8avaZ9r8nI1u`,
      Salsa_Global: `https://open.spotify.com/playlist/3tnj46iSIoEGL7JBA9PRjU`,
      Criollo_Almuerzo: `https://open.spotify.com/playlist/1zCRa16sIATHDzxaPnJG7h`,
      Criollo_Global: `https://open.spotify.com/playlist/7nV3UZdXMd5EMwcnhAJECj`,
      Huaynos_Global: `https://open.spotify.com/playlist/0t0YhLi6Kwgqb9YiBeJRtm`,
      Boleros_Global: `https://open.spotify.com/playlist/3ibF3CQynWturph2Iy0LHZ`,
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
    error: `BAD URL`,
    music_1: `Lofi: https://www.youtube.com/watch?v=7NOSDKb0HlU`,
    music_2: `Lofi: https://www.youtube.com/watch?v=5qap5aO4i9A`,
    music_3: `House: https://www.youtube.com/watch?v=36YnV9STBqc`,
    music_4: `Deep: https://www.youtube.com/watch?v=ZS5vYxznLBc`,
    music_5: `Tropical: https://www.youtube.com/watch?v=UsSMbnFgTeA`,
    music_6: `Jazz: https://www.youtube.com/watch?v=DSGyEsJ17cI`,
    music_6: `Jazz: https://www.youtube.com/watch?v=hx2aDgengKo`,
    music_8: `Bass: https://www.youtube.com/watch?v=5xSqfVbSGwY`,
    music_8: `Clásica: https://www.youtube.com/watch?v=2gO1v2GPMFk`,
    music_7: `Rap: https://www.youtube.com/watch?v=xDAcHbpl-F8`,
    music_7: `Reggaeton: https://www.youtube.com/watch?v=EfckFxTcDGE`,
    music_7: `Reggaeton: https://www.youtube.com/watch?v=RlSDRqEbv1Y`,
    music_7: `Salsa: https://open.spotify.com/playlist/2ORZS5vXQelTb15lwJYssb`,
  });
};
