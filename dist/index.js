"use strict";

require("@babel/polyfill");

require("dotenv/config");

var _database = _interopRequireDefault(require("./database"));

var _server = _interopRequireDefault(require("./server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var main = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _server["default"].listen(process.env.PORT, function () {
              console.log(":: \x1B[36mSERVER\x1B[0m \x1B[33mhttp://localhost:".concat(process.env.PORT, "\x1B[0m \x1B[36mWORKS\x1B[0m ::"));
            });

            _database["default"].connection.once('open', function () {
              console.log(":: \x1B[36mDATABASE\x1B[0m \x1B[33m".concat(process.env.MONGODB_URI, "\x1B[0m \x1B[36mWORKS\x1B[0m ::"));
            });

          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function main() {
    return _ref.apply(this, arguments);
  };
}();

main();