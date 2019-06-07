const PubSub = require('./helpers/pub_sub.js')
const EntryView = require('./views/entry_view.js')
const Snowman = require('./model/snowman.js')
const WordView = require('./views/word_view.js')
const LetterEntryView = require('./views/letter_entry_view.js')
const GuessedView = require('./views/guessed_view.js')

document.addEventListener('DOMContentLoaded', () => {

    const guess = document.querySelector('#guessed_letters')
    const guessedView = new GuessedView(guess)
    guessedView.bindEvents();

    const hiddenWord = document.querySelector('#guess')
    const wordView = new WordView(hiddenWord, guess);
    wordView.bindEvents();
    
    const form = document.querySelector('#enter_word');
    const entryView = new EntryView(form);
    entryView.bindEvents();

    const letter = document.querySelector('#enter_letter')
    const letterEntryView = new LetterEntryView(letter, form);
    letterEntryView.bindEvents();

    const snowman = new Snowman();
    snowman.bindEvents();

})