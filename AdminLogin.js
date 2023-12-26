var logInSubmit = document.getElementById("logSubmit1");
var getName=document.getElementById("username");
var getpassword=document.getElementById("password");


logInSubmit.addEventListener('click', function () {
    fetch('https://localhost:7189/admin/login')
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
    // localStorage.setItem('isLoggedIn1', 'false');

            // console.log(getName.value);
            data.forEach(element => {
                if(element.username===getName.value&&element.password===getpassword.value){
                //     const id=element.adminID;
                //  alert(id);
    var CustomerID1 = element.adminID; // Replace with your actual userId
    alert("customerID+"+CustomerID1);
    sessionStorage.setItem('CustomerID', CustomerID1);
    localStorage.setItem('isLoggedIn3', 'true');
    let status1 = localStorage.getItem('isLoggedIn3');
    alert("islog"+status1);
    

                     window.location.href = './sellerDetails.html'

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