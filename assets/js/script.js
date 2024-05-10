//AOS
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

/* Navbar  */
const show = document.getElementById('show-nav')
const hide = document.getElementById('hide-nav')
const hide2 = document.getElementById('hide-nav2')
const navbar = document.getElementById('navbar')

show.addEventListener('click', () => {
    navbar.classList.add('show')
    navbar.classList.remove('hide')    
})

hide.addEventListener('click', () => {
    navbar.classList.add('hide') 
    navbar.classList.remove('add')
})

hide2.addEventListener('click', () => {
    navbar.classList.add('hide') 
    navbar.classList.remove('add')
})

/* More info */

const moreInfoBtn = document.getElementById('more-info')
const moreTab = document.getElementById('more-tab')

moreInfoBtn.addEventListener('click', () => {
    moreTab.classList.toggle('start')
})
