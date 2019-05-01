import { people } from 'people.js'
import { planets } from 'planets.js'

const getLastNumber = (url) => {
    let end = url.lastIndexOf('/')
    let start = end -2

    if(url.charAt(start) === '/') {
        start++
    }
   return url.slice(start, end)
}

const allHomeWorlds = people.map(person => {
    let foundWorld = planets.find(planet => {
        return planet.url === person.homeworld
    })
    let imageURL = getLastNumber(person.url)
    return {
        name: person.name,
        home: foundWorld.name,
        eye_color: person.eye_color,
        imagePath: `https://starwars-visualguide.com/assets/img/characters/${imageURL}.jpg`,
    }
})

/*console.log(allHomeWorlds)*/



/*https://starwars-visualguide.com/assets/img/characters/1.jpg*/

const mainContainer = document.createElement('div')
mainContainer.className = 'container'

allHomeWorlds.forEach((person) => {
    let personElement = document.createElement('div')
    let planetElement = document.createElement('h1')
    let imageElement = document.createElement('img')

    personElement.className = 'box'
    personElement.textContent = person.name
    planetElement.textContent = person.home
    imageElement.src = person.imagePath

    personElement.appendChild(planetElement)
    personElement.appendChild(imageElement)
    mainContainer.appendChild(personElement)
})

document.body.appendChild(mainContainer)








// -------------------
//console.log(createCard)
// swPerson.forEach((swPerson) => {
//   fetch(swPerson.url)
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(myJson) {
//       allFetchedPeople.push(myJson)
//       createCard(myJson)
//       createCard(matchIdToImage(myJson))
//     })
// })

// -----------------

// function fetchSinglePerson(id) {
//   fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
//     .then(function(response) {
//       return response.json()
//     })
//     .then(function(retrievedPerson) {
//       createPokeCard(retrievedPerson)
//     //   createPokeCard(matchIdToImage(retrievedPerson))
//     })
// }

// const newButton = document.querySelector('#new')
// const findButton = document.querySelector('#fetchPerson')

// newButton.addEventListener('click', function() {
//     let pokeName = prompt('Create a new Pokemon!:')
//     createPokeCard(new Pokemon(pokeName))
// })

// selectPokemonButton.addEventListener('click', function() {
//     let pokemonID = prompt('Enter an ID of an existing pokemon:')
//     fetchSinglePokemon(pokemonID)
// })

// --------------------------------------------------------------------------------------------------------------------

// const mainContainer = document.querySelector(".container")

// allHomeWorlds.forEach((person) => {
//     let personElement = document.createElement('div')
//     let planetElement = document.createElement('h1')
//     let skinElement = document.createElement('h1')
//     let eyeElement = document.createElement('h1')
//     let hairElement = document.createElement('h1')
//     let imageElement = document.createElement('img')

//     let strHome = "Homeworld: "
//     let strSkin = "Skin Color: "
//     let strEye = "Eye Color: "
//     let strHair = "Hair Color: "

//     personElement.className = 'box'
//     personElement.textContent = person.name
//     planetElement.textContent = strHome + person.home
//     skinElement.textContent = strSkin + person.skin
//     eyeElement.textContent = strEye + person.eye
//     hairElement.textContent = strHair + person.hair

//     imageElement.src = person.imagePath

//     personElement.appendChild(planetElement)
//     personElement.appendChild(skinElement)
//     personElement.appendChild(eyeElement)
//     personElement.appendChild(hairElement)
//     personElement.appendChild(imageElement)
//     mainContainer.appendChild(personElement)
// })

// document.body.appendChild(mainContainer)
