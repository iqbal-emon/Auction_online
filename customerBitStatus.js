// alert("hello");
const isLoggedIn = localStorage.getItem('isLoggedIn1');
if (!isLoggedIn || isLoggedIn !== 'true') {

    // Redirect to the login page if not logged in
    window.location.href = './logInForCustomer.html';
  }
  else{
CustomerID1=sessionStorage.getItem('CustomerID');
// alert(CustomerID1);
fetch(`https://localhost:7189/Home/Win/${CustomerID1}`)
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

         
            data1.forEach((data, index) => {


                let inputDate = new Date();
                            
                const year = inputDate.getFullYear();
                const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
                const day = inputDate.getDate().toString().padStart(2, '0');
                const hours = inputDate.getHours().toString().padStart(2, '0');
                const minutes = inputDate.getMinutes().toString().padStart(2, '0');
                const seconds = inputDate.getSeconds().toString().padStart(2, '0');
                
                const outputDateString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;

                if(data.endTime<outputDateString){
               
               // Create tbody element
var tbody = document.createElement('tbody');

// Create tr element with id "tr1"
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr1');
var ItemId = document.createElement('td');
ItemId.setAttribute('id', 'ItemId');

var tdReserverPrice = document.createElement('td');
tdReserverPrice.setAttribute('id', 'ReserverPrice');

var tdStartTime = document.createElement('td');
tdStartTime.setAttribute('id', 'StartTime');
tdStartTime.textContent=data.bidTime;

var tdEndTime = document.createElement('td');
tdEndTime.setAttribute('id', 'EndTime');
var paymentbtn = document.createElement('button');
paymentbtn.setAttribute('class', 'btn btn-primary');
paymentbtn.textContent="payment";
paymentbtn.style.marginTop = '4px';

ItemId.textContent=data.title;
tdReserverPrice.textContent=data.amount;
// Append td elements to tr element
// tr.appendChild(th);
tr.appendChild(ItemId);

tr.appendChild(tdReserverPrice);

tr.appendChild(tdStartTime);
tr.appendChild(paymentbtn);





// Append tr element to tbody element
tbody.appendChild(tr);

// Append tbody element to an existing table with id "myTable"
document.getElementById('myTable').appendChild(tbody);


            
                // You can perform additional operations or DOM manipulations here if needed
            }
            });
        
        });
    }