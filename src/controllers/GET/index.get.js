export const Home = async (req, res) => {
  res.status(200).json({
    ok: true,
    message: `${req.method} | Bienvenido al home :D`,
  });
};

export default Home;
