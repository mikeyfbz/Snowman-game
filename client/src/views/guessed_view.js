const PubSub = require('../helpers/pub_sub.js')

const GuessedView = function(container) {
    this.container = container
}

GuessedView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:incorrect-guessed-letter', (event) => {
        const wrongLetter = event.detail
        this.renderLetter(wrongLetter)
    })
    PubSub.subscribe('Snowman:correct-guessed-letter', (event) => {
        const rightLetter = event.detail
        this.renderLetter(rightLetter)
    })
    
}

GuessedView.prototype.renderLetter = function(letter) {
    const guessedLetter = document.createElement('p')
    guessedLetter.textContent = letter
    this.container.appendChild(guessedLetter)
}



module.exports = GuessedView