//Activity 1:
//Take this code and turn it into arrow function syntax:

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
        
    } else {
        return (n * factorial (n-1));
    }
}

console.log(factorial(33));

//Activity 2:
//Edit the below snippet to include two parameters and a running order count updated 
//when the function is called:

let orderCount = 0;
const takeOrder = (topping,base) => {
    console.log (`Pizza with ${topping} and ${base}`);
    orderCount = orderCount + 2;
}
takeOrder ('pineapple','tomato');

//Activity 3:
//Cash machine time! Let’s create one that:
//> Dispenses cash if your pin number is correct and your balance is equal to, or more than, 
//the amount you’re trying to withdraw!

const account = {
    pin: "5432",
    balance: 300.25
}


const withdraw = (pin,amount) => {
    if (amount < 0) {
        console.log("You cannot withdraw a negative amount");
        return;
    }
    if (pin === "5432") {
        if (amount < account.balance) {
            account.balance = account.balance - amount;
            console.log(`Withdrew ${amount}, now have ${account.balance} remaining.`)
        } else {
            console.log("Insufficient funds")
        }
    } else {
        console.log("Incorrect pin number")
    }
}

withdraw("5432",20);
withdraw("1234",20);
withdraw("5432",400);
