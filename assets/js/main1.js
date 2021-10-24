document.addEventListener('DOMContentLoaded', function () {

  const cb = function (el, isIntersecting) {
    if (isIntersecting) {
      this.els.classList.remove(el);
    } else {
      this.els.classList.add(el);
    }

  };

  const so = new ScrollObserver('.slide_in', cb/*, {once: false}*/);
});
