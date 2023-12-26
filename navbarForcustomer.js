document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <div class="h-4 z-index: 2  col-md-3 col-lg-2 sidebar " style="background-color:rgb(108,117,125);height:1000px;position: fixed;">
    <!-- Sidebar -->
   
       
    <div style="margin-top:40px;margin-left:90px;">
    <img src="./image/image.png" width="80" style="border-radius:50px;" >
    <h5 style="color:white;margin-left:-14px">Auction Pro </h5>
     </div>
    <nav class="" style="padding-top: 50%">
        <div class="">
            <ul class="nav flex-column" >
                <li class="nav-item d-flex  align-items-center" style="color: white;font-size:22px;">
                <a class="nav-link active text-white" href="./dashboardOfCustomer.html">
                <i class="bi bi-plus"></i>
                    Dashboard
                </a>
                </li>
                
                <li class="nav-item d-flex  align-items-left" style="color: white;font-size:22px;">
                <a class="nav-link text-white" href="./search.html">
                <i class="bi bi-list"></i>
                    Search Product
                </a>
                </li>
                
                <li class="nav-item d-flex align-items-center" style="color: white;font-size:22px;">
                <a class="nav-link text-white" href="./customerBitStatus.html">
                <i class="bi bi-bell "></i>
                    Bid Status
                </a>
                </li>
                
               
                <li class="nav-item d-flex  align-items-center" style="color: white;font-size:22px;">
                <button class="nav-link btn  text-white" id="Logout" style="font-size: 22px;" >
                <i class="bi bi-box-arrow-right"></i>
                        Log Out
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

          var userId = sessionStorage.getItem('CustomerID');
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