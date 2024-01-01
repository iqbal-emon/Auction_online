document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
<div class="row">
            <!-- Sidebar -->
            <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block  sidebar  ">
                <div class=" h-full col-lg-3 ">
                    <ul class="nav flex-column">
                        <li class="nav-item">
                            <a class="nav-link active" href="./addProudct.html">
                                Add Product
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="./productShow.html">
                               Display Product
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                               Bid Report
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                               Bid Final
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                            Customer Details
                            </a>
                        </li>
                        <li class="nav-item">
    <button class="nav-link btn" id="Logout">
        Log Out
    </button>
</li
                    </ul>
                </div>
            </nav>

            `;

            const navbarContainer = document.getElementById("nav1");
            if (navbarContainer) {
                navbarContainer.innerHTML = navbar;
          }
          const navbarLinks = document.querySelectorAll('.nav-item');
// alert("hello");
          const handleLinkClick = (event) => {
              // event.preventDefault();
            // var linkTag = document.getElementsByTagName("a");
            
              // Reset the color of all links to white
            navbarLinks.forEach(link => {
             
                // link.style.color = 'white';
            link.style.borderBottom = 'none';
                
              });
      event.target.style.paddingBottom = '10px';
              // Set the color of the clicked link to blue
            event.target.style.borderBottom = '4px solid white';
          };
      
          // Add click event listener to each link in the '.navbar2' container
          navbarLinks.forEach(link => {
              link.addEventListener('click', handleLinkClick);
          });
      





          
          var userId = sessionStorage.getItem('CustomerID');
const logOut=document.getElementById("Logout");
logOut.addEventListener('click',function(){
    window.location.href = './LogInForCustomer.html';
    alert(userId);
    sessionStorage.removeItem('CustomerID');
    alert(userId);
})
          
});