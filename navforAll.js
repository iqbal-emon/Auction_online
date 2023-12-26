document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
  

    <div class="container-fluid zIndex-1000 " style="  align-items: center;box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5);height:60px" >
    <img src="./image/image.png" alt="" style="margin-left:2%;height: 50px;width: 60px;border-radius: 26px;">
     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
     </button>
     <div class="collapse navbar-collapse " id="navbarNav" style="margin-left:13%; font-weight: 600;">
       <ul class="navbar-nav">
         <li class="nav-item">
           <a class="nav-link active " href="./AdminLogin.html" >Admin</a>
         </li>
         <li class="nav-item">
           <a class="nav-link " href="./LogInForCustomer.html">Customer</a>
         </li>
         <li class="nav-item">
           <a class="nav-link" href="./loginPage.html" >Seller</a>
         </li>
         
       </ul>
     </div>
   </div>




            `;

            const navbarContainer = document.querySelector(".navbar");
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

         
        

          
});