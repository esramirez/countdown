/*global WildRydes _config*/


(function timer($) {

    var countDownDate = new Date("Jan 20, 2021 24:00:00").getTime();
   
    // Update the count down every 1 second
    var x = setInterval(function() {
    
      // Get today's date and time
      var now = new Date().getTime();
    
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
    
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
      // Display the result in the element with id="demo"
      document.getElementById("countdown").innerHTML = "<h1><p>Trump's Last Day Countdown: </br></p><p style=\"text-indent: 30px\">" +  days + "d " + hours + "h "
      + minutes + "m " + seconds + "s</h1>";
    
      // If the count down is finished, write some text
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "<h1>Bye Bye...Mr. Ex President";
      }
    }, 1000);

}(jQuery));
