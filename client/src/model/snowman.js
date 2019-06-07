const PubSub = require('../helpers/pub_sub.js');

const Snowman = function (){
    this.guessedWord = '';
}

Snowman.prototype.bindEvents = function () {
    PubSub.subscribe('EntryView:guess-word', (event) => {
        this.guessedWord = event.detail;
        const hiddenWord = this.hideWord();
        PubSub.publish('Snowman:hidden-word', hiddenWord)
    })
    PubSub.subscribe('LetterEntryView:guessed-letter-ready', (event) => {
        const letter = event.detail
        this.checkLetter(letter)
    })
}

Snowman.prototype.hideWord = function() {
    const wordArray = this.guessedWord.toLowerCase().split('')
    const hiddenWord = wordArray.map(letter => {
        if(letter === ' '){
            letter = '/'
        } else {
            letter = '_'
        }
        return letter
    })    
    return hiddenWord;
}

Snowman.prototype.checkLetter = function (letter) {

    const containLetter = this.guessedWord.indexOf(letter)
    if (containLetter === -1) {
        PubSub.publish('Snowman:incorrect-guessed-letter', letter)
    } else {
        PubSub.publish('Snowman:correct-guessed-letter', letter)
    }
}



module.exports = Snowman;