"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.BadUrl = exports.Index = void 0;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Index = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res) {
    var _musica;

    var method, protocol, host, path, url, token;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            method = req.method;
            protocol = req.protocol;
            host = req.headers.host;
            path = req.path;
            url = "".concat(method, " => ").concat(protocol, "://").concat(host).concat(path);
            token = req.token;
            res.status(200).json({
              url: "".concat(url),
              token: token,
              musica: (_musica = {
                Lofi: "https://www.youtube.com/watch?v=7NOSDKb0HlU"
              }, _defineProperty(_musica, "Lofi", "https://www.youtube.com/watch?v=5qap5aO4i9A"), _defineProperty(_musica, "House", "https://www.youtube.com/watch?v=36YnV9STBqc"), _defineProperty(_musica, "Deep", "https://www.youtube.com/watch?v=ZS5vYxznLBc"), _defineProperty(_musica, "Tropical", "https://www.youtube.com/watch?v=UsSMbnFgTeA"), _defineProperty(_musica, "Jazz", "https://www.youtube.com/watch?v=DSGyEsJ17cI"), _defineProperty(_musica, "Jazz", "https://www.youtube.com/watch?v=hx2aDgengKo"), _defineProperty(_musica, "Bass", "https://www.youtube.com/watch?v=5xSqfVbSGwY"), _defineProperty(_musica, "Cl\xE1sica", "https://www.youtube.com/watch?v=2gO1v2GPMFk"), _defineProperty(_musica, "Rap", "https://www.youtube.com/watch?v=xDAcHbpl-F8"), _defineProperty(_musica, "Reggaeton", "https://www.youtube.com/watch?v=EfckFxTcDGE"), _defineProperty(_musica, "Reggaeton", "https://www.youtube.com/watch?v=RlSDRqEbv1Y"), _defineProperty(_musica, "Salsa_Per\xFA", "https://open.spotify.com/playlist/2ORZS5vXQelTb15lwJYssb"), _defineProperty(_musica, "Salsa_Fania", "https://open.spotify.com/artist/1OdyhpUABf8avaZ9r8nI1u"), _defineProperty(_musica, "Salsa_Global", "https://open.spotify.com/playlist/3tnj46iSIoEGL7JBA9PRjU"), _defineProperty(_musica, "Criollo_Almuerzo", "https://open.spotify.com/playlist/1zCRa16sIATHDzxaPnJG7h"), _defineProperty(_musica, "Criollo_Global", "https://open.spotify.com/playlist/7nV3UZdXMd5EMwcnhAJECj"), _defineProperty(_musica, "Huaynos_Global", "https://open.spotify.com/playlist/0t0YhLi6Kwgqb9YiBeJRtm"), _defineProperty(_musica, "Boleros_Global", "https://open.spotify.com/playlist/3ibF3CQynWturph2Iy0LHZ"), _musica)
            });

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function Index(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.Index = Index;

var BadUrl = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res) {
    var _res$status$json;

    var protocol, path, host, method, url;
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            protocol = req.protocol;
            path = req.path;
            host = req.headers.host;
            method = req.method;
            url = "".concat(method, " => ").concat(protocol, "://").concat(host).concat(path);
            res.status(200).json((_res$status$json = {
              url: "".concat(url),
              error: "BAD URL",
              music_1: "Lofi: https://www.youtube.com/watch?v=7NOSDKb0HlU",
              music_2: "Lofi: https://www.youtube.com/watch?v=5qap5aO4i9A",
              music_3: "House: https://www.youtube.com/watch?v=36YnV9STBqc",
              music_4: "Deep: https://www.youtube.com/watch?v=ZS5vYxznLBc",
              music_5: "Tropical: https://www.youtube.com/watch?v=UsSMbnFgTeA",
              music_6: "Jazz: https://www.youtube.com/watch?v=DSGyEsJ17cI"
            }, _defineProperty(_res$status$json, "music_6", "Jazz: https://www.youtube.com/watch?v=hx2aDgengKo"), _defineProperty(_res$status$json, "music_8", "Bass: https://www.youtube.com/watch?v=5xSqfVbSGwY"), _defineProperty(_res$status$json, "music_8", "Cl\xE1sica: https://www.youtube.com/watch?v=2gO1v2GPMFk"), _defineProperty(_res$status$json, "music_7", "Rap: https://www.youtube.com/watch?v=xDAcHbpl-F8"), _defineProperty(_res$status$json, "music_7", "Reggaeton: https://www.youtube.com/watch?v=EfckFxTcDGE"), _defineProperty(_res$status$json, "music_7", "Reggaeton: https://www.youtube.com/watch?v=RlSDRqEbv1Y"), _defineProperty(_res$status$json, "music_7", "Salsa: https://open.spotify.com/playlist/2ORZS5vXQelTb15lwJYssb"), _res$status$json));

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function BadUrl(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.BadUrl = BadUrl;