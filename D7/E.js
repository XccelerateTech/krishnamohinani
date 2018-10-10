class Person {
    constructor(a){
        this.name = a.name;
        this.age= a.age;
    }

    info() {
        console.log(`This person is called ${this.name} and he is ${this.age} years old.`);
    }
}

const person = new Person( {age: 44, name: 'Tom' });
person.info()