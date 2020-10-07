import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const StoreSchema = new Schema({
  usename: {
    type: String,
    unique: true,
    required: [true, 'Este campo es requerido'],
  },
  timestamp: { type: String, default: Fecha },
});
StoreSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Order', StoreSchema);
