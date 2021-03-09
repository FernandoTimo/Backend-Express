import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const randomSchema = new Schema({
  usename: {
    type: String,
    unique: true,
    required: [true, 'Este campo es requerido'],
  },
  timestamp: { type: String, default: Fecha },
});
randomSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Order', randomSchema);
