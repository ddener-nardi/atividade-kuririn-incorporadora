const category = document.querySelectorAll('.category')
const lots = document.querySelectorAll('.lots')


// functions

const modifyRow = (index) => {
    lots.forEach((lot) =>{
        lot.classList.remove('active')
    })
    console.log(index)
    lots[index].classList.add('active')
}
// events
let oldCat = document.querySelector('.category.active')
category.forEach((cat, i) => {
    cat.addEventListener('click', function(){
        actualCat = cat
        cat.classList.add('active')
        oldCat.classList.remove('active')
        oldCat = actualCat
        modifyRow(i)
    })
})