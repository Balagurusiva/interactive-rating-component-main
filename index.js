let numbercontainer = document.querySelector('.button-container');
let score = document.querySelector('.score');
let submit = document.querySelector('.submit');
let card = document.querySelector('.card');
let secondCard = document.querySelector('.second-card');
numbercontainer.addEventListener('click', (event) => {
    let numberSelected = event.target.innerText;
    score.innerText = numberSelected;
    if (numberSelected.length==1) {
        submit.addEventListener('click', () => {
        card.style.display = 'none';
        secondCard.style.display = 'flex';
        
    });
    }
    
});
