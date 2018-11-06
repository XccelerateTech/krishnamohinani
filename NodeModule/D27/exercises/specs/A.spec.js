const Sith = require('../starwars');
const Jedi = require('../starwars');
const duel = require('../starwars');

describe('battle', () =>{
    var fakeAnakin;
    var fakeObiwan;

    beforeEach(()=>{
        fakeAnakin = new Sith("Anakin",100,1000);
        fakeObiwan = new Jedi("Obiwan",70,700);
    });

    it('should check the battle',()=>{
        spyOn(duel,)
        duel(fakeObiwan,fakeAnakin);

    
    })

})