// 'use strict';
//
// (function () {
//   var mainNavCloseButton = document.querySelector('.main-nav__close-wrapper');
//   var mainNav = document.querySelector('.main-nav');
//   var mainNavOpenButton = document.querySelector('.promo__button-nav');
//   var header = document.querySelector('.header');
//
//   var hideMainNav = function () {
//     if (mainNav.classList.contains('main-nav--js-close') !== true) {
//       mainNav.classList.add('main-nav--js-close');
//       header.classList.remove('header--js');
//     }
//   };
//
//   var showMainNav = function () {
//     if (mainNav.classList.contains('main-nav--js-close') === true) {
//       mainNav.classList.remove('main-nav--js-close');
//       header.classList.add('header--js');
//     }
//   };
//
//   var onCloseMainNavMenu = function () {
//     hideMainNav();
//     showMainNavOpenButton();
//     removeMainNavCloseButtonListener();
//     addMainNavOpenButtonListener();
//   };
//
//   var addMainNavCloseButtonListener = function () {
//     mainNavCloseButton.addEventListener('mousedown', onCloseMainNavMenu);
//   };
//
//   var removeMainNavCloseButtonListener = function () {
//     mainNavCloseButton.removeEventListener('mousedown', onCloseMainNavMenu);
//   };
//
//   var hideMainNavOpenButton = function () {
//     if (mainNavOpenButton.classList.contains('visually_hidden') !== true) {
//       mainNavOpenButton.classList.add('visually_hidden');
//     }
//   };
//
//   var showMainNavOpenButton = function () {
//     if (mainNavOpenButton.classList.contains('visually_hidden') === true) {
//       mainNavOpenButton.classList.remove('visually_hidden');
//     }
//   };
//
//   var getOpenMenu = function () {
//     hideMainNavOpenButton();
//     showMainNav();
//     addMainNavCloseButtonListener();
//     removeMainNavOpenButtonListener();
//   };
//
//   var addMainNavOpenButtonListener = function () {
//     mainNavOpenButton.addEventListener('mousedown', getOpenMenu);
//   };
//
//   var removeMainNavOpenButtonListener = function () {
//     mainNavOpenButton.removeEventListener('mousedown', getOpenMenu);
//   };
//
//   var startJsMainMenu = function () {
//     onCloseMainNavMenu();
//     addMainNavOpenButtonListener();
//   };
//
//   startJsMainMenu();
// })();
