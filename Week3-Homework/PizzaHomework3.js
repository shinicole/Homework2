let pizzaToppings = ['chicken', 'pineapples', 'basil', 'cheese']

function greetCustomer() {
  console.log(`Welcome to Pizza Palace, our toppings are: ${pizzaToppings);
}

function getPizzaOrder( size, crust, toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${pizzaToppings} coming up!`);
  return [size, crust, toppings];
}

function preparePizza(pizzaDetails) {
  const pizza = {
    size: pizzaDetails[0],
    crust: pizzaDetails[1],
    toppings: pizzaDetails[2],
  };
  console.log(`Cooking ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings);
  return pizza
}
function servePizza(pizza) {
console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`);
return pizza
}
greetCustomer()
const pizzaOrder = getPizzaOrder ("small", "thin","chicken", "onions", "cheese")
const pizza = preparePizza(pizzaOrder)
servePizza(pizza)
