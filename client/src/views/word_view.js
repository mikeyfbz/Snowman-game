const PubSub = require('../helpers/pub_sub.js');

const WordView = function(element){
    this.element = element;
    this.chosenWord = ''
    this.hiddenWord = []
}

WordView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:hidden-word', (event) => {
        this.hiddenWord = event.detail
        this.render(this.hiddenWord);
    })
    PubSub.subscribe('EntryView:guess-word', (event) =>{
        this.chosenWord = event.detail
    })
    PubSub.subscribe('Snowman:correct-guessed-letter', (event) => {
        this.populateWord(event.detail)
    })
}

WordView.prototype.render = function(hiddenWord){
    this.element.innerHTML = '';
    const word = document.createElement('h3');
    word.textContent = hiddenWord.join(' ');
    this.element.appendChild(word);
}

WordView.prototype.populateWord = function(letter) {
    const index = this.chosenWord.indexOf(letter)
    this.hiddenWord[index] = letter
    this.render(this.hiddenWord)
}

// WordView.prototype.renderLetter = function (hiddenWord)

module.exports = WordView;