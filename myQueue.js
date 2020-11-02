// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.
// Follow-up: Can you implement the queue such that each operation is amortized O(1) time complexity? In other words, performing n operations will take overall O(n) time even if one of those operations may take longer.


/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
  this.oldest = [];
  this.newest = [];
};

/**
* Push element x to the back of queue. 
* @param {number} x
* @return {void}
*/
MyQueue.prototype.push = function(x) {
  
  this.newest.push(x); // newest is at end
  
};

/**
* Removes the element from in front of queue and returns that element.
* @return {number}
*/
MyQueue.prototype.pop = function() {
  
  this.shiftStacks();
  
  if (this.oldest.length < 1) return null;
  
  let num = this.oldest.pop();
  
  return num;
  
};

/**
* Get the front element.
* @return {number}
*/
MyQueue.prototype.peek = function() {
  
  this.shiftStacks();
  
  if (this.oldest.length < 1) return null;
  
  return this.oldest[this.oldest.length - 1];
  
};

/**
* Returns whether the queue is empty.
* @return {boolean}
*/
MyQueue.prototype.empty = function() {
  
  return (this.oldest.length + this.newest.length < 1 ? true : false);
  
};

MyQueue.prototype.shiftStacks = function() {
  
  if (this.oldest.length < 1) {
      while (this.newest.length) {
          this.oldest.push(this.newest.pop());
      }
  }
  
};

/** 
* Your MyQueue object will be instantiated and called as such:
* var obj = new MyQueue()
* obj.push(x)
* var param_2 = obj.pop()
* var param_3 = obj.peek()
* var param_4 = obj.empty()
*/