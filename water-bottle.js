

const btnNxt2 = document.getElementById("btnNxt2")

btnNxt2.addEventListener("click", function(){

    console.log("Button was clicked nxt page loading...");
    window.location.href = "duck-bath-screen.html";
});


const translations = {
  en: {
    waterBottleHead: "Instead of buying disposable water bottles, use a refillable bottle. One-use water bottles fill our landfills and trap valuable water.",
    waterBottleTxt: "Choose the correct water bottle. Then click the faucet to fill."
  },
  es: {
    waterBottleHead: "En lugar de comprar botellas de agua desechables, utiliza una botella recargable. Las botellas de un solo uso llenan nuestros vertederos y atrapan agua valiosa.",
    waterBottleTxt: "Elige la botella de agua correcta. Luego haz clic en el grifo para llenarla."
  }
};


/**
 * Updates the text content for the water bottle screen.
 * @param {string} language - The language code to use (e.g., 'en' or 'es').
 */
function updateText(language) {
  
  const header = document.getElementById('waterBottleHead');
  const paragraph = document.getElementById('waterBottleTxt');

  
  header.textContent = translations[language].waterBottleHead;
  paragraph.textContent = translations[language].waterBottleTxt;
}


const englishButton = document.getElementById('englishButton2'); 
const spanishButton = document.getElementById('spanishButton2'); 

englishButton.addEventListener('click', function() {
  console.log("English button clicked on page 2");
  updateText('en'); 
});

spanishButton.addEventListener('click', function() {
  console.log("Spanish button clicked on page 2");
  updateText('es'); 
});


updateText('en');