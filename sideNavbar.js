document.addEventListener("DOMContentLoaded", function () {
    const navbar = `



    <div class="h-4 z-index: 2  col-md-3 col-lg-2 sidebar " style="background-color:#486079;height:1000px;position: fixed;">
        <!-- Sidebar -->
        
    
       
        <div style="margin-top:40px;margin-left:90px;">
        <img src="./image/image.png" width="80" style="border-radius:50px;" >
        <h5 style="color:white;margin-left:-14px">Auction Pro </h5>
         </div>
        <nav class="" style="padding-top: 50%">
            <div class="">
                <ul class="nav flex-column" >
                    <li class="nav-item active d-flex  align-items-center" style="color: white;font-size:22px;">
                    <a class="nav-link active  text-white" href="./addProudct.html">
                    <i class="bi bi-plus"></i>
                        Add Product</a>
                    </li>
                    
                    <li class="nav-item d-flex  align-items-center" style="color: white;font-size:22px;">
                    <a class="nav-link  text-white" href="./productShow.html">
                    <i class="bi bi-list"></i>

                            Display Product
                        </a>
                    </li>
                    
                    <li class="nav-item d-flex align-items-center" style="color: white;font-size:22px;">
                    <a class="nav-link text-white" href="./sellerBidStatus.html">
                    <i class="bi bi-bell "></i>
                        Bid Final</a>
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
      

                // Add click event listener to each list item
             
    }
    

     // Get the current page URL
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
            // links[i].style.borderBottom = "2px solid #007bff";
         }
         else{
            links[i].classList.remove("active");
            links[i].style.borderBottom = "none";

         }
     }

        



          var userId = sessionStorage.getItem('userId');
const logOut=document.getElementById("Logout");
logOut.addEventListener('click',function(){
    window.history.replaceState(null, null, './loginPage.html')
    alert(userId);
    sessionStorage.removeItem('userId');
    localStorage.setItem('isLoggedIn', 'false');
    alert(isLoggedIn);
    alert(userId);
    window.location.href = './loginPage.html';

})
          
});