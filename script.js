const characterCard = ({ name, species, status, image }) => { //destructuring again by naming keys from data

    /* const name = characterData.name
    const species = characterData.species
    const status = characterData.status
    const image = characterData.image */

    // const { name, species, status, image } = characterData // DESTRUCTURING :: MUST BE SAME AS KEY

    return ` <div class="card"> 
    <h2>${name}</h2>
    <h3 class="species">${species}</h3>
    <h3>"kismakcsa"</h3>
    <h4>${status}</h4>
    <img src=${image} />
    </div> `
}

const charactersComponent = (charactersData) => `
    <div class="characters">
        ${charactersData.map(characterData => characterCard(characterData)).join("")}
    </div>
`

const makeDomFromData = (data, rootElement) => {
    rootElement.insertAdjacentHTML("beforeend", charactersComponent(data.results))
}

fetch("https://rickandmortyapi.com/api/character")
    .then((response) => response.json())
    .then((data) => {
        console.log(data)

        /* data.results.forEach((characterData) => {
            document.querySelector(`#root`).insertAdjacentHTML("beforeend", `
                <div class="card"> ${characterData.name} </div>
            `)
        }); */

        makeDomFromData(data, document.querySelector(`#root`))
    })