var marks = Array(6)
// creates an empty array with length 6 → [empty × 6]

var scores = new Array(20, 30, 50, 70, 80, 90)
// creates array → [20, 30, 50, 70, 80, 90]

var scores = [20, 30, 50, 70, 80, 90]
// overwrites previous scores → [20, 30, 50, 70, 80, 90]

// to make sub array from main array
var subMarks = scores.slice(2,5)
// slice(2,5) → takes index 2,3,4 → [50, 70, 80]
console.log(subMarks)  
// output: [50, 70, 80]

console.log(scores[2]) // 50  
// prints element at index 2 → 50

scores[2] = 100  
// replaces 50 with 100

console.log(scores)  
// output: [20, 30, 100, 70, 80, 90]

console.log(scores.length) // 6  
// total elements = 6

scores.push(65)  
// adds 65 at end → [20, 30, 100, 70, 80, 90, 65]
console.log(scores)

console.log(scores.pop())  
// removes last element and prints it → output: 65

console.log(scores)  
// after pop → [20, 30, 100, 70, 80, 90]

scores.unshift(29)  
// adds 29 at beginning → [29, 20, 30, 100, 70, 80, 90]
console.log(scores)

console.log(scores.indexOf(100))  
// returns index of 100 → 3

console.log(scores.includes(191))  
// checks if 191 exists → false

var sum = 0;
for(let i=0; i<scores.length; i++){
    console.log(scores[i])
    sum = sum + scores[i]
}
// prints each element line by line:  
// 29, 20, 30, 100, 70, 80, 90

console.log(sum)
// sum → 419

// reduce filter map
let total = scores.reduce((sumation,score)=>sumation+score,0)
console.log(total)
// also 419 (same as manual sum)

// create a new array with even numbers
var marks = [10, 15, 20, 25, 30, 35, 40]
var evenmarks = []

for(let i = 0; i<marks.length;i++){
    if(marks[i]%2==0){
        evenmarks.push(marks[i])
    }
}
console.log(evenmarks)
// output: [10, 20, 30, 40]
// (all even numbers)

let newFilterEvenmarks = marks.filter(mark=>mark%2==0)
console.log(newFilterEvenmarks)
// same output: [10, 20, 30, 40]

let mappedArray = newFilterEvenmarks.map(mark=>mark*3)
console.log(mappedArray)
// multiply each number by 3 → [30, 60, 90, 120]

let totalval = mappedArray.reduce((sum,val)=> sum + val,0)
console.log(totalval)
// sum of mappedArray → 30+60+90+120 = 300

var scores1 = [10, 15, 20, 25, 30, 35, 40]
let sumValue = scores1
    .filter(score=>score%2==0)      // [10, 20, 30, 40]
    .map(score=>score*3)            // [30, 60, 90, 120]
    .reduce((sum,val)=> sum+val,0)  // 300
// output stored in sumValue → 300

// sorting string array
let fruits = ["promorgranate", "banana", "orange", "apple"]
console.log(fruits.sort())
// alphabetical ascending → ["apple", "banana", "orange", "promorgranate"]

console.log(fruits.reverse())
// reverse order → ["promorgranate", "orange", "banana", "apple"]

// sorting numbers in array
var scores2 = [12, 10, 11, 8, 13]

console.log(scores2.sort((a,b)=>a-b))
// ascending numeric → [8, 10, 11, 12, 13]

console.log(scores2.sort((a,b)=>b-a))
// descending numeric → [13, 12, 11, 10, 8]
