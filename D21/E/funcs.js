module.exports = {
    start: function(cd,seconds){
        cd.emit('start',seconds);
    },
    stop: function(cd) {
        cd.emit('stop');
    },
    pause: function(cd){
        cd.emit('pause');
    }
};