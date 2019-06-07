const PubSub = require('../helpers/pub_sub.js');

const LetterEntryView = function(element, form){
    this.element = element;
    this.form = form;
}

LetterEntryView.prototype.bindEvents = function(){
    this.form.addEventListener('submit', (event) => {
        this.render();
        this.element.addEventListener('submit', (event)=> {
            event.preventDefault();
            const enteredLetter = event.target.enteredLetter.value;
            PubSub.publish('LetterEntryView:guessed-letter-ready', enteredLetter)
            console.log(enteredLetter);
            event.target.reset();
        })
    })
}

LetterEntryView.prototype.render = function (){
    const form = document.createElement('form');
    const label = document.createElement('label')
    label.textContent = "Entry your letter choice:"
    form.appendChild(label);
    const letterEntry = document.createElement('input');
    letterEntry.type = 'text'
    letterEntry.id = 'enteredLetter'
    letterEntry.setAttribute('maxlength', '1');
    form.appendChild(letterEntry);
    const submitButton = document.createElement('input');
    submitButton.type = 'submit';
    form.appendChild(submitButton);
    this.element.appendChild(form);
}

module.exports = LetterEntryView;