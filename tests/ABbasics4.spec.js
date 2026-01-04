//var - global level/funtional, if we put var in global level and same var in condition then condition one will be printeed
//let - global level/block level,if we put let in global level and same let in condition then global one will be printeed
//const - same like let but we cannot reinitialize again const a = 10 then a=12 is not possible but tis is possible in let

const greet = "Evening"

if(1==1){
    let greet = "Afternoon"
}
console.log(greet)


//function is a block of code - way1
function add(a,b){
    return a+b
}

let sum = add(2,3)
console.log(sum)

//Anonymous funtion --> do not have name (Funtion expression) - way2

let sumOfIntegers = function(c,d)
{
    return c+d
}
console.log(sumOfIntegers(2,3))

//way 3
let sumOfNumbers = (e,f) => e+f
console.log(sumOfNumbers(2,3))

