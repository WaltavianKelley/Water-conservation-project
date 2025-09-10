setProperty("waterAppHeader", "color", "red");

const btnNxt = document.getElementById("btnNxt");

btnNxt.addEventListener("click", function() {
    console.log("Button was clicked nxt page loading...");
    window.location.href = "water-bottle-screen.html";
});


const translations = {
  en: {
    waterAppHeader: "Water Conservation Tips",
    waterApp: "Make sure you put your water bottles in the trash so it doesn't end up in any!"
  },
  es: {
    waterAppHeader: "Consejos para la Conservación del Agua",
    waterApp: "¡Asegúrate de poner tus botellas de agua en la basura para que no terminen en ningún lado!"
  }
};


/**
 *
 @param {string} language
 */
function updateText(language) {
  const header = document.getElementById('waterAppHeader');
  const paragraph = document.getElementById('waterApp');

  header.textContent = translations[language].waterAppHeader;
  paragraph.textContent = translations[language].waterApp;
}

const englishButton = document.getElementById('englishButton');
const spanishButton = document.getElementById('spanishButton');

englishButton.addEventListener('click', function() {
  console.log("English button clicked");
  updateText('en'); 
});

spanishButton.addEventListener('click', function() {
  console.log("Spanish button clicked");
  updateText('es'); 
});

updateText('en');