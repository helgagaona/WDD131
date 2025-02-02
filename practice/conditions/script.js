// Get references to the paragraph and button
const text = document.getElementById('text');
const button = document.getElementById('colorButton');

// Add an event listener to the button
button.addEventListener('click', () => {
  // Change the text color to blue when the button is clicked
  text.style.color = 'blue';
});
