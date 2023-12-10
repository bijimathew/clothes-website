var loginform =document.getElementById("loginform")
var regform= document.getElementById("regform")
var indicator =document.getElementById("indicator")
function register()
{
    regform.style.transform="translateX(0px)"
    loginform.style.transform="translateX(0px)"
    indicator.style.transform="translateX(100px)"
}
function login()
{
    regform.style.transform="translateX(300px)"
    loginform.style.transform="translateX(300px)"
    indicator.style.transform="translateX(0px)"
}
function regtr()
{
    if(regform.style.display="none")
    {
        regform.style.display="block";
    }
    else {
        regform.style.display="none";
    }
}


// product-details.js
document.addEventListener('DOMContentLoaded', function () {
    // Get product details from the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    
    // Example URL: product-details.html?name=Crimson%20Red%20Jacket&image=images/red.jpg&price=1499
    const productName = urlParams.get('name');
    const productImage = urlParams.get('image');
    const productPrice = urlParams.get('price');

    // Update the product details on the page
    document.getElementById('product-image').src = productImage;
    document.getElementById('product-name').textContent = productName;
    document.getElementById('product-price').textContent = `Rs ${productPrice}`;
});
