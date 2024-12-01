"use strict";

var _jsTabs = _interopRequireDefault(require("js-tabs"));

var _starRating = _interopRequireDefault(require("star-rating.js"));

var _mmenuLight = _interopRequireDefault(require("mmenu-light"));

var _bootstrapEsm = require("./../../../../node_modules/bootstrap/dist/js/bootstrap.esm.min");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

document.addEventListener('DOMContentLoaded', function () {
  //dropdawn
  function dropdawn() {
    document.querySelectorAll('.dropdawn').forEach(function (item) {
      item.addEventListener("mouseover", function () {
        item.querySelector('.dropdawn-btn').classList.add('active');
        document.querySelectorAll('.dropdawn-menu').forEach(function (menu) {
          return menu.classList.remove('active');
        });
        item.querySelector('.dropdawn-menu').classList.add('active');
      });
    });
    document.querySelectorAll('.dropdawn').forEach(function (item) {
      item.addEventListener("mouseleave", function () {
        var timer = setTimeout(function () {
          item.querySelector('.dropdawn-menu').classList.remove('active');
          item.querySelector('.dropdawn-btn').classList.remove('active');
        }, 200);
        item.addEventListener('mouseover', function () {
          item.querySelector('.dropdawn-btn').classList.add('active');
          item.querySelector('.dropdawn-menu').classList.add('active');
          clearTimeout(timer);
        });
      });
    });
  }

  dropdawn(); //mask

  function isNumber(val) {
    return /^[-]?\d+$/.test(val);
  }

  function format(targetInput, e) {
    var tel = targetInput.value.replace(/[^0-9]/g, '');
    var result = '';
    var position = getCursorPosition(targetInput);

    if (tel.length) {
      if ("0" !== tel[0] && "1" !== tel[0] && "2" !== tel[0] && "3" !== tel[0] && "4" !== tel[0] && "5" !== tel[0] && "6" !== tel[0] && "9" !== tel[0] || (tel = "7" + tel), "8" === tel[0]) result = "7";else {
        if ("7" !== tel[0]) return;
        result = tel[0];
      }
      result = '+' + result, result = result + " (" + tel.substring(1, 4), tel.length > 3 && (result = result + ") " + tel.substring(4, 7)), tel.length > 6 && (result = result + " " + tel.substring(7, 9)), tel.length > 9 && (result = result + "-" + tel.substring(9, 11));
    }

    targetInput.value = result;

    if (e.keyCode === 46 || e.keyCode === 8) {
      setCaretPosition(targetInput, position);
    }
  }

  function setCaretPosition(elem, caretPos) {
    var range = void 0;

    if (elem.createTextRange) {
      range = elem.createTextRange();
      range.move('character', caretPos);
      range.select();
    } else {
      elem.focus();

      if (elem.selectionStart !== undefined) {
        elem.setSelectionRange(caretPos, caretPos);
      }
    }
  }

  function getCursorPosition(element) {
    var el = element;
    var pos = 0;

    if ('selectionStart' in el) {
      pos = el.selectionStart;
    } else if ('selection' in document) {
      el.focus();
      var Sel = document.selection.createRange();
      var SelLength = document.selection.createRange().text.length;
      Sel.moveStart('character', -el.value.length);
      pos = Sel.text.length - SelLength;
    }

    return pos;
  }

  function formatUp(e) {
    format(e.currentTarget, e);

    if (isNumber(e.key) || e.keyCode == 8 || e.keyCode == 46 || e.keyCode == 37 || e.keyCode == 39) {
      format(e.currentTarget, e);
    }
  }

  function formatDown(e) {
    if (!isNumber(e.key) && e.keyCode !== 8 && e.keyCode !== 46 && e.keyCode !== 37 && e.keyCode !== 39) {
      e.preventDefault();
      e.stopPropagation();
    }
  }

  document.querySelectorAll('input[type="tel"]').forEach(function (input) {
    input.addEventListener('keydown', formatDown);
    input.addEventListener('keyup', formatUp);
  }); //marquee

  function handleMarquee() {
    var marquee = document.querySelectorAll('.js_marquee');
    var speed = 1;
    marquee.forEach(function (el) {
      var container = el.querySelector('.js_marquee-inner');
      var content = el.querySelector('.js_marquee-inner > *'); //Get total width

      var elWidth = content.offsetWidth; //Duplicate content

      var clone = content.cloneNode(true);
      container.appendChild(clone);
      var progress = 1;

      function loop() {
        progress = progress - speed;

        if (progress <= elWidth * -1) {
          progress = 0;
        }

        container.style.transform = 'translateX(' + progress + 'px)';
        container.style.transform += 'skewX(' + speed * 0.4 + 'deg)';
        window.requestAnimationFrame(loop);
      }

      loop();
    });
  }

  ;
  handleMarquee(); // inputFile

  document.querySelectorAll('.input-file').forEach(function (item) {
    item.querySelector('input[type=file]').addEventListener('change', function () {
      item.querySelector('.input-file-text').innerHTML = this.files[0].name;
    });
  }); //map

  function init() {
    var points = [];
    document.querySelectorAll(".js_office_coordinates").forEach(function (item) {
      points[item.dataset.category] = new YMaps.GeoPoint(item.dataset.longitude, item.dataset.latitude);
    });
    var map = new YMaps.Map(YMaps.jQuery("#YaMaps")[0]); // Устанавливает начальные параметры отображения карты: центр карты и коэффициент масштабирования
    // Стили для метки    

    var s = new YMaps.Style();
    s.iconStyle = new YMaps.IconStyle();
    s.iconStyle.href = "images/map-icon.svg";
    s.iconStyle.size = new YMaps.Point(50, 50);
    s.iconStyle.offset = new YMaps.Point(-30, -40); // Создание меток               

    for (var key in points) {
      map.addOverlay(new YMaps.Placemark(points[key], {
        style: s
      }));
    } //map.addControl(new YMaps.Zoom(), new YMaps.ControlPosition(YMaps.ControlPosition.TOP_LEFT, new YMaps.Point(10, 30)));                
    // Перемещение по карте        


    if (document.querySelector('.map-address')) {
      document.querySelector('.map-address').classList.add('active');
      map.setCenter(points[document.querySelector('.map-address').dataset.category], 18);
      document.querySelectorAll('.map-address').forEach(function (item) {
        item.addEventListener('click', function () {
          document.querySelectorAll('.map-address').forEach(function (i) {
            i.classList.remove('active');
          });
          item.classList.add('active');
          map.panTo(points[item.dataset.category], {
            flying: 1
          });
        });
      });
    }
  }

  if (document.querySelector(".maploader")) {
    document.querySelector('.maploader').addEventListener('click', function () {
      YMaps.load(init);
    });
  } else if (document.querySelector('#YaMaps')) {
    YMaps.load(init);
  } //rating


  document.querySelectorAll('.star-rating').forEach(function (item) {
    new _starRating["default"](item, {
      clearable: true,
      tooltip: false,
      maxStars: 5
    });
  }); //select

  document.querySelectorAll('.custom-select').forEach(function (select) {
    var sndSelect = select.querySelector('select');
    var selectValue = document.createElement('div');
    var selectResult = document.createElement('span');
    var selectBlock = document.createElement('div');
    var selectOption;
    selectValue.setAttribute('class', 'custom-select-value main-input');
    selectResult.setAttribute('class', 'custom-select-result');
    selectBlock.setAttribute('class', 'custom-select-block overflow-auto');
    selectResult.innerHTML = sndSelect.options[sndSelect.selectedIndex].innerHTML;
    selectValue.appendChild(selectResult);
    selectValue.appendChild(document.createElement('i')).setAttribute('class', 'u_angle-right');
    select.appendChild(selectValue);

    for (var i = 0; i < sndSelect.length; i++) {
      selectOption = document.createElement('div');
      selectOption.innerHTML = sndSelect.options[i].innerHTML;
      selectOption.setAttribute('data-value', sndSelect.options[i].value);
      selectOption.addEventListener('click', function () {
        var parentSelect = this.parentNode.parentNode.querySelector('select');
        var parentSibling = this.parentNode.previousSibling.querySelector('.custom-select-result');

        for (var j = 0; j < parentSelect.length; j++) {
          if (parentSelect.options[j].innerHTML == this.innerHTML) {
            parentSelect.selectedIndex = j;
            parentSibling.innerHTML = this.innerHTML;
            var sameAsSlt = this.parentNode.querySelectorAll(".same-as-selected");
            sameAsSlt.forEach(function (items) {
              items.classList.remove('same-as-selected');
            });
            this.classList.add('same-as-selected');
          }
        }

        parentSibling.click();
        parentSelect.dispatchEvent(new Event('change'));
      });
      selectBlock.appendChild(selectOption);
    }

    select.appendChild(selectBlock);
    selectValue.addEventListener('click', function (e) {
      e.stopPropagation();
      closeSel(this.closest('.custom-select'));
      this.nextSibling.classList.toggle("active");
      this.classList.toggle("active");
    });
  });

  function closeSel(elm) {
    document.querySelectorAll('.custom-select').forEach(function (item) {
      if (item !== elm) {
        item.querySelector('.custom-select-value').classList.remove('active');
        item.querySelector('.custom-select-block').classList.remove('active');
      }
    });
  }

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.custom-select')) {
      document.querySelectorAll('.custom-select').forEach(function (item) {
        item.querySelector('.custom-select-value').classList.remove('active');
        item.querySelector('.custom-select-block').classList.remove('active');
      });
    }
  });
  var mobileMenu = new _mmenuLight["default"](document.querySelector("#mobile-menu"));
  mobileMenu.navigation({
    title: "Меню",
    theme: "dark"
  });
  var drawerMenu = mobileMenu.offcanvas();
  document.querySelectorAll('a[href="#mobile-menu"]').forEach(function (item) {
    return item.addEventListener('click', function (evnt) {
      evnt.preventDefault();
      drawerMenu.open();
    });
  });
});