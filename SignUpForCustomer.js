const SignUpBtn = document.getElementById("signUP");

SignUpBtn.addEventListener('click', function (event) {
    // alert("clicked the btn");

    const formData = new FormData(document.getElementById('myForm'));
   

    formData.forEach(function (value, key) {
        // console.log(key + ": " + value);
        alert(key + ": " + value);
    });

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
        window.location.href = 'http://127.0.0.1:5500/LogInForCustomer.html';
        // Handle successful response from the API
        alert("successful");
        // You might want to do something with the success response
    })
    .catch(error => {
        // Handle errors
        // console.error('Error:', error);
        alert("Please Give Your Information Correctly");
    });
});
