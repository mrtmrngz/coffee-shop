const hearts = document.querySelectorAll('.hearts-list')
function commentHeartFunc() {
    
    hearts.forEach(heart => {
        heart.addEventListener('click', (e) => {
            e.preventDefault()
            hearts.forEach(item => item.classList.remove('active'))
            heart.classList.add('active')
        })
    })
}


function addCommentFunc() {
    let comments = localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : []
    const commentList = document.querySelector('.comments .comment-list')
    let commentTextDom = document.querySelector('.comment-textarea')
    let commentNameDom = document.querySelector('.comment-name')
    let commentAddBtn = document.querySelector('.add-comment-btn')
    let commentText = ""
    let commentName = ""
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ]
    let today = new Date()
    let year = today.getFullYear()
    let month = monthNames[today.getMonth()]
    let date = today.getDate()

    commentTextDom.addEventListener('input', (e) => {
        commentText = e.target.value
    })

    commentNameDom.addEventListener('input', (e) => {
        commentName = e.target.value
        console.log(commentName);
    })

    commentAddBtn.addEventListener('click', addComment)

    function addComment(e) {
        e.preventDefault()
        comments.push({commentDescription: commentText, author: commentName, commentMonth: month, commentDate: date, commentYear: year})
        commentNameDom.value = ""
        commentTextDom.value = ""
        localStorage.setItem('comments', JSON.stringify(comments))
        displayComments()
    }

    function displayComments() {
        let result = ""
        
        if(comments.length === 0) {
            commentList.innerHTML = '<li class="no-comment-warning">No Comment</li>'
        }else {
            comments.forEach(comment => {
                result += `
                    <li class="comment-item">
                        <div class="comment-avatar">
                            <img src="./src/img/avatar/person.jpg">
                        </div>
                        <div class="comment-text">
                            <ul class="commnet-heart">
                                <li><i class="bi bi-heart-fill"></i></li>
                                <li><i class="bi bi-heart-fill"></i></li>
                                <li><i class="bi bi-heart-fill"></i></li>
                                <li><i class="bi bi-heart-half"></i></li>
                                <li><i class="bi bi-heart"></i></li>
                            </ul>
                            <div class="comment-meta">
                                <strong>${comment.author}</strong>
                                <span>-</span>
                                <time>${comment.commentMonth} ${comment.commentDate}, ${comment.commentYear}</time>
                            </div>
                            <div class="comment-description">
                                <p>
                                    ${comment.commentDescription}
                                </p>
                            </div>
                        </div>
                    </li>
                `
            })

            commentList.innerHTML = result
        }
    }

    displayComments()
}




function commentFunc() {
    commentHeartFunc()
    addCommentFunc()
}


export default commentFunc()