"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _swiper = _interopRequireWildcard(require("swiper"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector(".baner-slider")) {
    document.querySelectorAll(".baner-slider").forEach(function (item) {
      new _swiper["default"](item, {
        modules: [_swiper.Navigation],
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
          nextEl: '.baner-slider-next',
          prevEl: '.baner-slider-prev'
        },
        watchSlidesVisibility: true,
        slideActiveClass: "active",
        allowTouchMove: true
      });
    });
  }

  if (document.querySelector(".slider-4")) {
    document.querySelectorAll(".slider-4").forEach(function (item) {
      var currentCategory = item.dataset.category;
      var navigation = {};
      var currentNavigation = document.querySelector(".slider-navigation-4[data-category=\"".concat(currentCategory, "\"]"));
      var next = currentNavigation.querySelector('.slider-next');
      var prev = currentNavigation.querySelector('.slider-prev');
      navigation = {
        nextEl: next,
        prevEl: prev
      };
      new _swiper["default"](item, {
        modules: [_swiper.Navigation],
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: navigation,
        watchSlidesVisibility: true,
        slideActiveClass: "active",
        allowTouchMove: true,
        breakpoints: {
          768: {
            spaceBetween: 20,
            slidesPerView: 2
          },
          992: {
            spaceBetween: 20,
            slidesPerView: 3
          },
          1200: {
            spaceBetween: 20,
            slidesPerView: 4
          },
          1424: {
            spaceBetween: 30,
            slidesPerView: 4
          }
        }
      });
    });
  }

  if (document.querySelector(".slider-2")) {
    document.querySelectorAll(".slider-2").forEach(function (item) {
      var currentCategory = item.dataset.category;
      var navigation = {};
      var currentNavigation = document.querySelector(".slider-navigation-2[data-category=\"".concat(currentCategory, "\"]"));
      var next = currentNavigation.querySelector('.slider-next');
      var prev = currentNavigation.querySelector('.slider-prev');
      navigation = {
        nextEl: next,
        prevEl: prev
      };
      new _swiper["default"](item, {
        modules: [_swiper.Navigation],
        spaceBetween: 10,
        slidesPerView: 'auto',
        navigation: navigation,
        watchSlidesVisibility: true,
        slideActiveClass: "active",
        allowTouchMove: true,
        breakpoints: {
          768: {
            slidesPerView: 2,
            spaceBetween: 10
          },
          1200: {
            slidesPerView: 2,
            spaceBetween: 20
          },
          1424: {
            slidesPerView: 2,
            spaceBetween: 30
          }
        }
      });
    });
  }
});