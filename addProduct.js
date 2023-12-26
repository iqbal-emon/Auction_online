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
const allcategory=document.getElementById("allcategory");
fetch("https://localhost:7189/getCategory")
        .then(response => {
            console.log("Raw Response:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json(); // assuming the response is in JSON format
        })
        .then(data1 => {
        
            console.log("Data received successfully:");
            console.log(data1);

         
            data1.forEach((data, index) => {

                const allCategoryOption = document.createElement("option");
                allCategoryOption.id = data.categoryName;
                allCategoryOption.value = data.categoryName;
                allCategoryOption.textContent = data.categoryName;
                allcategory.appendChild(allCategoryOption);



            });
        });




let x=0;
const isLoggedIn = localStorage.getItem('isLoggedIn');
// alert(isLoggedIn);
if (!isLoggedIn || isLoggedIn !== 'true') {
    // Redirect to the login page if not logged in
    window.location.href = './loginPage.html';
} else {
startDateTimeInput.addEventListener('input', function () {
    // Set the minimum value of the end date input to be greater than the start date
    endDateTimeInput.min = startDateTimeInput.value;
    
    
});

fetch("https://localhost:7189/GetAllDetails", {
    method: 'GET',
})



    .then(response => {
        if (!response.ok) {
         
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
data.forEach((element) => {
    let isSuccessful = false;
    // alert(typeof(userId));
    // alert(typeof(element.userID));
    addProductButton.addEventListener('click', function (event) {
                if (element.userID === userId&&element.flag2=="") {
                   
                        isSuccessful = true;

   
  
            
            
            
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
                
               
                
            } 
       
                else if(element.userID === userId&&element.flag2=="1"){


                    window.location.href = 'http://127.0.0.1:5500/productShow.html';
                   event.preventDefault();
    
                   alert("You Blocked by Admin");
                }

            

            
            });
           
    
});

   
    });
   

}