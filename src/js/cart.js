const cartWrapper = document.querySelector('.shop-table-wrapper .cart-wrapper')
let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []

function displayCartProducts() {
    let result = ""
    cart.forEach(product => {
        result += `
            <tr class="cart-item">
                <td></td>
                <td class="cart-image">
                    <img src="${product.images.img1}" alt="coffee">
                    <i data-id=${product.id} class="bi bi-x delete-cart"></i>
                </td>
                <td class="product-name">${product.name}</td>
                <td class="product-price">$${product.price.newPrice.toFixed(2)}</td>
                <td class="product-quantity">${product.quantity}</td>
                <td class="product-quantity">$${(product.price.newPrice * product.quantity).toFixed(2)}</td>
            </tr>
        `
    })

    cartWrapper ? cartWrapper.innerHTML = result : ""
    removeCart()
}

displayCartProducts()


function removeCart() {
    const deleteCartButtons = document.querySelectorAll('.delete-cart')
    const cartQuantity = document.querySelector('.header-right--links .header-cart .cart-count')
    
    deleteCartButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const id = e.target.dataset.id
            cart = cart.filter(product => product.id !== Number(id))
            displayCartProducts()
            localStorage.setItem('cart', JSON.stringify(cart))
            cartQuantity.textContent = cart.length
            saveCartValues()
        })
    })
}

function saveCartValues() {
    const subTotal = document.querySelector('.cart-page .subtotal')
    const cartTotal = document.querySelector('.cart-page .cart-total')
    const fastCargo = document.querySelector('#fast-cargo')
    const fastCargoPrice = 12
    let itemsTotal = 0
    
    cart.length > 0 && cart.map(product => itemsTotal += product.price.newPrice * product.quantity)
    
    subTotal.textContent = `$${itemsTotal.toFixed(2)}`
    cartTotal.textContent = `$${itemsTotal.toFixed(2)}`

    fastCargo.addEventListener('change', (e)=> {
        if(e.target.checked) {
            cartTotal.textContent = `$${(itemsTotal + fastCargoPrice).toFixed(2)}`
        }else {
            cartTotal.textContent = `$${itemsTotal.toFixed(2)}`
        }
    })
}

saveCartValues()