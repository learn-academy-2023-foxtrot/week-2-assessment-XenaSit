// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.
// There is no need to change any of the code.

// --------------------1) What will this log?

const cohort = "Foxtrot 2023"
console.log(cohort.split(""))

// a) Your answer: ['F', 'o', 'x', 't','r', 'o', 't', ' ', '2', '0', '2', '3'] .split("") is a string method that that seperated the string it is given into an array of stringa 
// b) Verify and explain: .split("") is a string method that devides a string into substring and puts it orderly into an array.

// --------------------2) What will this log?

const greeter = (name) => {
  return `Hello, ${name}!`
}
console.log(greeter("LEARN Student"))

// a) Your answer: Hello, LEARN Student! This is a function called greeter where we use a string interpelation in order to alter the text within that function.
// b) Verify and explain: it logs undefined, obviously! EVERY FUNCTION MUST HAVE RETURN :)))) Every single function must have a return. tricky, very tricky.

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
console.log(multipliedByTwo)

// a) Your answer: i am getting cocky: [8, 10, 12, 14, 16]?
// b) Verify and explain: oooh, yes! ok array.map = is a for loop; .map(an anonymous function was used here and this is where i though the trick was). Apparently NOT. an Anonymous function works eventhough it is anonymous. 

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
console.log(onlyOdds)

// a) Your answer: [11, 13, 15]?
// b) Verify and explain: alright. So the same. The anonymous function does its thing. .Filter(filters out what we tell it to filter and give out)

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer:so value:key should give us JavasScript. But than Chris you give us stuff and "Everything that seems clear is bent. And everything that seems bent is clear." - Dr. Fredericks (The Good Shepherd (2006))
// b) Verify and explain: yes! YES! so VALUE:KEY is being accessed by the dot notation.

// --------------------STRETCH: What will this log?

class Learn {
  constructor(name) {
    this.student = name
    this.cohort = "Echo"
    this.year = 2023
  }
}
const learnStudent = new Learn("George")
console.log(learnStudent)

// a) Your answer: And than again Dr.Fredricks said it best. Considering that this is a Class and a new variable is created as learnStudent. i am going to give it a hard guess and say the Class will take the argument and create a new object with the name George
// b) Verify and explain: all is well! Learn { student: 'George', cohort: 'Echo', year: 2023 } came out as the name of the class with the new object named George. 
