document.addEventListener('DOMContentLoaded', function () {
    setupPage();
    setInterval(function () {
        const itemID4 = sessionStorage.getItem('selectedProduct');
        fetchBids(itemID4);
        // alert("table Updated");
    }, 1000); // 5000 milliseconds = 5 seconds
});
minimumPrice=document.getElementById("minimumPrice");
const tbody = document.createElement('tbody');
inputPrice=document.getElementById("Amount1");

function setupPage() {
    
    const itemID4 = sessionStorage.getItem('selectedProduct');
    const CustomerID = sessionStorage.getItem('CustomerID');
    
    document.getElementById("userId").value = CustomerID;
    document.getElementById("userId1").value = itemID4;

    const auctionStartDateInput = document.getElementById('auctionStartDate');
    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() + 6);
    auctionStartDateInput.value = currentDate.toISOString();

    fetchItemData(itemID4);
    
    // Load initial bids when the page loads
    fetchBids(itemID4);
}
let finalPrice;
function PriceShow(data){
    minimumPrice.innerHTML=data;
return data;
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
function hideElements() {
    document.getElementById("Amount1").style.display = "none";
    document.getElementById("biit").style.display = "none";
    document.getElementById("liveImage").style.display = "none";
    document.getElementById("liveHeading").style.display = "none";

    
}

let priceContainer;


function displayItemData(data) {
    console.log(data);
    document.getElementById("price").innerHTML = data[0].reservePrice;
    document.getElementById("title").innerHTML = data[0].title;
    priceContainer=PriceShow(data[0].reservePrice);
    // let image1 = document.getElementById("image1");
    // image1.src = 'data:image/png;base64,' + data[0].imageField;
    const data1 = [
        { imageField: data[0].imageField },
        { imageField: data[0].imageField1 },
        { imageField: data[0].imageField2 },
    ];

    const slider = document.querySelector('.carousel-inner');

    data1.forEach((item, index) => {
        const slide = document.createElement('div');
        slide.classList.add('carousel-item');

        // Check if item.imageField exists before using it
        const imageSrc = item.imageField ? `data:image/png;base64,${item.imageField}` : '';
       
        slide.innerHTML = `<div style="width: 100%; height: 350px; overflow: hidden; background-image: url('${imageSrc}'); background-size: contain; background-position: center; background-repeat: no-repeat;">
        </div>`;





        
        slider.appendChild(slide);
    });

    let currentIndex = 0;

    function showSlide(index) {
        const slides = document.querySelectorAll('.carousel-item');
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    document.getElementById('btn123').addEventListener('click', () => {
        currentIndex = (currentIndex - 1 + data1.length) % data1.length;
        showSlide(currentIndex);
    });

    document.getElementById('btn321').addEventListener('click', () => {
        currentIndex = (currentIndex + 1) % data1.length;
        showSlide(currentIndex);
    });

    showSlide(currentIndex); // Show the initial slide


    const currentDate = new Date();
    currentDate.setHours(currentDate.getHours() );
    // alert(currentDate);
    // alert("endTime:"+new Date(data[0].endTime));
    const itemEndTime = new Date(data[0].endTime);
    if (itemEndTime <= new Date()) {
        hideElements();
    }

    function updateTimer() {
        const currentTime = new Date();
        const timeDifference = new Date(data[0].endTime) - currentTime;
    
        // Check if the timer has reached zero
        if (timeDifference <= 0) {
            clearInterval(timerInterval);
            document.getElementById("timeShow").innerHTML = "Timer expired!";
            hideElements(); // Call the function to hide elements
        


        } else {
            // Calculate hours, minutes, and seconds
            const remainingSeconds = Math.floor(timeDifference / 1000);
            const hours = Math.floor(remainingSeconds / 3600);
            const minutes = Math.floor((remainingSeconds % 3600) / 60);
            const seconds = remainingSeconds % 60;
    
            // Display or use the remaining time as needed
            document.getElementById("timeShow").innerHTML = `${hours}h ${minutes}m ${seconds}s remaining`;
        }
    }
    
    // Initial call to display the timer
    updateTimer();
    
    // Set up the timer interval to update every second
    const timerInterval = setInterval(updateTimer, 1000);
    

    





    
    
}
function setupBidEventListener() {
    const biit = document.getElementById("biit");
    let a = 0;
    let length;
    biit.addEventListener('click', () => {
        const CustomerID = sessionStorage.getItem('CustomerID');
        const formData = new FormData(document.getElementById('myForm'));
        const apiUrl = 'https://localhost:7189/GetAllDetails1';

        let flaggg = 0; // Declare flaggg outside the loop

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                data.forEach(element => {
                    if (element.customerID === CustomerID && element.flag2 === "") {
                        if (parseFloat(inputPrice.value) > priceContainer) {
                            submitBid();
                            flaggg++; // Update flaggg inside the loop
                            alert("Your Bid is Added");
                        } else {
                            alert("Bid More Than Max Price");
                            
                        }
                    }
                    
                    else if(element.customerID === CustomerID&&element.flag2==="1"){
                        alert("You banned by Admin");
                       
                    }
                    
                });
                

            
               
            })
     
           
    });
}



function submitBid() {

    const itemID4 = sessionStorage.getItem('selectedProduct');
    const CustomerID = sessionStorage.getItem('CustomerID');
  
    

    const formData = new FormData(document.getElementById('myForm'));
    const apiUrl = 'https://localhost:7189/Home/BidInsert';
    // formData.forEach(function (value, key) {
    //     // console.log(key + ": " + value);
    //     alert(key + ": " + value);
    // });
    
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
            // console.data(data);
        })
        .catch(error => {
            console.error('Error fetching bids:', error);
        });
}


function displayBids(data) {
    // console.log(data);
    
    tbody.textContent=null;
    const CustomerID = sessionStorage.getItem('CustomerID');
    data.sort((a, b) => b.amount - a.amount);
    priceContainer=PriceShow(data[0].amount);
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
