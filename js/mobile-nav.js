
const mobileNav = document.getElementById('mobile-nav');
const navBtn = document.querySelector('.nav-button');
const navIcon = document.querySelector('.nav-btn__icon');


navBtn.onclick = function(){
    mobileNav.classList.toggle('mobile-nav--open');
    navIcon.classList.toggle('nav-btn__icon-active');
    document.body.classList.toggle('no-scroll');
    
};

