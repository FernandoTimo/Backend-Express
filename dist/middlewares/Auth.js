"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Auth = Auth;

function Auth(req, res, next) {
  if (!!req.get('token')) {
    var token = req.get('token');
    req.token = token;
    next();
  } else {
    res.status(200).json({
      ok: false,
      message: 'No enviaste token'
    });
  }
}