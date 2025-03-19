document.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    const heroSection = document.querySelector("#hero");
    const heroHeight = heroSection.offsetHeight;

    if (window.scrollY > heroHeight) {
        navbar.classList.add("scrolled");  // Add the 'scrolled' class when past the hero section
    } else {
        navbar.classList.remove("scrolled");  // Remove the 'scrolled' class when back at the top
    }
});
