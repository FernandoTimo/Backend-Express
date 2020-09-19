"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _serveFavicon = _interopRequireDefault(require("serve-favicon"));

var _expressFileupload = _interopRequireDefault(require("express-fileupload"));

var _cors = _interopRequireDefault(require("cors"));

var _routes = _interopRequireDefault(require("../router/routes"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var middleware = (0, _express["default"])();
middleware.use((0, _cors["default"])());
middleware.use(_express["default"].urlencoded({
  extended: true
}));
middleware.use(_express["default"].json());
middleware.use((0, _serveFavicon["default"])(_path["default"].join(__dirname, '../../public/icons/favicon.ico')));
middleware.use((0, _expressFileupload["default"])());
middleware.use('/p', _express["default"]["static"](_path["default"].join(__dirname, '../../public')));
middleware.use('/', _routes["default"]);
var _default = middleware;
exports["default"] = _default;