const SignUpBtn = document.getElementById("signUP");

SignUpBtn.addEventListener('click', function (event) {
    const email = document.getElementById('email');
   
    
    let otp_val = Math.floor(Math.random()*10000);
    
    let emailbody = `
    <h1>This is from Auction Online</h1> <br>
    <h2>Your OTP is </h2>${otp_val}
    `;
    // alert(emailbody);
    
    
    Email.send({
        secureToken:"1dac2fb7-7961-4387-be10-5a85bca0d7fa",
        Host : "smtp.elasticemail.com",
        Username : "ihemon281@gmail.com",
        Password : "74A5FBDCC3867A2BF366FAC4B8CE217D9E59",
        To : email.value,
        From : "ihemon281@gmail.com",
        Subject : "This is your OTP",
        Body : emailbody
    }).then( message => {
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);
            var userInput = window.prompt("Please enter your input:");
            // alert(userInput);
        

                // now check whether sent email is valid
                if(userInput == otp_val){
                   // alert("clicked the btn");

    const formData = new FormData(document.getElementById('myForm'));
    event.preventDefault();
   

    // formData.forEach(function (value, key) {
    //     // console.log(key + ": " + value);
    //     alert(key + ": " + value);
    // });

    // Rest of your code...

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
        // Handle successful response from the API
        // alert("successful");
        // You might want to do something with the success response
    })
    .catch(error => {
        // Handle errors
        // console.error('Error:', error);
        alert("Email and Username already exists or check input field");
    });
                }
                else{
                    alert("Invalid OTP");
                }
        
        }
      }
    );
    // // alert("clicked the btn");

    // const formData = new FormData(document.getElementById('myForm'));
    // event.preventDefault();
   

    // formData.forEach(function (value, key) {
    //     // console.log(key + ": " + value);
    //     alert(key + ": " + value);
    // });

    // // Rest of your code...

    // const apiUrl = 'https://localhost:7189/InsertLogin1';

    // // Send data to the API
    // fetch(apiUrl, {
    //     method: 'POST',
    //     body: formData,
    // })
    // .then(response => {
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //     return response.text();
    // })
    // .then(data => {
    //     window.location.href = 'http://127.0.0.1:5500/LogInForCustomer.html';
    //     // Handle successful response from the API
    //     alert("successful");
    //     // You might want to do something with the success response
    // })
    // .catch(error => {
    //     // Handle errors
    //     // console.error('Error:', error);
    //     alert("Email and Username already exists or check input field");
    // });
});
