var userId = sessionStorage.getItem('userId');
// alert(userId);
// Get the value of the 'id' query parameter from the URL
// var userId = getParameterByName('id');

// Now you can use the productId in your displayProduct.html page
// alert(userId);
const isLoggedIn = localStorage.getItem('isLoggedIn');
// alert(isLoggedIn);
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
            // console.log(data1);

         
            data1.forEach((data, index) => {

                const allCategoryOption = document.createElement("option");
                allCategoryOption.id = data.categoryName;
                allCategoryOption.value = data.categoryName;
                allCategoryOption.textContent = data.categoryName;
                allcategory.appendChild(allCategoryOption);



            });
        });


let updatedBtnclick=(data1,updatedProduct)=>{

    // alert('button is clicked');
    // alert(updatedProduct);
    const formData = new FormData(document.getElementById('myForm2'));
//  formData.forEach(function (value, key) {
//         // console.log(key + ": " + value);
//         alert(key + ": " + value);
//     });




    // fetch(`https://localhost:7189/Home/UpdateProduct/${updatedProduct}`, {
    //     method: 'POST',
    //     body: formData,
    // })
    // .then(response => {
    //     console.log("Raw Response:", response);

    //     if (!response.ok) {
    //         throw new Error(`HTTP error! Status: ${response.status}`);
    //     }

    //     return response.json(); // assuming the response is in JSON format
    // })
    // .then(data => {
    //     console.log(data);

    // });





    
}








let handleButtonClick1 = (data1,updatedProduct) => {
    // console.log(data1);
    // Store only the card index in sessionStorage
    // alert("btn there");
    sessionStorage.setItem('updatedProduct', data1.itemID1);
    //   alert(data1.itemID1);
    document.getElementById("productName").value=data1.title;
    document.getElementById("allcategory").value=data1.category;
    document.getElementById("price").value=data1.reservePrice;
    document.getElementById("description").value=data1.description;
    document.getElementById("imageUpload").src = data1.image1;
    document.getElementById("imageUpload1").src = data1.image2;
    document.getElementById("imageUpload2").src = data1.image3;


// var currentAnimalImage = document.getElementById("currentAnimalImage");
// var existingAnimalImageInput = document.getElementById("existingAnimalImage");

// if (data1.image2) {
//     alert(data1.image2);
    
//     currentAnimalImage.src =  `./${data1.image2}`;
//     currentAnimalImage.style.display = "block";
//     alert(currentAnimalImage.src );
//     existingAnimalImageInput.value = data1.image2;
// } else {
//     currentAnimalImage.style.display = "none";
//     existingAnimalImageInput.value = "";
// }







    // console.log("After setting image sources");
//  alert( document.getElementById("allcategory"));
// alert(document.getElementById("imageUpload").alt);
// alert(data1.image1);
// alert(data1.image3);

//   alert(data1.image1);
//   document.getElementById("imageUpload").src=data1.imageField;

  
//   document.getElementById("preview").src='data:image/png;base64,' +data1.imageField;
  document.getElementById("startDate").value=data1.startTime;
  document.getElementById("endDate").value=data1.endTime;
  var trashIcon = document.createElement('i');
trashIcon.classList.add('bi', 'bi-trash');
trashIcon.style.color = 'red';
trashIcon.style.cursor = 'pointer'; // Add pointer cursor to indicate it's clickable



  document.getElementById("updatedBtn2").addEventListener('click', (event) => {
    event.preventDefault();
    // alert('button is clicked');
    // alert(data1.itemID1);
    document.getElementById('userId').value = data1.itemID1;
    const formData = new FormData(document.getElementById('myForm2'));
    
    // alert(document.getElementById("imageUpload").src );
    // alert(document.getElementById("imageUpload1").src );
    // alert(document.getElementById("imageUpload2").src );


    // Append the 'userId' value to the FormData object
    formData.append('ItemID', data1.itemID1); // Assuming 'ItemID' is the correct name
    // formData.append('ImageUrl1',document.getElementById("imageUpload").src);
    // formData.append('ImageUrl1',document.getElementById("imageUpload1").src);
    // formData.append('ImageUrl1',document.getElementById("imageUpload2").src);
   
    // formData.forEach(function (value, key) {
    //    alert(key + ": " + value);
    // });
    // alert(formData);
    // console.log(formData);
    event.preventDefault();

  
    fetch(`https://localhost:7189/Home/ProductUpdate/${data1.itemID1}`, {
        method: 'PUT',
        body: formData,
    })
    .then(response => {
        console.log("Raw Response:", response);

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        return response.text(); // assuming the response is in JSON format
    })
    .then(data => {
        // alert(data);
        data1.title = data.title; // Assuming your response has a 'title' property
        data1.category = data.category; // Assuming your response has a 'category' property
      data1.reservePrice=data.reservePrice;
    //   alert("reservePrice is"+data1.reservePrice);
        data1.description=data.description;
        data1.imageField=data.imageField;
        data1.startTime=data.startTime;
        data1.endTime=data.endTime;
    window.location.href = 'http://127.0.0.1:5500/productShow.html'
    });
});

}

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
            // console.log(data);
         
            data.forEach((item,index) => {
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
// console.log(item.imageField);
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


button.setAttribute("type", "button");
button.setAttribute("class", "btn");
button.style.backgroundColor="rgb(72,96,121)"
button.style.color='white';
button.setAttribute("data-toggle", "modal");
button.setAttribute("data-target", "#productModal");
button.style.marginTop='10px';


button.textContent = "Update";
button.addEventListener('click',()=>{
    // alert("button is clicked");
    handleButtonClick1(item,index);



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