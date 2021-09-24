// Activity 1 
//Create a variable called age. Write 
//an if statement that logs “Yes I can serve you” 
//if the age is greater than 17 and else logs “You aren’t old enough”.

//Stretch 
//Take your if statement and add a variable called country in.
//Eg. if age > 17 and country == “UK”.

let age = 12;
let country = "UK"

if (age > 17 && country == "UK")  {
    console.log ('Yes I can serve you')
    
} else  {
    console.log ("You aren't old enough")
    
}

//Activity 2
//Create a variable for any pizza topping.
//Create a switch statement, if the topping is one of your favourite ingredients, log to the console 
//“These are important ingredients for my pizza.” 
//If you don’t mind having Pepperoni for example log to the console 
//“I don’t mind having ${topping} on my pizza.
//Finally, for any topping you don’t like log “${topping} should not be on a pizza.”

// let pizzaTopping = "cheese";

switch  (pizzaTopping) {
    case "Cheese":
        case "Ham":
            case "Pineapple":
                console.log (`${pizzaTopping} is an important ingredient on my pizza:`);

break;
    case "pepperoni":
        case "Onion":
            console.log (`I don't mind having ${pizzaTopping} on my pizza`);

break;
    default:
        case "slime":
            case "chalk":
                console.log (`${pizzaTopping} should not be on my pizza`);
}   


//Activity 3:
//Create a variable called password.
//Check how many letters are in the password, if there are less than 8, 
//log to the console that the password is too short. Otherwise log the password to the console.

//Stretch
//Create a variable called num.
//Check if the variable is divisible by 3 or 5. If it is, 
//log “This number is divisible by 3 or 5”. Otherwise log something else.

let password =("jake1981");
console.log (password.length);

let num = 10; 
if (num % 3 == 0 || num % 5 == 0) {
    console.log ("This number is divisable by 3 or 5")
} else {
    console.log ("This number is not divisable by 3 or 5")
}


//Activity 4:
//Create a variable called num.
//If num is divisible by 3 log “fizz” to the console, 
//if it’s divisible by 5 log “buzz” to the console, if it’s divisible by both 3 and 5 log 
//“fizz buzz” to the console. Otherwise log num to the console.

let num = 23;
if (num % 5 == 0 && num % 3 == 0) {
    console.log ("fizz Buzz")
} else if (num % 3 == 0) {
    console.log ("Fizz")
} else if (num % 5 == 0){
    console.log ("buzz")
} else {
    console.log ("Nothing to return")
}

//Activity 5:
//Create a variable called num.
//Check if the number is a palindrome (looks the same forward as it does backwards e.g. 
//1001 or 20202).

let palindromeReversed = palindrome.toString().split('').reverse().join('');

if (palindrome.toString() === palindromeReversed) {
    console.log ("This is a palindrome!")
} else {
    console.log ("Not a Palindrome!")  
}

 
//Activity 6:
//Create a variable called time, a variable called placeOfWork and a variable called townOfHome. 
//Create an if statement that logs to the console where someone is at times of the day. 
//E.g. if the time is 7 I’m at home, at 8 I’m commuting, at 9 I’m at work.

let time = 9;
let placeOfWork = ("Fire Station");
let townOfHome = ("Ponty pandy");   

if (time == 7) {
    console.log (`I am at ${townOfHome}`)
} else if (time == 8) {
    console.log (`I am commuting to the ${placeOfWork}`)
} else if (time == 9){
    console.log (`I am at the ${placeOfWork}`)
}


//Activity 7:
//Take the string 
//“jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi”. 
//Find the index of a last vowel in the string.

let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuh gtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
let searchTerm = "h";

console.log (string.lastIndexOf(searchTerm)) 