// Uncomment the alert and const isLoggedIn if needed
// alert("hello");
// const isLoggedIn = localStorage.getItem('isLoggedIn1');
// if (!isLoggedIn || isLoggedIn !== 'true') {
//     window.location.href = './logInForCustomer.html';
// } else {

// Uncomment the CustomerID1 lines if needed
// CustomerID1 = sessionStorage.getItem('CustomerID');
// alert(CustomerID1);

const isLoggedIn = localStorage.getItem('isLoggedIn3');

if (!isLoggedIn || isLoggedIn !== 'true') {
    window.location.href = './AdminLogin.html';
} else {
    fetch("https://localhost:7189/GetAllDetails1")
        .then(response => {
            console.log("Raw Response:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json();
        })
        .then(data1 => {
            console.log("Data received successfully:");
            console.log(data1);

            // Create tbody element outside the forEach loop
            var tbody = document.createElement('tbody');

            data1.forEach((data, index) => {
                var emailButton = document.createElement('button');
                emailButton.setAttribute('id', 'Email');
                emailButton.style.width='100px';
                // Set text content and class based on the flag value
                emailButton.textContent = data.flag === '1' ? 'Unbanned' : 'Banned';
                emailButton.classList.add('btn', data.flag === '1' ? 'btn-danger' : 'btn-primary');

                emailButton.addEventListener('click', function () {
                    // Capture the current value of emailButton in a closure
                    var currentEmailButton = emailButton;

                    if (currentEmailButton.textContent === 'Banned') {
                        // Block the user
                        fetch(`https://localhost:7189/customerBlock?CustomerID=${data.customerID}`, {
                            method: 'GET',
                        })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error! Status: ${response.status}`);
                                }
                                return response.text();
                            })
                            .then(data1 => {
                                console.log(data1);
                                currentEmailButton.textContent = 'Unbanned';
                                currentEmailButton.classList.remove('btn-primary');
                                currentEmailButton.classList.add('btn-danger');
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                // Handle errors
                            });
                    } else if (currentEmailButton.textContent === 'Unbanned') {
                        // Unblock the user
                        fetch(`https://localhost:7189/customerUnblock/${data.customerID}`, {
                            method: 'GET',
                        })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error! Status: ${response.status}`);
                                }
                                return response.text();
                            })
                            .then(data2 => {
                                console.log(data2);
                                currentEmailButton.textContent = 'Banned';
                                currentEmailButton.classList.remove('btn-danger');
                                currentEmailButton.classList.add('btn-primary');
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                // Handle errors
                            });
                    }
                });

                // Create a new button (Another Action)
                var anotherButton = document.createElement('button');
                anotherButton.setAttribute('id', 'AnotherButton1');
                anotherButton.style.width='100px';

                anotherButton.textContent = data.flag2 === '1' ? 'Unbanned' : 'Banned';
                anotherButton.classList.add('btn', data.flag2 === '1' ? 'btn-danger' : 'btn-primary');
                anotherButton.addEventListener('click', function () {
                    // Capture the current value of anotherButton in a closure
                    var currentAnotherButton = anotherButton;

                    // Your logic for AnotherButton click event
                    if (currentAnotherButton.textContent === 'Banned') {
                        // Your logic when AnotherButton is Banned
                        fetch(`https://localhost:7189/customerNotBid?CustomerID=${data.customerID}`, {
                            method: 'GET',
                        })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error! Status: ${response.status}`);
                                }
                                return response.text();
                            })
                            .then(data1 => {
                                console.log(data1);
                                currentAnotherButton.textContent = 'Unbanned';
                                currentAnotherButton.classList.remove('btn-primary');
                                currentAnotherButton.classList.add('btn-danger');
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                // Handle errors
                            });
                    } else if (currentAnotherButton.textContent === 'Unbanned') {
                        // Your logic when AnotherButton is Unbanned
                        fetch(`https://localhost:7189/customerNotBidUnblock/${data.customerID}`, {
                            method: 'GET',
                        })
                            .then(response => {
                                if (!response.ok) {
                                    throw new Error(`HTTP error! Status: ${response.status}`);
                                }
                                return response.text();
                            })
                            .then(data2 => {
                                console.log(data2);
                                currentAnotherButton.textContent = 'Banned';
                                currentAnotherButton.classList.remove('btn-danger');
                                currentAnotherButton.classList.add('btn-primary');
                            })
                            .catch(error => {
                                console.error('Error:', error);
                                // Handle errors
                            });
                    }
                });

                var tr = document.createElement('tr');
                tr.setAttribute('id', 'tr1');
                var Customer = document.createElement('td');
                Customer.setAttribute('id', 'Customer');
                Customer.textContent = data.customerID;

                var Username = document.createElement('td');
                Username.setAttribute('id', 'Username');
                Username.textContent = data.username;

                // var Password = document.createElement('td');
                // Password.setAttribute('id', 'Password');
                // Password.textContent = data.password;

                var Email = document.createElement('td');
                Email.setAttribute('id', 'Email');
                Email.textContent = data.email; // Assuming the email is available in your data

                var button1Column = document.createElement('td');
                button1Column.appendChild(emailButton);

                var button2Column = document.createElement('td');
                button2Column.appendChild(anotherButton);

                tr.appendChild(Customer);
                tr.appendChild(Username);
                // tr.appendChild(Password);
                tr.appendChild(Email);
                tr.appendChild(button1Column);
                tr.appendChild(button2Column);

                // Append tr element to tbody element
                tbody.appendChild(tr);
            });

            // Append tbody element to an existing table with id "myTable"
            document.getElementById('myTable').appendChild(tbody);
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle fetch errors
        });
}
