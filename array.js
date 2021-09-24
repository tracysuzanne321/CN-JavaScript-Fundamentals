//Activity 1:
//Create an array that lists your favourite films, up to 5 elements.
//Add 2 more using a method.
//Use a loop to cycle through the array

let faveFilms =[ "pretty woman", "Home Alone","Elf","Notebook","P.s I love you"];

faveFilms.push ("Die Hard", "rocky")
console.log(faveFilms)

for (let i = 0; i < faveFilms.length; i++) {
    console.log= faveFilms[i];   
}

//Activity 2
//Generate 6 random numbers between 1-50

for (let i = 0; i < 6; i++){
    console.log (Math.floor(Math.random()*50 +1))
}

//Activity 3:
//If we can create a loop to put 0-9 on the screen, how can we count from 9-0?

for (let i = 9; i >= 0; i--) {
    console.log (i);
}

//Activity 4:
//Displays 4 films stored in an array.
//Use a for loop to show each film in the array.
//Use an if statement to check if the 3rd film in the array is Ghostbusters.
//If it is, return “Yay it’s Ghostbusters”. If it isn’t return “Boo! we want Ghostbusters!

let films = ["Die Hard","Rocky","Ghostbusters","Home Alone"];

for (let i = 0; i <= films.length-1; i++) {
    console.log (films[i])

}if (films [2] == "Ghostbusters") {
        console.log ("Yay it's ghostbusters")
} else {
        console.log ("We want ghostbusters")
    }


//Activity 5:
//Create a variable, generate a random number between 1 and 30 six times,
 //each random number generated, check if this number of divisible by 7 or not.

for (let i = 0; i<6; i++) {
    let randNum = Math.floor(Math.random()*30) + 1
    if (randNum % 7 === 0) {
        console.log(`${randNum} is divisible by 7`)
    } else {
        console.log(`${randNum} is not divisible by 7`)
    }
}

 //Activity 6:
//Imagine you’re a programmer for a social media platform! 
//You have been tasked with building a prototype for a mutual followers program

//> Create 2 arrays of followers e.g. bobsFollowers & hannahsFollowers. 
//In these arrays place 4 names as strings. Make sure there are 2 names that are in BOTH arrays.
//> Using a nested loop iterate over both arrays and console.log out the matching follower.

let bobsFollowers = ['Aaron', 'Bella', 'Charlie', 'Dave'];
let hannahsFollowers = ['Abdul', 'Brian', 'Charlie', 'Destiny'];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < hannahsFollowers.length; j++) {
        if (bobsFollowers[i] === hannahsFollowers[j]) {
            console.log(bobsFollowers[i])
        }
    }
}


//Activity 7:
//Research on do...while loop, find out about the difference between
//for loop, while loop and do...while loop. Give an example of each. What are the pros and cons?

// Use do while if you want to run your loop once first, before checking condition

let i = 0;
do {
    console.log(`Do Count:${i}`);
    i++;
} while (i < 5);


// Both while and for are almost identical
// Use while if you don't know when to end the loop
// Use for if you know how many times to loop

let j = 0;
while(j < 5) {
    console.log(`While Count:${j}`);
    j++;
}

for (let k = 0; k < 5; k++) {
    console.log(`For Count:${k}`);
}