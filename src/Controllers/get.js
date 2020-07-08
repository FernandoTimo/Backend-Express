import exampleSchema from '../Models/exampleSchema';
let get = {};

get.example = async (req, res) => {
  console.log('url:', req.url);
  const respuesta = await exampleSchema.find();
  res.status(200).json(respuesta);
};

export default get;
