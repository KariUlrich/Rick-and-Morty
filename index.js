// definicion de variables

const botonCharacter = document.querySelector(".boton-character")
const seccionSearch = document.querySelector(".seccion-busqueda")
const seccionHeader = document.querySelector(".seccion-header")
const seccionCharacter = document.querySelector(".seccion-character")
const seccionLocation = document.querySelector(".seccion-location")
const botonLocation = document.querySelector(".boton-location")
const seccionEpisode = document.querySelector(".seccion-episode")
const botonEpisode = document.querySelector(".boton-episode")
const botonCharacterBusqueda = document.querySelector(".boton-character-busqueda")
const botonLocationBusqueda = document.querySelector(".boton-location-busqueda")
const botonEpisodeBusqueda = document.querySelector(".boton-episode-busqueda")
const botonPrevPersonajes = document.querySelector(".prev-personjes")
const botonNextPersonajes = document.querySelector(".next-personajes")
const botonPrevLocacion = document.querySelector(".prev-locacion")
const botonNextLocacion = document.querySelector(".next-locacion")
const botonPrevEpisodio = document.querySelector(".prev-episodios")
const botonNextEpisodio = document.querySelector(".next-episodios")

// pagina principal

seccionSearch.style.display = "none"; 
seccionCharacter.style.display = "none";
seccionLocation.style.display = "none";
seccionEpisode.style.display = "none"


// onclic de los botones de navegacion

botonCharacter.onclick = () => {
    seccionSearch.style.display = "flex"; 
    seccionHeader.style.display = "none";
    seccionCharacter.style.display = "flex";
}
botonLocation.onclick = () => {
    seccionSearch.style.display = "flex";
    seccionHeader.style.display = "none";
    seccionCharacter.style.display = "none";
    seccionLocation.style.display = "flex"
}
botonEpisode.onclick = () => {
    seccionSearch.style.display = "flex";
    seccionHeader.style.display = "none";
    seccionCharacter.style.display = "none";
    seccionLocation.style.display = "none";
    seccionEpisode.style.display = "flex"
}

// onclic de los botones busqueda
botonCharacterBusqueda.onclick = () => {
    seccionCharacter.style.display = "flex";
    seccionLocation.style.display = "none";
    seccionEpisode.style.display = "none";
}
botonLocationBusqueda.onclick = () => {
    seccionLocation.style.display = "flex";
    seccionCharacter.style.display = "none";
    seccionEpisode.style.display = "none";
}
botonEpisodeBusqueda.onclick = () => {
    seccionEpisode.style.display = "flex";
    seccionCharacter.style.display = "none";
    seccionLocation.style.display = "none";
}

// get a la api para generear tarjetas de personaje

let paginaActual = 1
let ultimaPagina = 0

const obtenerPersonajes = () => {
    console.log(paginaActual)
    fetch(`https://rickandmortyapi.com/api/character?page=${paginaActual}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)   
    ultimaPagina = data.info.pages
    HTMLTarjetasPersonajes(data.results)
})
}

const HTMLTarjetasPersonajes = (personajes) => {
   const divTarjetasPersonajes = document.querySelector(".tarjetas-personajes")
   const htmlDeTarjetas = personajes.reduce((acc,curr) => {
   return acc + `
        <div class="html-tarjetas personajes">
            <img src="${curr.image}"/>
            <h2>${curr.name}</h2>
        </div>`
}, "")
divTarjetasPersonajes.innerHTML = htmlDeTarjetas
}
obtenerPersonajes()

// get a la api para generear tarjetas de locacion

const obtenerLocaciones = () => {
    fetch(`https://rickandmortyapi.com/api/location?page=${paginaActual}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    HTMLTarjetasLocaciones(data.results)
    })
}

const HTMLTarjetasLocaciones = (locaciones) => {
    const divTarjetasLocaciones = document.querySelector(".tarjetas-locacion")
    const htmlDeTarjetas = locaciones.reduce((acc,curr) => {
    return acc + `
    <div class="html-tarjetas locacion">
            <h2>${curr.name}</h2>
            <p>${curr.dimension}</p>
            <p>${curr.type}</p>
        </div>`
    }, "")
    divTarjetasLocaciones.innerHTML = htmlDeTarjetas
}
obtenerLocaciones()

// get a la api para generear tarjetas de episodios

const obternerEpisodios = () => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${paginaActual}`)
    .then(res => res.json())
    .then(data => {
    console.log(data)
    HTMLTarjetasEpisodios(data.results)
    })
}

const HTMLTarjetasEpisodios = (episodios) => {
    const divTarjetasEpisodios = document.querySelector(".tarjetas-episodios")
    const htmlDeTarjetas = episodios.reduce((acc,curr) => {
    return acc + `
    <div class="html-tarjetas episodios">
            <h2>${curr.name}</h2>
              <div class="episodio-id"> 
                 <p>ID:</p>
                 <p>${curr.id}</p>
              </div>
              <div class="episodio-date">
                 <p>Creation date:</p>
                 <p>${curr.air_date}</p>
              </div>
        </div>`
    }, "")
divTarjetasEpisodios.innerHTML = htmlDeTarjetas
}
obternerEpisodios()

//funcionalidad paginado

botonPrevPersonajes.onclick = () => {
    paginaActual--
    if (paginaActual === 1){
        botonPrevPersonajes.disabled = true  //no funciona
        // botonPrev.classList.add("desabilitado")
    }
    else{
        botonPrevPersonajes.disabled = false
        // botonPrev.classList.remove("desabilitado")
    }
     obtenerPersonajes()
}

botonNextPersonajes.onclick = () => {
    paginaActual++
    if(paginaActual === ultimaPagina){
        botonNextPersonajes.disabled = true
    }
    obtenerPersonajes()
}
botonPrevLocacion.onclick = () => {
    paginaActual--
    if (paginaActual === 1){
        botonPrevLocacion.disabled = true  //no funciona
        // botonPrev.classList.add("desabilitado")
    }
    else{
        botonPrevLocacion.disabled = false
        // botonPrev.classList.remove("desabilitado")
    }
    obtenerLocaciones()
}

botonNextLocacion.onclick = () => {
    paginaActual++
    if(paginaActual === ultimaPagina){
        botonNextLocacion.disabled = true
    }
    obtenerLocaciones()
}
botonPrevEpisodio.onclick = () => {
    paginaActual--
    if (paginaActual === 1){
        botonPrevEpisodio.disabled = true  //no funciona
        // botonPrev.classList.add("desabilitado")
    }
    else{
        botonPrevEpisodio.disabled = false
        // botonPrev.classList.remove("desabilitado")
    }
    obternerEpisodios()
}

botonNextEpisodio.onclick = () => {
    paginaActual++
    if(paginaActual === ultimaPagina){
        botonNextEpisodio.disabled = true
    }
    obternerEpisodios()
}