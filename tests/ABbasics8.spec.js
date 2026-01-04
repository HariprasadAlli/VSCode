
//Inheritance is the main pillar in OOP
//one class can inherit/acquire the properties ,methods of another class
//class which inherits the properties of other is known as subclass(derived class, child class)
//class whose properties are inherited is know as super class/parent class

const Person = require("./ABbasics7.spec")
class Pet extends Person
{
    get location(){
        return "Bluecross"
    }
    constructor(firstName,lastName){
        //call parent class constructor
        super(firstName,lastName)
    }
}

let pet = new Pet("sam", "san")
pet.fullName()
console.log(pet.location)