let selectedNumber = null;
const ratingNumbers = document.querySelectorAll('.rating-number');
const submmitButton = document.querySelector('#submit')
const mainComponent = document.querySelector('#main-component')
const thankYouComponent = document.querySelector('#thank-you-component')
const ratingSpan = document.querySelector('#rating')

ratingNumbers.forEach(item => {
    item.addEventListener('click', event => {
        if(selectedNumber) {
            selectedNumber.classList.remove("selected");
        }
        event.target.classList.add("selected");
        selectedNumber = event.target;
    })
})

submmitButton.addEventListener('click', event => {
    if(selectedNumber) {
        ratingSpan.textContent = selectedNumber.textContent;
        mainComponent.classList.add('hidden');
        thankYouComponent.classList.remove('hidden');
    }
})

