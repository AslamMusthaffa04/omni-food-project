const yearEl =document.querySelector('.year');
const currentyear = new Date().getFullYear();
yearEl.textContent=currentyear;


// make mobile nav work 

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl =document.querySelector('.header');

btnNavEl.addEventListener('click',function() {
    headerEl.classList.toggle('nav-open')
}
);