class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product Name: ${this.name}, Product Price: $${this.price.toFixed(2)}`);
    }
    calculateTotalTax(salesTax){
        return this.price + (this.price * salesTax);
    }
}
const salesTax = 0.115

const product1 = new Product('Shirt', 19.99);
const product2 = new Product('Pants', 29.99);
const product3 = new Product('Underwear', 100.00);

product3.displayProduct();

const total = product3.calculateTotalTax(salesTax);
console.log(`Total Price including sales tax: $${total.toFixed(2)}`);