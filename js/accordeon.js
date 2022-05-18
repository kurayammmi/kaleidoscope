const items = document.querySelectorAll('.services__item-title');

items.forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('active')
    })
})

// reviews accordeon
const itemsReviews = document.querySelectorAll('.reviews__item-title');

itemsReviews.forEach(item => {
    item.addEventListener('click', () => {
        item.parentNode.classList.toggle('reviews-active')
    })
})