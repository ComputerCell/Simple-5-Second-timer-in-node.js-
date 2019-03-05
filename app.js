var time = 0;

var timer = setInterval(function () {
   time += 1;
   console.log(time +' seconds has Passed');
   if (time > 5){
      clearInterval(timer);
   }
}, 2000);

module.exports = timer;

/* Coded by mxhr */