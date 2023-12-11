

const addProductButton = document.getElementById("addProudct1");


addProductButton.addEventListener('click', function () {
    const formData = new FormData(document.getElementById('myForm'));

    formData.forEach(function (value, key) {
        // console.log(key + ": " + value);
        alert(key + ": " + value);
    });
    
 
    // Rest of your code...
    
    const apiUrl = 'https://localhost:7189/InsertProduct';

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
            // Handle successful response from the API
            console.log('Success:', data);
            // You might want to do something with the success response
        })
        .catch(error => {
            // Handle errors
            // console.error('Error:', error);
            alert(error);
        });
});
