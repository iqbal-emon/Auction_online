// Declare otp_val outside the event listener
let otp_val;

const SignUpBtn = document.getElementById("signUP");

SignUpBtn.addEventListener('click', function (event) {
    const email = document.getElementById('email');
    
    // Generate OTP
    otp_val = Math.floor(Math.random() * 10000);

    let emailbody = `
    <h1>This is from Auction Online</h1> <br>
    <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        secureToken: "1dac2fb7-7961-4387-be10-5a85bca0d7fa",
        Host: "smtp.elasticemail.com",
        Username: "ihemon281@gmail.com",
        Password: "74A5FBDCC3867A2BF366FAC4B8CE217D9E59",
        To: email.value,
        From: "ihemon281@gmail.com",
        Subject: "This is your OTP",
        Body: emailbody
    }).then(message => {
        if (message === "OK") {
            // alert("OTP sent to your email " + email.value);
            document.getElementById("modalText").textContent="OTP sent to: " + email.value;
            // Display the modal
            $('#myModal').modal('show');
        } else {
            alert("Error sending OTP");
        }
    });
});

// Function to handle the OK button click for the dynamic modal
function handleOK() {
    let userInput = document.getElementById("inputValue").value;

    // Check whether the entered OTP is valid
    if (userInput == otp_val) {
        // Close the modal
        $('#myModal').modal('hide');

        const formData = new FormData(document.getElementById('myForm'));
        event.preventDefault();

        const apiUrl = 'https://localhost:7189/InsertLogin1';

        // Send data to the API
        fetch(apiUrl, {
            method: 'POST',
            body: formData,
        })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            alert("SignUp Successful");
            window.location.href = 'http://127.0.0.1:5500/LogInForCustomer.html';
        })
        .catch(error => {
            alert("Email and Username already exists or check input field");
        });
    } else {
        alert("Invalid OTP");
    }
}

// Function to close the modal
function closeDynamicModal() {
    $('#myModal').modal('hide');
}
