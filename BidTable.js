document.addEventListener('DOMContentLoaded', function () {
    const itemID4 = sessionStorage.getItem('selectedProduct');
    const CustomerID = sessionStorage.getItem('CustomerID');
    document.getElementById("userId").value = CustomerID;
    document.getElementById("userId1").value = itemID4;
    // Get the hidden input field
    const auctionStartDateInput = document.getElementById('auctionStartDate');
    var tbody = document.createElement('tbody');
    // Set the value to the current date and time
    const currentDate = new Date();
    auctionStartDateInput.value = currentDate.toISOString(); // You can format this date as needed

    fetch(`https://localhost:7189/Home/Item/${itemID4}`)
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

            document.getElementById("price").innerHTML = data[0].reservePrice; // Corrected property name
            let image1 = document.getElementById("image1");
            image1.src = 'data:image/png;base64,' + data[0].imageField; // Corrected property name
            document.getElementById("title").innerHTML = data[0].title; // Corrected property name

            const biit = document.getElementById("biit");
            biit.addEventListener('click', () => {
                tbody.innerHTML=null;
                const formData = new FormData(document.getElementById('myForm'));
                formData.forEach(function (value, key) {
                    alert(key + ": " + value);
                });

                const apiUrl = 'https://localhost:7189/Home/BidInsert';

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
                        alert("successful");
                        // console.log(CustomerID);

                        fetch(`https://localhost:7189/Home/GetBids/${itemID4}`)
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
                        console.log(CustomerID);

                                data.sort((a, b) => b.amount - a.amount);
                                data.forEach(item => {
                                   
                                    var tr = document.createElement('tr');
                                    tr.setAttribute('id', 'tr1');

                                    var tdTitle = document.createElement('td');
                                    tdTitle.setAttribute('id', 'title');

                                    var tdDescription = document.createElement('td');
                                    tdDescription.setAttribute('id', 'Description');

                                    var tdEndTime = document.createElement('td');
                                    tdEndTime.setAttribute('id', 'EndTime');
                                    tdTitle.textContent = item.customerID;
                                    tdDescription.textContent = item.amount; // Fix this line
                                    tdEndTime.textContent = item.bidTime;

                                    tr.appendChild(tdDescription);
                                    tr.appendChild(tdEndTime);
                                    tr.appendChild(tdTitle);

                                    tbody.appendChild(tr);

                                    document.getElementById('myTable').appendChild(tbody);
                                });
                                
                                
                            })
                            .catch(error => {
                                console.error('Error fetching bids:', error);
                            });
                    })
                    .catch(error => {
                        alert("Please give your information correctly");
                    });
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
