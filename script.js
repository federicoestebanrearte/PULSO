// newsletter subscription functionality

function subscribeNewsletter(email) {
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        console.error('Invalid email format');
        return;
    }

    // Simulate a subscription request
    console.log(`Subscribing ${email} to the newsletter...`);

    // Here you would typically use fetch or another method to send the email to your server
    // For demonstration, we're just logging the email
    // fetch('/subscribe', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify({ email }),
    // })
    // .then(response => {
    //     if (response.ok) {
    //         console.log('Subscription successful!');
    //     } else {
    //         console.error('Subscription failed.');
    //     }
    // })
    // .catch(error => console.error('Error:', error));
}

// Example usage
subscribeNewsletter('test@example.com');