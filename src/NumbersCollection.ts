import { Sorter } from './Sorter';

export class NumbersCollection extends Sorter {
  constructor(public data: number[]) {
    super();
  }
  //
  // get keyword is used to access the length property as if it were a property
  // of the NumbersCollection class, rather than a property of the data array
  // property of the NumbersCollection class.
  get length(): number {
    return this.data.length;
  }

  // compare method is used to compare two elements of the data array property
  // of the NumbersCollection class.
  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex] > this.data[rightIndex];
  }

  // swap method is used to swap two elements of the data array property of the
  // NumbersCollection class.
  swap(leftIndex: number, rightIndex: number): void {
    const leftHand = this.data[leftIndex];

    this.data[leftIndex] = this.data[rightIndex];
    this.data[rightIndex] = leftHand;
  }
}
