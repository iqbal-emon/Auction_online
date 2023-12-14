var CustomerID = sessionStorage.getItem('CustomerID');
// alert(CustomerID);
let container2=document.getElementById("container");
const currentDate = new Date();
// const currentDate = new Date();
currentDate.setHours(currentDate.getHours() + 6);
alert(currentDate);
// Format the date in "YYYY-MM-DDTHH:mm:ss" format
// const formattedDateTime = currentDate.toISOString().slice(0, 19).replace("T", " ");

// alert(formattedDateTime);
// const formattedDateObject = new Date(formattedDateTime);
// const data1StartTimeObject = new Date(data1.startTime);

const handleButtonClick = (data1,selectedProduct) => {
  // Store only the card index in sessionStorage
  sessionStorage.setItem('selectedProduct', data1.itemID1);
alert(data1.itemID1);
  // Construct the URL with query parameters
  // const url = `./BidTable.html?index=${index}&title=${encodeURIComponent(data1.title)}&reservePrice=${encodeURIComponent(data1.reservePrice)}&image=${encodeURIComponent(data1.imageField)}`;

  // Navigate to BidTable.html with the constructed URL
  window.location.href = './BidTable.html';
};





fetch("https://localhost:7189/Home/showAllProducts")
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
         
            data.forEach((data1, index) => {
              alert("data"+new Date(data1.startTime));
              if(currentDate> new Date(data1.startTime)){

               
                    const card = document.createElement('div');
                    card.classList.add('card');
                    const btn12 = document.createElement('button');
                    btn12.classList.add('btn12');
                    btn12.textContent = 'Go For Bid';


                    btn12.addEventListener('click', () => {
                        // Pass the clicked card data and index to the handler
                        handleButtonClick(data1,index);
                    });
        






                    const imageElement = document.createElement('img');
                    imageElement.src = 'data:image/png;base64,' + data1.imageField;
                    imageElement.height = 200;
                    imageElement.width = 300;
                  imageElement.style.borderRadius = '10px';
                    container2.style.marginLeft = '100px';
                   
                    const title = document.createElement('h2');
                    title.textContent = data1.title;
                  
                    const subtitle = document.createElement('h2');
                    subtitle.textContent = data1.reservePrice;
                  
                    card.appendChild(imageElement);
                    
                    card.appendChild(title);
                  
                    card.appendChild(subtitle);
                    card.appendChild(btn12);
                    container2.appendChild(card);
                  }
                  });
                  
                  var observerOptions = {
                      root: null,
                      rootMargin: '0px',
                      threshold: 0.1,
                    };
                  
                    var observer = new IntersectionObserver((entries, observer) => {
                      entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                          entry.target.style.transition = 'opacity 1s, transform 1s';
                          entry.target.style.opacity = 1;
                          entry.target.style.transform = 'translateX(0)';
                          observer.unobserve(entry.target);
                        }
                      });
                    }, observerOptions);
                  
                    const special1 = document.querySelectorAll(".card");
                  
                    special1.forEach((card, index) => {
                      console.log(`Applying styles to card ${index + 1}`);
                      card.style.opacity = 0;
                      card.style.transform = 'translateX(90%)';
                  
                      setTimeout(() => {
                        observer.observe(card);
                      }, 50* index);
                    });
                  
                  
                  
        
                  
                  



                  
                     
          
        })
      
        .catch(error => {
            console.error('Error fetching data:', error);
        });




