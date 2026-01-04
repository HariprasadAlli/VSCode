module.exports = class Person
{
    age = 25
    // location = "canada"

    get location(){//if we see 'get' them itis property
        return "canada"
    }

    //constructor is method which executes by default when you create object of the class
    constructor(firstName,lastName){
        this.firstName=firstName
        this.lastName=lastName
    }
    fullName(){//method
        console.log(this.firstName+this.lastName)
    }
}

// let person = new Person("tim", "tom")
// let person1 = new Person("tim1", "tom1")
// console.log(person.age)
// console.log(person.location)
// console.log(person.fullName())
// console.log(person1.fullName()) // in real time we wont write code here so commented and implmented this same code in basic5