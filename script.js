document.addEventListener("mousemove", function(e) {
    const trail = document.createElement("div");
    trail.classList.add("trail");
    document.body.appendChild(trail);

    trail.style.left = e.pageX + "px";
    trail.style.top = e.pageY + "px";

    setTimeout(() => {
        trail.remove();
    }, 500);
});

let sections = document.querySelectorAll("sections");
let navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () =>{
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === "#"+ current) {
            link.classList.add("active");
        }
    });
});
