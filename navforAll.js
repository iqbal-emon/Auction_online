document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
  

    <div class="container-fluid" style="align-items: center; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.5); height: 60px; display: flex; justify-content: flex-start; padding: 10px;">
    <img src="./image/image.png" alt="" style="height: 50px; width: 60px; border-radius: 26px;">

    <div style="display: flex;margin-left:5%; font-weight: 600;">
        <ul style="list-style: none; margin: 0; padding: 0; display: flex;">
            <li style="margin-right: 10px;">
                <a class="nav-link active" href="./AdminLogin.html">Admin</a>
            </li>
            <li style="margin-right: 10px;">
                <a class="nav-link" href="./LogInForCustomer.html">Customer</a>
            </li>
            <li>
                <a class="nav-link" href="./loginPage.html">Seller</a>
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