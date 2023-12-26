// Ensure DOM is fully loaded before executing the script
document.addEventListener('DOMContentLoaded', () => {
const isLoggedIn = localStorage.getItem('isLoggedIn1');
// alert(isLoggedIn);
if (!isLoggedIn || isLoggedIn !== 'true') {

  // Redirect to the login page if not logged in
  window.location.href = './logInForCustomer.html';
}
else{
  var CustomerID = sessionStorage.getItem('CustomerID');
  let container2 = document.getElementById("container");

  const handleButtonClick = (data1, index) => {
    sessionStorage.setItem('selectedProduct', data1.itemID1);
    window.location.href = './BidTable.html';
  };
  const allcategory=document.getElementById("allcategory");
fetch("https://localhost:7189/getCategory")
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

                const allCategoryOption = document.createElement("option");
                allCategoryOption.id = data.categoryName;
                allCategoryOption.value = data.categoryName;
                allCategoryOption.textContent = data.categoryName;
                allcategory.appendChild(allCategoryOption);



            });
        });



  fetch("https://localhost:7189/Home/showAllProducts")
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      data.forEach((data1, index) => {
        const card = document.createElement('div');
        card.classList.add('card');
        const btn12 = document.createElement('button');
        btn12.classList.add('btn12');
        btn12.textContent = 'Go For Bid';

        btn12.addEventListener('click', () => {
          handleButtonClick(data1, index);
        });

        const imageElement = document.createElement('img');
        imageElement.src = 'data:image/png;base64,' + data1.imageField;
        imageElement.height = 200;
        imageElement.width = 300;
        imageElement.style.borderRadius = '10px';

        const title = document.createElement('h2');
        title.textContent = data1.title;

        const subtitle = document.createElement('h2');
        subtitle.textContent = data1.reservePrice;

        card.appendChild(imageElement);
        card.appendChild(title);
        card.appendChild(subtitle);
        card.appendChild(btn12);
        container2.appendChild(card);
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
        card.style.opacity = 0;
        card.style.transform = 'translateX(90%)';

        setTimeout(() => {
          observer.observe(card);
        }, 50 * index);
      });

      // Add dropdown change event listener for filtering cards
      const dropdown = document.getElementById("allcategory");

      dropdown.addEventListener("change", (event) => {
        const selectedCategory = event.target.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
          const category = data[Array.from(card.parentNode.children).indexOf(card)].category.toLowerCase();

          if (selectedCategory === "all" || category.includes(selectedCategory)) {
            card.style.display = "inline-block";
          } else {
            card.style.display = "none";
          }
        });
      });

      // Add input field event listener for filtering cards
      const inputField = document.getElementById("first");

      inputField.addEventListener("keyup", (event) => {
        const searchText = event.target.value.toLowerCase();
        const cards = document.querySelectorAll(".card");

        cards.forEach((card) => {
          const title = card.querySelector("h2").textContent.toLowerCase();

          if (title.includes(searchText)) {
            card.style.display = "inline-block";
          } else {
            card.style.display = "none";
          }
        });
      });
    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }
});
