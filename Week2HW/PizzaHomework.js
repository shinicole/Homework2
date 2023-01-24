let pizzaPlace = "Antonio's Yummy Pizza";
let numberOfToppings = "11";

console.log(pizzaPlace);
console.log ("numberOfToppings");
console.log (typeof pizzaPlace); //string
console.log(typeof numberOfToppings); //string

let str = `${pizzaPlace} had ${numberOfToppings} different pizza toppings`
console.log(str);

if (numberOfToppings < 10) {
  console.log("Quality, not quantity");
}
else if (numberOfToppings >= 10) {
  console.log("A whole lot of pizza");
}
for (let i = 2; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log (i);
  }
