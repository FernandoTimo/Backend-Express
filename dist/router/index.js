"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var routes = (0, _express.Router)();
routes.route('/').get(function (req, res) {
  res.json({
    saludo: 'carecaca'
  });
});
var _default = routes;
exports["default"] = _default;