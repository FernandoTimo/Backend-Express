"use strict";

var _express = _interopRequireDefault(require("express"));

require("dotenv/config");

var _cors = _interopRequireDefault(require("cors"));

var _index = _interopRequireDefault(require("./router/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var server = (0, _express["default"])();
server.use((0, _cors["default"])());
server.use(_express["default"].urlencoded({
  extended: true
}));
server.use(_express["default"].json());
server.use('/', _index["default"]);
server.listen(process.env.PORT, function () {
  console.log(":: \x1B[36mSERVER\x1B[0m \x1B[33m".concat(process.env.PORT, "\x1B[0m \x1B[36mWORKS\x1B[0m ::"));
}); //