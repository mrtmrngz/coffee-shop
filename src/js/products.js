function productFunc(products) {
    const ourProductsDOM = document.querySelector('.home-page-product-slider-1')
    const ourProductsListDOM = document.querySelector('.our-product-list')
    const bestSellingsDOM = document.querySelector('.home-page-product-slider-2')
    const bestSellingsListDOM = document.querySelector('.best-sellings-list')
    const shopPageProductsDOM = document.querySelector('.shop-page-products-wrapper')
    const shopPageProductsListDom = document.querySelector('.shop-page-list')
    const cartQuantity = document.querySelector('.header-right--links .header-cart .cart-count')

    let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []


    function addToCart() {
        const addToCartButtons = document.querySelectorAll('.add-to-cart')
        const cartQuantity = document.querySelector('.header-right--links .header-cart .cart-count')

        addToCartButtons.forEach(btn => {
            const inCart = cart.find(product => product.id === Number(btn.dataset.id))

            if(inCart) {
                btn.setAttribute('disabled', 'disabled')
            }else {
                btn.addEventListener('click', (e) => {
                    const id = e.target.dataset.id
                    const findProduct = products.find(product => product.id === Number(id))
                    cart.push({...findProduct, quantity: 1})
                    btn.setAttribute('disabled', 'disabled')
                    localStorage.setItem('cart', JSON.stringify(cart))
                    cartQuantity.textContent = cart.length
                })
            }
        })
    }
    

    function displayProducts() {
        let result = ""
        let reviewCount = ""

        products.forEach(product => {
            const stockStatus = product.stock ? "In Stock" : "Out Of Stock"
            const btnStockStatus = product.stock ? "Add To Cart" : "Out Of Stock"
            
            function heartCountProductsFunc() {
                if(product.review === 1) {
                    reviewCount = `
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                    `
                }else if(product.review === 1.5) {
                    reviewCount = `
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart-half"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                    `
                }else if(product.review === 2) {
                    reviewCount = `
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                    `
                }else if(product.review === 2.5) {
                    reviewCount = `
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart-half"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                    `
                }else if(product.review === 3) {
                    reviewCount = `
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart-fill"></i>
                        <i class="bi bi-heart"></i>
                        <i class="bi bi-heart"></i>
                    `
                }else if(product.review === 3.5) {
                    reviewCount = `
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-half"></i>
                    <i class="bi bi-heart"></i>
                    `
                }else if(product.review === 4) {
                    reviewCount = `
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart"></i>
                    `
                }else if(product.review === 4.5) {
                    reviewCount = `
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-half"></i>
                    `
                }else if(product.review === 5) {
                    reviewCount = `
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    <i class="bi bi-heart-fill"></i>
                    `
                }

                return reviewCount
            }

            result += `
                <li class="product-item ${ourProductsListDOM && bestSellingsListDOM ? "swiper-slide" : ""}">
                    <a href="#" class="product-link">
                        <div class="product-image">
                            <img src="${product.images.img1}" alt="coffee">
                        </div>
                        <div class="product-info">
                            <div class="stock-reviews">
                                <p class="stock ${product.stock ? "yes-stock" : "no-stock"}">${stockStatus}</p>
                                <div class="reviews">
                                    ${heartCountProductsFunc()}
                                </div>
                            </div>
                            <h3 class="product-name">${product.name}</h3>
                            <div class="prices">
                                <span class="old-price">$${product.price.oldPrice.toFixed(2)}</span>
                                <span class="new-price">$${product.price.newPrice.toFixed(2)}</span>
                            </div>
                        </div>
                    </a>
                    <div class="product-button-wrapper">
                        <button ${!product.stock ? "disabled" : ""} data-id=${product.id} class="btn btn-primary add-to-cart">${btnStockStatus}</button>
                    </div>
                </li>
            `
        })

        ourProductsDOM ? ourProductsListDOM.innerHTML = result : ""
        bestSellingsDOM ? bestSellingsListDOM.innerHTML = result : ""
        shopPageProductsDOM ? shopPageProductsListDom.innerHTML = result : ""

        addToCart()
    }

    displayProducts()
}


export default productFunc