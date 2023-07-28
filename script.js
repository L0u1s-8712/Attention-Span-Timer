window.onload = function () {
  
  var seconds = 0o0; 
  var tens = 0o0; 
  var appendTens = document.getElementById("tens")
  var appendSeconds = document.getElementById("seconds")
  var buttonStart = document.getElementById('button-start');
  var buttonStop = document.getElementById('button-stop');
  var buttonReset = document.getElementById('button-reset');
  var Interval ;

  buttonStart.onclick = function() {
    
    clearInterval(Interval);
     Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
       clearInterval(Interval);
       TextToChange.textContent = ("You lasted for a time of " + seconds + " seconds, well done!");
       let popupsection = document.getElementById("popupsection");
       document.getElementById("popupsection").style.display = "block";


  }
  

  buttonReset.onclick = function() {
     clearInterval(Interval);
    tens = "00";
      seconds = "00";
    appendTens.innerHTML = tens;
      appendSeconds.innerHTML = seconds;
    let popupsection = document.getElementById("popupsection");
    document.getElementById("popupsection").style.display = "none";
  }
  
   
  
  function startTimer () {
    tens++; 
    
    if(tens <= 9){
      appendTens.innerHTML = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerHTML = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerHTML = "0" + seconds;
      tens = 0;
      appendTens.innerHTML = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerHTML = seconds;
    }


  
  }
  

}
