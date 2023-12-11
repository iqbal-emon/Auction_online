

fetch('https://localhost:7189/Home/GetAllDetails')
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
         
            data.forEach(item => {
               // Create tbody element
var tbody = document.createElement('tbody');

// Create tr element with id "tr1"
var tr = document.createElement('tr');
tr.setAttribute('id', 'tr1');
var ItemId = document.createElement('td');
ItemId.setAttribute('id', 'ItemId');




// Create td elements with ids for other columns
var tdTitle = document.createElement('td');
tdTitle.setAttribute('id', 'title');

var tdDescription = document.createElement('td');
tdDescription.setAttribute('id', 'Description');

var tdCategory = document.createElement('td');
tdCategory.setAttribute('id', 'Category');

var tdReserverPrice = document.createElement('td');
tdReserverPrice.setAttribute('id', 'ReserverPrice');

var tdImage = document.createElement('td');
tdImage.setAttribute('id', 'Image1');

var tdStartTime = document.createElement('td');
tdStartTime.setAttribute('id', 'StartTime');

var tdEndTime = document.createElement('td');
tdEndTime.setAttribute('id', 'EndTime');
tdTitle.textContent=item.title;
tdTitle.textContent=item.title;
tdDescription.textContent=item.description;
tdCategory.textContent=item.category;
tdImage.textContent=item.imagUrl;
tdStartTime.textContent=item.startTime;
tdEndTime.textContent=item.endTime;
ItemId.textContent=item.itemID1;
tdReserverPrice.textContent=item.reservePrice
// Append td elements to tr element
// tr.appendChild(th);
tr.appendChild(ItemId);
tr.appendChild(tdTitle);
tr.appendChild(tdDescription);
tr.appendChild(tdCategory);
tr.appendChild(tdReserverPrice);
tr.appendChild(tdImage);
tr.appendChild(tdStartTime);
tr.appendChild(tdEndTime);

// Append tr element to tbody element
tbody.appendChild(tr);

// Append tbody element to an existing table with id "myTable"
document.getElementById('myTable').appendChild(tbody);


            
                // You can perform additional operations or DOM manipulations here if needed
            });
          
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });

