document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
         <div class="col-2 sidebar" style="background-color:rgb(123,165,251); height:1000px; position: fixed;">
            <!-- Sidebar -->
            <div style="margin-top:40px; margin-left:90px;">
                <img src="./image/image.png" width="80" style="border-radius:50px;">
                <h5 style="color:white; margin-left:-14px;">Auction Pro </h5>
            </div>
            <nav class="w-100" style="padding-top: 50%">
                <div>
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active text-white" href="./addCategory.html" style="font-size:20px">
                                <i class="bi bi-plus"></i>
                                <span class="d-none d-md-inline">Add Category</span>
                                <span class="d-md-none">A</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="./sellerDetails.html" style="font-size:20px">
                                <i class="bi bi-list"></i>
                                <span class="d-none d-md-inline">Seller Details</span>
                                <span class="d-md-none">S</span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white" href="./allCustomerShow.html" style="font-size:20px">
                                <i class="bi bi-list"></i>
                                <span class="d-none d-md-inline">Customer Details</span>
                                <span class="d-md-none">C</span>
                            </a>
                        </li>
                        <li class="nav-item text-white">
                            <button class="nav-link btn text-white" id="Logout" style="font-size:20px">
                                <i class="bi bi-box-arrow-right"></i>
                                <span class="d-none d-md-inline">Log Out</span>
                                <span class="d-md-none">L</span>
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

        
        //   var userId = sessionStorage.getItem('CustomerID');
const logOut=document.getElementById("Logout");
logOut.addEventListener('click',function(){

 localStorage.setItem('isLoggedIn3','false');

    window.location.href = './AdminLogin.html';
    // localStorage.setItem('isLoggedIn1', 'false');
    // const status1=localStorage.getItem('isLoggedIn1', 'false');


alert(status1);
    alert(userId);
    sessionStorage.removeItem('userId');
    alert(userId);
})
          
});