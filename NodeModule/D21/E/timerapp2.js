const EventEmitter = require('events');

class Countdown extends EventEmitter {
    constructor() {
        super();
        this.counter = 0;
        this.seconds = 0;
        let interval;

        this.on('start', (seconds) => {
            if (seconds != undefined) {
                this.seconds = seconds;
            }
            interval = setInterval(emitInterval,1000);
            const that = this;
            function emitInterval() {
                var remaining = that.seconds - that.counter;
                if (remaining == 0) {
                    clearInterval(interval);
                }
                that.emit('tick', remaining);
                that.counter++;

            }
        });

        this.on('stop', function() {
            clearInterval(interval);
            this.seconds = 0;
            this.counter = 0;
        });

        this.on('pause', function(){
            clearInterval(interval);
        })

    }
}

module.exports = Countdown;