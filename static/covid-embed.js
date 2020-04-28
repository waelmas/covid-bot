 function closeFrame() {
        document.getElementById("covid-bot-outer").style.display="none";
        document.getElementById("covid-chat").style.display="unset";

        var originalsettingofhost = localStorage.getItem("hostoverflow");
        var bodyofhost = document.getElementsByTagName("BODY")[0];
        bodyofhost.style.overflow=originalsettingofhost;


    }
    function openFrame() {
        document.getElementById("covid-bot-outer").style.display="unset";
        document.getElementById("covid-chat").style.display="none";
      var opened= document.getElementById("covid-frame").src;
      if (opened != "https://covid-bot.com/chat"){
        document.getElementById("covid-frame").src="https://covid-bot.com/chat";
      }else{}

      var bodyofhost = document.getElementsByTagName("BODY")[0];
        
        try {
            var originalsettingofhost = bodyofhost.style.overflow;
        }
        catch(err) {
            var originalsettingofhost = "auto";
        }
        //save Host overflow to restore it when chat frame is closed (This is to prevent scrolling issues)
        localStorage.setItem("hostoverflow", originalsettingofhost);

        bodyofhost.style.overflow="hidden";

    }


// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});
