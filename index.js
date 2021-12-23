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
