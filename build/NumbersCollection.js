"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumbersCollection = void 0;
const Sorter_1 = require("./Sorter");
class NumbersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
    }
    //
    // get keyword is used to access the length property as if it were a property
    // of the NumbersCollection class, rather than a property of the data array
    // property of the NumbersCollection class.
    get length() {
        return this.data.length;
    }
    // compare method is used to compare two elements of the data array property
    // of the NumbersCollection class.
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex] > this.data[rightIndex];
    }
    // swap method is used to swap two elements of the data array property of the
    // NumbersCollection class.
    swap(leftIndex, rightIndex) {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand;
    }
}
exports.NumbersCollection = NumbersCollection;
