"use strict";

var _yallJs = _interopRequireDefault(require("yall-js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

(0, _yallJs["default"])({
  observeChanges: true,
  events: {
    load: function load(event) {
      if (!event.target.classList.contains("lazy") && event.target.nodeName === "IMG") {
        event.target.classList.add("yall-loaded");
      }
    }
  }
});