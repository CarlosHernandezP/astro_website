if (typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
      console.log("Scroll.js loaded successfully!");

      const elements = document.querySelectorAll(".company");

      function revealOnScroll() {
          elements.forEach((el) => {
              const rect = el.getBoundingClientRect();
              if (rect.top < window.innerHeight * 0.75) {
                  el.classList.add("reveal");
              }
          });
      }

      window.addEventListener("scroll", revealOnScroll);
      revealOnScroll(); // Run it once in case elements are already in view
  });
}
