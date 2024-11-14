export default class HolbertonClass {
    constructor(size, location) {
        if (typeof size !== 'number' || size <= 0) {
            throw new Error('Size must be a positive integer');
        }
        if (typeof location !=='string') {
            throw new Error('Location must be a string');
        }
        this._size = size;
        this._location = location;


    }
    valueOf() {
        return this._size;
    }
    toString() {
        return this._location;
    }
}