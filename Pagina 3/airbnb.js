// Gestione caricamento pagine
const PATH_PAGINA_AIRBNB = "airbnbMioCSS.html";

function caricaAirbnbHome() {
  console.log("Funzione caricaPaginaAirbnb eseguita!");
  caricaPagina(PATH_PAGINA_AIRBNB);
}

function caricaPagina(pagina) {
  // console.log("caricaPagina ", pagina)
  window.location.replace(pagina);
}

