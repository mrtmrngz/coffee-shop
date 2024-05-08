function tabPanel() {
    const tabButtons = document.querySelector('.tab-list')
    const btnTab = document.querySelectorAll('.tab-button')
    const contentDom = document.querySelectorAll('.tab-panel .content')

    tabButtons.addEventListener('click', (e) => {
        e.preventDefault()
        const id = e.target.dataset.id
        if(id) {
            btnTab.forEach(btn => btn.classList.remove('active'))
            e.target.classList.add('active')
            contentDom.forEach(content => content.classList.remove('active'))
            const element = document.getElementById(id)
            element.classList.add('active')
        }
    })
}


export default tabPanel()