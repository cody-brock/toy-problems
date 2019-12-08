//queues are FIFO, first in first out.
  //like a print queue. useful for processing tasks
  //are foundational for more complex data structures.


//only insertion and removal matter for queue.
  //insertion O(1), removal O(1)
//arrays have cascade of reindexing, so this is best for FIFO

//in singly linked list,
  //most efficient to add to end, remove from beginning
  //otherwise, removing from end requires O(N)

const Node = function(val) {
    this.val = val;
    this.next = null;
}

const Queue = function() {
    this.first = null;
    this.last = null;
    this.size = 0;
}

Queue.prototype.enqueue = function(val) {
    newNode = new Node(val);
    if (!this.first) {
        this.first = newNode;
        this.last = newNode;
    } else {
        this.last.next = newNode;
        this.last = newNode;
    }
    return this.size++;
}

Queue.prototype.dequeue = function() {
    if (!this.first) return null;
    let temp = this.first;
    if (this.first === this.last) {
        this.last = null;
    }
    this.first = this.first.next
    this.size--;
    return temp.val;
}

var q = new Queue;
q.enqueue(1)
q.enqueue(2)
q.enqueue(3)
console.log(q);
q.dequeue()
q.dequeue()
console.log(q);