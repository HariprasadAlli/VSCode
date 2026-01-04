const Person = require('./ABbasics7.spec')
let person1 = new Person("tim", "tom");
let person2 = new Person("hari", "prasad");

console.log(person1.age);          // 25
console.log(person1.location);     // canada  (getter)
person1.fullName();                // timtom

person2.fullName();               // hariprasad

let day = 'tuesday'
console.log(day.length)//7
let subDay = day.slice(0,4)
console.log(subDay)//tues

console.log(day[1])//u
let splitDay = day.split("s")// tue day
console.log(splitDay[1].length)//4
console.log(splitDay[1].trim().length)//3 coz space got trimmed

let date = '23'
let nextDate = '27.5'
let diff = parseFloat(nextDate)-parseInt(date)
console.log(diff)//4.5
console.log(diff.toString())// num to string

let newQuote = day+"is Funday"
console.log(newQuote)
let val = newQuote.indexOf("day",5)
console.log(val)

let count = 0
let value = newQuote.indexOf("day")
while(value!==-1){
    count++
    value = newQuote.indexOf("day",value+1)
}
console.log(count)

let person = new Person("Chris", "Edward")
console.log(person.fullName()) //code in basic 7 is commented to run here(basic5) and in basic7 we wont write any code in real time