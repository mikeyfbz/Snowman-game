const PubSub = require('../helpers/pub_sub.js')

const EntryView = function (element) {
    this.element = element;

}

EntryView.prototype.bindEvents = function (){
    this.element.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const word = event.target.word.value.toLowerCase();
        PubSub.publish('EntryView:guess-word', event.target);
        // console.log(event.target.difficulty.value)
        this.element.innerHTML = '';
    })
}




module.exports = EntryView;