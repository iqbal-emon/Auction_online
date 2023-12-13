document.addEventListener('DOMContentLoaded', function () {
    setupPage();
});
const tbody = document.createElement('tbody');
function setupPage() {
    const itemID4 = sessionStorage.getItem('selectedProduct');
    const CustomerID = sessionStorage.getItem('CustomerID');
    
    document.getElementById("userId").value = CustomerID;
    document.getElementById("userId1").value = itemID4;

    const auctionStartDateInput = document.getElementById('auctionStartDate');
    const currentDate = new Date();
    auctionStartDateInput.value = currentDate.toISOString();

    fetchItemData(itemID4);
    
    // Load initial bids when the page loads
    fetchBids(itemID4);
}

function fetchItemData(itemID4) {
    fetch(`https://localhost:7189/Home/Item/${itemID4}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayItemData(data);
            setupBidEventListener();
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function displayItemData(data) {
    document.getElementById("price").innerHTML = data[0].reservePrice;
    document.getElementById("title").innerHTML = data[0].title;

    let image1 = document.getElementById("image1");
    image1.src = 'data:image/png;base64,' + data[0].imageField;
}

function setupBidEventListener() {
    const biit = document.getElementById("biit");
    biit.addEventListener('click', () => {
        submitBid();
        alert("Your Bid is Added")

    });
}

function submitBid() {
    const itemID4 = sessionStorage.getItem('selectedProduct');
    const CustomerID = sessionStorage.getItem('CustomerID');

    const formData = new FormData(document.getElementById('myForm'));
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
        fetchBids(itemID4);
    })
    .catch(error => {
        alert("Please give your information correctly");
    });
}

function fetchBids(itemID4) {
    fetch(`https://localhost:7189/Home/GetBids/${itemID4}`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            displayBids(data);
        })
        .catch(error => {
            console.error('Error fetching bids:', error);
        });
}


function displayBids(data) {
    
    tbody.textContent=null;
    const CustomerID = sessionStorage.getItem('CustomerID');
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
        tdDescription.textContent = item.amount;
        tdEndTime.textContent = item.bidTime;

        tr.appendChild(tdDescription);
        tr.appendChild(tdEndTime);
        tr.appendChild(tdTitle);

        tbody.appendChild(tr);

        document.getElementById('myTable').appendChild(tbody);
    });
}
