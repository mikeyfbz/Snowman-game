const ResultView = function(container){
    this.container = container
}

ResultView.prototype.loseGameRender = function(){
    this.container.innerHTML = ''
    const loseMessage = document.createElement('h1')
    loseMessage.textContent = 'YOU LOSE'
    this.container.appendChild(loseMessage)
}

ResultView.prototype.winGameRender = function(){
    this.container.innerHTML = ''    
    const winMessage = document.createElement('h1')
    winMessage.textContent = 'YOU WIN'
    this.container.appendChild(winMessage)
}


module.exports = ResultView