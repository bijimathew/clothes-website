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
// document.addEventListener('DOMContentLoaded', function () {
//     // Get product details from the URL parameters
//     const urlParams = new URLSearchParams(window.location.search);
    
//     // Example URL: product-details.html?name=Crimson%20Red%20Jacket&image=images/red.jpg&price=1499
//     const productName = urlParams.get('name');
//     const productImage = urlParams.get('image');
//     const productPrice = urlParams.get('price');

//     // Update the product details on the page
//     document.getElementById('product-image').src = productImage;
//     document.getElementById('product-name').textContent = productName;
//     document.getElementById('product-price').textContent = `Rs ${productPrice}`;
// });

// Function to extract URL parameters
function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

// Get product details from URL parameters
var productName = getParameterByName('productName');
var productImage = getParameterByName('productImage');

// Update the page elements
document.getElementById('productName').innerHTML = productName || 'Default Product Title';
document.getElementById('productImage').src = productImage || 'default-image.jpg';




// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Dynamic Page Update</title>
// </head>

// <body>

//     <div>
//         <h1 id="pageTitle">Initial Page Title</h1>
//         <img id="pageImage" src="initial-image.jpg" alt="Initial Image">
//         <a href="productDetails.html?productName=Updated%20Page%20Title&productImage=updated-image.jpg">View Product Details</a>
//     </div>

// </body>

// </html>


const userName = document.querySelector('.loginusername');
const userNameValue = userName.value;

const email = document.querySelector('.loginPass');
const emailInput = email.value;

document.querySelector('.loginbtn').addEventListener('click',(e)=>{
    e.preventDefault();

    const data = {
        user : userNameValue,
        email:emailInput
    }

    console.log(data.user , data.email);
})

