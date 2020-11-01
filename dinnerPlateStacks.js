// 1172. Dinner Plate Stacks
// You have an infinite number of stacks arranged in a row and numbered (left to right) from 0, each of the stacks has the same maximum capacity.

// Implement the DinnerPlates class:

// DinnerPlates(int capacity) Initializes the object with the maximum capacity of the stacks.
// void push(int val) Pushes the given positive integer val into the leftmost stack with size less than capacity.
// int pop() Returns the value at the top of the rightmost non-empty stack and removes it from that stack, and returns -1 if all stacks are empty.
// int popAtStack(int index) Returns the value at the top of the stack with the given index and removes it from that stack, and returns -1 if the stack with that given index is empty.

/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    
  // Stacks is an array holding the stacks subarrays
  this.stacks = [];
  
  // So we can reference capacity elsewhere
  this.capacity = capacity;
  
};

/** 
* @param {number} val
* @return {void}
*/
DinnerPlates.prototype.push = function(val) {
  
  // First, we find the last stack
  let last = this.getFirstOpenStack();
  
  // If we do not yet have anything in stacks, then add a stack
  if (last === null) {
      this.newStack();
      last = this.getLastStack();
  }
  
  // If our last stack is not yet full, simply push val to this stack
  if (this.isFull(last) === false) {
      last.push(val);
  } 
  // Else, if our last stack is full, then we add a stack, find new last, then push val into last
  else if (this.isFull(last) === true) {
      this.newStack();
      last = this.getLastStack();
      last.push(val);
  }
  
};

/**
* @return {number}
*/
DinnerPlates.prototype.pop = function() {
      
  // First, we find the last stack
  let last = this.getLastNonEmptyStack();
  
  if (last === null) return -1;
      
  // Next, we pop off the last element
  let res = last.pop();
  
  // Last, if the last stack is now empty, we remove the stack from stacks
  if (last.length === 0) {
      this.stacks.pop();
  }
  
  // We return the value we popped
  return res;
  
};

/** 
* @param {number} index
* @return {number}
*/
DinnerPlates.prototype.popAtStack = function(index) {
      
  // First, if the index is too large, error out
  if (index >= this.stacks.length) {
      return -1;
  }
  
  // Next, find the stack at index
  let currStack = this.stacks[index];
  
  if (currStack.length === 0) {
      return -1
  } else {
      let res = currStack.pop();
      return res;
  }
  
};

//===========================
// helpers

DinnerPlates.prototype.getLastStack = function() {
  
  // If we do not yet have a stack in stacks, return null
  if (this.stacks.length === 0) {
      return null;
  } else {
      // Simply return the last stack
      return this.stacks[this.stacks.length - 1];
  }
  
};

DinnerPlates.prototype.getLastNonEmptyStack = function() {
  
  let res = null;
  
  for (let i = 0; i < this.stacks.length; i++) {
      if (this.stacks[i].length > 0) {
          res = this.stacks[i];
      }  
  }
  
  return res;
  
};

DinnerPlates.prototype.getFirstOpenStack = function() {
  
  // If we do not yet have a stack in stacks, return null
  if (this.stacks.length === 0) {
      return null;
  } else {
      // First, check to find the earliest stack that is less than capacity
      for (let i = 0; i < this.stacks.length; i++) {
          if (this.isFull(this.stacks[i]) === false) {
              return this.stacks[i]
          }
      }
      // If all stacks were at capacity, then return the last stack
      return this.stacks[this.stacks.length - 1];
  }
  
};

DinnerPlates.prototype.newStack = function() {
  this.stacks.push([]);
};

DinnerPlates.prototype.isFull = function(stack) {
  
  if (!stack) return undefined;
  
  if (stack.length < this.capacity) {
      return false;
  } else {
      return true;
  }
  
};


/** 
* Your DinnerPlates object will be instantiated and called as such:
* var obj = new DinnerPlates(capacity)
* obj.push(val)
* var param_2 = obj.pop()
* var param_3 = obj.popAtStack(index)
*/