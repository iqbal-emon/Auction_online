var userId = sessionStorage.getItem('userId');
// alert(userId);
// Get the value of the 'id' query parameter from the URL
// var userId = getParameterByName('id');

// Now you can use the productId in your displayProduct.html page
// alert(userId);
const isLoggedIn = localStorage.getItem('isLoggedIn');
alert(isLoggedIn);


if (!isLoggedIn || isLoggedIn !== 'true') {
    // Redirect to the login page if not logged in
    window.location.href = './loginPage.html';
} else{
fetch(`https://localhost:7189/Home/GetAllDetails/${userId}`)
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
tdImage.setAttribute('id', 'ImageField');
var imgElement = document.createElement('img');
var tdStartTime = document.createElement('td');
tdStartTime.setAttribute('id', 'StartTime');

var tdEndTime = document.createElement('td');
tdEndTime.setAttribute('id', 'EndTime');
tdTitle.textContent=item.title;
tdTitle.textContent=item.title;
tdDescription.textContent=item.description;
tdCategory.textContent=item.category;
imgElement.height = 70;
imgElement.width = 80;
imgElement.style.borderRadius = '10px';
// tdImage.src = 'data:image/png;base64,' + item.imageField;
imgElement.src = 'data:image/png;base64,' + item.imageField;
tdImage.appendChild(imgElement);
console.log(item.imageField);
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
var button = document.createElement("button");

// Set the button attributes
button.setAttribute("type", "button");
button.setAttribute("class", "btn btn-primary");
button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#productModal");

// Set the button text
button.textContent = "Update";
button.addEventListener('click',()=>{

})

// Append the button to the body (or any other desired element)
tr.appendChild(button);




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

    }
    // else{
    //     window.location.href="./loginPage.html"
    // }