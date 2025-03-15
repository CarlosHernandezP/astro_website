if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
        const consultancySection = document.querySelector(".ai-consultancy");
      
        function checkScroll() {
          const sectionTop = consultancySection.getBoundingClientRect().top;
          const sectionBottom = consultancySection.getBoundingClientRect().bottom;
          const windowHeight = window.innerHeight;
          const triggerPoint = windowHeight * 0.8; // Trigger when 80% of viewport height
      
          if (sectionTop < triggerPoint && sectionBottom > 0) {
            consultancySection.classList.add("visible");
            consultancySection.classList.remove("hidden");
          } else {
            consultancySection.classList.remove("visible");
            consultancySection.classList.add("hidden");
          }
        }
      
        window.addEventListener("scroll", checkScroll);
        checkScroll(); // Run on page load in case already in view
      });
      
}
