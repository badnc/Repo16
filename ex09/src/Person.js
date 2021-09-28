class Person {
    constructor(name, email, age){
        this.name = name;
        this.email = email;
        this.age = age;
    }

    getPerson() {
        var personalInfo = "Name: " + this.name + ", email: " + this.email + ", age: " + this.age
        return personalInfo;
    };
}

let person = new Person("Li", "li@gimail.com", 40);
person.getPerson();
module.exports = Person;