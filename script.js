const cardBtn = document.querySelectorAll('.card-btn')
const modalWrapper = document.querySelector('.modal-wrapper')
const modal = document.querySelector('.modal')
const modalImg = document.querySelector('.modal-img')
const modalTitle = document.querySelector('.modal-title')

function modalElementData(e){
    const element = e.target
    const perent= element.closest('.gallery-card')
    const cardImg = perent.querySelector('.gallery-img')
    const cardTitle = perent.querySelector('.card-title')
    modalImg.src = cardImg.src
    modalImg.alt = cardImg.alt
    modalTitle.textContent = cardTitle.textContent
}

cardBtn.forEach((btn) => {
    btn.addEventListener('click', modalElementData)
})

cardBtn.forEach((btn) => {
    btn.addEventListener('click', () =>{
        modalWrapper.classList.add('modal-wrapper-visible')
        modal.classList.add('show-modal')
    })
})
modalWrapper.addEventListener('click' , (e) =>{
    if(e.target === modalWrapper){
        modalWrapper.classList.remove('modal-wrapper-visible')
        modal.classList.remove('show-modal')
    }   
})






