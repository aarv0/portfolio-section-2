import { films } from '/films.js'
import { people } from '/people.js'

const intro = document.querySelector('.intro')


console.log(result)

films.forEach ((film) => {
    let tile = document.createElement ('div')

    let titleElement = document.createElement('h1')
    let crawlElement = document.createElement('h3')

    tileElement.textContent = film.title
    crawlElement.textContent = film.opening_crawl

    intro.appendChild(titleElement)
    intro.appendChild(crawlElement)
    intro.appendChild(tile)
})

//let titleElement = document.querySelector('.title')
//let crawlElement = document.querySelector('.crawl')

//titleElement.textContent = films[0].title
//crawlElement.textContent = films[0].opening_crawl
