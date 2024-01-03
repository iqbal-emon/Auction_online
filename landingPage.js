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
            // console.log(getName.value);
            let flag=0;
            let counter=0;
            localStorage.setItem('isLoggedIn', 'false');
            data.forEach(element => {
counter++;

                if(element.username===getName.value&&element.password===getpassword.value&&element.flag==""){
                    const id=element.userID;
                   // Set userId in session storage
    var userId = element.userID; // Replace with your actual userId
    localStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userId', userId);
                     window.location.href = './productShow.html';

                }
                else if(element.username===getName.value&&element.password===getpassword.value&&element.flag=="1"){
                    document.getElementById("loginFailed").textContent="Banned By Admin";
                    document.getElementById("loginFailed").style.color="red";
                }
                else{
                    // alert("not successfull");
                flag++;
                }
                
            });
            if(flag===counter)
            {
    // localStorage.setItem('isLoggedIn', 'false');

                document.getElementById("loginFailed").textContent="Incorrect Information";
                document.getElementById("loginFailed").style.color="red";

            }
          
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});