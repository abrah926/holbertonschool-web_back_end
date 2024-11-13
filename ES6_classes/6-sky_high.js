import Building from "./5-building.js";

export default class SkyHighBuilding extends Building {
    constructor(sqft, floors) {
        if (typeof sqft !== "number" || sqft <= 0) {
            throw new Error("Square footage must be a positive number");
        }

        if (typeof floors !== "number" || floors <= 0) {
            throw new Error("Number of floors must be a positive number");
        }

        super(sqft);
        this._sqft = sqft;
        this._floors = floors;
    }

    get floors() {
        return this._floors;
    }
    get sqft() {
        return this._sqft;
    }
    evacuationWarningMessage() {
        return (`Evacuate slowly the ${this._floors} floors`)
    }
}