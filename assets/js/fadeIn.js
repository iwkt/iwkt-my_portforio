document.addEventListener('DOMContentLoaded', function () {
  function scrollEvent() {    
    let scroll = window.pageYOffset;
    // document.getElementById('scv').innerHTML = scroll;
    
    if(scroll > 400) {
      document.querySelector('.js-fadein').classList.add('inview');
    } else {
      document.querySelector('.js-fadein').classList.remove('inview');
    }
  }
  scrollEvent();
  window.addEventListener('scroll',scrollEvent);
})