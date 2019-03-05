


//1. Setup a new status for peoperty with initial value of playing
//Create a new method for recalculating status to "playing", "finished", or "failed"
// call that method after a guess is processed
// use console log to print the status

class Hangman {
    constructor(word, remaningGueses) {
        this.word = word.toLowerCase().split('')
        this.remaningGueses = remaningGueses
        this.guessedWords = []
        this.status = 'Playing'

    }
    get puzzle() {
        let asterixWord = ''
        //deklaerar asterixword så att den går att fåm tag i hela funktionen
        this.word.forEach((letter) => {
            //forEachar varje "bokstav" i arrayen eftersom den är splittad.
            if (this.guessedWords.includes(letter) || letter === ' ') {
                //Om guessedLetters har bokstaven som foreachas i word(varje index är letter)... gör något [HAR DEN A? GÖR NÅGOT, HAR DEN B? GÖR NÅGOT]
                asterixWord = asterixWord + letter
            }
            else {
                asterixWord = asterixWord + '*'
            }

        })
        return asterixWord
    }
    makeGuess(letter) {

        letter = letter.toLowerCase()
        const isUnqiue = !this.guessedWords.includes(letter)
        const badGuess = !this.word.includes(letter)
        if (this.status !== 'Playing') {
            return
        }
        if (isUnqiue) {
            this.guessedWords.push(letter)
        } if (isUnqiue && badGuess) {
            this.remaningGueses--
        }

        guessedLetterOne.gameStatus()


    }
    gameStatus() {
        /*const finished = this.word.every((letter) => {
        varje letter måste passa funktionen för att det ska funka
        return this.guessedLetters.includes(letter)
    })*/

        if (!guessedLetterOne.puzzle.includes('*') && this.remaningGueses > 0) {
            this.status = 'Finished'

        } else if (this.remaningGueses <= 0) {
            this.status = 'Failed'
        }

        console.log(this.status)
        
        

    }get statusMessage() {
        if (this.status === 'Playing') {
            return `You have ${this.remaningGueses} guesses left`

        } else if (this.status === 'Failed') {
            return `Nice Try! The word was ${this.word.join('')}`

        } else if (this.status === 'Finished') {
            return `Great work you guessed the word`
        }

    } remaining() {
        return guessedLetterOne.remaningGueses
    }

}













