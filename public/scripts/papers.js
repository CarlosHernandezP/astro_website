if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", () => {
        document.querySelectorAll(".paper-card").forEach((card) => {
          card.addEventListener("click", () => {
            card.classList.toggle("expanded");
          });
        });
      });
  }