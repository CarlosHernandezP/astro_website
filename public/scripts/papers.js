if (typeof document !== "undefined") {
    document.addEventListener("DOMContentLoaded", function () {
      const paperCards = document.querySelectorAll(".paper-card");
  
      paperCards.forEach((card) => {
        card.addEventListener("click", function (event) {
          event.stopPropagation(); // Prevent bubbling
  
          // Collapse all cards first
          paperCards.forEach((otherCard) => {
            if (otherCard !== this) {
              otherCard.classList.remove("expanded");
            }
          });
  
          // Toggle expansion for the clicked card
          this.classList.toggle("expanded");
        });
      });
    });
  }
      