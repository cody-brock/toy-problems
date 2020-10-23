class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.size--;
    if (this.length === 0) {
      this.tail = null;
    }
    return current;
  }

  getIndex(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (counter < index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  removeIndex(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length) return this.pop();

    let previousNode = this.getIndex(index - 1);
    let removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

}

// TEST
let list1 = new SinglyLinkedList();
// console.log(list1);
list1.push(1);
list1.push(2);
list1.push(3);
list1.push(4);
list1.push(5);
// list1.push(2);
// list1.push(33);
// list1.push(22);
// list1.push(7);
// list1.push(2);
// list1.push(33);
// list1.push(22);
// list1.push(9);
// console.log(list1);
// list1.removeIndex(2);
// console.log(list1);

removeDuplicatesHashMap = (list) => {

  // Handle edge cases
  if (!list) return undefined;

  // Create a map to hold values we've seen
  let map = new Map();

  // Set up variables
  let current = list.head;
  let previous = null;

  // Iterate through the linked list
  while (current !== null) {

    // If new, record new val in Map and move previous up
    if (!map.get(current.val)) {
      map.set(current.val, true);
      previous = current;
    } else {
      // If duplicate, skip this node
      previous.next = current.next
    }
    current = current.next;
  }

  // Return modified singly linked list
  return list;
}

const removeDuplicatesRunner = (list) => {
  if (!list) return undefined;

  let current = list.head;

  while(current) {
    let runner = current;
    while (runner.next) {
      if (runner.next.val === current.val) {
        runner.next = runner.next.next;
      } else {
        runner = runner.next;
      }
    }
    current = current.next;
  }
  return list;
}

// console.log("Before: ", list1)
// console.log(removeDuplicatesRunner(list1));
// console.log("After: ", list1)

const findKthToLastElement = (list, k) => {
  // Handle edge cases
  if (!list) return undefined;
  if (k < 0) return undefined;

  // Create two pointers
  let p1 = list.head;
  let p2 = list.head;

  // First, move p2 k nodes ahead
  for (let i = 0; i < k - 1; i++) {
    if (!p2) return undefined;
    p2 = p2.next;
  }
  if (!p2) return undefined;

  // Then, move p1 and p2 until p2 reaches the end
  while (p2.next) {
    p1 = p1.next;
    p2 = p2.next;
  }

  return p1;

}


console.log(findKthToLastElement(list1, 3));
