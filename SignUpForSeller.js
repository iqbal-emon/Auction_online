const SingUpBtn = document.getElementById("signUP");


SingUpBtn.addEventListener('click', function () {
    // alert("clicked the btn");
   
    const formData = new FormData(document.getElementById('myForm'));
    formData.forEach(function (value, key) {
        // console.log(key + ": " + value);
        alert(key + ": " + value);
    });
    
 
    // Rest of your code...
    
    const apiUrl = 'https://localhost:7189/InsertLogin';

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
            window.location.href = './loginPage.html'
            // Handle successful response from the API
            console.log('Success:', data);
            // You might want to do something with the success response
        })
        .catch(error => {
            // Handle errors
            // console.error('Error:', error);
            alert("Please Give Your Information Correctly");
        });
      
});