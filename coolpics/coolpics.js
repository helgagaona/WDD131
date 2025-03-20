document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector(".menu-button");
  const menu = document.querySelector(".menu");

  // Toggle menu visibility on button click
  menuButton.addEventListener("click", () => {
      menu.classList.toggle("show"); // Toggle 'show' class
  });

  // Ensure menu is always visible when screen is resized beyond 1000px
  function handleResize() {
      if (window.innerWidth >= 1000) {
          menu.classList.remove("hide", "show"); // Always show on large screens
      } else {
          menu.classList.add("hide"); // Hide by default on smaller screens
      }
  }

  handleResize(); // Run once to set the initial state
  window.addEventListener("resize", handleResize);

  // Attach event listener to the gallery section for image clicks
  document.querySelector(".gallery").addEventListener("click", viewHandler);

  // Use event delegation to listen for close button clicks
  document.body.addEventListener("click", (event) => {
      if (event.target.classList.contains("close-viewer")) {
          closeViewer();
      }
  });
});

// Function to create the modal dynamically
function viewerTemplate(imageSrc, altText) {
  return `
      <div class="viewer">
          <button class="close-viewer">X</button>
          <img src="${imageSrc}" alt="${altText}">
      </div>
  `;
}

// Function to handle image clicks
function viewHandler(event) {
  if (event.target.tagName === "IMG") {
      const imageSrc = event.target.src.replace("-sm", "-full"); // Change image to full-size
      const altText = event.target.alt;

      // Remove any existing modal before adding a new one
      closeViewer();

      // Insert the modal into the body
      document.body.insertAdjacentHTML("afterbegin", viewerTemplate(imageSrc, altText));
  }
}

// Function to close the modal
function closeViewer() {
  const viewer = document.querySelector(".viewer");
  if (viewer) {
      viewer.remove();
  }
}
