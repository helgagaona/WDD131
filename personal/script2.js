const button = document.getElementById("button");
const h1 = document.getElementById("h1");
const h2 = document.getElementById("h2");
const p = document.getElementById("p");

let status = "idle"; 
let progress = 0;
console.log(status);
console.log(progress);

button.addEventListener("click", function() {
    if (status === "idle") {
        h2.textContent = "Status: Learning";
        p.textContent = "You are currently learning Javascript";
        button.textContent = "Pause";
        document.body.style.backgroundColor = "lightgreen";
        status = "learning";
        progress += 10;
        console.log(status);
        console.log(progress);
    }
    else if (status === "learning") {
        h2.textContent = "Status: Paused";
        p.textContent = "Take a break!";
        button.textContent = "Resume";
        document.body.style.backgroundColor = "lightyellow";
        status = "paused";
        console.log(status);
    }
    else if (status === "paused") {
        h2.textContent = "Status: Learning";
        p.textContent = "Welcome Back!";
        button.textContent = "Pause";
        document.body.style.backgroundColor = "lightgreen";
        progress += 10;
        if (progress === 100) {
            status = "completed";
        } else if (progress > 100) {
            status = "learning";
        console.log(status);
        console.log(progress);
    }
    else if (status === "completed") {
        if (progress === 100) {
            h2.textContent = "Status: Completed";
            p.textContent = "You have completed the lesson!";
            button.textContent = "Restart";
            document.body.style.backgroundColor = "lightblue";
            status = "idle";
            console.log(status);
            console.log(progress);
        }
    }
});