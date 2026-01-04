//object is collection of properties

let person = {

    firstName: 'Tim',
    lastName: 'Joe',
    age: 24,
    fullName : function(){
        console.log(this.firstName+this.lastName)
    }
}

console.log(person.fullName())//TimJoe

console.log(person.lastName)//joe
console.log(person['lastName'])//joe
person.firstName = 'Tim Dane'
console.log(person.firstName)// if already property their then firstName will be replaced with fresh value

person.gender = 'male'// if no property available then it will add to object
console.log(person)

delete person.gender// delete property from object
console.log(person)

console.log('gender' in person)// searches in properties does gender is available or not - false

//print all the values of the javascript object
for(let key in person){
    console.log(person[key])
}