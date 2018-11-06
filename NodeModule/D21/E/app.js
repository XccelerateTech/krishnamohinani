var start = module.exports('./funcs').start;
var pause = module.exports('./funcs').pause;
var stop = module.exports('./funcs').stop;

var Countdown = module.exports('./timerapp2');

var cd = new Countdown();

cd.on('tick',function(num){
    if(num==0){
        return console.log(`Kaboom`);
    }
    console.log(`Time remaining is ${num}`);
})


start(cd, 10);