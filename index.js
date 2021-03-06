// definicion de variables
const imagenInicio = document.querySelector(".imagen-inicio")
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

const seccionDetallePersonaje = document.querySelector(".detalle-personaje")
const inputBusquedaPersonaje = document.querySelector("#busqueda-input")
const formCharacter = document.querySelector(".form-character")
const inputBusquedaLocation = document.querySelector("#busqueda-input-location")
const formLocation = document.querySelector(".form-location")
const inputBusquedaEpisode = document.querySelector("#busqueda-input-episode")
const formEpisode = document.querySelector(".form-episode")
const botonesBusqueda = document.querySelector(".botones-busqueda")
const menuMobile = document.querySelector(".menu-mobile")
const botonHamburguesa = document.querySelector(".boton-hamburguesa")
const divNotFound = document.querySelector(".div-not-found")


// pagina principal
seccionSearch.style.display = "none"; 
seccionCharacter.style.display = "none";
seccionLocation.style.display = "none";
seccionEpisode.style.display = "none";
seccionDetallePersonaje.style.display = "none"
divNotFound.style.display = "none"


// onclic de los botones de navegacion

// funcion unica - por ejemplo

// const secciones = [
//     seccionSearch, 
//     seccionHeader, 
//     seccionCharacter, 
//     seccionLocation, 
//     seccionEpisode, 
//     seccionDetallePersonaje, 
//     divNotFound
// ]

// const ocultarSecciones = (seccion) => {
//     secciones.forEach(seccionAOcultar => seccionAOcultar.style.display = "none")
//     seccion.style.display = "flex"
//     seccionSearch.style.display = "flex"
// }
// botonCharacter.onclick = () => ocultarSecciones(seccionCharacter)
// botonLocation.onclick = () => ocultarSecciones(seccionLocation)
// botonEpisode.onclick = () =>  ocultarSecciones(seccionEpisode)


botonCharacter.onclick = () => {
    seccionSearch.style.display = "flex"; 
    seccionHeader.style.display = "none";
    seccionCharacter.style.display = "flex";
    seccionLocation.style.display = "none"
    seccionEpisode.style.display = "none"
    seccionDetallePersonaje.style.display = "none"  
    divNotFound.style.display = "none"  
}
botonLocation.onclick = () => {
    seccionSearch.style.display = "flex";
    seccionHeader.style.display = "none";
    seccionCharacter.style.display = "none";
    seccionLocation.style.display = "flex"
    seccionEpisode.style.display = "none"
    seccionDetallePersonaje.style.display = "none"
}
    
botonEpisode.onclick = () => {
    seccionSearch.style.display = "flex";
    seccionHeader.style.display = "none";
    seccionCharacter.style.display = "none";
    seccionLocation.style.display = "none";
    seccionEpisode.style.display = "flex"
    seccionDetallePersonaje.style.display = "none"    
}
    
// onlcik de la imagen para ir al header/seccion principal
imagenInicio.onclick = () => {
    seccionHeader.style.display = "flex";
    seccionSearch.style.display = "none"; 
    seccionCharacter.style.display = "none";
    seccionLocation.style.display = "none"
    seccionEpisode.style.display = "none"
    seccionDetallePersonaje.style.display = "none"
    
}

// onclic de los botones busqueda
// No creo que sea necesario obtener personajes, locaciones y episodios cada vez. 
//  No es posible solo buscar personajes con personajes, locaciones con locaciones, etc?
botonCharacterBusqueda.onclick = () => {
    seccionCharacter.style.display = "flex";
    seccionLocation.style.display = "none";
    seccionEpisode.style.display = "none";
    seccionDetallePersonaje.style.display = "none"
    divNotFound.style.display = "none"
    inputBusquedaPersonaje.value = ""
    inputBusquedaLocation.value = ""
    inputBusquedaEpisode.value = ""
    obtenerPersonajes()
    obtenerLocaciones()
    obternerEpisodios()
}
botonLocationBusqueda.onclick = () => {
    seccionLocation.style.display = "flex";
    seccionCharacter.style.display = "none";
    seccionEpisode.style.display = "none";
    seccionDetallePersonaje.style.display = "none"
    divNotFound.style.display = "none"
    inputBusquedaLocation.value = ""
    inputBusquedaPersonaje.value = ""
    inputBusquedaEpisode.value = ""
    obtenerPersonajes()
    obtenerLocaciones()
    obternerEpisodios()
}
botonEpisodeBusqueda.onclick = () => {
    seccionEpisode.style.display = "flex";
    seccionCharacter.style.display = "none";
    seccionLocation.style.display = "none";
    seccionDetallePersonaje.style.display = "none"
    divNotFound.style.display = "none"
    inputBusquedaEpisode.value = ""
    inputBusquedaPersonaje.value = ""
    inputBusquedaLocation.value = ""
    obtenerPersonajes()
    obtenerLocaciones()
    obternerEpisodios()
}

// get a la api para generear tarjetas de personaje
let paginaActual = 1
let ultimaPagina = 0

const obtenerPersonajes = () => {
    fetch(`https://rickandmortyapi.com/api/character?page=${paginaActual}`)
    .then(res => res.json())
    .then(data => {
    ultimaPagina = data.info.pages
    HTMLTarjetasPersonajes(data.results)
    clickTarjetaDeCadaPersonaje()
    })
}
const HTMLTarjetasPersonajes = (personajes) => {
   const divTarjetasPersonajes = document.querySelector(".tarjetas-personajes")
   const htmlDeTarjetas = personajes.reduce((acc,curr) => {
   return acc + `
        <div class="html-tarjetas personajes" data-id=${curr.id}>
            <img class="imagen-personaje" src="${curr.image}"/>
            <h2>${curr.name}</h2>
        </div>`
   }, "")

    if (paginaActual === 1) {
        botonPrevPersonajes.disabled = true
    }
    else{
        botonPrevPersonajes.disabled = false
    }
divTarjetasPersonajes.innerHTML = htmlDeTarjetas
}
obtenerPersonajes()

// click de cada tarjeta de personaje para ver el detalle con el fetch y armar el HTML
const HTMLDeLaSeccionDetalleDelPersonaje = (curr) =>{
        seccionDetallePersonaje.innerHTML = 
           `<div class="tarjeta-detalle-personaje">
              <div class="div-principal">
               <img src="${curr.image}"/>
               <h2>${curr.name}</h2>
              </div>
              <div class="div-info">
               <p>Gender: ${curr.gender}</p>
               <p>Location: ${curr.location.name}</p>
               <p>Origin: ${curr.origin.name}</p>
               <p>Species: ${curr.species}</p>
               <p>Status: ${curr.status}</p>
               <div class="div-boton-back">
               <button class="boton-back">Back</button>
               </div>  
              </div>                        
            </div>`
            const botonBack = document.querySelector(".boton-back")
            botonBack.onclick = () => {
                seccionCharacter.style.display = "flex";
                seccionLocation.style.display = "none";
                seccionEpisode.style.display = "none";
                seccionDetallePersonaje.style.display = "none"
            }
}
const getDelPersonaje = (id) => {
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json())
    .then(data => {
      HTMLDeLaSeccionDetalleDelPersonaje(data)
    })
}
const clickTarjetaDeCadaPersonaje = () => {
    const personajes = document.querySelectorAll(".personajes")
    for (let i = 0; i < personajes.length; i++) {
        personajes[i].onclick = () => {
        const personajeID = personajes[i].dataset.id
        getDelPersonaje(personajeID)
        seccionSearch.style.display = "flex"; 
        seccionCharacter.style.display = "none";
        seccionDetallePersonaje.style.display = "flex"
        }
    }
}

// get a la api para generear tarjetas de locacion
const obtenerLocaciones = () => {
    fetch(`https://rickandmortyapi.com/api/location?page=${paginaActual}`)
    .then(res => res.json())
    .then(data => {
    HTMLTarjetasLocaciones(data.results)
    })
}
const HTMLTarjetasLocaciones = (locaciones) => {
    const divTarjetasLocaciones = document.querySelector(".tarjetas-locacion")
    const htmlDeTarjetas = locaciones.reduce((acc,curr) => {
    return acc + `
    <div class="html-tarjetas locacion">
            <img src="pictures/locaciones.jpg">
            <h2>${curr.name}</h2>
            <p>${curr.dimension}</p>
            <p>${curr.type}</p>
        </div>`
    }, "")
    if(paginaActual === 1){
        botonPrevLocacion.disabled = true}
        else{
            botonPrevLocacion.disabled = false
        }
    divTarjetasLocaciones.innerHTML = htmlDeTarjetas
}
obtenerLocaciones()

// get a la api para generear tarjetas de episodios
const obternerEpisodios = () => {
    fetch(`https://rickandmortyapi.com/api/episode?page=${paginaActual}`)
    .then(res => res.json())
    .then(data => {
    HTMLTarjetasEpisodios(data.results)
    })
}
const HTMLTarjetasEpisodios = (episodios) => {
    const divTarjetasEpisodios = document.querySelector(".tarjetas-episodios")
    const htmlDeTarjetas = episodios.reduce((acc,curr) => {
    return acc + `
    <div class="html-tarjetas episodios">
            <img src="pictures/episodio.jpg">
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
    if(paginaActual === 1){
        botonPrevEpisodio.disabled = true}
        else{
            botonPrevEpisodio.disabled = false
        }
divTarjetasEpisodios.innerHTML = htmlDeTarjetas
}
obternerEpisodios()

//funcionalidad paginado
botonPrevPersonajes.onclick = () => {
    paginaActual--
    if (paginaActual === 1){
        botonPrevPersonajes.disabled = true
    }
    else{
        botonPrevPersonajes.disabled = false
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
        botonPrevLocacion.disabled = true 
    }
    else{
        botonPrevLocacion.disabled = false
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
        botonPrevEpisodio.disabled = true  
    }
    else{
        botonPrevEpisodio.disabled = false
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

//SEARCH X NOMBRE EN LOS ENDPOINTS
// funcionalidad search de personajes por nombre
formCharacter.onsubmit = (e) => {
    e.preventDefault()
    searchPorNombreCharacter(inputBusquedaPersonaje.value)
}
// onlcick para que se borre el not-found
inputBusquedaPersonaje.onclick = () => {
    divNotFound.style.display = "none"
}

const searchPorNombreCharacter = (nombre) => {
    fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
    .then(res => res.json())
    .then(data =>{
     HTMLTarjetasPersonajes(data.results)
     console.log(data.results)
    })
    .catch(()=>{
        divNotFound.style.display = "flex"  
    })
    botonPrevPersonajes.style.display = "none"
    botonNextPersonajes.style.display = "none"
}

// funcionalidad search de locacion por nombre
formLocation.onsubmit = (e) => {
    e.preventDefault()
    searchPorNumeroLocation(inputBusquedaLocation.value)    
}
// onlcick para que se borre el not-found
inputBusquedaLocation.onclick = () => {
    divNotFound.style.display = "none"
}
const searchPorNumeroLocation = (nombre) => {
    fetch(`https://rickandmortyapi.com/api/location/?name=${nombre}`)
    .then(res => res.json())
    .then(data =>{
    HTMLTarjetasLocaciones(data.results)
    })
    .catch(()=>{
        divNotFound.style.display = "flex"  
    })
    botonPrevLocacion.style.display = "none"
    botonNextLocacion.style.display = "none"
}
// funcionalidad search de episodio por nombre
formEpisode.onsubmit = (e) => {
    e.preventDefault()
    searchPorNombreEpisode(inputBusquedaEpisode.value)   
}
// onlcick para que se borre el not-found
inputBusquedaEpisode.onclick = () => {
    divNotFound.style.display = "none"
}
const searchPorNombreEpisode = (nombre) => {
    fetch(`https://rickandmortyapi.com/api/episode/?name=${nombre}`)
    .then(res => res.json())
    .then(data =>{
    HTMLTarjetasEpisodios(data.results)
    })
    .catch(()=>{
        divNotFound.style.display = "flex"  
    })
    botonPrevEpisodio.style.display = "none"
    botonNextEpisodio.style.display = "none"
}

//funcionalidad menu mobile
botonHamburguesa.onclick = () => {
    botonesBusqueda.style.display = "flex";
    menuMobile.style.display = "none"
}


