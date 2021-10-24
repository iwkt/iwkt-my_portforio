/*
class AcdBtn {
  constructor() {
    this.DOM = {};
    this.DOM.btn = document.querySelectorAll('.mbl__menu__li');
    this.DOM.container = document.querySelector('#navOpen');
    // this.DOM.container = document.querySelector('#History__acd');
    // this.DOM.btn = document.querySelector('#History__acd__btn');
    // this.DOM.body = document.querySelector('body');
    this.eventType = this._getEventType();
    this._addEvent();
  }

  _getEventType() {
    return window.ontouchstart ? 'touchstart' : 'click';
  }
  _toggle() {
    this.DOM.btn.classList.toggle('active');
    this.DOM.container.classList.toggle('active');
    // this.DOM.body.classList.toggle('active');
  }
  _addEvent() {
    this.DOM.btn.addEventListener(this.eventType, this._toggle.bind(this));
  }
}
*/

// class AcdBtn {
//   constructor() {
//     this.items = document.querySelectorAll('.mbl__menu__li');
//     this.menu = document.querySelector('#navOpen');
//     this._addEvent();
//   }
//   _addEvent(){
//     this.items.forEach(item => {
//       item.addEventListener('click',function (e) {
//         e.preventDefault();
//         document.querySelector('#navOpen').classList.toggle('active');
//         document.querySelector('#MBL_menu').classList.toggle('active');
//       });  
//     });
//   };
// }

// new AcdBtn();

function clicklAddclass(arg1) {
  document.addEventListener('DOMContentLoaded', function () {
    arg1.forEach(function(value) {
      value.addEventListener('click',function(e){
        // e.preventDefault();
        navOpen.classList.toggle('active');
        menu.classList.toggle('active');
        // const href = this.getAttribute('href');
        // const link = function () {
        //   window.location.href = href;
        // };
        // setTimeout(function () {
        //   window.location.href = href;
        // }, 2000);
      })
    })
  })
}


const parentMenu = document.querySelectorAll('.mbl_menu');
const navOpen = document.querySelector('#navOpen');
const menu = document.querySelector('#MBL_menu');

clicklAddclass(parentMenu);