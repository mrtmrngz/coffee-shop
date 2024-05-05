function navbarOpen() {
    const navbarOpenBtn = document.querySelector('.navbar-responsive-open')
    const headerCenter = document.querySelector('header .header-center')
    const respNavCloseBtn = document.querySelector('.resp-nav-close')
    
    navbarOpenBtn.addEventListener('click', () => {
        headerCenter.classList.add('show')
    })

    respNavCloseBtn.addEventListener('click', () => {
        headerCenter.classList.remove('show')
    })

    //! Click Outside START
    
    document.addEventListener('click', (e) => {
        if(!e.composedPath().includes(headerCenter) && !e.composedPath().includes(navbarOpenBtn) && !e.composedPath().includes(respNavCloseBtn)) {
            headerCenter.classList.remove('show')
        }
    })

    //! Click Outside END 
}

function searchOpen() {
    const searchOpenBtn = document.querySelector('.search-bar-open-btn')
    const modalSearch = document.querySelector('.modal-search')
    const modalSearchWrapper = document.querySelector('.modal-wrapper')
    const searchCloseBtn = document.querySelector('.close-search-modal')
    
    searchOpenBtn.addEventListener('click', () => {
        modalSearch.classList.add('show')
    })

    searchCloseBtn.addEventListener('click', () => {
        modalSearch.classList.remove('show')
    })

    //! Click Outside START
    
    document.addEventListener('click', (e) => {
        if(!e.composedPath().includes(modalSearchWrapper) && !e.composedPath().includes(searchOpenBtn) && !e.composedPath().includes(searchCloseBtn)) {
            modalSearch.classList.remove('show')
        }
    })

    //! Click Outside END 
}

function headerFunc() {
    navbarOpen()
    searchOpen()
}

export default headerFunc()