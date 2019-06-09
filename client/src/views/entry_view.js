const PubSub = require('../helpers/pub_sub.js')

const EntryView = function (element) {
    this.element = element;
}

EntryView.prototype.bindEvents = function (){
    this.element.addEventListener('submit', (event) => {
        event.preventDefault();

        const snowman = document.querySelector('#snowman')
        snowman.style.height = '300px';
        snowman.style.width = '300px';

        const word = event.target.word.value.toLowerCase();
        PubSub.publish('EntryView:guess-word', word);
        this.element.innerHTML = '';
    })
}




module.exports = EntryView;
