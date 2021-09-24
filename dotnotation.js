//Activity 1 
//Have a go at logging a grid like this to the console.

console.log ("   |  |   ");
console.log ("   |  |   ");
console.log ("   |  |   ");
console.log ("----------");
console.log ("   |  |   ");
console.log ("   |  |   ");
console.log ("   |  |   ");
console.log ("----------");
console.log ("   |  |   ");
console.log ("   |  |   ");
console.log ("   |  |   ");

//Activity 2 Stretch
//If you figure it out, try researching arrays and loops and see if you can do it that way.

let a = ["   |  |   ","----------"]
for (let j = 1; j <12; j++) {
    console.log((j % 4 === 0) ? a[1] : a[0]);
}






    