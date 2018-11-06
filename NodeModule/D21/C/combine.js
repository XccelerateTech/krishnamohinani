var rng = require('./random');
var conv = require('./converter');

var lettertonum = function (num) {
    let b = [];
    for (let i = 0; i < num ; i++) {
        let a = rng();
        b.push(conv(a));
    }

    return b;
}

module.exports = lettertonum;