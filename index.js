const menuBtn = document.querySelector('#menuIcon');
const menu = document.querySelector('.side');

const toggleMenu = () => {
    menu.classList.toggle('show');
    console.log("Testing");
}

menuBtn.addEventListener('click', toggleMenu);