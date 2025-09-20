let noButtonAttempts = 0;

function sendUserResponse(response, attempts) {
    const accessKey = '2c339084-6927-45d3-955b-8f0ab3f78448'; // Replace with your Web3Forms Access Key

    const data = {
        access_key: accessKey,
        subject: "User response has been submitted!",
        from_name: "Website Feedback",
        response: response
    };

    if (response === 'Yes' && attempts > 0) {
        data.response_details = `User selected 'Yes' after trying to select 'No' ${attempts} time(s).`;
    }

    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(async (response) => {
        let json = await response.json();
        if (json.success) {
            alert('Your response has been forwarded to the creator!');
            location.reload();
        } else {
            console.error('Submission failed:', json.message);
            alert('There was an error submitting your response.');
        }
    })
    .catch(error => {
        console.error('Error submitting form:', error);
        alert('There was an error submitting your response.');
    });
}

