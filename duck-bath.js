

const allCleanButton = document.getElementById("allCleanButton")

allCleanButton.addEventListener("click", function(){

  console.log("All Clean cliked")

  setText("duck-bath-txt", "Ducks All clean!" )

  setProperty("duck-bath-txt","color", "purple", )

});



const btnNxt3 = document.getElementById("btnNxt3")

btnNxt3.addEventListener("click", function(){

    console.log("Button was clicked nxt page loading...");
    window.location.href = "index.html";
});

const translations = {
  en: {
    showerHeader: "Another way to conserve water is by taking shorter showers. Try setting a timer for five minutes!"
  },
  es: {
    showerHeader: "Otra forma de conservar agua es tomando duchas más cortas. ¡Intenta poner un temporizador de cinco minutos!"
  }
};


/**
 * 
 * @param {string} language - The language code to use (e.g., 'en' or 'es').
 */
function updateText(language) {
  
  const header = document.getElementById('showerHeader');

 
  header.textContent = translations[language].showerHeader;
}


const englishButton = document.getElementById('englishButton3');
const spanishButton = document.getElementById('spanishButton3');

englishButton.addEventListener('click', function() {
  console.log("English button clicked on page 3");
  updateText('en'); 
});

spanishButton.addEventListener('click', function() {
  console.log("Spanish button clicked on page 3");
  updateText('es'); 
});

updateText('en');