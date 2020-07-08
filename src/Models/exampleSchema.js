import { Schema, model } from 'mongoose';

const exampleSchema = new Schema({
  name: { type: String },
});

export default model('Example', exampleSchema);
