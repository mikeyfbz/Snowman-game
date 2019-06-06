const PubSub = require('../helpers/pub_sub.js');

const Snowman = function (){
    this.guessedWord = '';
}

Snowman.prototype.bindEvents = function () {
    PubSub.subscribe('EntryView:guess-word', (event) => {
        this.guessWord = event.detail;
        const hiddenWord = this.hideWord();
        PubSub.publish('Snowman:hidden-word', hiddenWord)
    })
}

Snowman.prototype.hideWord = function() {
    const wordArray = this.guessWord.toLowerCase().split('')
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



module.exports = Snowman;