'use strict';

var mainSwitch = document.querySelector('.main-nav__switch');
var mainNav = document.querySelector('.main-nav__list');
var mainNavItems = document.querySelectorAll('.main-nav__item');




var onActiveMenu = function () {
  var mainSwitchImg = document.querySelector('.main-nav__switch-img');

  if (mainSwitchImg.classList.contains('main-nav__switch-img--open')) {
    mainSwitchImg.classList.remove('main-nav__switch-img--open');
    mainSwitchImg.classList.add('main-nav__switch-img--close');

    mainNav.classList.remove('main-nav__list--open');
    mainNav.classList.add('main-nav__list--close');

    // mainNav.classList.remove('main-nav__list--close');
    // mainNav.classList.add('main-nav__list--open');

    // onItemOpen();
    onItemClose()

  } else if (mainSwitchImg.classList.contains('main-nav__switch-img--close')) {
    mainSwitchImg.classList.remove('main-nav__switch-img--close');
    mainSwitchImg.classList.add('main-nav__switch-img--open');

    // mainNav.classList.remove('main-nav__list--open');
    // mainNav.classList.add('main-nav__list--close');

    mainNav.classList.remove('main-nav__list--close');
    mainNav.classList.add('main-nav__list--open');

    onItemOpen();
    // onItemClose();
  }

  // mainSwitchImg.classList.contains('main-nav__switch-img--open');
  // console.log(mainSwitchImg.classList.contains('main-nav__switch-img--open'));
  // document.querySelector(m)
};

mainSwitch.addEventListener('mousedown', onActiveMenu);


console.log(mainNavItems);

var onItemClose = function() {
  mainNavItems.forEach(function (el,index) {

    setTimeout(function () {
      el.classList.add('main-nav__item--close');
    },600)
    // },(index+10)*60)

    el.classList.remove('main-nav__item--close');
  })
}

var onItemOpen = function() {


  mainNavItems.forEach(function (el,index) {
    // el.classList.remove('main-nav__item--close');
    // setTimeout(function () {
    //   el.classList.remove('main-nav__item--close');
    // },index*200)

    setTimeout(function () {
      el.classList.remove('main-nav__item--close');
    },1500)
  })

}

















