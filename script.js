const circleLoader = document.querySelector(".loader-circle");
const loadingPage = document.querySelector(".dl-preview-page");
const coffeeNav = document.querySelector(".coffee-nav");
const HeroSection = document.querySelector(".hero-section");
const AboutJourney = document.querySelector(".About-journey");
const Menu = document.querySelector(".menu-box");
const Gallery = document.querySelector(".Gallery");
const FormBox = document.querySelector(".form-box");
const footer = document.querySelector(".coffee-footer");
const burgerMenu = document.querySelector(".burger");

function RenderWeb(){
    circleLoader.style.display = "none";
    loadingPage.style.display = "none";
    coffeeNav.style.display = "flex";
    HeroSection.classList.add("animate");
    AboutJourney.style.display = "flex";
    document.querySelector(".coffee-logo").style.display = "none";
    Menu.style.display = "flex";
    Gallery.style.display = "flex";
    FormBox.style.display = "flex";
    footer.style.display = "flex";
    
}

circleLoader.addEventListener("animationend", () =>{
    RenderWeb();
});

const navBtn = document.querySelectorAll(".navigation");

navBtn.forEach(btn => {
    btn.addEventListener("click", function() {
        isScrolled = true;
        navBtn.forEach(i => {
            i.classList.remove("focused");
        })
        this.classList.add("focused");
    })
});

let isScrolled = false;

window.addEventListener("scroll", function() {
    if (isScrolled) return;

    navBtn.forEach(btn => {
        btn.classList.remove("focused");
    })
});

window.addEventListener("scrollend", function(){
    isScrolled = false;
});

