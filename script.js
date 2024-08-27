// open and close function for navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

// next and previous buttons on slideshow below navbar on main page
const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button.closest("[data-carousel]").querySelector("[data-slides]")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) {
            newIndex = slides.children.length - 1
        }

        if (newIndex >= slides.children.length) {
            newIndex = 0
        }

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})
