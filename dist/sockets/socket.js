"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _socket = require("socket.io");

var _StoreSockets = require("./StoreSockets");

require("dotenv/config");

var sockets = function sockets(server) {
  var socket = (0, _socket.listen)(server, {
    path: '/timoideas'
  });
  (0, _StoreSockets.StoreSockets)(socket);
};

var _default = sockets;
exports["default"] = _default;