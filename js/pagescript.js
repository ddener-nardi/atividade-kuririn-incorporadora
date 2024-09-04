const sendComment = document.querySelector('#send-comment')
const commentInputs = document.querySelector('.comment-inputs')
const checkComment = document.querySelector('.check-comment')
const nameComment = document.querySelector('#name-comment')
const emComment = document.querySelector('#em-comment')
const textComment = document.querySelector('#text-comment')

const validateBtn = () => {
    if(nameComment.value != 0 && emComment.value != 0 && textComment.value != 0){
        sendComment.disabled = false;
    }
}
// events
sendComment.onclick = function(){
    commentInputs.classList.remove('show')
    checkComment.classList.add('show')
}
nameComment.addEventListener('keyup', function(){
    validateBtn()
    console.log(nameComment.value);
})
emComment.addEventListener('keyup', function(){
    validateBtn()
})

textComment.addEventListener('keyup', function(){
    validateBtn()
})
