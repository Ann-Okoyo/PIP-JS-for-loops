//for loops consits  of 3 optional expressions,
//for loops are commonly used to run code a set 
//number of times.
//you can use the break to exit the loop early,
//before the condition expression evaluates to false
//Iterate through the integers from 0-8
for(let i =0;i<9;i++){
    console.log(i);
}

// for(let i =1;i<10;+2){
//     if(i ==7){
//         break;
//     }
//     console.log('Total elephants'+i)
// }

// Initialization: let i = 1; initializes the loop counter i to the value of 1.
// Condition: i <= 10; specifies the condition for the loop to continue running as long as i is less than or equal to 10.
// Iteration: i++ increments the value of i by 1 after each iteration of the loop.



//looping through an array
let names1=[78,89,90,56,78]

for(let i=0;i<names1.length;++i){
    console.log(names1[i])

}
//for--in
// for...in loop returns all properties and 
// inherited properties for an array or array-like object,
//  which can lead to unexpected behavior.

// Write a function that accepts an array of strings and 
// console.logs each element using a for loop. 
let array=["Ann","Abriella","Samarah","Cameron"]
function array1(names){

    for(let i=0;i<array.length;++i){
        console.log(array[i])
    }

}
array1()

// Write a function that takes in an array of numbers 
// and returns an array that has all
// elements multiplied by 4.
let numArray = [12,87,45,75,23,64,73]  
function number(){
    for(let i =0;i<numArray.length;++i){
        console.log(numArray[i]*4)

    }
}
number()
// Write a function that takes in an array of strings
//  and returns an array with every element
// turned into a number

let nums = [10,24,45,56,67]
function work(){
    for(let i=0;i<nums.length;++i){
        console.log(nums[i])
    }
}
work()
// Write a function that takes an array of numbers 
// and returns the sum of all the numbers using a for loop.
let information=[20,60,80,90,70]

function info(){
    var sum=0
    for(let i =0;i<information.length;++i){
    sum+=information[i]
     console.log(sum);
    }

}
info();
// Write a function that takes an array of strings and 
// returns the total number of characters in all the 
// strings using a for loop. 

// let comment=["Ann","Becky","Paisley","Shirleen"]

// function sentence(){
//     for(let i=0;i<comment.length;++i){
//         console.log(comment.charAt())
//     }
// }
// sentence()

//multiplication
let results =[59,80,70,60,50,99]

function answers(){
    let product=1
    for(let i=1;i<results.length;++i){
        product*=results[i];
        console.log(product)
    }
}answers();

//division 
let classes =[78,89,90,97,80,70]

function rooms(){
    let division=0;
    for(let i=0;i<rooms.length;++i){
        division/=classes[i];
        console.log(division)
    }
}
rooms()
// Write a function that takes an array of numbers 
// and returns the largest number in the array using 
// a for loop.  
let contents=[89,90,67,78,71,59]

function conditions(){
    for(let i=0;i<contents.length;++i){
        console.log(contents.sort())
    }
}
conditions()

// Write a function that takes an array of numbers
// and returns the largest number in the array using
//  a for loop
// let question =[30,60,90,107,96]

// function quiz(question){
//     for(let i=0;i<question.length;++i){
//         let largest=question.sort();
        
        
//     }
//     return quiz()
// }
// console.log(quiz(question))

// How can you use a for loop to iterate 
// over an array backwards in JavaScript? 
let statement =[89,78,90,17,84]

function word(){
    for(let i=0;i<statement.length;++i){
        console.log(statement.reverse());

    }
}
word();

// How can you use a for loop to iterate over
// an array and delete specific elements in 
//  JavaScript?






