// arrays.js

// Activity 1 - Map: Convert steps array to list items
const steps = ["one", "two", "three"];

// Template function to convert a step to a list item
function listTemplate(step) {
  return `<li>${step}</li>`;
}

// Use map to convert the array to HTML list items
const stepsHtml = steps.map(listTemplate).join(''); // Fixing join() usage

// Set the innerHTML of the myList element to the list items
document.querySelector("#myList").innerHTML = stepsHtml;


// Activity 2 - Map: Convert letter grades to GPA points
const grades = ['A', 'B', 'A'];

// Conversion function from letter grade to GPA points
function gradeToGpa(grade) {
  if (grade === 'A') return 4;
  if (grade === 'B') return 3;
  if (grade === 'C') return 2;
  if (grade === 'D') return 1;
  return 0; // For 'F'
}

// Use map to convert grades to GPA points
const gpaPoints = grades.map(gradeToGpa);
console.log(gpaPoints); // [4, 3, 4]


// Activity 3 - Reduce: Calculate GPA
const gpa = gpaPoints.reduce((acc, curr) => acc + curr, 0) / gpaPoints.length;
console.log(gpa); // 3.666... (Average GPA)


// Activity 4 - Filter: Keep fruits with less than 6 characters
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

// Use filter to keep fruits with less than 6 characters
const smallFruits = fruits.filter(fruit => fruit.length < 6);
console.log(smallFruits); // ['peach', 'apple', 'grape']


// Activity 5 - indexOf: Find if luckyNumber is in the array
const numbers = [12, 34, 21, 54];
const luckyNumber = 21;

// Use indexOf to check if luckyNumber is in the array
const index = numbers.indexOf(luckyNumber);
console.log(index); // 2 (21 is at index 2 in the array)
