function searchFunc(products) {
    

    function routeSearchProduct() {
        const resultItemDOM = document.querySelectorAll('.modal-search .search-results .results .result-item')
        
        resultItemDOM.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault()
                const id = item.dataset.id
                if(id) {
                    localStorage.setItem('productId', JSON.stringify(id))
                    window.location.href = "single-product.html"
                }
            })
        })
    }


    function displaySearchProducts() {
        let result = ""
        const searchWrapper = document.querySelector('.modal-search .search-results .results')

        products.forEach(product => {
            result += `
                <a href="#" class="result-item" data-id=${product.id}>
                    <img src="${product.images.img1}" class="search-img">
                    <div class="search-info">
                        <h4 class="result-product-header">${product.name}</h4>
                        <div class="prices">
                            <span class="old-price">$${product.price.oldPrice.toFixed(2)}</span>
                            <span class="new-price">$${product.price.newPrice.toFixed(2)}</span>
                        </div>
                    </div>
                </a>
            `
        })

        searchWrapper.innerHTML = result
        routeSearchProduct()

        //! Search
        
        const searchInputDom = document.getElementById('search-input')
        let value = ""
        let filtered = []
        
        searchInputDom.addEventListener('input', (e) => {
            value = e.target.value
            value.trim().toLowerCase()
            filtered = products.filter(product => product.name.trim().toLowerCase().includes(value))
            
            result = ""
            if(filtered.length > 1) {
                searchWrapper.style.gridTemplateColumns = "1fr 1fr"
                
                filtered.forEach(product => {
                    result += `
                        <a href="#" class="result-item" data-id=${product.id}>
                            <img src="${product.images.img1}" class="search-img">
                            <div class="search-info">
                                <h4 class="result-product-header">${product.name}</h4>
                                <div class="prices">
                                    <span class="old-price">$${product.price.oldPrice.toFixed(2)}</span>
                                    <span class="new-price">$${product.price.newPrice.toFixed(2)}</span>
                                </div>
                            </div>
                        </a>
                    `
                })
                searchWrapper.innerHTML = result
            }else if(filtered.length < 2) {
                searchWrapper.style.gridTemplateColumns = "1fr"

                if(filtered.length === 0) {
                    searchWrapper.innerHTML = '<a href="#" class="result-item" style="justify-content: center;"><span>😔Aradığınız Ürün Bulunamadı😔</span></a>'
                }else {
                    filtered.forEach(product => {
                        result += `
                            <a href="#" class="result-item" data-id=${product.id}>
                                <img src="${product.images.img1}" class="search-img">
                                <div class="search-info">
                                    <h4 class="result-product-header">${product.name}</h4>
                                    <div class="prices">
                                        <span class="old-price">$${product.price.oldPrice.toFixed(2)}</span>
                                        <span class="new-price">$${product.price.newPrice.toFixed(2)}</span>
                                    </div>
                                </div>
                            </a>
                        `
                    })
                    searchWrapper.innerHTML = result
                }
            }

            routeSearchProduct()
        })

    }

    displaySearchProducts()

}


export default searchFunc