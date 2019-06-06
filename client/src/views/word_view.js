const PubSub = require('../helpers/pub_sub.js');

const WordView = function(element){
    this.element = element;
}

WordView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:hidden-word', (event) => {
        const hiddenWord = event.detail
        this.render(hiddenWord);
        
    })
}

WordView.prototype.render = function(hiddenWord){
    const word = document.createElement('h3');
    word.textContent = hiddenWord.join(' ');
    this.element.appendChild(word);
}

module.exports = WordView;