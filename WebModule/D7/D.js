class Monster {
    constructor(a){
        this.name = a.name;
        this.health = 100;
    }

    wound(damage){
        if (this.health>0){
            this.health -= damage;
        }
        if (this.health <= 0 ){
            console.log(`${this.name} is dead.`);
        }
    }
}

function hero(a){

    a.wound(Math.floor(Math.random() * (16)) + 5);
    console.log(a.health);

}

var monster = new Monster({name: 'Dave'});

while(monster.health>=0){
    hero(monster);
}