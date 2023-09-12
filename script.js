const card = document.querySelector('.card')
const cardBack = document.querySelector('.card-back')


card.addEventListener('click' , () => {
    card.classList.toggle('rotated')
    setTimeout(() => {cardBack.classList.toggle('uplayer')},500)
})