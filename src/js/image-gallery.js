function gallery() {
    const imageGallery = document.querySelector('.image-gallery')
    const galleries = imageGallery.querySelectorAll('.gallery-wrapper img')
    const fullImageWrapper = document.querySelector('.full-image')
    const fullImage = fullImageWrapper.querySelector('img')
    const closeFullImage = document.querySelector('.close-gallery-btn')
    
    galleries.forEach(img => {
        img.addEventListener('click', () => {
            fullImageWrapper.classList.add('show')
            fullImage.src = img.src
        })
    })

    closeFullImage.addEventListener('click', () => {
        fullImageWrapper.classList.remove('show')
    })

    fullImageWrapper.addEventListener('click', (e) => {
        if(!e.composedPath().includes(fullImage) && !e.composedPath().includes(closeFullImage)) {
            fullImageWrapper.classList.remove('show')
        }
    })

}


function imageGalleryFunc() {
    document.querySelector('.image-gallery') && gallery()
}


export default imageGalleryFunc()