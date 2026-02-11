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
