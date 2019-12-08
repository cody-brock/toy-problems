//Use a singly linked list to create a stack
  //since it's faster to add and remove from beginning,
  //we use "shift" and "unshift" but call them "push" and "pop"
  //because that's what you call them in stacks.

//Stacks prioritize insertion and removal, not searching and access
//used for handling function invocations (call stack),
//undo/redo, and for routing (remembering pages you've been to)
//you can use an array, but for lots of data, this is less heavy
//to use your own custom one.

const Node = function(val) {
    this.val = val;
    this.next = null;
}

const Stack = function() {
    this.first = null;
    this.last = null;
    this.size = 0;
}

Stack.prototype.push = function (val) {
    newNode = new Node(val);
    if (!this.first) {
        this.first = newNode;
        this.last = newNode;
    } else {
        let temp = this.first;
        this.first = newNode;
        newNode.next = temp;
    }
    return this.size++;
}

Stack.prototype.pop = function () {
    if (!this.first) return null
    let temp = this.first;
    if (this.first === this.last) {
        this.last = null;
    }
    this.first = this.first.next;
    this.size--;
    return temp.val;
}

const stack = new Stack()
stack.push(1)
stack.push(2)
stack.push(3)
// console.log(stack)
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());


