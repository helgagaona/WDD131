const themeSelector = document.querySelector("#mode"); // Selecting the dropdown

function changeTheme() {
    // Check which option is selected
    if (themeSelector.value === "dark") {
        document.body.classList.add("dark"); // Add dark class
        document.querySelector(".logo").src = "byui-logo_white.webp"; // Change logo to white logo
    } else {
        document.body.classList.remove("dark"); // Remove dark class
        document.querySelector(".logo").src = "byui-logo_blue.webp"; // Change logo to blue logo
    }
}

// Add event listener to the dropdown
themeSelector.addEventListener('change', changeTheme);
