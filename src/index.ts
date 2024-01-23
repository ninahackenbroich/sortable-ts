import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";


const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
numbersCollection.sort();
console.log(numbersCollection.data);
// const sorter = new Sorter(numbersCollection);
// sorter.sort();
// console.log(sorter.collection);
const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();
console.log(charactersCollection.data);
// const sorter2 = new Sorter(charactersCollection);
// sorter2.sort();
// console.log(sorter2.collection);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
// const sorter3 = new Sorter(linkedList);
// sorter3.sort();
// linkedList.print();
linkedList.sort();
linkedList.print();
