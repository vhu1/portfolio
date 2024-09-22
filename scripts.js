// Typed.js initialization for the typing effect
document.addEventListener("DOMContentLoaded", function() {
    var typed = new Typed("#typed-name", {
      strings: ["Bhuwan Raj Baral"],
      typeSpeed: 100,
      backSpeed: 50,
      loop: false
    });
  });
  
  // Initialize AOS (Animate on Scroll)
  AOS.init({
    duration: 1200,
    once: true,
  });
  
  // GSAP for cube hover effect
  document.querySelector("#cube").addEventListener("mouseover", () => {
    gsap.to("#cube", { duration: 2, rotateY: "+=360", ease: "elastic" });
  });
  