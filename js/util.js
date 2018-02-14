'use strict';

window.util = (function () {
  var CLOSE_KEYCODE = 27;
  var OPEN_KEYCODE = 13;

  return {
    getRandomNumber: function (min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    },

    isEscEvent: function (evt, action) {
      if (evt.keyCode === CLOSE_KEYCODE) {
        action();
      }
    },

    isEnterEvent: function (evt, action) {
      if (evt.keyCode === OPEN_KEYCODE) {
        action();
      }
    },

    colorize: function (array, element) {
      var randomColor = array[window.util.getRandomNumber(0, array.length)];

      if (element.hasAttribute('style')) {
        element.setAttribute('style', 'fill:' + randomColor);
      }

      if (element.tagName.toLowerCase() === 'div') {
        element.style.background = randomColor;
      } else {
        element.style.fill = randomColor;
      }
      return randomColor;
    }
  };

})();
