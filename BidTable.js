document.addEventListener('DOMContentLoaded', function () {
    const itemID4 = sessionStorage.getItem('selectedProduct');
    console.log(itemID4);

    fetch(`https://localhost:7189/Home/Item/${itemID4}`)
        .then(response => {
            console.log("Raw Response:", response);

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            return response.json(); // assuming the response is in JSON format
        })
        .then(data => {
            console.log("Data received successfully:");
            console.log(data);

            // let Price = document.getElementById("price");
            document.getElementById("price").innerHTML = data[0].reservePrice; // Corrected property name

            let image1 = document.getElementById("image1");
            image1.src = 'data:image/png;base64,' + data[0].imageField; // Corrected property name

            // let title1 = document.getElementById("title");
            document.getElementById("title").innerHTML = data[0].title; // Corrected property name
            // document.getElementById(id).innerHTML=data[0].reservePrice;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
