var EventEmitter = require('events');

class Countdown extends EventEmitter {
    constructor(){
        super();
        
    }

    ticker(num) {

        let timePassed = 0;
        const interval = setInterval(emitInterval,1000);
        const that = this;

        function emitInterval() {
            var remaining = num - timePassed;
            if(remaining==0){
                clearInterval(interval);
            }
            this.emit('tick',remaining);
            that.timePassed++;
        }

    }

}

module.exports = Countdown;
