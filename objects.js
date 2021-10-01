//Activity 1
//Let’s edit our person object to include...
//A function called sayHi and when it’s called, it should return “Hello my name is ${this.name}”
let person = {
    name : "Tracy",
    age : 4,
    sayHi : function() {
        return `Hello my name is ${this.name}`;
    }
}
console.log(person.sayHi());

//Activity 2:
//Create an object called pet with the key values of: name, typeOfPet, age, colour
//And methods called eat and drink. They should return a string saying [Your Pet Name] is eating/drinking.

let pet ={
    Name: "Poppy",
    typeOfPet: "Jack Russell",
    age: 9,
    color: "Brown",
    eat: function() {
        return `${this.Name} is eating`;
    },
    drink: function() {
        return `${this.Name} is drinking`;
    }
}

console.log(pet.eat());
console.log(pet.drink());

//Activity 3;
//Create an object called coffeeShop with key values of: branch, drinks with prices, food with prices
//And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is ... with all items chosen with costs and total costs.
let coffeeShop = {
    branch: 'Costa',
    drinks: [
        {
            name: 'Cappucinno',
            price: 10
        },
        {
            name: 'Latte',
            price: 24
        }
    ],
    food: [
        {
            name: 'Toast',
            price: 5
        },
        {
            name: 'Cupcake',
            price: 2.50
        }
    ],
    drinksOrdered: function() {
        return `Your order is ${this.drinks.map(d => d.name + ' costing £' + d.price ).join(', ')}`;
    },
    foodOrdered: function() {
        return `Your order is ${this.food.map(d => d.name + ' costing £' + d.price ).join(', ')}`;
    }
}

console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());
 