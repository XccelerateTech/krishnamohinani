var Countdown = require('./timerapp');

var cd = new Countdown();

cd.on('tick',function(num){
    if (num==0){
        return console.log(`kaboom`);
    } 
    console.log(`${num} seconds left`);
    
})

cd.ticker(5);
