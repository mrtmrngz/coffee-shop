export function thumbActive() {
    const thumbs = document.querySelectorAll('.product-thumb-list img')
    const singleImage = document.querySelector('.single-image-wrapper img')
    const thumbListItem = document.querySelectorAll('.product-thumb-list .product-thumb-list--item')

    thumbListItem.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector('.product-thumb-list .product-thumb-list--item.active').classList.remove('active')
            btn.classList.add('active')
        })
    })

    thumbs.forEach(thumb => {
        thumb.addEventListener('click', () => {
            singleImage.src = thumb.src
        })
    })
}