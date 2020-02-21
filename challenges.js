//Challenge 1:
//Create a variable called password.
//Check how many letters are in the password, if there are less than 8 log to the console that the
//password is too short. Otherwise log the password to the console. 
let password = "awnfaiwnfiarwn"
if (password.length < 8){
    console.log("Ypasword to weak, try again.")
}
else{
    console.log("strong password.")
}
//Challenge 2:
//Create a variable called num.
//Check if the variable is divisible by 3 or 5. If it is log "This number is divisible by 3 or 5" to the
//console. Otherwise log "This number is not divisible by 3 or 5". 
let num = 15
if (num % 3 === 0 || num % 5 === 0) {
    console.log(`${num} is divisible by 3 or 5.`)
}
else{
    console.log(`${num} is not divisible by 3 or 5`)
}
//Challenge 3:
//Create a variable called num.
//If num is divisible by 3 log "fizz" to the console, if it's divisible by 5 log "buzz" to the console, if it's
//divisible by both 3 and 5 log "fizz buzz" to the console. Otherwise log num to the console. 
let nextNum = 15
if (nextNum % 3 === 0 && nextNum % 5 === 0) {
    console.log("FizzBuzz")
}
else if (nextNum % 3 === 0){
    console.log("Fizz")
}
else if (nextNum % 5 === 0){
    console.log("Buzz")
}
else {
    console.log("...")
}
//Challenge 4:
//Create a function that takes a number as a parameter and adds one. 
const addFunc = (addNum) => {
    return (addNum + 1)
}
console.log(addFunc(5))
//Challenge 5:
//Create a function that takes two numbers and an operator as parameters. It
//should return a print out of the sum e.g. "1 + 2 = 3" or "4 x 6 = 24". 
const arithmeticFunc = (num1, num2, operator) => {
    if (operator == "+"){
        result = num1 + num2
    }
    else if (operator == "-"){
        result = num1 - num2
    }
    else if (operator == "/"){                       
        result = num1 / num2
    }
    else if (operator == "*"){
        result = num1 * num2
    }
    else{
        result = "Nope! Too complicated for me!"
    }
    return result
}
console.log(arithmeticFunc(4,2,"+"))
console.log(arithmeticFunc(4,2,"-"))
console.log(arithmeticFunc(4,2,"/"))
console.log(arithmeticFunc(4,2,"*"))
console.log(arithmeticFunc(4,2,"%"))
//Challenge 6:
//Create a function that takes two strings as a parameters and returns the
//strings concatenated. 
const joinStrings = (string1, string2) => {
    return string1.concat(string2)
}
console.log("two become", "one") //ask Liam why it adds a space between the strings.
//Challenge 7:
//If we list all the natural numbers below 10 that are multiples of 3
//or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//Find the sum of all the multiples of 3 or 5 below 1000.
let numbers = []
let numberSum = 0
let numberCheck = 0
const addNumbers = (valNumbers, indexNumbers, arrayNumbers) => {
    numberSum = numberSum + valNumbers
}
while (numberCheck < 1000){
    if (numberCheck % 3 === 0 || numberCheck % 5 === 0) {
        numbers.push(numberCheck)
    }
    numberCheck++
}
numbers.forEach(addNumbers)
console.log(numberSum)
//Challenge 8:
//If I add up the digits of the number 19082 I would get
//1+9+0+8+2=20. Add the digits of the number:
//371072875339021027987979982208375902465101357402
let horribleNumber = "371072875339021027987979982208375902465101357402"
let horribleSum = 0
for (stringIndex = 0; stringIndex < horribleNumber.length; stringIndex++){
    horribleSum = horribleSum + Number(horribleNumber.charAt(stringIndex))
}
console.log(horribleSum)
//Challenge 9:
//Write a function that takes two numbers as parameters and
//returns a random number between them. 
const randomFromParams = (lowNumber, highNumber) => {
    return Math.floor((Math.random() * highNumber) + lowNumber)
}
console.log(randomFromParams(1, 10))
//Challenge 10:
//Write a function that given a radius returns the circumference of a circle. 
//(2*pi*Radius)
const getCircumference = (radius) => {
    return 2 * Math.PI * radius
}
console.log(getCircumference(10))

