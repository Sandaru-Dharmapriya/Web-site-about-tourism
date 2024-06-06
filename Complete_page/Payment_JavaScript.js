const creditCardNumberInput = document.getElementById('creditCardNumber');
    const errorMsg = document.getElementById('errorMsg');

    creditCardNumberInput.addEventListener('input', () => {
        const cardNumber = creditCardNumberInput.value.replace(/\s|-/g, ''); // Remove existing spaces and dashes
        const formattedCardNumber = formatCardNumber(cardNumber);
        creditCardNumberInput.value = formattedCardNumber;
    });

    function formatCardNumber(cardNumber) {
        const groups = cardNumber.match(/\d{1,4}/g);
        return groups ? groups.join('-') : '';
    }

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const cardNumber = creditCardNumberInput.value.replace(/\s|-/g, ''); // Remove spaces and dashes from the submitted value
        if (cardNumber.length === 19 && /^\d+$/.test(cardNumber)) {
            // Perform form submission here
            alert('Form submitted successfully!');
        } else {
            errorMsg.textContent = 'Invalid card number';
        }
    });