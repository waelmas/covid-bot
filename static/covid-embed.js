    function closeFrame() {
        document.getElementById("covid-bot-outer").style.display="none";
        document.getElementById("covid-chat").style.display="unset";
    }
    function openFrame() {
        document.getElementById("covid-bot-outer").style.display="unset";
        document.getElementById("covid-chat").style.display="none";
      var opened= document.getElementById("covid-frame").src;
      if (opened != "https://covid-bot.com/"){
        document.getElementById("covid-frame").src="https://covid-bot.com";
      }else{}
    }
