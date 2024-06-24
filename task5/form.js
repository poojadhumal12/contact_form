function validatePhoneNumber() {
    
    const phoneNumber = document.getElementById('Mbnumber').value.trim();
    const pattern = /^\d{10}$/;

    // Validate phone number and update message
    const isValid = pattern.test(phoneNumber);
    document.getElementById('phoneValidationMsg').textContent = isValid ? '' : 'Please enter a valid 10-digit phone number.';

    return isValid;
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('contactForm').addEventListener('submit', function(event) {
        if (!validatePhoneNumber()) {
            event.preventDefault(); 
        }
         else {
            alert('Form successfully submitted!');
        }
    });
});
