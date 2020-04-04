import foods from "./foods";
import { choice, remove } from "./helpers";

let selectedItem = choice(foods);
console.log(`Start! We have ${foods.length} left.`)
console.log(`I'd like one ${selectedItem}, please.`);
console.log(`Here you go: ${selectedItem}`);
console.log(`May I have another?`);
let remaining = remove(foods, selectedItem);
console.log(`I'm sorry, all out.  We have ${remaining.length} left.`)