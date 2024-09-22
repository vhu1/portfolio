// Loading screen functionality
window.addEventListener("load", () => {
    const loadingScreen = document.getElementById("loading-screen");
    setTimeout(() => {
        loadingScreen.classList.add("hidden");
    }, 2500); // Keep the loading screen for 2.5 seconds
});

// Smooth scrolling functionality
document.querySelectorAll("nav ul li a").forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();
        const targetID = this.getAttribute("href");
        const targetSection = document.querySelector(targetID);
        targetSection.scrollIntoView({ behavior: "smooth" });
    });
});
