document.addEventListener("DOMContentLoaded", () => {
    const selectElem = document.getElementById("webdevlist");
    const titleElem = document.getElementById("topic-title");
    const listElem = document.getElementById("topic-list");

    const content = {
        html: {
            title: "HyperText Markup Language",
            items: [
                "Defines the structure and content of a web page.",
                "Without HTML there's nothing for the browser to display."
            ]
        },
        css: {
            title: "Cascading Style Sheets",
            items: [
                "Controls how the HTML elements look.",
                "Without CSS pages look plain and unstyled."
            ]
        },
        js: {
            title: "JavaScript",
            items: [
                "Adds interactivity and dynamic behavior.",
                "Without JavaScript nothing on the page responds dynamically to user actions."
            ]
        }
    };

    selectElem.addEventListener("change", () => {
        const value = selectElem.value;

        if (!content[value]) return;

        titleElem.textContent = content[value].title;
        listElem.innerHTML = "";

        content[value].items.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item;
            listElem.appendChild(li);
        });
    });
});



const PI = 3.14;
let radius = 3;
                  
const one = 1;
const two = '2';
                    
let course = "CSE131"; //global scope
if (true) {
    let student = "John";
    console.log(course);  //works just fine, course is global
    console.log(student); //works just fine, it's being accessed within the block
}
console.log(course); //works fine, course is global
console.log(student); //does not work, can't access a block variable outside the block
                

     
                
                    