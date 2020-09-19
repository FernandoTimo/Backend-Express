"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mongoose = require("mongoose");

var _mongooseUniqueValidator = _interopRequireDefault(require("mongoose-unique-validator"));

var _Fecha = require("../libraries/Fecha");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var StoreSchema = new _mongoose.Schema({
  usuario: {
    type: String,
    required: [true, 'Este campo es requerido']
  },
  boleta: {
    type: String,
    required: [true, 'Este campo es requerido']
  },
  comprobante: {
    type: String,
    required: [true, 'Este campo es requerido']
  },
  productos: [{
    _id: false,
    producto: {
      type: _mongoose.Schema.Types.ObjectId,
      ref: 'Productos'
    },
    precio: {
      type: Number,
      required: [true, 'Este campo es requerido']
    },
    cantidad: {
      type: Number,
      required: [true, 'Este campo es requerido']
    },
    total: {
      type: String,
      required: [true, 'Este campo es requerido']
    }
  }],
  telefono: {
    type: Number,
    required: [true, 'Este campo es requerido']
  },
  direccion: {
    ciudad: {
      type: String,
      required: [true, 'Este campo es requerido']
    },
    distrito: {
      type: String,
      required: [true, 'Este campo es requerido']
    },
    calle: {
      type: String,
      required: [true, 'Este campo es requerido']
    },
    referencia: {
      type: String
    }
  },
  turno: {
    type: String,
    "default": 'TARDE'
  },
  date: {
    type: String,
    "default": (0, _Fecha.Fecha)()
  },
  total: {
    type: String,
    required: [true, 'Este campo es requerido']
  },
  solved: {
    type: Boolean,
    "default": false
  }
});
StoreSchema.plugin(_mongooseUniqueValidator["default"], {
  message: 'El {PATH} debería ser único'
});

var _default = (0, _mongoose.model)('Order', StoreSchema);

exports["default"] = _default;