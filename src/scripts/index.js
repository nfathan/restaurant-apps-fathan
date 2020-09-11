import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';

const navbarTogglerButtonElement = document.querySelector(".navbar-toggler");
const sidebarElement = document.querySelector("#sidebar");
const closeElement = document.querySelector(".content-wrapper");

navbarTogglerButtonElement.addEventListener("click", event => {
    sidebarElement.classList.toggle("open");
    event.stopPropagation();
});

closeElement.addEventListener("click", event => {
    sidebarElement.classList.remove("open");
    event.stopPropagation();
})

console.log('Hello Coders! :)');


