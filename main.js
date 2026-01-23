// active navbar
let nav= document.querySelector('.futuristic-nav');
window.onscroll = function(){
    if(this.document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }else{
        nav.classList.remove("scroll-on");

    }
    }


// hide nav
let navbarLinks = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse');

navbarLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    navCollapse.classList.remove("show");
  });
});


// counter design
document.addEventListener("DOMContentLoaded", () => {

  function counter(id, start, end, duration) {
    const obj = document.getElementById(id);
    let current = start;
    const range = end - start;
    const increment = end > start ? 1 : -1;
    const step = Math.abs(Math.floor(duration / range));

    const timer = setInterval(() => {
      current += increment;
      obj.textContent = current + "+";

      if (current === end) {
        clearInterval(timer);
      }
    }, step);
  }

  counter("count1", 0, 1287, 3000);
  counter("count2", 0, 1287, 3000);
  counter("count3", 0, 1440, 3000);

});
