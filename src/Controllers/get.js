import User from '../Models/user';
let get = {};

get.user = async (req, res) => {
  let user = new User({
    name: 'FernandoTimo',
  });
  user.save();
  const users = await User.find();
  // res.send('calla get');
  res.json(users);
};

export default get;
