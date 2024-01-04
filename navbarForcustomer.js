document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <div class=" col-2 sidebar " style="background-color:rgb(108,117,125);height:100%;position:fixed;z-index:10000">
    <!-- Sidebar -->
   
       
    <div  style="margin-top:40px;margin-left:40%;">
    <img  id="auctionProImg"   width="80" style="border-radius:70px;" >
    <h5 id="auctionPro">Auction Pro </h5>
     </div>
    <nav class="w-100" style="padding-top: 50%">
        <div class="">
        <ul class="nav flex-column">
        <li class="nav-item ">
            <a class="nav-link  text-white" href="./dashboardOfCustomer.html" >
                <i class="bi bi-list"></i>
                <span class="d-none d-md-inline  md-font-weight-small">Dashboard</span>
              
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white text-size-md-10px" href="./search.html" >
                <i class="bi bi-search"></i>
                <span class="d-none d-md-inline">Search Product</span>
               
            </a>
        </li>
        <li class="nav-item">
            <a class="nav-link text-white" href="./customerBitStatus.html" >
                <i class="bi bi-bell"></i>
                <span class="d-none d-md-inline">Bid Status</span>
             
            </a>
        </li>
        <li class="nav-item text-white">
            <button class="nav-link btn text-white" id="Logout" >
                <i class="bi bi-box-arrow-right"></i>
                <span class="d-none d-md-inline">Log Out</span>
          
            </button>
        </li>
    </ul>

            
        
    </div>
    </nav>
</div>

























    
    `;

            const navbarContainer = document.getElementById("nav1");
            if (navbarContainer) {
                navbarContainer.innerHTML = navbar;
          }
          var userId = sessionStorage.getItem('CustomerID');

          fetch('https://localhost:7189/GetAllDetails1')
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
      
  
              // console.log(getName.value);
              data.forEach(element => {
if(userId==element.customerID){
    // alert("hello");
    document.getElementById("auctionProImg").src='data:image/png;base64,'+element.imageField;
}
});
});
document.getElementById("auctionPro").textContent=localStorage.getItem('userName');




// alert(localStorage.getItem('userName'));
// document.getElementById("auctionProImg").src='data:image/png;base64,' +localStorage.getItem('imageFied');

          var currentPage = window.location.href;

          // Get all anchor elements in the navbar
          var links = document.getElementsByTagName("a");
      
          // Loop through the links
          for (var i = 0; i < links.length; i++) {
              // Check if the link's href matches the current page URL
              if (links[i].href === currentPage) {
                  // Add a class to highlight the active link
                  links[i].classList.add("active");
                 //  links[i].style.color='black';
              }
              else{
                 links[i].classList.remove("active");
     
              }
          }
const logOut=document.getElementById("Logout");
logOut.addEventListener('click',function(){
    window.location.href = './LogInForCustomer.html';
    localStorage.setItem('isLoggedIn1', 'false');
    const status1=localStorage.getItem('isLoggedIn1', 'false');


// alert(status1);
//     alert(userId);
    sessionStorage.removeItem('userId');
    // alert(userId);
})
          
});