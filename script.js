function submitForm() {
    const form = document.getElementById('bookingForm');
    const resultDiv = document.getElementById('bookingResult');
    
    resultDiv.innerHTML = `<p>Booking successful! Thank you, ${form.name.value}!</p>`;
    
    form.reset();
}
