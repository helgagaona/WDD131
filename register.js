import { participantTemplate, successTemplate } from './template.js';

let participantCount = 1; // Declare it once globally, this will track the number of participants

// Function to calculate the total fee
function totalFees() {
  let feeElements = document.querySelectorAll("[id^=fee]");
  feeElements = [...feeElements]; // Convert NodeList to Array
  return feeElements.reduce((total, feeElement) => {
    const fee = parseFloat(feeElement.value) || 0;
    return total + fee;
  }, 0);
}

// Get the button and form elements
const addButton = document.querySelector('#add');
const participantsSection = document.querySelector('.participants'); // The section containing participants
const form = document.querySelector('#registrationForm');
const summarySection = document.querySelector('#summary');

// Function to handle the click event for adding new participants
function handleAddButtonClick() {
  participantCount++; // Increment participant count to create a unique ID for the new participant
  const newParticipantHTML = participantTemplate(participantCount);
  participantsSection.insertAdjacentHTML('beforeend', newParticipantHTML); // Adds new participant at the end
}

// Add event listener to the Add button
addButton.addEventListener('click', handleAddButtonClick);

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault(); // Prevent the form from submitting

  // Get the adult name from the form
  const adultNameInput = document.querySelector('#adult_name');
  const adultName = adultNameInput ? adultNameInput.value.trim() : 'Unknown';

  // Get the total fee
  const total = totalFees();

  // Get the number of participants
  const participantSections = document.querySelectorAll('.participants section');
  const actualParticipantCount = participantSections.length;

  // Hide the form and show the summary
  form.style.display = 'none';
  summarySection.style.display = 'block';

  // Create summary info object
  const summaryInfo = {
    adultName: adultName,
    participantCount: actualParticipantCount,
    totalFees: total
  };

  // Display the summary message
  summarySection.innerHTML = successTemplate(summaryInfo);
}

// Add event listener for form submission
form.addEventListener('submit', handleFormSubmit);
