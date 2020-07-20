export const BadUrl = async (req, res) => {
  const protocol = req.protocol;
  const path = req.path;
  const host = req.headers.host;
  const method = req.method;
  const url = `${protocol}://${host}${path}`;
  res.json({
    url: `${url}`,
    error: `BAD URL`,
    method: method,
    music_1: `https://www.youtube.com/watch?v=7NOSDKb0HlU`,
    music_2: `https://www.youtube.com/watch?v=36YnV9STBqc`,
    music_3: `:D`,
    music_4: `:D`,
  });
};
