const getPuzzle = async (wordCount) => {
    const random = Math.floor(Math.random() * 150) + 1 
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${random}`)
    if(response.status === 200) {
        const data = await response.json() //await waits until its finished
        const pokeName = data.name
        const pokeSprite = data.sprites.front_default
        const lol = [pokeName, pokeSprite, random]
        return lol
    } else {
        throw new Error('Unable to fetch a puzzle for you!')
    }
}