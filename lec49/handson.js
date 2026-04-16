class Car {
  constructor(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }

  start() {
    console.log(`${this.brand} ${this.model} has started.`);
  }
}

const car1 = new Car("Honda", "City", 2022);
console.log(car1);
car1.start();