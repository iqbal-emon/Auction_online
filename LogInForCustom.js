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
            // console.log(data);
            let flag=0;
            let counter=0;
    // localStorage.setItem('isLoggedIn1', 'false');

            // console.log(getName.value);
            data.forEach(element => {
counter++;

                if(element.username===getName.value&&element.password===getpassword.value&&element.flag==""){
                    const id=element.customerID;
                //  alert(id);
    var CustomerID = element.customerID; // Replace with your actual userId
    sessionStorage.setItem('CustomerID', CustomerID);
    // var userName=element.username;
    localStorage.setItem('userName',element.username);
    localStorage.setItem('imageFied',element.imageField);

    // alert(localStorage.getItem('userName'));
    localStorage.setItem('isLoggedIn1', 'true');
    let status1 = localStorage.getItem('isLoggedIn1');
    // alert(status1);
    

                     window.location.href = './dashboardOfCustomer.html';

                }
                else if(element.username===getName.value&&element.password===getpassword.value&&element.flag=="1"){
                    document.getElementById("loginFailed").textContent="Banned By Admin";
                    document.getElementById("loginFailed").style.color="red";
                }
                else{
                    // alert("not successfull");
                flag++;

                
                }
                if(flag===counter)
                {
        // localStorage.setItem('isLoggedIn', 'false');
    
                    document.getElementById("loginFailed").textContent="Incorrect Information";
                    document.getElementById("loginFailed").style.color="red";
    
                }
              
            });
          
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});