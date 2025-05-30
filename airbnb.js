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

const ospiti = {
  adulti: 2,
  bambini: 0,
  animaliDomestici: 0,
};

function incrementaOspite(type) {
  ospiti[type]++;
  document.getElementById(`${type}Count`).textContent = ospiti[type];
}

function decrementaOspite(type) {
  if (ospiti[type] > 0) {
    ospiti[type]--;
    document.getElementById(`${type}Count`).textContent = ospiti[type];
  }
}
