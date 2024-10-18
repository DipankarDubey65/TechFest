document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const mentor = document.getElementById('mentor').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    const confirmationMessage = `Thank you, ${name}. Your session with ${mentor} on ${date} at ${time} has been booked.`;
    
    document.getElementById('confirmation').innerText = confirmationMessage;

    // Reset form after submission
    document.getElementById('booking-form').reset();
});
