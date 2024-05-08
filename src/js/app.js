import header from "./header.js"
import productFunc from "./products.js"
import imageGallery from "./image-gallery.js"
import searchFunc from "./search.js"




(async function() {
    const productsData = await fetch('../../src/js/data.json')
    const data = await productsData.json()

    data ? localStorage.setItem('products', JSON.stringify(data)) : []
    productFunc(data)
    searchFunc(data)
})()


//! Set Cart Quantity START

const cartQuantity = document.querySelector('.header-right--links .header-cart .cart-count')

cartQuantity.textContent = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : "0"

//! Set Cart Quantity END
