//Activity 1:
//Create a program that stores someone’s name, age and favourite colour and 
//log it to the console in a complete sentence using Template Literals.

//Stretch
//Update all of your variables and write out a new sentence underneath your original.

let firstName = "Tracy";
let age = 40;
let favColour = "Pink";

console.log (`My name is ${firstName}, I am ${age} and my favourite colour is ${favColour}!.`)

firstName = "Dave";
age = 40;
favColour = "blue"

console.log (`My name is ${firstName}, I am ${age} and my favourite colour is ${favColour}!.`)


//Activity 2:
//Create a program that stores what you eat today for breakfast, lunch and dinner. 
//Log these to the console.

//Stretch
//Update each of these variables to what you will eat tomorrow. Log these to the console.

let breakfast = "Bran Flakes";
let lunch = "Soup";
let dinner = "Pie and Chips";

console.log (`For breakfast today I had ${breakfast} then for my lunch I had ${lunch} and then for dinner I had ${dinner} `)

breakfast = "Weetbix";
lunch = "Sandwich"
dinner = "Roast Chicken";

console.log (`For breakfast tomorrow I will have ${breakfast} then for my lunch I will have a ${lunch} and then for dinner I will have a ${dinner} `)


//Activity 3:
//Create a program that calculates the number
//of days from today to your birth date.

let today=new Date();

let bday=new Date(today.getFullYear(), 12, 28);

if (today.getMonth()==12 && today.getDate()>28) 
{
     bday.setFullYear(bday.getFullYear()+1); 
}  

let one_day=1000*60*60*24;

console.log(Math.ceil((bday.getTime()-today.getTime())/(one_day))+
"days left until Birthday!");


//Activity 4:
//> Create 9 variables: space1, space2... space9.
//> Assign either the value ‘x’,’o’,’ ‘, to each of these variables.
//> Insert the variables into your board using the ${varName} 
//syntax and make it look like the displayed board

let space1 = 'o';
let space2 = 'x';
let space3 = ' ';
let space4 = 'o';
let space5 = 'o';
let space6 = 'x';
let space7 = 'x';
let space8 = ' ';
let space9 = 'o';

const board = [
  '   |   |   ',
  ` ${space1} | ${space2} | ${space3} `,
  '   |   |   ',
  '-----------',
  '   |   |   ',
  ` ${space4} | ${space5} | ${space6} `,
  '   |   |   ',
  '-----------',
  '   |   |   ',
  ` ${space7} | ${space8} | ${space9} `,
  '   |   |   ',
];

board.forEach(line => console.log(line))
