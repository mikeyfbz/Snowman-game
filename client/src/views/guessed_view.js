const PubSub = require('../helpers/pub_sub.js')

const GuessedView = function(container, guessed) {
    this.container = container;
    this.guessed = guessed;
}

GuessedView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:incorrect-guessed-letter', (event) => {
        this.guessed.style.visibility = 'hidden';
        const wrongLetter = event.detail
        this.renderLetter(wrongLetter)
    })
    PubSub.subscribe('Snowman:correct-guessed-letter', (event) => {
        this.guessed.style.visibility = 'hidden';
        const rightLetter = event.detail
        this.renderLetter(rightLetter)
    })
    PubSub.subscribe('Snowman:Already-guessed', (event) => {
        this.guessed.style.visibility = 'visible';
    })
}

GuessedView.prototype.renderLetter = function(letter) {
    const letterBox = document.querySelector('#letterBox');
    const guessedLetter = document.createElement('p')
    guessedLetter.textContent = letter
    letterBox.appendChild(guessedLetter)
}



module.exports = GuessedView