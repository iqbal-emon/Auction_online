// alert("hello");
// const isLoggedIn = localStorage.getItem('isLoggedIn1');
// if (!isLoggedIn || isLoggedIn !== 'true') {
//   // Redirect to the login page if not logged in
//   window.location.href = './logInForCustomer.html';
// }
// else {
    const isLoggedIn = localStorage.getItem('isLoggedIn3');
    // alert(isLoggedIn);
    if (!isLoggedIn || isLoggedIn !== 'true') {
        // Redirect to the login page if not logged in
        window.location.href = './AdminLogin.html';
    } else {
        fetch("https://localhost:7189/GetAllDetails")
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
    
                data1.forEach((data, userID) => {
    
                    // Create tbody element
                    var tbody = document.createElement('tbody');
    
                    // Create tr element with id "tr1"
                    var tr = document.createElement('tr');
                    tr.setAttribute('id', 'tr1');
                    var Customer = document.createElement('td');
                    Customer.setAttribute('id', 'Customer');
                    Customer.textContent = data.userID;
    
                    let Username = document.createElement('td');
                    Username.setAttribute('id', 'Username');
                    Username.textContent = data.username;
                    // var Password = document.createElement('td');
                    // Password.setAttribute('id', 'Password');
                    // Password.textContent = data.password;
    
                    var Email = document.createElement('td');
                    Email.setAttribute('id', 'Email');
                    Email.textContent = data.email;
    
                    // Create a button element
                    var emailButton = document.createElement('button');
    
                    // Set button attributes
                    emailButton.setAttribute('id', 'Email');
                    emailButton.style.width='100px';
    
                    if (data.flag === '1') {
                        emailButton.textContent = 'Unbanned';
                        emailButton.classList.add('btn', 'btn-danger');
                    } else {
                        emailButton.textContent = 'Banned';
                        emailButton.classList.add('btn', 'btn-primary');
                    }
    
                    // Append the button to the document body or another container element
                    // document.body.appendChild(emailButton);
    
                    // Add a click event listener to the button
                    emailButton.addEventListener('click', function () {
                        if (emailButton.textContent === 'Banned') {
                            // Block the user
                            fetch(`https://localhost:7189/blockSeller?userID=${data.userID}`, {
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
                                    emailButton.textContent = 'Unbanned';
                                    emailButton.classList.remove('btn-primary');
                                    emailButton.classList.add('btn-danger');
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Handle errors
                                });
                        } else if (emailButton.textContent === 'Unbanned') {
                            // Unblock the user
                            fetch(`https://localhost:7189/unblock/${data.userID}`, {
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
                                    emailButton.textContent = 'Banned';
                                    emailButton.classList.remove('btn-danger');
                                    emailButton.classList.add('btn-primary');
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Handle errors
                                });
                        }
                    });
    
                    var emailButton2 = document.createElement('button');
    
                    // Set button attributes for the second button
                    emailButton2.setAttribute('id', 'Email2');
                    emailButton2.style.width='100px';

    
                    if (data.flag2 === '1') {
                        emailButton2.textContent = 'Unbanned';
                        emailButton2.classList.add('btn', 'btn-danger');
                    } else {
                        emailButton2.textContent = 'Banned';
                        emailButton2.classList.add('btn', 'btn-primary');
                    }
    
                    // Append the second button to the document body or another container element
                    // document.body.appendChild(emailButton2);
    
                    // Add a click event listener to the second button
                    emailButton2.addEventListener('click', function () {
                        if (emailButton2.textContent === 'Banned') {
                            // Block the user
                            fetch(`https://localhost:7189/blockSellerAdd?userID=${data.userID}`, {
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
                                    emailButton2.textContent = 'Unbanned';
                                    emailButton2.classList.remove('btn-primary');
                                    emailButton2.classList.add('btn-danger');
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Handle errors
                                });
                        } else if (emailButton2.textContent === 'Unbanned') {
                            // Unblock the user
                            fetch(`https://localhost:7189/UnblockSellerAdd/${data.userID}`, {
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
                                    emailButton2.textContent = 'Banned';
                                    emailButton2.classList.remove('btn-danger');
                                    emailButton2.classList.add('btn-primary');
                                })
                                .catch(error => {
                                    console.error('Error:', error);
                                    // Handle errors
                                });
                        }
                    });
    
                    // Append td elements to tr element
                    tr.appendChild(Customer);
                    tr.appendChild(Username);
                    // tr.appendChild(Password);
                    tr.appendChild(Email);
    
                    // Create a new td element for the first button
                    var button1Column = document.createElement('td');
                    // Append the first button to the first td element
                    button1Column.appendChild(emailButton);
                    // Append the first td element to the row
                    tr.appendChild(button1Column);
    
                    // Create a new td element for the second button
                    var button2Column = document.createElement('td');
                    // Append the second button to the second td element
                    button2Column.appendChild(emailButton2);
                    // Append the second td element to the row
                    tr.appendChild(button2Column);
    
                    // Append tr element to tbody element
                    tbody.appendChild(tr);
    
                    // Append tbody element to an existing table with id "myTable"
                    document.getElementById('myTable').appendChild(tbody);
                });
    
                // You can perform additional operations or DOM manipulations here if needed
            });
    }
    // }
    