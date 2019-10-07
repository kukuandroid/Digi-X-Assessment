const inquirer = require("inquirer");
const products = require("./product.json");

function pricingRule(items) {
  let total = 0;
  let arr = toArray(items);

 

  if (arr.filter(y => y === "mbp").length >= 1) {
    products[3].price === 0;
    total += arr.filter(y => y === "mbp").length * products[1].price;
    if (arr.filter(y => y === "vga").length === 1) {
      total += arr.filter(y => y === "vga").length * 0;
    }
  }
  

  if (arr.filter(y => y === "ipd").length >= 1) {
    if (arr.filter(y => y === "ipd").length > 4) {
      products[0].price = 499.99;
      total += products[0].price * arr.filter(y => y === "ipd").length;
    } else {
      total += arr.filter(y => y === "vga").length * products[0].price;
    }
  }

  if (arr.filter(y => y === "atv").length >= 1) {
    if (arr.filter(y => y === "atv").length === 3) {
      total +=
        products[2].price * arr.filter(y => y === "atv").length -
        products[2].price;
    } else{
      total += arr.filter(y => y === "atv").length * products[2].price;
    }
  }



  showPrice(total);
}

function showPrice(total) {
  console.log(`Total expected: $${total}`);
}

function toArray(obj) {
  return Object.keys(obj).map(function(key) {
    return Number(key), obj[key];
  });
}

let messages = [];
inquirer
  .prompt([
    {
      name: "item_length",
      message: "Hello,how many items do you have?",
      default: 0
    }
  ])
  .then(answers => {
    let { item_length = 0 } = answers;
    for (let idx = 0; idx < item_length; idx++) {
      messages.push({
        type: "list",
        name: `SKU ${idx + 1} `,
        message: `SKU ${idx + 1} `,
        choices: products
      });
    }
    inquirer.prompt(messages).then(val => {
      pricingRule(val);
    });
  });
