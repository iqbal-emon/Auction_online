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
            // alert(data);
            // console.log(getName.value);
            let flag=0;
            let counter=0;
            localStorage.setItem('isLoggedIn', 'false');
            data.forEach(element => {
counter++;

                if(element.username===getName.value&&element.password===getpassword.value){
                    const id=element.userID;
                   // Set userId in session storage
    var userId = element.userID; // Replace with your actual userId
    localStorage.setItem('isLoggedIn', 'true');
    sessionStorage.setItem('userId', userId);
                     window.location.href = './productShow.html?id='+encodeURIComponent(id);

                }
                else{
                    // alert("not successfull");
                flag++;
                }
                
            });
            if(flag===counter)
            {
    // localStorage.setItem('isLoggedIn', 'false');

                document.getElementById("loginFailed").textContent="Incorrect Password";
            }
          
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});