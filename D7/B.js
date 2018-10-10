function Player(name) {
    this.name = name;
    this.health = 100;
    this.attack = function attack(opponent){
        opponent.health -= 10;
    }
}

function whoAttacks(a,b){
    
    let c = Math.floor(Math.random() * 2);
    
    if (c === 1) {
        a.attack(b);
        console.log(`${a.name} attacked ${b.name}`);
    } else {
        b.attack(a);
        console.log(`${b.name} attacked ${a.name}`)
    }
    if (a.health == 0){
        console.log(`${a.name} is dead`);
    }
    if (b.health == 0){
        console.log(`${b.name} is dead`);
    }
}


var krishp = new Player('Krish');
var davep = new Player('Dave');

while (krishp.health > 0 && davep.health > 0){
    whoAttacks(krishp,davep);
}


