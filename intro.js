console.log("hello world")
let greeting = "hello world"
console.log(greeting)

let firstname = "junaid"
let favdrink = "coffee"
console.log(`my name is ${firstname} and my faviroute drink is ${favdrink}.`)

let name = "junaid"

if(name ==`junaid`){
    console.log(`greatname`)
}
else if (name == `adam`){
    console.log(`oof`)
}
else{
    console.log(`bigoof`)
}

let age = 22
let country = "uk"

if (age > 17&& country == `uk`){
    console.log(`i can serve you in this country`)
}
else {
    console.log(`you are not old enough, or in the wrong country`)
}

let naame = "junaid"
if(naame == `junaid`|| name ==`sam`){
    console.log(`you are junaid or sam!`)
}
else {
    console.log (`who are you?!`)
}

for (i=0; i<5; i++){
    console.log(i)
}

let names = [`sam`,`stuart`,`liam`,`ezra`]

for (i=0; i< names.length; i++){
    console.log(names[i])
}

const my_func = (a_string) => {
    console.log(a_string)
}
my_func(`hello`)

function my0therfunc (anotherstring){
    console.log(anotherstring)
}
my0therfunc ("function declaration")

const my_funct = (a_string) => {
    return(a_string)
   }
console.log(my_funct('hello'))

console.log(Math.random())
console.log(Math.floor(Math.random()*10))

