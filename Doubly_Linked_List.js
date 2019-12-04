//Doubly Linked Lists are basically the same as singly
 //except they have an extra pointer to previous nodes
 //better for finding things - can be done in half the time,
 //easier to navigate
 //but it does take up more memory because of the extra pointer


class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = this.head;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.head) return undefined
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            // this.tail.prev = poppedNode.prev;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }
    shift() {
        if (this.length === 0) return undefined
        let oldHead = this.head;
        if (this.length ===1) {
            this.head = null;
            this.tail = null;
        } else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }
    unshift(val) {
        let newNode = new Node(val);
        if (this.length === 0) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.head.prev = newNode;
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++;
        return this;
    }
    get(index) {
        if (index < 0 || index >= this.length) return null;
        var counter, current;
        if (index <= this.length/2) {
            console.log("Working from START")
            counter = 0;
            current = this.head;
            while (counter !== index) {
                current = current.next;
                counter++;
            }
        } else {
            console.log("Working from END")
            counter = this.length - 1;
            current = this.tail;
            while (counter !== index) {
                current = current.prev;
                current--;
            }
        }
        return current;
    }
    set(index, val) {
        var foundNode = this.get(index);
        if (foundNode !== null) {
            foundNode.val = val;
            return true;
        }
        return false;
    }
    insert(index, val) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) !!this.unshift(val);
        if (index === this.length) !!this.push(val);

        var newNode = new Node(val);
        var beforeNode = this.get(index-1);
        var afterNode = beforeNode.next;

        beforeNode.next = newNode, newNode.prev = beforeNode;
        newNode.next = afterNode, afterNode.prev = newNode;
        this.length++;
        return true;
    }
    remove(index) {
        if (index < 0 ||index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length-1) return this.pop();

        var removeNode = this.get(index);
        var beforeNode = removeNode.prev;
        var afterNode = removeNode.next;

        beforeNode.next = afterNode, afterNode.prev = beforeNode;
        removeNode.next = null, removeNode.prev = null;
        this.length--;
        return removeNode;
    }
}

let list = new DoublyLinkedList;
list.push(1);
list.push(2);
list.push(3);



console.log(list.remove(1));
console.log(list)



