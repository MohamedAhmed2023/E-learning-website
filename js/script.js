const openNavEle = document.querySelector('.menu-icon');
const closeNavEle = document.querySelector('.close-icon');
const headerEle = document.querySelector('header');


const openNav = function() {
  headerEle.classList.add('open')
}

const closeNav = function() {
    headerEle.classList.remove('open')
}

openNavEle.addEventListener('click',openNav)
closeNavEle.addEventListener('click',closeNav)
