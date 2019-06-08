const ResultView = function(container){
    this.container = container
}

ResultView.prototype.loseGameRender = function(){
    this.container.innerHTML = ''
    const loseMessage = document.createElement('h1')
    loseMessage.textContent = 'YOU LOSE..'
    this.container.appendChild(loseMessage)
    const tryAgainButton = document.createElement('button')
    tryAgainButton.type = 'submit'
    tryAgainButton.innerHTML = 'Play Again!'
    tryAgainButton.onclick = function(){location.reload()}
    this.container.appendChild(tryAgainButton)

}

ResultView.prototype.winGameRender = function(){
    this.container.innerHTML = ''    
    const winMessage = document.createElement('h1')
    winMessage.textContent = 'YOU WIN!!'
    this.container.appendChild(winMessage)
    const playAgainButton = document.createElement('button')
    playAgainButton.type = 'submit'
    playAgainButton.innerHTML = 'Play Again!'
    playAgainButton.onclick = function(){location.reload()}
    this.container.appendChild(playAgainButton)
}


module.exports = ResultView