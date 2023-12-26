// Get user authentication status
var userId = sessionStorage.getItem('userId');
const isLoggedIn = localStorage.getItem('isLoggedIn');
// alert("my UserId is"+userId);
// Check if the user is logged in
if (!isLoggedIn || isLoggedIn !== 'true') {
    // Redirect to the login page if not logged in
    window.location.href = './loginPage.html';
} else {
    // Fetch user details
    fetch(`https://localhost:7189/Home/GetAllDetails/${userId}`)
        .then(response => {
            // Handle HTTP errors
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // Assuming the response is in JSON format
        })
        .then(userData => {
            // console.log(userData);

            // Iterate through items and fetch additional details
            userData.forEach((item, index) => {
                // alert(item.userID1);
                fetch(`https://localhost:7189/Home/ItemJoin/${item.itemID1}`)
                    .then(response => {
                        // Handle HTTP errors
                        if (!response.ok) {
                            throw new Error(`HTTP error! Status: ${response.status}`);
                        }
                        return response.json(); // Assuming the response is in JSON format
                    })
                    .then(itemData => {
                        console.log("Data received successfully:");
                        // console.log(itemData);

                        // Iterate through item details and create HTML elements
                        
                        itemData.forEach((itemDetail, index) => {
                            
                            // Create HTML elements for each item
                            var tbody = document.createElement('tbody');
                            var tr = document.createElement('tr');
                            tr.setAttribute('id', 'tr1');

                            // Create HTML elements for ItemId, title, image, and endTime
                            var ItemId = document.createElement('td');
                            ItemId.setAttribute('id', 'ItemId');
                            var tdTitle = document.createElement('td');
                            tdTitle.setAttribute('id', 'title');
                            var tdImage = document.createElement('td');
                            tdImage.setAttribute('id', 'ImageField');
                            var tdImage = document.createElement('img');
                            var tdEndTime = document.createElement('td');
                            tdEndTime.setAttribute('id', 'EndTime');
                            var bidTime1 = document.createElement('td');
                            bidTime1.setAttribute('id', 'bidTime');
                            var customerID1 = document.createElement('td');
                            customerID1.setAttribute('id', 'customerID1');
                            var amountPrice = document.createElement('td');
                            amountPrice.setAttribute('id', 'amountPrice');

                            var email1 = document.createElement('td');
                            email1.setAttribute('id', 'email1');
                            var biddingGo = document.createElement('td');
                            biddingGo.setAttribute('id', 'email1');

                            // Set content for HTML elements
                            tdTitle.textContent = itemDetail.title;
                            tdImage.height = 70;
                            tdImage.width = 80;
                            tdImage.style.borderRadius = '10px';
                            tdImage.src = 'data:image/png;base64,' + itemDetail.imageField;
                            tdEndTime.textContent = itemDetail.endTime;
                            ItemId.textContent = itemDetail.itemID1;
                            bidTime1.textContent=itemDetail.bidTime;
                            customerID1.textContent=itemDetail.customerID;
                            amountPrice.textContent=itemDetail.amount;
                            email1.textContent=itemDetail.email;

                            let inputDate = new Date();
                            
                            const year = inputDate.getFullYear();
                            const month = (inputDate.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
                            const day = inputDate.getDate().toString().padStart(2, '0');
                            const hours = inputDate.getHours().toString().padStart(2, '0');
                            const minutes = inputDate.getMinutes().toString().padStart(2, '0');
                            const seconds = inputDate.getSeconds().toString().padStart(2, '0');
                            
                            const outputDateString = `${year}-${month}-${day}T${hours}:${minutes}:${seconds}`;
                            // alert(outputDateString);
                            //     alert(itemDetail.endTime);
                            //     // console.log(outputDateString);



                            if(outputDateString<itemDetail.endTime){
                                biddingGo.textContent="Going On";
                                biddingGo.style.fontSize = '16px'; // Change '16px' to your desired font size
                                biddingGo.style.fontWeight = 'bold';
                                biddingGo.style.color='green';
                                
                            }
                            else if(outputDateString>itemDetail.endTime){
                                biddingGo.textContent=" Finished!";
                                // biddingGo.style.fontSize = '16px'; // Change '16px' to your desired font size
                                biddingGo.style.fontWeight = 'bold';
                                biddingGo.style.color='red';

                            }
                            // alert(itemDetail.bidTime);
                            // Append HTML elements to the table row
                            tr.appendChild(ItemId);
                            tr.appendChild(tdTitle);
                            tr.appendChild(tdEndTime);
                            tr.appendChild(bidTime1);
                            tr.appendChild(tdImage);
                            tr.appendChild(customerID1);
                           tr.appendChild(amountPrice);
                           tr.appendChild(email1);
tr.appendChild(biddingGo);
                            // Append table row to the table body
                            tbody.appendChild(tr);

                            // Append table body to the table with ID 'myTable'
                            document.getElementById('myTable').appendChild(tbody);
                        });
                    })
                    .catch(error => {
                        console.error('Error fetching item details:', error);
                    });
            });
        })
        .catch(error => {
            console.error('Error fetching user details:', error);
        });
}
