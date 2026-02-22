// Gets the Form
const form = document.getElementById("cardForm-grid");

// Gets the error container
const errorContainer = document.getElementById("errorAlert");

// Displays error messages
function displayError(msg) {
    errorContainer.textContent = msg;
}

// Validates exact card number
function isCardNumberValid(number) {
    return number === '1234123412341234';
}
function clearForm() {
    form.reset();
}

// Form submit handler
form.addEventListener('submit', function(event) {
    event.preventDefault();
    displayError(''); // clear previous errors

    let errorMsg = '';

    // Get values
    const cardNumberInput = document.getElementById('cardNumber');
    const cardNumber = cardNumberInput.value.replace(/\s/g, ''); // remove spaces

    const expMonthInput = document.getElementById('expirationMonth');
    const expYearInput = document.getElementById('expirationYear');

    const expMonth = Number(expMonthInput.value);
    const expYear = Number(expYearInput.value);

    const currentDate = new Date();

    // Validate card number length & exact value
    if (!/^\d{16}$/.test(cardNumber)) {
        errorMsg += 'Card number must be 16 digits.\n';
    } else if (!isCardNumberValid(cardNumber)) {
        errorMsg += 'Card number is not valid.\n';
    }

    // Validate expiration date
    if (expMonth < 1 || expMonth > 12) {
        errorMsg += 'Expiration month is invalid.\n';
    } else if ((2000 + expYear) < currentDate.getFullYear() || 
               ((2000 + expYear) === currentDate.getFullYear() && expMonth <= (currentDate.getMonth() + 1))) {
        errorMsg += 'Card is expired.\n';
    }

    // Show errors if any
    if (errorMsg !== '') {
        errorContainer.classList.toggle("show")
        displayError(errorMsg);
        clearForm();
        return;
    }
    

    // Success: show confirmation message
    form.innerHTML = 
    `
    <div class="payed">
        <p>💵</p>
        <h2>Thank you! Payment successful.</h2>
    </div>
    `
    ;
});