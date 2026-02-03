// Get the element
const myElement = document.getElementById("myElement");
const button = document.getElementById("button");

button.addEventListener("click", function () {
    myElement.classList.remove("highlight");
    myElement.classList.add("pink");
});
