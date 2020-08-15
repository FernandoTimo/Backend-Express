import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
const newSchema = new Schema({
  name: { type: String },
});
newSchema.plugin(validator, { message: '{PATH} debería ser único' });
export default model('Schema', newSchema);
s;
