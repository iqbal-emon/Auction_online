var userId = sessionStorage.getItem('userId');
console.log('UserId:', userId);

// Get the value of the 'id' query parameter from the URL
var userId = sessionStorage.getItem('userId');
// alert(userId);
let userId1=document.getElementById("userId");
userId1.value=userId;
const addProductButton = document.getElementById("addProudct1");
const startDateTimeInput = document.getElementById('auctionStartDate');
const endDateTimeInput = document.getElementById('auctionEndDate');
const isLoggedIn = localStorage.getItem('isLoggedIn');
alert(isLoggedIn);
if (!isLoggedIn || isLoggedIn !== 'true') {
    // Redirect to the login page if not logged in
    window.location.href = './loginPage.html';
} else {
startDateTimeInput.addEventListener('input', function () {
    // Set the minimum value of the end date input to be greater than the start date
    endDateTimeInput.min = startDateTimeInput.value;
    
    
});

addProductButton.addEventListener('click', function (event) {
    const formData = new FormData(document.getElementById('myForm'));
   event.preventDefault();
    // formData.forEach(function (value, key) {
    //     // console.log(key + ": " + value);
    //     alert(key + ": " + value);
    // });
    
 
    // Rest of your code...
    
    const apiUrl = 'https://localhost:7189/Home/ProductInsert';

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
            window.location.href = 'http://127.0.0.1:5500/productShow.html';
            // You might want to do something with the success response
        })
        .catch(error => {
            // Handle errors
            // console.error('Error:', error);
            alert(error);
        });
});
}