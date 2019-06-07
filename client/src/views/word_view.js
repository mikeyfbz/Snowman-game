const PubSub = require('../helpers/pub_sub.js');

const WordView = function(element){
    this.element = element;
    this.chosenWord = ''
}

WordView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:hidden-word', (event) => {
        const hiddenWord = event.detail
        this.render(hiddenWord);
    })
    PubSub.subscribe('EntryView:guess-word', (event) =>{
        this.chosenWord = event.detail
    })
    PubSub.subscribe('Snowman:correct-guessed-letter', (event) => {
        this.populateWord(event.detail)
    })
}

WordView.prototype.render = function(hiddenWord){
    const word = document.createElement('h3');
    word.textContent = hiddenWord.join(' ');
    this.element.appendChild(word);
}

WordView.prototype.populateWord = function(letter) {
    const index = this.chosenWord.indexOf(letter)
}

module.exports = WordView;