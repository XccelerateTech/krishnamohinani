var EventEmitter = require('events');

class Greeter extends EventEmitter {
    constructor(){
        super();
        this.greeting = 'Hello there';

    }

    greet(data){
        console.log(`${this.greeting} ${data}`);
        this.emit('greet',data);
    }
}





var greeter = new Greeter;

greeter.on('greet', function(data){
    console.log(`someone greeted ${data}`);
});

greeter.greet('Ian');