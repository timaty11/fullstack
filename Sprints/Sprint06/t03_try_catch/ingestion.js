'use strict'

let {Product} = require('./product');
let EatException = require('./eat-exception');

class Ingestion {
  products = [];
  day_of_diet = 0;

  constructor(meal_type, id) {
    this.meal_type = meal_type;
    this.id = id;
  }

  setProduct(product) {
    this.products.push(product);
  }

  getFromFridge(product) {
    for (let i of this.products) {
      if (i.name === product) {
        try {
          i.check();
        } catch (e) {
          e.message = `To many calories in ${product} for ${this.meal_type}`;
          throw e;
        }
      }
    }
  }

  getProductInfo(product) {
    let result = {};

    for (let i of this.products) {
      if (i.name === product) {
        result.kcal = i.kcal_per_portion;

        return result;
      }
    }
  }
}

module.exports.Ingestion = Ingestion