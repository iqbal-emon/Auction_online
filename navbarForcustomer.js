document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <div class="row">
       
        <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block sidebar ">
            <div class="h-full col-lg-3 ">
                <ul class="nav flex-column ">
                    <li class="nav-item">
                        <a class="nav-link active text-white" href="./dashboardOfCustomer.html">
                            Dashboard
                        </a>
                    </li>
                    <li class="nav-item ">
                        <a class="text-white text-left" class="nav-link" href="./productShow.html">
                            Search Product
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link text-white" href="#">
                            Bid Status
                        </a>
                    </li>
                    
                    <li class="nav-item">
                        <button class="nav-link btn text-white" id="Logout">
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
          var userId = sessionStorage.getItem('CustomerID');
const logOut=document.getElementById("Logout");
logOut.addEventListener('click',function(){
    window.location.href = './LogInForCustomer.html';
    alert(userId);
    sessionStorage.removeItem('userId');
    alert(userId);
})
          
});