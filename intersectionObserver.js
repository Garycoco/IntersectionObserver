const sectionOne = document.querySelector(".section1");
const header = document.querySelector("header");
const options = {
    rootMargin: "-70px 0px 0px 0px"
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            header.classList.add("nav-scrolled")
        } else {
            header.classList.remove("nav-scrolled")
        }
    })
}, options);
observer.observe(sectionOne);