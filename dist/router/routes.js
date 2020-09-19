"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var _controller = require("../controllers/controller");

var _Messages = require("../controllers/Messages");

var _Auth = require("../middlewares/Auth");

var routes = (0, _express.Router)();
routes.route('/').get(_Auth.Auth, _controller.Index);
routes.route('/Messages').post(_Messages.Messages);
routes.route('*').get(_controller.BadUrl);
var _default = routes;
exports["default"] = _default;