const PubSub = require('../helpers/pub_sub.js')

const SnowmanView = function(container){
    this.container = container
}

SnowmanView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:counter', (event) => {
        const counter = event.detail
        this.render(counter)
    })
}

SnowmanView.prototype.render = function(counter){
    this.container.innerHTML = ''
    const displayLives = document.createElement('h2')
    displayLives.textContent = counter
    this.container.appendChild(displayLives)
}


module.exports = SnowmanView