import Currency from './3-currency.js';



class Pricing {
    constructor(amount, currency) {
        if (typeof amount!== 'number' || amount < 0) {
            throw new TypeError("Amount must be a non-negative number");
        }
        if (!(currency instanceof Currency)) {
            throw new TypeError("currency must be an instance of Currency");
        }
        this._amount = amount;
        this._currency = currency;


    }

    static convertPrice(amount, conversionRate) {

        if (typeof conversionRate!== 'number' || conversionRate <= 0) {
            throw new TypeError("Conversion rate must be a positive number");
        }
        if (typeof amount!== 'number') {
            throw new TypeError("Amount must be a number");
        }
        return amount * conversionRate;

    }
    get amount() {
        return this._amount;
    }
    set amount(amount) {
        if (typeof amount!== 'number' || amount < 0) {
            throw new TypeError("Amount must be a non-negative number");
        }
        this._amount = amount;
    }
    get currency() {
        return this._currency;
    }
    set currency(currency) {
        if (!(currency instanceof Currency)) {
            throw new TypeError("currency must be an instance of Currency");
        }
        this._currency = currency;
    }
    displayFullPrice() {
        return (`${this._amount} ${this._currency.name} (${this._currency.code})`)
    }

}

export default Pricing;