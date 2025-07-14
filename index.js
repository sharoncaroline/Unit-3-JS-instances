// Write your code here
// Class for Breakfast
class Breakfast {
  constructor(food, drink) {
    this.food = food;
    this.drink = drink;
  }
}

// Class for Lunch
class Lunch {
  constructor(salad, soup, drink) {
    this.salad = salad;
    this.soup = soup;
    this.drink = drink;
  }
}

// Class for Dinner
class Dinner {
  // Declare the private field for dessert
  #dessert;

  constructor(salad, soup, entree, dessert) {
    this.salad = salad;
    this.soup = soup;
    this.entree = entree;
    this.#dessert = dessert;
  }

  // Optional: Accessor method for dessert
  getDessert() {
    return this.#dessert;
  }
}