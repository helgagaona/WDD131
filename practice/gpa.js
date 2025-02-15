// Function to get grades from input
function getGrades(inputSelector) {
    // Get the value from the input box
    const input = document.querySelector(inputSelector).value;
    // Split string into an array, clean spaces, and convert to uppercase
    const grades = input.split(',').map(grade => grade.trim().toUpperCase());
    return grades;
  }
  
  // Function to lookup GPA points for a grade
  function lookupGrade(grade) {
    const gradePoints = {
      A: 4.0,
      B: 3.0,
      C: 2.0,
      D: 1.0,
      F: 0.0
    };
    return gradePoints[grade] || 0;  // Default to 0 if the grade is invalid
  }
  
  // Function to calculate GPA
  function calculateGpa(grades) {
    // Map grades to GPA points and calculate total
    const totalPoints = grades.reduce((acc, grade) => acc + lookupGrade(grade), 0);
    // Calculate GPA by dividing total points by number of grades
    const gpa = totalPoints / grades.length;
    // Return GPA rounded to 2 decimal places
    return gpa.toFixed(2);
  }
  
  // Function to output GPA in HTML
  function outputGpa(gpa, selector) {
    // Find the element and display the GPA
    document.querySelector(selector).textContent = `Your GPA is: ${gpa}`;
  }
  
  // Click handler function
  function clickHandler() {
    // Get the grades from the input field
    const grades = getGrades("#grades");
    // Calculate the GPA
    const gpa = calculateGpa(grades);
    // Output the GPA to the browser
    outputGpa(gpa, "#output");
  }
  
  // Add event listener to the button
  document.querySelector("#submitButton").addEventListener("click", clickHandler);
  