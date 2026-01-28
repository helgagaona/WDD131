document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    const menu = document.querySelector(".menu");

    menuButton.addEventListener("click", () => {
        menu.classList.toggle("show");
    });

    function handleResize() {
        if (window.innerWidth >= 1000) {
            menu.classList.remove("hide", "show"); // Show on large screens
        } else {
            menu.classList.add("hide"); // Hide on smaller screens
        }
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    
    document.querySelector(".gallery").addEventListener("click", viewHandler);
    document.body.addEventListener("click", (event) => {
        if (event.target.classList.contains("close-viewer")) {
            closeViewer();
        }
    });
});

function viewerTemplate(imageSrc, altText) {
    return `
    <div class="viewer">
        <button class="close-viewer"> X </button>
        <img src="${imageSrc}" alt="$altText}">
    </div>
    `;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const imageSrc = event.target.src.replace("-sm", "-full"); // Make the image full size
        const altText = event.target.alt;
        closeViewer();
        document.body.insertAdjacentHTML("afterbegin",viewerTemplate(imageSrc, altText));
    }
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}
