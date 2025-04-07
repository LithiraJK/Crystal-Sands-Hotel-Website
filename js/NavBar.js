document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector("#hero");
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});
