import { thumbActive } from "./single-product/thumb-active.js";
import tabFunc from "./single-product/tab-panel.js";
import commentFunc from "./comment.js";

const productId = localStorage.getItem("productId")
    ? JSON.parse(localStorage.getItem("productId"))
    : localStorage.setItem("productId", JSON.stringify(1));

const products = localStorage.getItem("products")
    ? JSON.parse(localStorage.getItem("products"))
    : localStorage.setItem("products", JSON.stringify([]));

const findProduct = products.find(product => product.id === Number(productId))


//! Breadcrumb

const breadcrumbProductName = document.querySelector('.breadcrumb .product-name')
breadcrumbProductName.textContent = findProduct.name


function displaySingleProduct() {
    const singleContentWrapper = document.querySelector('.single-content-wrapper')
    const btnStockStatus = findProduct.stock ? "Add To Cart" : "Out Of Stock"

    let result = `
                <div class="product-gallery">
                    <div class="single-image-wrapper">
                        <img src="${findProduct.images.img1}" alt="coffee">
                    </div>
                    <div class="product-thumbs">
                        <div class="product-thumbs-wrapper">
                            <ul class="product-thumb-list">
                                <li class="product-thumb-list--item active">
                                    <img src="${findProduct.images.img1}" alt="">
                                </li>
                                <li class="product-thumb-list--item">
                                    <img src="${findProduct.images.img2}" alt="">
                                </li>
                                <li class="product-thumb-list--item">
                                    <img src="${findProduct.images.img3}" alt="">
                                </li>
                            </ul>
                        </div>
                        <div class="product-thumbs-navigation">
                            <button class="prev"><i class="bi bi-chevron-left"></i></button>
                            <button class="next"><i class="bi bi-chevron-right"></i></button>
                        </div>
                    </div>
                </div>

            <div class="product-info">
                <h1 class="product-title">${findProduct.name}</h1>
                <div class="product-reviews">
                    <ul class="star-list">
                        <li class="star-item"><i class="bi bi-heart-fill"></i></li>
                        <li class="star-item"><i class="bi bi-heart-fill"></i></li>
                        <li class="star-item"><i class="bi bi-heart-fill"></i></li>
                        <li class="star-item"><i class="bi bi-heart-fill"></i></li>
                        <li class="star-item"><i class="bi bi-heart-half"></i></li>
                    </ul>
                    <span class="reviews">5 review</span>
                </div>
                <div class="product-prices">
                    <s class="old-price">$${findProduct.price.oldPrice.toFixed(2)}</s>
                    <strong class="new-price">$${findProduct.price.newPrice.toFixed(2)}</strong>
                </div>
                <p class="product-desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, alias asperiores. Quia, amet dolore eius illo illum accusamus ullam quos eveniet, ipsum magnam quis asperiores accusantium sequi, beatae ex iste.
                </p>
                <div class="cart-button">
                    <input type="number" class="cart-quantity-input" max="50" min="1" value="1">
                    <button ${!findProduct.stock ? "disabled" : ""} class="btn btn-lg btn-primary single-product-add-to-cart">${btnStockStatus}</button>
                </div>
                <div class="button-extra">
                    <a href="#">
                        <i class="bi bi-share"></i>
                        <span>Share This Product</span>
                    </a>
                </div>
            </div>
        `

    singleContentWrapper.innerHTML = result
    thumbActive()
}

displaySingleProduct()


const quantityInputDom = document.querySelector('.cart-quantity-input')
const addToCartButton = document.querySelector('.single-product-add-to-cart')
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []
const findCart = cart.find(cartProduct => cartProduct.id === Number(findProduct.id))
const cartQuantity = document.querySelector('.header-right--links .header-cart .cart-count')

if(findCart) {
    addToCartButton.setAttribute('disabled', 'disabled')
}else {
    addToCartButton.addEventListener('click', () => {
        cart.push({...findProduct, quantity: Number(quantityInputDom.value)})
        addToCartButton.setAttribute('disabled', 'disabled')
        localStorage.setItem('cart', JSON.stringify(cart))
        cartQuantity.textContent = cart.length
    })
}


