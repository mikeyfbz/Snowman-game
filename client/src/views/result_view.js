const PubSub = require('../helpers/pub_sub.js')

const ResultView = function(container, word){
    this.container = container
    this.word = word
    console.log(this.word)
}

// ResultView.prototype.bindEvents = function() {
//     PubSub.subscribe('EntryView:guess-word', (event) => {
//         this.word = event.detail.word.value
//         console.log(this.word)
//     })
// }

ResultView.prototype.loseGameRender = function(){
    this.container.innerHTML = ''
    const loseMessage = document.createElement('h1')
    loseMessage.textContent = 'YOU LOSE..'
    this.container.appendChild(loseMessage)

    const snowmanLose = document.createElement('img')
    snowmanLose.src = '/images/snowman15.png'
    this.container.appendChild(snowmanLose)

    const lineBreak = document.createElement('br')
    this.container.appendChild(lineBreak)

    const displayWord = document.createElement('h2')
    displayWord.textContent = this.word
    console.log(this.word)
    this.container.appendChild(displayWord)

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

    const snowmanWin = document.createElement('img')
    snowmanWin.src = '/gifs/snowdance.gif'
    this.container.appendChild(snowmanWin)

    const lineBreak = document.createElement('br')
    this.container.appendChild(lineBreak)

    const displayWord = document.createElement('h2')
    displayWord.textContent = this.word
    this.container.appendChild(displayWord)

    const playAgainButton = document.createElement('button')
    playAgainButton.type = 'submit'
    playAgainButton.innerHTML = 'Play Again!'
    playAgainButton.onclick = function(){location.reload()}
    this.container.appendChild(playAgainButton)
}


module.exports = ResultView
