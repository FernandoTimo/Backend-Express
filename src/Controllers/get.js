import User from '../Models/user';
let get = {};

get.user = async (req, res) => {
  const users = await User.find();
  // res.send('calla get');
  res.json(users);
};

export default get;
