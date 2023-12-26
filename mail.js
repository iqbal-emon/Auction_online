
//Please Subscribe Ash_is_Coding.

function sendOTP(){
    const email = document.getElementById('email');
   


    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>This is from Auction Online</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "ihemon281@gmail.com",
        Password : "D03C60852DE1F959DD951E6B17724810AB50",
        To : email.value,
        From : "ihemon281@gmail.com",
        Subject : "This is the subject",
        Body : emailbody
    }).then(
        //if success it returns "OK";
      message => {
        alert("hello");
        if(message === "OK"){
            alert("OTP sent to your email "+email.value);
            var userInput = window.prompt("Please enter your input:");
            alert(userInput);
        

                // now check whether sent email is valid
                if(userInput == otp_val){
                    alert("Email address verified...");
                }
                else{
                    alert("Invalid OTP");
                }
        
        }
      }
    );
   

}