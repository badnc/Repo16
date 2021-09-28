class Microsoft {
    constructor(name){
        this.name = name;
    }
    get name(Name) {
        this.name = Name;
    }
    set name(Name){
        this.name = Name;
    }
    
    occupation() {
        return this.name + " is a philanthropist!"
    }
}
class Facebook extends Microsoft {
    constructor(name, age){
        super(name);
        this.age = age;
    }
    studentAge() {
        return this.name + " is " + this.age;
    }

    henry() {

    }
}
module.exports = {
    Microsoft,
    Facebook
}