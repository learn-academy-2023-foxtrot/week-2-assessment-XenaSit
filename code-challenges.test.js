// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.
const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]
// Write the test


describe("functionForMultiplicationOfThree", () => {
    it("returns an array that returns all the files multiplyed by 3", () => {
        const numbersArray1 = [6, 7, 8, 9, 10]
        // Expected output: [18, 21, 24, 27, 30]
        const numbersArray2 = [24, 27, 30, 33, 36]
        // Expected output: [72, 81, 90, 99, 108]
        expect(functionForMultiplicationOfThree(numbersArray1)).toEqual([18, 21, 24, 27, 30])
        expect(functionForMultiplicationOfThree(numbersArray2)).toEqual([72, 81, 90, 99, 108])
    })
})
// See the test fail

// b) Create the function that makes the test pass.

// Pseudo code:
// Write the code
// input: two arrays of numbers that were provided
// output: function that multiplyes by 3 and gives out a new array
// process: using .map to itirate trhough the arrays and creating an aquasion that will multiply each value in the array by 3
const functionForMultiplicationOfThree = (array) => {
    return array.map(value => value * 3)
}
console.log(functionForMultiplicationOfThree(numbersArray1));
// See the test pass
// Refactor, if necessary

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// a) Create a test with expect statements for each of the variables provided.

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

describe("divisableByThree", () => {
    it("takes an object as an argument and decides if the number divisable by 3", ()=> {
        expect(divisableByThree(object1.number)).toEqual("15 is divisible by three")
        expect(divisableByThree(object2.number)).toEqual("0 is divisible by three")
        expect(divisableByThree(object3.number)).toEqual("-7 is not divisible by three")
        
    })
})

// b) Create the function that makes the test pass.

// // Pseudo code:
// Prompt: Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.
// Input: function called divisableByThree takes value and sees if it is divisable by 3
// Output: a string that quotes wich number and if it is divisable by 3 or not
// Process: i am using ternary operator (THANKY YOU CHARLEAN!!!!!) because this is the fastest way to write a code that is not crowded with words like my pseudocode. Use a conditional statment to check numbers agains each other and output the message that shows what we are looking for. 

const divisableByThree = (value) => {
    return value % 3 === 0 ? `${value} is divisible by three`
    : value % 3 !== 0 ? `${value} is not divisible by three`
    : "please work"
}


// SIDENOTE: 
// Chris thank you for reading throgh my notes from assesment 1. I did read all of yours, took a note! Thank you!
// tried to use this method to input a function into each object. It made sense to me beceause the objects usualy are huge. but no matter how i ran it, it wouldn't recognise the divisableByThree as a function. i am going to do challenges and see if i can understand it better.

// Expected output: "15 is divisible by three"
// const object1 = { 
//     number: 15,
//     divisableByThree: function() {
//         return "15 is divisible by three"
//     }
// } 
// // Expected output: "0 is divisible by three"
// const object2 = { 
//     number: 0,
//     divisableByThree: function () {
//         return  "0 is divisible by three"
//     }
// }
// // Expected output: "-7 is not divisible by three"
// const object3 = { 
//     number: -7,
//     divisableByThree: function () {
//         return "-7 is not divisible by three"
//     }
// }


// // --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

// // a) Create a test with expect statements for each of the variables provided.

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

describe("capitalizedFirstLetterOfTheArrayRandomNouns", () => {
    it("function wil return anyarray with the capitalized first letter", () => {
        expect(capitalizedFirstLetterOfTheArrayRandomNouns(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
        expect(capitalizedFirstLetterOfTheArrayRandomNouns(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
    })
})

// // b) Create the function that makes the test pass.

// // Pseudo code:

// PROMPT: Create a function that takes in an array of words and returns an array with all the words capitalized.
// INPUT: function named capitalizedFirstLetterOfTheArrayRandomNouns
// OUTPUT: capitalized first letter of an array
// PROCESS: 
    // .map() = to loop through the array. 
    // .charAt(0) to specify which letter in each string we want.
    // .toUpperCase() to capitalize the letter that we specifyed in the .charAt(0) to alter and output.
    // .substr(1) to return all the strings from the array without the first letter.
    //  + to concatinate 2 outputs that we have created

// SIDENOTES: How? Oh Lord!!! how all those string methods are looping through the array without the .split. What is going on in here?

const capitalizedFirstLetterOfTheArrayRandomNouns = (array) => {
    return array.map (firstNoun => firstNoun.charAt(0).toUpperCase() + firstNoun.substr(1))
} // [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]

// Aparently this also can be used without .charAt()

// const capitalizedFirstLetterOfTheArrayRandomNouns = (array) => {
//     return array.map (firstNoun => firstNoun[0].toUpperCase() + firstNoun.substr(1))
// } // [ 'Streetlamp', 'Potato', 'Teeth', 'Conclusion', 'Nephew' ]

// // --------------------3) Create a function that takes in a string and logs the index of the first vowel.

// // a) Create a test with expect statements for each of the variables provided.

const vowelTester1 = "learn"
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

describe ("logTheFirstVowelYouSee", () => {
    it("function loops through the string and outputs the first index of the vowel", () => {
        expect (logTheFirstVowelYouSee(vowelTester1)).toEqual(1)
        expect (logTheFirstVowelYouSee(vowelTester2)).toEqual(0)
        expect (logTheFirstVowelYouSee(vowelTester3)).toEqual(2)
    })
})

// // b) Create the function that makes the test pass.

// // Pseudo code:

// PROMPT: Create a function that takes in a string and logs the index of the first vowel.
// INPUT: given array
// OUTPUT: index of the first vowel found
// PROCESS: hmmm... it was long. 2 days long... it was too long. Create an array of vowels (used regex, couldnt find anything else that would work with OR operator). Create a function logTheFirstVowelYouSee that will match the vowels it finds in the given array and outputs the index of the first vowel found in the given string.
// SIDENOTES: what can i use instead of /[aeiou]/gi? cause i can write the longest in the world conditional statement that will check for each letter seperatly, but that didn't seem like the right way to go.

const logTheFirstVowelYouSee = (string) => {
    // let vowels = ["a", "e", "i", "o", "u"]
    // let vowels = ["a" || "e" || "i" || "o" || "u"]
    // let vowels = [ 'a' || 'e' || 'i' || 'o' || 'u' ]
    // let vowels = ["a"||"e"||i||o||u]
    // let vowels = ([a]|[e]|[i]|[o]|[u])
    // let vowels = (["a"]|["e"]|["i"]|["o"]|["u"])
    let vowels = /[aeiou]/gi
// ================================================================   
    // return string.indexOf(vowels);
    // return string.firstIndexOf("a") || string.indexOf("e") || string.indexOf("i") || string.indexOf("o") || string.indexOf("u")
// ================================================================ 
//     return string.indexOf() == vowels ? string.indexOf()
//     : "please go away"
// ================================================================
// IF STRING(WITH INDEX 0) === "a" || "e" || "i" || "o" || "u";
// RETURN INDEX 0
// IF ESLE STRING(WITH INDEX 1) === "a" || "e" || "i" || "o" || "u";
// RETURN INDEX 1
//     return string[0] == vowels ? 0
//     : string[1] == vowels ? 1
//     : string[2] == vowels ? 2
//     : string[3] == vowels ? 3
//     : "keep working or i don't know..."
// ================================================================
// return string.charAt[0] == vowels.match(vowels) ? 0
//     : string.charAt[1] == vowels ? 1
//     : string.charAt[2] == vowels ? 2
//     : string.charAt[3] == vowels ? 3
//     : "keep working or i don't know..."
// ================================================================
// return string.match(/[aeiou]/gi) == string.charAt() ? 0
//     : string.match(vowels) == string.charAt[1] ? 1
//     : string.match(vowels) == string.charAt[2] ? 2
//     : string.match(vowels) == string.charAt[3] ? 3
//     : "keep working or i don't know..."
// ================================================================
    var regEx = string.match(vowels)
    return string.indexOf(regEx[0])
  }