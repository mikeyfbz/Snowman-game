const PubSub = require('../helpers/pub_sub.js');
const ResultView = require('../views/result_view')

const Snowman = function (){
    this.guessedWord = '';
    this.counter = 6
    this.hiddenWord = []
    this.uniqueLetterArray = []
}

Snowman.prototype.bindEvents = function () {
    PubSub.subscribe('EntryView:guess-word', (event) => {
        this.guessedWord = event.detail;
        this.hiddenWord = this.hideWord();
        PubSub.publish('Snowman:hidden-word', this.hiddenWord)
        PubSub.publish('Snowman:counter', this.counter)
    })
    PubSub.subscribe('LetterEntryView:guessed-letter-ready', (event) => {
        const letter = event.detail
        if(this.uniqueLetterArray.includes(letter)){
            PubSub.publish('Snowman:Already-guessed', letter)
        } else {
            this.uniqueLetterArray.push(letter)
            console.log(this.uniqueLetterArray);
            
            this.checkLetter(letter)
        }
        
    })
    PubSub.subscribe('WordView:check-word', (event) => {
        this.checkWord(event.detail)
    })
}

Snowman.prototype.hideWord = function() {
    const wordArray = this.guessedWord.toLowerCase().split('')
    const hiddenWord = wordArray.map(letter => {
        if(letter === ' '){
            letter = '/'
        } else {
            letter = '_'
        }
        return letter
    })    
    return hiddenWord;
}

Snowman.prototype.checkLetter = function (letter) {
    const containLetter = this.guessedWord.indexOf(letter)
    if (containLetter === -1) {
        PubSub.publish('Snowman:incorrect-guessed-letter', letter)
        this.counter -= 1
        if (this.counter === 0){
            this.loseGame()
        } else {
            PubSub.publish('Snowman:counter', this.counter)
        }
    } else {
        PubSub.publish('Snowman:correct-guessed-letter', letter)
    }
}

Snowman.prototype.loseGame = function(){
    const body = document.querySelector('body')
    const resultView = new ResultView(body)
    resultView.loseGameRender()
}

Snowman.prototype.winGame = function(){
    const body = document.querySelector('body')
    const resultView = new ResultView(body)
    resultView.winGameRender()
}

Snowman.prototype.checkWord = function(wordArray){
    if (wordArray.includes('_')) {
    } else {
        this.winGame()
    }
}

module.exports = Snowman;