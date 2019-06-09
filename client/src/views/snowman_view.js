const PubSub = require('../helpers/pub_sub.js')
const Melt = require('../model/melt.js')

const SnowmanView = function(container){
    this.container = container
}

SnowmanView.prototype.bindEvents = function(){
    PubSub.subscribe('Snowman:difficulty', (event) => {
        const difficulty = event.detail
        if (difficulty === 'easy') {
          const melt = new Melt(this.container)
          melt.renderEasy()
        } else {
          const melt = new Melt(this.container)
          melt.renderHard()
        }
    })
}




module.exports = SnowmanView
