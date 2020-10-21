class Node {
  constructor(element) {
    this.value = element
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  appendToTail(element) {
    let node = new Node(element);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }
    this.size++;
  }

  deleteNode(element) {
    let n = this.head;
    console.log("N", n);

    if (n.value === element) {
      return this.next;
    }

    while (n.next !== null) {
      if (n.next.value === element) {
        n.next = n.next.next;
        return this;
      }
      n = n.next;
    }
    return this;
  }

  // Other methods...

}

let list1 = new LinkedList();
console.log(list1);
list1.appendToTail(2);
list1.appendToTail(8);
console.log(list1);
list1.deleteNode(2);
console.log(list1);


