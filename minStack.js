// 155. Min Stack
// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// push(x) -- Push element x onto stack.
// pop() -- Removes the element on top of the stack.
// top() -- Get the top element.
// getMin() -- Retrieve the minimum element in the stack.
 

/**
 * initialize your data structure here.
 */
var MinStack = function() {
  this.elements = [];
};

/** 
* @param {number} x
* @return {void}
*/
MinStack.prototype.push = function(x) {
  
  this.elements.push({
      val: x,
      min: this.elements.length === 0 ? x : Math.min(x, this.getMin()),
  });
  
};

/**
* @return {void}
*/
MinStack.prototype.pop = function() {
  
  return this.elements.pop();
  
};

/**
* @return {number}
*/
MinStack.prototype.top = function() {
  
  return this.elements[this.elements.length - 1].val;
  
};

/**
* @return {number}
*/
MinStack.prototype.getMin = function() {
  
  return this.elements[this.elements.length - 1].min;
  
};

/** 
* Your MinStack object will be instantiated and called as such:
* var obj = new MinStack()
* obj.push(x)
* obj.pop()
* var param_3 = obj.top()
* var param_4 = obj.getMin()
*/