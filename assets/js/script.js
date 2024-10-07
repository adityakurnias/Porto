//AOS
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

/* Navbar  */
const navbar = document.getElementById('navbar');

function toggleNavbar(action) {
    navbar.classList.add(action === 'show' ? 'show' : 'hide');
    navbar.classList.remove(action === 'show' ? 'hide' : 'show');
}

document.getElementById('show-nav').addEventListener('click', () => toggleNavbar('show'));
document.getElementById('hide-nav').addEventListener('click', () => toggleNavbar('hide'));

document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => toggleNavbar('hide'));
});

/* More info */
const moreInfoBtn = document.getElementById('more-info')
const moreTab = document.getElementById('more-tab')

moreInfoBtn.addEventListener('click', () => {
    moreTab.classList.toggle('start')
})

const sections = document.querySelectorAll('section')
const navLink = document.getElementsByClassName('nlink')

window.addEventListener('scroll', () => {
    let current = ''

    sections.forEach(section => {
        const sectTop = section.offsetTop
        const sectHeight = section.clientHeight

        if ( window.scrollY >= sectTop - sectHeight / 3 ) {
            current = section.getAttribute('id')
        }
    })

    Array.from(navLink).forEach(link => {
        link.classList.remove('active') 

        if ( link.getAttribute('href') === `#${current}` ) {
            link.classList.add('active')
        }
    })
})