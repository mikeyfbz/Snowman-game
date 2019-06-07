const PubSub = require('../helpers/pub_sub.js');

const WordView = function(element, container){
    this.element = element;
    this.chosenWord = []
    this.hiddenWord = []
    this.indexArray = []
    this.container = container
}

WordView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:hidden-word', (event) => {
        this.hiddenWord = event.detail
        this.render(this.hiddenWord);
    })
    PubSub.subscribe('EntryView:guess-word', (event) =>{
        this.chosenWord = event.detail.split('')
        this.renderLabel()
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
    this.indexArray = []
    this.chosenWord.forEach((wordLetter, index) => {
        if (letter === wordLetter) {
            this.indexArray.push(index)
            console.log(this.indexArray);
            
        }
    })

    this.indexArray.forEach((index) => {
        this.hiddenWord[index] = letter
    })
    PubSub.publish('WordView:check-word', this.hiddenWord)
    this.render(this.hiddenWord)
}

WordView.prototype.renderLabel = function (){
    const label = document.createElement('label')
    label.textContent = 'Guessed Letters:'
    this.container.appendChild(label)
}



module.exports = WordView;