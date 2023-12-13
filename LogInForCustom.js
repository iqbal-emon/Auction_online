var logInSubmit = document.getElementById("logSubmit");
var getName=document.getElementById("username");
var getpassword=document.getElementById("password");


logInSubmit.addEventListener('click', function () {
    fetch('https://localhost:7189/GetAllDetails1')
        .then(response => {
            console.log("Raw Response:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json(); // assuming the response is in JSON format
        })
        .then(data => {
            console.log("Data received successfully:");
            // alert(data);
            console.log(data);
            // console.log(getName.value);
            data.forEach(element => {
                if(element.username===getName.value&&element.password===getpassword.value){
                    const id=element.customerID;
                 alert(id);
    var CustomerID = element.customerID; // Replace with your actual userId
    sessionStorage.setItem('CustomerID', CustomerID);

                     window.location.href = './dashboardOfCustomer.html?id='+encodeURIComponent(id);

                }
                else{
                    // alert("not successfull");
                
                }
                
            });
          
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});