let pizzaToppings = ['chicken', 'pineapples', 'basil', 'cheese']

function greetCustomer() {
  console.log(`Welcome to Pizza Palace, our toppings are: ${pizzaToppings}`);
}

function getPizzaOrder( size, crust, ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${pizzaToppings} coming up!`);
  return [size, crust, toppings];
}

function preparePizza([size, crust, ...toppings]) {
  const pizza = {
    size: size,
    crust: crust,
    toppings: toppings,
  };

  console.log(`Cooking ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}`);
  return pizza
}
function servePizza(pizza) {
console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings}. Enjoy!`);
return pizza
}
greetCustomer()
servePizza(preparePizza(getPizzaOrder("Large", "thick", "bacon", "chicken", "cheese",)));
