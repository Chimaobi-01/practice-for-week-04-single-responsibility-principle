const { returns } = require("chai-spies");

/******************************** CONSTANTS *********************************/
const applePieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "apples", cost: 6.00, quantity: 7 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const pumpkinPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "pumpkin", cost: 3.75, quantity: 2 },
  { name: "cinnamon", cost: 5.50, quantity: 1 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const cherryPieRecipe = [
  { name: "pie crust", cost: 10.00, quantity: 1 },
  { name: "sugar", cost: 3.00, quantity: 0.5 },
  { name: "butter", cost: 1.00, quantity: 1 },
  { name: "cherries", cost: 12.00, quantity: 10 },
  { name: "eggs", cost: 2.00, quantity: 1 },
];

const recipes = {
  applePie: applePieRecipe,
  pumpkinPie: pumpkinPieRecipe,
  cherryPie: cherryPieRecipe
};
/* DO NOT CHANGE THE CODE ABOVE */

/*************************** FUNCTION TO REFACTOR ****************************/
function bakeAndSellPies(pieType, pieQuantity, profitMargin) {

  // Bake the number of pies specified by the pieQuantity
  for (let i = 0; i < pieQuantity; i++) {
    bakePie(pieType, i)
  }

  // Print the cost of each pie based on the cost of each ingredient
  const costOfPie = printPieCost(pieType)

  // Calculate the total cost of all the pies
  const totalCost = getTotalPieCost(costOfPie, pieQuantity)

  // Print the total revenue calculated using the given profitMargin
  const revenue = getPieRevenue(totalCost, profitMargin);
  console.log(`Sold ${pieQuantity} pies for $${revenue.toFixed(2)}!`);
}

function getRecipe(pie) {
  return recipes[pie]
}

function bakePie(pie, num) {
  let recipe = getRecipe(pie)

  // Print the ingredients for each ingredient in the recipe
  let combiningMsg = `Combining ingredients for ${pie}: `
  combiningMsg += recipe.map(ingredient => ingredient.name).join(', ');
  console.log(combiningMsg);

  // Print the nth pie that was baked
  console.log(`Baked pie ${num + 1}!`);
}

function printPieCost(pie) {
  const recipe = getRecipe(pie)

  const costOfPie = recipe.reduce((prev, current) => {
    return prev + current.cost;
  }, recipe[0].cost);

  console.log(`Cost per pie: ${costOfPie}`);
  return costOfPie
}

function getTotalPieCost(pieCost, quantity) {
  return pieCost * quantity
}

function getPieRevenue(totalCost, profitMargin) {
  return totalCost * (profitMargin || 1.2)
}

/******************************* LOCAL TESTS *******************************/
bakeAndSellPies("applePie", 5, 2.5);
// bakeAndSellPies("pumpkinPie", 2);
// bakeAndSellPies("cherryPie", 7, 1.7);

/**************************************************************************/
/* DO NOT CHANGE THE CODE BELOW */
module.exports = {
  bakeAndSellPies
};