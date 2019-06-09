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
    if (counter === 9){
      this.container.innerHTML = ''
      const snowmanLives = document.createElement('img')
      snowmanLives.src = '/images/snowman.png'
      this.container.appendChild(snowmanLives)
    }
    else if (counter === 8){
      this.container.innerHTML = ''
      const snowmanLives = document.createElement('img')
      snowmanLives.src = '/images/snowman1.png'
      this.container.appendChild(snowmanLives)
    }
    else if (counter === 7){
      this.container.innerHTML = ''
      const snowmanLives = document.createElement('img')
      snowmanLives.src = '/images/snowman3.png'
      this.container.appendChild(snowmanLives)
    }
    else if (counter === 6){
       this.container.innerHTML = ''
       const snowmanLives = document.createElement('img')
       snowmanLives.src = '/images/snowman4.png'
       this.container.appendChild(snowmanLives)
    }
    else if (counter === 5){
       this.container.innerHTML = ''
       const snowmanLives = document.createElement('img')
       snowmanLives.src = '/images/snowman10.png'
       this.container.appendChild(snowmanLives)
    }
    else if (counter === 4){
       this.container.innerHTML = ''
       const snowmanLives = document.createElement('img')
       snowmanLives.src = '/images/snowman11.png'
       this.container.appendChild(snowmanLives)
    }
    else if (counter === 3){
      this.container.innerHTML = ''
      const snowmanLives = document.createElement('img')
      snowmanLives.src = '/images/snowman12.png'
      this.container.appendChild(snowmanLives)
    }
    else if (counter === 2){
     this.container.innerHTML = ''
     const snowmanLives = document.createElement('img')
     snowmanLives.src = '/images/snowman13.png'
     this.container.appendChild(snowmanLives)
   }
   else if (counter === 1){
    this.container.innerHTML = ''
    const snowmanLives = document.createElement('img')
    snowmanLives.src = '/images/snowman14.png'
    this.container.appendChild(snowmanLives)
  }
}


module.exports = SnowmanView
