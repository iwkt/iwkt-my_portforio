/*

class ScllOb {
  constructor(els, threshold) {
    this.els = document.querySelectorAll(els);
    const options = {
      root: null,
      rootMargin: "-300px 0px",
      threshold: threshold
    };
    this._init();
  }
  _init() {
    const callback = function (entries) {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          entry.target.classList.remove('active');
        }
      })
    }
    const obs = new IntersectionObserver(callback.bind(this), this.options)
    this.els.forEach(area => obs.observe(area));
  }
}

// document.addEventListener('DOMContentLoaded', function () {
  const elem = '.slide_in';
  // const rm = '-100px -50px -100px -50px';
  const ths = [1];

  new ScllOb(elem, ths);


// })
*/

class Iob {
  constructor(elem,keyword){
    this.elem = document.querySelectorAll(elem);
    this.elem2 = document.querySelector('.item2')
    // this.elem = elem;
    this.keyword = keyword;
    this._cb();
  }
  _cb(){
    
    const cb = function(entries,observer) {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add(key);
          // observer.unobserve(entry.target);
        } else {
          entry.target.classList.remove(key);
        }
      });
    }

      const options = {
        root: null,
        rootMargin: "-100px 0% -100px 0%",
        threshold: [0]
      }

      const io = new IntersectionObserver(cb,options);
      this.elem.forEach(el => io.observe(el));
    }
  }

const item = ".slide_in"
const key = "active";

const os = new Iob(item,key);