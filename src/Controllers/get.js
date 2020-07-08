import User from '../Models/User';
let get = {};

get.user = async (req, res) => {
  const okey = true;
  const badey = false;

  let user = new User({
    name: 'FernandoTimo',
  });
  user.save();
  const users = await User.find();
  // res.send('calla get');
  okey ? res.json(users) : res.json({ respuesta: 'todo salio mal :D jojoi' });
  badey ? res.json({ respuesta: 'todo salio mal :D jojoi' }) : res.json(users);
};

export default get;
