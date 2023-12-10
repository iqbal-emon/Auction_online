var logInSubmit = document.getElementById("logSubmit");
var getName=document.getElementById("username");
var getpassword=document.getElementById("password");


logInSubmit.addEventListener('click', function () {
    fetch('https://localhost:7189/GetAllDetails')
        .then(response => {
            console.log("Raw Response:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json(); // assuming the response is in JSON format
        })
        .then(data => {
            console.log("Data received successfully:");
            console.log(data);
            console.log(getName.value);
            data.forEach(element => {
                if(element.username===getName.value&&element.password===getpassword.value){
                     window.location.href = './displayProduct.html';

                }
                else{
                    alert("not successfull");
                
                }
                
            });
          
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});