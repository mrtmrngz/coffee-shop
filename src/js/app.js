import header from "./header.js"
import productFunc from "./products.js"




(async function() {
    const productsData = await fetch('../../src/js/data.json')
    const data = await productsData.json()
    productFunc(data)
})()


//! Set Cart Quantity START

const cartQuantity = document.querySelector('.header-right--links .header-cart .cart-count')

cartQuantity.textContent = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : "0"

//! Set Cart Quantity END
