
var num = localStorage.getItem('num') ? parseInt(localStorage.getItem('num')) : 1;

    function getSignUpData() {
        let firstName = document.querySelector('#sign-up-first').value;
        let lastName = document.querySelector('#sign-up-last').value;
        let email = document.querySelector('#sign-up-email').value;
        let password = document.querySelector('#sign-up-password').value;
    
        if (firstName === '' || lastName === '' || email === '' || password === '') {
            console.log('Please fill in all the fields.');
            return;
        }
    
        let userData = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            password: password
        };
    
        let registrationData = JSON.parse(localStorage.getItem('registrationData')) || [];
        registrationData.push(userData);
        localStorage.setItem('registrationData', JSON.stringify(registrationData));
    
        console.log('Data saved to local storage:', userData);
        window.location.href = 'login.html';
    }
    



    // Login Page Code
  function matchLoginData() {
        event.preventDefault();
    
        let loginEmail = document.getElementById('login-email').value;
        let loginPassword = document.getElementById('login-password').value;
    
        let registrationData = JSON.parse(localStorage.getItem('registrationData'));
    
        if (!registrationData) {
            console.log('No registration data found. Please register first.');
            return;
        }
    
        let userFound = false;
        for (let i = 0; i < registrationData.length; i++) {
            if (registrationData[i].email === loginEmail) {
                userFound = true;
                if (registrationData[i].password === loginPassword) {
                    alert('Login successful!');
                    window.location.href = 'products.html';
                    return;
                } else {
                    alert('Invalid password. Please try again.');
                    return;
                }
            }
        }
    
        if (!userFound) {
            alert('No user found with the entered email. Please enter a valid email.');
        }

    };
    


    // Product Page Code
    const products = [
        {
            name: "Smart Watch",
            description: "Smart Watch with fitness tracker and heart rate monitor.",
            price: 99.99,
            image: "https://m.media-amazon.com/images/I/71ga28-RYBL._AC_UY218_.jpg"
        },
        {
            name: "Wireless Headphones",
            description: "Wireless headphones with noise cancellation feature.",
            price: 79.99,
            image: "https://m.media-amazon.com/images/I/71gnN3Ry2HL._AC_UY218_.jpg"
        },
        {
            name: "Portable Bluetooth Speaker",
            description: "Portable Bluetooth speaker with high-quality sound.",
            price: 49.99,
            image: "https://m.media-amazon.com/images/I/71ZEfP2Z7hL._AC_UY218_.jpg"
        },
        {
            name: "Fitness Tracker",
            description: "Fitness tracker with step counter and sleep monitoring.",
            price: 59.99,
            image: "https://m.media-amazon.com/images/I/71TJ3EO6sSL._AC_UY218_.jpg"
        },
        {
            name: "Digital Camera",
            description: "High-resolution digital camera with zoom and image stabilization.",
            price: 299.99,
            image: "https://m.media-amazon.com/images/I/61JZTtzIYWL._AC_UY218_.jpg"
        },
        {
            name: "Laptop Backpack",
            description: "Durable laptop backpack with multiple compartments.",
            price: 39.99,
            image: "https://m.media-amazon.com/images/I/51r6v5HdiiL._AC_UY218_.jpg"
        },
        {
            name: "Smartphone Gimbal",
            description: "Stabilizer for smartphones to capture smooth video footage.",
            price: 129.99,
            image: "https://m.media-amazon.com/images/I/61RIvi5JVdL._AC_UY218_.jpg"
        },
        {
            name: "Wireless Charging Pad",
            description: "Wireless charging pad for smartphones and other compatible devices.",
            price: 29.99,
            image: "https://m.media-amazon.com/images/I/61mBfpz7vKL._AC_UY218_.jpg"
        },
        {
            name: "Portable Power Bank",
            description: "Portable power bank to charge devices on the go.",
            price: 19.99,
            image: "https://m.media-amazon.com/images/I/61wCSfVLG9L._AC_UY218_.jpg"
        },
        {
            name: "Smart Thermostat",
            description: "Smart thermostat for controlling home temperature remotely.",
            price: 129.99,
            image: "https://m.media-amazon.com/images/I/71WR0OZlZTL._AC_UL320_.jpg"
        },
        {
            name: "Electric Toothbrush",
            description: "Electric toothbrush with multiple brushing modes and timer.",
            price: 49.99,
            image: "https://m.media-amazon.com/images/I/815adP+1gSL._AC_UL320_.jpg"
        },
        {
            name: "Bluetooth Earbuds",
            description: "Bluetooth earbuds with long battery life and sweat resistance.",
            price: 69.99,
            image: "https://m.media-amazon.com/images/I/61Fqh5oydIL._AC_UY218_.jpg"
        }
    ];
    
   products.forEach(function(product){
        document.querySelector('.cards-container').innerHTML += `
        <div class="bg-white rounded-lg shadow-md overflow-hidden product-card">
        <img src="${product.image}" alt="Product Image" class="w-full h-48 object-cover object-center">
        <div class="p-4">
            <h2 class="text-lg font-semibold text-gray-900">${product.name}</h2>
            <p class="text-sm text-gray-500">${product.description}</p>
            <div class="mt-4 flex justify-between items-center">
                <span class="text-gray-900 font-bold">$${product.price}</span>
                <div class="flex items-center space-x-2">
                    <button class="p-0 m-0 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none quantity-button decrement">-</button>
                    <span class="p-0 m-0 quantity">1</span>
                    <button class="p-0 m-0 bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none quantity-button increment">+</button>
                </div>
            </div>
            <div class="mt-2">
                <button class="add-to-cart-btn w-full bg-indigo-500 text-white font-semibold rounded-lg hover:bg-indigo-600 px-3 py-2 focus:outline-none">Add to Cart</button>
            </div>
        </div>
    </div>`
   });

   document.querySelectorAll('.product-card').forEach((card, index) => {
    const quantityElement = card.querySelector('.quantity');
    const addToCartBtn = card.querySelector('.add-to-cart-btn');
    let quantity = 1;
    
    card.querySelector('.increment').addEventListener('click', () => {
        quantity++;
        quantityElement.textContent = quantity;
    });

    card.querySelector('.decrement').addEventListener('click', () => {
        if (quantity > 1) { 
            quantity--;
            quantityElement.textContent = quantity;
        }
    });

    addToCartBtn.addEventListener('click', () => {
        const selectedProduct = products[index];
        console.log("Product:", selectedProduct, "Quantity:", quantity);
        addToCart(selectedProduct, quantity);
    });
});

function addToCart(product, quantity) {
    console.log("Product added to cart:", product, "Quantity:", quantity);
}

const checkoutBtn = document.querySelector('.check-out-btn');
const cartContainer = document.getElementById('cart-container');
const cartList = document.getElementById('cart-list');
let cartProducts = [];

document.querySelectorAll('.add-to-cart-btn').forEach((button, index) => {
    button.addEventListener('click', () => {
        const selectedProduct = products[index];
        cartProducts.push(selectedProduct);
    });
});

checkoutBtn.addEventListener('click', () => {
    cartList.innerHTML = '';

    cartProducts.forEach((product) => {
        cartList.innerHTML += `
            <div class="flex justify-between items-center gap-6 px-4 py-2 border-b border-gray-200">
                <img src="${product.image}" alt="Product Image" class="w-16 h-16 object-contain object-center">
                <div>
                    <h3 class="text-gray-900 font-semibold">${product.name}</h3>
                    <p class="text-gray-500">${product.description}</p>
                </div>
                <span class="text-gray-900 font-bold">$${product.price}</span>
            </div>
            
        `;
    });

    cartContainer.classList.add('open');
});

