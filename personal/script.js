// // Find the Element with this ID and store it in a constant
// // document --> the webpage
// // getElementById() --> method that finds an element by its ID

const button = document.getElementById("myButton");
const title = document.getElementById("title");

// // Make the button act
// // button --> the html button element
// // addEventListener() --> method that listens for an event to happen
// // "click" --> the event we are listening for
// // function() { ... } --> the code to run when the event happens
// button.addEventListener("click", function() {
//     title.textContent = "You Clicked the button!"; // replace the text inside this element
//     button.textContent = "done!"; // change the button text
//     title.style.color = "blue";
// });

const button2 = document.getElementById("start-button");
const title2 = document.getElementById("title2");

//     title2.textContent = "You are ready to learn JavaScript!";
// })

// Outside the function remembers
// If inside the function resets every click
let isWelcome = true;

// if (condition) {
//     // do this
// } else {
//     // do that
// }

button.addEventListener("click", function() {
    if (isWelcome) {
        title.textContent = "Welcome to Javascript!";
        button.textContent = "In Progress";
        isWelcome = false;
    } else {
        title.textContent = "Welcome";
        button.textContent = "Start Learning";
        isWelcome = true;
    }
});

let darkMode = true;

button2.addEventListener("click", function () {
    if (darkMode) {
        title.textContent = "Dark Mode On";
        title.style.color = "white";
        title2.style.color = "white";
        document.body.style.backgroundColor = "black";
        darkMode = false;
    }
    else {
        title.textContent = "Light Mode On";
        title.style.color = "black";
        title2.style.color = "black";
        document.body.style.backgroundColor = "white";
        darkMode = true;
    }
});