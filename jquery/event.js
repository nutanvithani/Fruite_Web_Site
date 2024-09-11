document.addEventListener("DOMContentLoaded", function() {
    const accordionButtons = document.querySelectorAll(".eqd-accordion__button");
  
    accordionButtons.forEach(button => {
      button.addEventListener("click", function() {
        const isExpanded = button.getAttribute("aria-expanded") === "true";
        const contentId = button.getAttribute("aria-controls");
        const content = document.getElementById(contentId);
  
        // Collapse all accordions
        accordionButtons.forEach(btn => {
          const contentToHide = document.getElementById(btn.getAttribute("aria-controls"));
          btn.setAttribute("aria-expanded", "false");
          if (contentToHide) {
            contentToHide.setAttribute("hidden", "");
          }
        });
  
        // If the clicked accordion was not expanded, expand it
        if (!isExpanded) {
          button.setAttribute("aria-expanded", "true");
          content.removeAttribute("hidden");
        }
      });
    });
  });   