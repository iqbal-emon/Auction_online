const isLoggedIn = localStorage.getItem('isLoggedIn1');
if (!isLoggedIn || isLoggedIn !== 'true') {
    window.location.href = './logInForCustomer.html';
} else {
    let hel;
    CustomerID1 = sessionStorage.getItem('CustomerID');

    fetch(`https://localhost:7189/Home/Win/${CustomerID1}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data1 => {
            console.log("Data received successfully:", data1);

            data1.forEach((data, index) => {
                let inputDate = new Date();
                const year = inputDate.getFullYear();
                const month = (inputDate.getMonth() + 1).toString().padStart(2, '0');
                const day = inputDate.getDate().toString().padStart(2, '0');
                const hours = inputDate.getHours().toString().padStart(2, '0');
                const minutes = inputDate.getMinutes().toString().padStart(2, '0');
                const seconds = inputDate.getSeconds().toString().padStart(2, '0');
                const outputDateString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

                if (data.endTime < outputDateString) {
                    var tbody = document.createElement('tbody');
                    var tr = document.createElement('tr');
                    tr.setAttribute('id', 'tr1');
                    var ItemId = document.createElement('td');
                    ItemId.setAttribute('id', 'ItemId');
                    var tdReserverPrice = document.createElement('td');
                    tdReserverPrice.setAttribute('id', 'ReserverPrice');
                    var otp1 = document.createElement('td');
                    otp1.setAttribute('id', 'otp1');
                    var tdStartTime = document.createElement('td');
                    tdStartTime.setAttribute('id', 'StartTime');
                    tdStartTime.textContent = data.bidTime;
                    var tdEndTime = document.createElement('td');
                    tdEndTime.setAttribute('id', 'EndTime');
                    var paymentbtn = document.createElement('button');
                    paymentbtn.setAttribute('class', 'btn btn-secondary');
                    paymentbtn.textContent = "payment";
                    paymentbtn.style.marginTop = '4px';
                    paymentbtn.addEventListener('click', function () {
                        localStorage.setItem('PaymentItem', data.itemID);
                        localStorage.setItem('productName', data.title);

                        localStorage.setItem('Amount', data.amount);
                   location.href='./payment.html';

                     
                       
                    });
                    fetch("https://localhost:7189/GetCustomersDetails")
                    .then(response => {
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json();
                    })
                    .then(data1 => {
                        console.log(data1);
                        // alert(data.itemID);
                        data1.forEach(element => {
                            if (element.itemID == data.itemID) {
                                otp1.textContent = element.otp;
                                // paymentbtn.style.display = 'none';
                                tr.appendChild(otp1);
                                paymentbtn.style.display='none';
                            }
                        });
                        // Move the location.href outside the forEach loop
                    })
                    .catch(error => {
                        console.error("Error fetching details:", error);
                    });
                    // location.href = './payment.html';
                    ItemId.textContent = data.title;
                    tdReserverPrice.textContent = data.amount;

                    tr.appendChild(ItemId);
                    tr.appendChild(tdReserverPrice);
                    tr.appendChild(tdStartTime);
                    tr.appendChild(otp1);
                    tr.appendChild(paymentbtn);

                    tbody.appendChild(tr);
                    document.getElementById('myTable').appendChild(tbody);
                }
            });
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
}
