document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
    <div class="h-4 z-index: 2  col-md-3 col-lg-2 sidebar " style="background-color:#486079;height:1000px;position: fixed;">
    <!-- Sidebar -->
   
    <nav class="" style="padding-top: 50%">
        <div class="">
            <ul class="nav flex-column" >
                <li class="nav-item d-flex  align-items-center" style="color: white;font-size:22px;">
                    <i class="bi bi-plus"></i>
                    <a class="nav-link active text-white" href="./addProudct.html">Add Product</a>
                </li>
                
                <li class="nav-item d-flex  align-items-center" style="color: white;font-size:22px;">
                    <i class="bi bi-list"></i>
                    <a class="nav-link  text-white" href="./productShow.html">
                        Display Product
                    </a>
                </li>
                
                <li class="nav-item d-flex align-items-center" style="color: white;font-size:22px;">
                    <i class="bi bi-bell "></i>
                    <a class="nav-link text-white" href="#">Bid Final</a>
                </li>
                
                <li class="nav-item d-flex  align-items-center" style="color: white;font-size:22px;">
                    <i class="bi bi-person"></i>
                    <a class="nav-link  text-white" href="#">
                        Customer Details
                    </a>
                </li>
                <li class="nav-item d-flex  align-items-center" style="color: white;font-size:22px;">
                    <i class="bi bi-box-arrow-right"></i>
                    <button class="nav-link btn  text-white" id="Logout" style="font-size: 22px;" >
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