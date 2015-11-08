window.onload = function () {

var minutes = 25;
var seconds = 60;
var newSeconds;

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
var time = setInterval(function() {
            
        if (seconds > 1) {
           seconds = seconds - 1;
           newSeconds = seconds;
           if (seconds < 10) {
             newSeconds = '0' + newSeconds;
           }
       } 
         else if (seconds == 1){
          seconds = 60;
          newSeconds = "00";
       }
       
       if (newSeconds == 59) {
        minutes--;
       }
                    
        document.getElementById("clock").innerHTML =(minutes + ':' + newSeconds);
       
        
}, 1000);

if (minutes == 0) {
    clearInterval(time);
}
  
$('#stop').click(function() {
    clearInterval(time);
});

});

}
