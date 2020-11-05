"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.NanoReset = exports.nanoreset = void 0;

var _styledComponents = require("styled-components");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\nhtml,\nbody,\ndiv,\nspan,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\nabbr,\ncode,\nem,\nimg,\nsmall,\nstrong,\nsub,\nsup,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\nfooter,\nheader,\nnav,\nsection,\ntime,\naudio,\nvideo {\n  font-size: 100%;\n  font-weight: inherit;\n  margin: 0;\n  padding: 0;\n  vertical-align: baseline;\n  border: 0;\n  background-color: transparent;\n}\n\nhtml {\n  font-family:\n    -apple-system,\n    BlinkMacSystemFont,\n    \"Segoe UI\",\n    Roboto,\n    Oxygen-Sans,\n    Ubuntu,\n    Cantarell,\n    \"Helvetica Neue\",\n    sans-serif;\n  overflow-y: scroll;\n  box-sizing: border-box;\n\tscroll-behavior: smooth;\n}\n\n*,\n*::before,\n*::after {\n  box-sizing: inherit;\n  background-repeat: no-repeat;\n}\n\nbody {\n\tmin-height: 100vh;\n\ttext-rendering: optimizeSpeed;\n  line-height: 1.6;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nmain,\nmenu,\nnav,\nsection,\nsmall,\nhgroup,\nsummary {\n  display: block;\n}\n\nimg,\nembed,\niframe,\nobject,\naudio,\nvideo {\n  max-width: 100%;\n  height: auto;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n\tline-height: 1.2;\n}\n\niframe {\n  border: 0;\n}\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\nblockquote,\nq {\n  quotes: none;\n}\n\nblockquote::before,\nblockquote::after,\nq::before,\nq::after {\n  content: \"\";\n  content: none;\n}\n\nul,\nli {\n  list-style: none;\n}\n\nsup {\n  vertical-align: text-top;\n}\n\nsub {\n  vertical-align: text-bottom;\n}\n\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\n\ninput {\n  line-height: normal;\n  border-radius: 0;\n}\n\ninput,\nselect {\n  vertical-align: middle;\n}\n\nbutton,\ninput,\nselect,\ntextarea {\n  font-family: inherit;\n  margin: 0;\n  text-transform: none;\n  border: 0;\n}\n\ninput[type=\"radio\"] {\n  vertical-align: text-bottom;\n}\n\ninput[type=\"checkbox\"] {\n  vertical-align: bottom;\n}\n\ninput::-ms-clear {\n  display: none;\n}\n\ninput::-ms-reveal {\n  display: none;\n}\n\nstrong,\nb {\n  font-weight: bold;\n}\n\nabbr,\nacronym {\n  cursor: help;\n  text-decoration: none;\n  border-bottom: 0.1em dotted;\n}\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\nlabel,\ninput[type=\"file\"],\nbutton,\n[type=\"button\"],\n[type=\"reset\"],\n[type=\"submit\"],\n[role=\"button\"] {\n  cursor: pointer;\n}\n\n[disabled] {\n  cursor: not-allowed;\n}\n\n@media (prefers-reduced-motion: reduce) {\n  * {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n}\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var nanoreset = (0, _styledComponents.css)(_templateObject());
exports.nanoreset = nanoreset;
var NanoReset = (0, _styledComponents.createGlobalStyle)(nanoreset);
exports.NanoReset = NanoReset;
var _default = nanoreset;
exports["default"] = _default;