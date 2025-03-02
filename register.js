document.addEventListener("DOMContentLoaded", () => {
    let participantCount = 1; // Keep track of the number of participants
  
    // Add event listener for "Add Participant" button
    const addButton = document.getElementById("add");
    addButton.addEventListener("click", () => {
      participantCount++;
      const newParticipant = createParticipantSection(participantCount);
      document.querySelector(".participants").insertBefore(newParticipant, addButton);
    });
  
    // Add event listener for form submission
    const form = document.querySelector("form");
    form.addEventListener("submit", submitForm);
  });
  
  // Function to handle form submission
  function submitForm(event) {
    event.preventDefault(); // Prevent the default form submission (page reload)
  
    // Get all fee input elements (these should have ids like "fee1", "fee2", etc.)
    const feeElements = document.querySelectorAll("[id^=fee]");
  
    // Calculate the total fees by summing the values of the fee inputs
    const totalFees = Array.from(feeElements).reduce((total, feeInput) => {
      const fee = parseFloat(feeInput.value) || 0; // If the fee value is not a number, treat it as 0
      return total + fee;
    }, 0);
  
    // Get the adult's name (from the primary contact form)
    const adultName = document.getElementById("adult_name").value;
  
    // Count the number of participants by counting sections
    const participantCount = document.querySelectorAll(".participants section").length;
  
    // Prepare the summary message
    const summaryMessage = `Thank you ${adultName} for registering. You have registered ${participantCount} participants and owe $${totalFees.toFixed(2)} in Fees.`;
  
    // Insert the message into the summary section
    const summarySection = document.getElementById("summary");
    summarySection.innerHTML = `<p>${summaryMessage}</p>`;
  
    // Hide the form and show the summary
    document.querySelector("form").style.display = "none";
    summarySection.style.display = "block";
  }
  
  // Function to create a new participant section
  function createParticipantSection(count) {
    const section = document.createElement("section");
    section.className = `participant${count}`;
    section.innerHTML = `
      <p>Participant ${count}</p>
      <div class="item">
          <label for="fname${count}"> First Name<span>*</span></label>
          <input id="fname${count}" type="text" name="fname${count}" required />
      </div>
      <div class="item activities">
          <label for="activity${count}">Activity #<span>*</span></label>
          <input id="activity${count}" type="text" name="activity${count}" />
      </div>
      <div class="item">
          <label for="fee${count}">Fee ($)<span>*</span></label>
          <input id="fee${count}" type="number" name="fee${count}" />
      </div>
      <div class="item">
          <label for="date${count}">Desired Date <span>*</span></label>
          <input id="date${count}" type="date" name="date${count}" />
      </div>
      <div class="item">
          <p>Grade</p>
          <select name="grade${count}">
              <option selected value="" disabled></option>
              <option value="1">1st</option>
              <option value="2">2nd</option>
              <option value="3">3rd</option>
              <option value="4">4th</option>
              <option value="5">5th</option>
              <option value="6">6th</option>
              <option value="7">7th</option>
              <option value="8">8th</option>
              <option value="9">9th</option>
              <option value="10">10th</option>
              <option value="11">11th</option>
              <option value="12">12th</option>
          </select>
      </div>
    `;
    return section;
  }
  