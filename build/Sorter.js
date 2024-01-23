"use strict";
// Interface for Sortable objects, which is used by Sorter class. Note that the interface is not used by the NumbersCollection, CharactersCollection, or LinkedList classes due to the implementation of the Sorter abstract class.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
// interface Sortable {
//   length: number;
//   compare(leftIndex: number, rightIndex: number): boolean;
//   swap(leftIndex: number, rightIndex: number): void;
// }
// Abstract class Sorter, which is used by NumbersCollection, CharactersCollection, and LinkedList classes. Sorter.new cannot be called.
class Sorter {
    sort() {
        const { length } = this;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
