document.addEventListener("DOMContentLoaded", function () {
    const navbar = `

    <div class="col-2 sidebar" style="background-color:#486079;height:1000px;position:fixed;height:100%">
    <!-- Sidebar -->
    <div id="logo" style="margin-top:40px;margin-left:40%;">
    <img class="w-sm-2" id="auctionProImg" src="./image/image.png" width="80" style="border-radius:50px;" >
    <h5 id="auctionPro">Auction Pro </h5>
     </div>
    <nav class="w-100" style="padding-top: 50%">
        <div class="">
            <ul class="nav flex-column ">
                <li class="nav-item">
                    <a  class="  nav-link active text-white" href="./addProudct.html" >
                        <i class="bi bi-plus"></i>
                        <span class="d-none d-md-inline">Add Product</span>
                        <span class="d-md-none">A</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="./productShow.html" >
                        <i class="bi bi-list"></i>
                        <span class="d-none d-md-inline">Display Product</span>
                        <span class="d-md-none">D</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="./sellerBidStatus.html">
                        <i class="bi bi-bell "></i>
                        <span class="d-none d-md-inline">Bid Final</span>
                        <span class="d-md-none">B</span>
                    </a>
                </li>
                <li class="nav-item text-white">
                    <button class="nav-link btn text-white" id="Logout" >
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
    // alert(userId);
    sessionStorage.removeItem('userId');
    localStorage.setItem('isLoggedIn', 'false');
    // alert(isLoggedIn);
    // alert(userId);
    window.location.href = './loginPage.html';

})
          
});