// Activity 1 - Map
const steps = ["one", "two", "three"];

function listTemplate(step) {
  return `<li>${step}</li>`;
}

const stepsHtml = steps.map(listTemplate); // Apply listTemplate to each element
document.querySelector("#myList").innerHTML = stepsHtml.join(""); // Insert HTML into the list

// Activity 2 - Map
const grades = ["A", "B", "A"];

function convertGradeToPoints(grade) {
  if (grade === "A") return 4;
  if (grade === "B") return 3;
  return 0; // For other grades
}

const gpaPoints = grades.map(convertGradeToPoints);

// Activity 3 - Reduce
const pointsTotal = gpaPoints.reduce((total, item) => total + item, 0);
const gpa = pointsTotal / gpaPoints.length;
console.log("Calculated GPA: ", gpa); // You can check the GPA in the console

// Activity 4 - Filter
const words = ["watermelon", "peach", "apple", "tomato", "grape"];
const shortWords = words.filter(word => word.length < 6);
console.log("Short words: ", shortWords); // Check the filtered words in the console

// Activity 5 - indexOf
const myArray = [12, 34, 21, 54];
const luckyNumber = 21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log("Lucky number index: ", luckyIndex); // Check the index in the console
