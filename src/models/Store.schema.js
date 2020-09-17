import { Schema, model } from 'mongoose';
import validator from 'mongoose-unique-validator';
import { Fecha } from '../libraries/Fecha';
const StoreSchema = new Schema({
  usuario: { type: String, required: [true, 'Este campo es requerido'] },
  boleta: { type: String, required: [true, 'Este campo es requerido'] },
  productos: [
    {
      _id: false,
      producto: {
        type: Schema.Types.ObjectId,
        ref: 'Productos',
      },
      cantidad: { type: Number, required: [true, 'Este campo es requerido'] },
      total: { type: String, required: [true, 'Este campo es requerido'] },
    },
  ],
  telefono: { type: Number, required: [true, 'Este campo es requerido'] },
  direccion: {
    ciudad: { type: String, required: [true, 'Este campo es requerido'] },
    distrito: { type: String, required: [true, 'Este campo es requerido'] },
    calle: { type: String, required: [true, 'Este campo es requerido'] },
    referencia: { type: String, required: [true, 'Este campo es requerido'] },
  },
  turno: { type: String, default: 'TARDE' },
  date: { type: String, default: Fecha() },
  total: { type: String, required: [true, 'Este campo es requerido'] },
  solved: { type: Boolean, default: false },
});
StoreSchema.plugin(validator, { message: 'El {PATH} debería ser único' });
export default model('Order', StoreSchema);
