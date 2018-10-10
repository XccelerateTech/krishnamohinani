class Person {
    constructor(a){
        this.name = a.name;
        this.age= a.age;
    }

    info() {
        console.log(`This person is called ${this.name} and he is ${this.age} years old.`);
    }
}

class Student extends Person {
    constructor(a){
        super(a);
        this.gpa = a.gpa;
    }

    info() {
        console.log(`This person is called ${this.name} and he is ${this.age} years old. He has an overall GPA of ${this.gpa} in the university.`);
    }
}

