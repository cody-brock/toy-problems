
var sortStacks = function() {
  this.stack = [];
  this.temp = [];
}

sortStacks.prototype.push = function(val) {
  this.stack.push(val);
}

sortStacks.prototype.sort = function() {
  while (this.stack.length) {
    console.log(this.stack, this.temp)
    let val = this.stack.pop();
    while (this.temp.length && val < this.temp[this.temp.length - 1]) {
      this.stack.push(this.temp.pop());
    }
    this.temp.push(val);
  }
  return this.temp;
}



var list = new sortStacks();
list.push(4);
list.push(2);
list.push(7);
list.push(1);
list.push(2);
list.push(3);
console.log(list);
console.log(list.sort());
