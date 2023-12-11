document.addEventListener("DOMContentLoaded", function () {
    const navbar = `
<div class="row">
            <!-- Sidebar -->
            <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar  ">
                <div class="position-sticky h-full col-lg-3 ">
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
                            <a class="nav-link" href="./loginPage.html">
                            Log Out
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            `;

            const navbarContainer = document.getElementById("nav1");
            if (navbarContainer) {
                navbarContainer.innerHTML = navbar;
          }

    
});