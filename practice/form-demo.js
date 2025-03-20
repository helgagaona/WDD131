// form-demo.js

function validateForm(event) {
    // Get a reference to the form
    const theForm = event.target;
  
    // Initialize error array and assume the form is valid
    const errors = [];
    let isValid = true;
  
    // Validation for payment method
    if (theForm.paymentMethod.value === "creditCard") {
      // Credit card validation for the specific value 1234123412341234
      if (theForm.creditCardNumber.value !== "1234123412341234") {
        isValid = false;
        errors.push("Invalid Credit Card Number");
      }
    }
  
    // Validation for full name, allowing only "Bob"
    if (theForm.fullName.value !== "Bob") {
      isValid = false;
      errors.push("Your name is not Bob");
    }
  
    // If any issues, prevent form submission and show errors
    if (!isValid) {
      event.preventDefault();
      showErrors(errors);
      return false;
    }
  }
  
  // Function to toggle payment details visibility based on selected payment method
  function togglePaymentDetails(e) {
    const theForm = document.querySelector("#checkoutForm");
  
    const creditCardContainer = document.getElementById("creditCardNumberContainer");
    const paypalContainer = document.getElementById("paypalUsernameContainer");
  
    // Hide both containers initially
    creditCardContainer.classList.add("hide");
    paypalContainer.classList.add("hide");
  
    // Disable required for hidden fields
    theForm.creditCardNumber.required = false;
    theForm.paypalUsername.required = false;
  
    // Show the appropriate payment method container
    if (theForm.paymentMethod.value === "creditCard") {
      creditCardContainer.classList.remove("hide");
      theForm.creditCardNumber.required = true;
    } else if (theForm.paymentMethod.value === "paypal") {
      paypalContainer.classList.remove("hide");
      theForm.paypalUsername.required = true;
    }
  }
  
  // Helper function to display errors
  function showErrors(errors) {
    const errorEl = document.querySelector(".errors");
    const html = errors.map((error) => `<p>${error}</p>`).join("");
    errorEl.innerHTML = html;
  }
  
  // Add event listeners
  document
    .querySelector("#paymentMethod")
    .addEventListener("change", togglePaymentDetails);
  
  document
    .querySelector("#checkoutForm")
    .addEventListener("submit", validateForm);
  