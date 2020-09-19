"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.server = void 0;

var _http = require("http");

var _socket = _interopRequireDefault(require("./sockets/socket"));

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _http.createServer)(_app["default"]);
exports.server = server;
(0, _socket["default"])(server);
var _default = server;
exports["default"] = _default;