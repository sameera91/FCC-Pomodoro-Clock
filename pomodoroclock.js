window.onload = function () {

var minutes = 25;
var seconds = 60;
var displaySeconds;

$('#plus').click(function() {
    
    minutes++;
    document.getElementById('length').innerHTML = minutes;
    document.getElementById("clock").innerHTML = minutes + ":" + "00";  

    
});

$('#minus').click(function() {
    
    minutes--;
    document.getElementById('length').innerHTML = minutes;
    document.getElementById("clock").innerHTML = minutes + ":" + "00";  


});

document.getElementById('length').innerHTML = minutes;

document.getElementById("clock").innerHTML = minutes + ":" + "00";  

$('#start').click(function() {

  //set interval for seconds
var i = setInterval(function() {
            
        if (seconds > 1) {
           seconds = seconds - 1;
           displaySeconds = seconds;
           if (seconds < 10) {
             displaySeconds = '0' + displaySeconds;
           }
       } 
         else if (seconds == 1){
          seconds = 60;
          displaySeconds = "00";
       }
       
       if (displaySeconds == 59) {
        minutes--;
       }
                    
        document.getElementById("clock").innerHTML =(minutes + ':' + displaySeconds);
       
        
}, 1000);

if (minutes == 0) {
    clearInterval(i);
}
  
$('#stop').click(function() {
    clearInterval(i);
});

});

}
