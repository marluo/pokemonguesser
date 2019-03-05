// Primitive Value string, number, boolean, null, undefined

// Object: MyObject  --> Object.prototype --> null
// Array: myArray --> Array.prototype --> object.prototype --> null.
// Function: myFunc --> Function.prototpe --> Object.prototype --> null.
//String: MyString --> String.prototype --> Object.prototype -- > null.
//number: myNumber --> number.prototype --> Object.prototype --> null.
//Boolean: MyBoolean --> boolean.prototype --> Object.prototype --> null.
//HTTP (Hypertext Transfer Protocol)
// Request - what do we want to do ((when u enter a page, http request))
//Response - what was actually done


let hangmanWord = document.querySelector("#puzzleText")
let guessesLeft = document.querySelector('#guessesLeft')
let hangmanImage = document.querySelector('#hangyman')
var img = document.createElement("img");
img.src = `hangman8.png`
src = document.querySelector('#hangyman')
src.appendChild(img)




//*hangmanWord.textContent = guessedLetterOne.puzzle
//*guessesLeft.textContent = guessedLetterOne.statusMessage



window.addEventListener('keypress', (e) => {
    const keypress = String.fromCharCode(e.charCode)
    guessedLetterOne.makeGuess(keypress)
    guessedLetterOne.statusMessage
    let remaining = guessedLetterOne.remaining()
    console.log(remaining)
    render()
})

const render = () => {
    hangmanWord.innerHTML = ''
    guessesLeft.textContent = guessedLetterOne.statusMessage

    
    const splitWord = guessedLetterOne.puzzle.split('')
    splitWord.forEach((letter) =>{
        let spanCreate = document.createElement('span')
        spanCreate.textContent = letter
        hangmanWord.appendChild(spanCreate)
        guessesLeft.textContent = guessedLetterOne.statusMessage
    })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    guessedLetterOne = new Hangman(puzzle[0], 8)
    img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${puzzle[2]}.png`
    render()
}

document.querySelector('#hej').addEventListener('click', startGame)

startGame()

/*getPuzzle('2').then((puzzle) => {
    console.log(puzzle)
}).catch((error) => {
    console.log(`error ${error}`)
})*/

/*
getLocation().then((geoLocation) => {
    return getCountry(geoLocation.country)
}).then((country) => {
    console.log(country.name)
}).catch ((error) => {
    console.log(`Errorxx`)
})



getCurrentCountry().then((country) => {
    console.log('lol', country.name)

}).catch((error) => {
    'You screwed up!'

})
/*

/*fetch('http://puzzle.mead.io/puzzle', {}).then((response) => {
    //med fetch behöver vi itne kolla på status
    if(response.status === 200) {
        return response.json()

    } else {
        throw new Error('Kunde inte fetcha puzzlet')
    }

}).then((data) => {
    //passar in "puzzlet/ordet" som argument
    console.log(data.puzzle)

}).catch((error) =>{
    console.log(error)
})*/

/* ________________GET THE FULL COUNTRY WITH NAME_______________________*/
/*let fullLocation = ''*/

/*---------------------*/

/*
getLocation().then((location) => {
    fullLocation += `You are from ${location.city}, ${location.region}, `
    return getCountry(location.country)
}).then((country) => {
    console.log(fullLocation += country.name)
}).catch((err) => {
    console.log(`Error: ${err}`)
})
*/













/*const team = ['Luke', 'Madison']
//const array = new Array(['Luke', 'Madison'])
console.log(team.hasOwnProperty('length'))*/


/*const getScore = () => 1
console.log(getScore)

const product = 'Computer' //gets converted to a object if u use an method on it. Is an object wrapper
console.log(product.split(''))

const otherProduct = new String('Phone') //converts it to an object, and calls the method on it.
console.log(otherProduct)*/




/*const product = new Object({
    name:Marcus
})

product.name = 'Rest'

Object.prototype.someNewMethod = () => 'new function'


// hasOwnProperty - Vi kan kolla om objektet har en property, return true, annars false
console.log(product.hasOwnProperty('hasOwnProperty'))
console.log(product)*/