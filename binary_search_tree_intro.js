//Binary search trees take advantage of special properties of having max 2 branches for each node
  //insertion O(log n) - best and average case
  //searching O(log n) - best and average case
    //NOT guaranteed!

const Node = function(value) {
    this.value = value;
    this.left = null;
    this.right = null;
}

const BinarySearchTree = function() {
    this.root = null;
}

BinarySearchTree.prototype.insert = function(val) {
    newNode = new Node(val);
    if (this.root === null) {
        this.root = newNode
        return this
    } else {
        var current = this.root;
        while(true) {
            if (val < current.value) {
                if (val === current.value) return undefined;
                if (current.left === null) {
                    current.left = newNode;
                    return this;
                } else {
                    current = current.left;
                }
            } else if (val > current.value) {
                if (current.right === null) {
                    current.right = newNode;
                    return this;
                } else {
                    current = current.right
                }
            }
        }
    }
}

BinarySearchTree.prototype.contains = function(val) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while(current && !found) {
        if (val > current.value) {
            current = current.right;
        } else if (val < current.value) {
            current = current.left;
        } else {
            return true;
        }
    }
    return false;
}

//NOW: different search types

//Time complexity of BFS vs DFS is the same - 
   //they each visit the nodes 1 time.
//But Space complexity does vary

//DFS: 
  //is good for a wide tree
  //but on a long tree, takes up space with call stack.
//BFS: 
  //is good for a long tree
  //but on a wide tree, the queue gets big

//DFS - pre/post/in order - when to use them?
  //there aren't really great specific examples of this.
  //In Order - nice because we get all noes in the tree in their underlying order
  //Pre Order - can be used to "export" tree strucutre so that it is easily reconstructed or copied
  //

//Most of the time, trees are wider rather than a long one-sided tree
BinarySearchTree.prototype.BFS = function() {
    var node = this.root;
    var data = [];
    var queue = [];

    queue.push(node);

    while(queue.length) {
        node = queue.shift();
        data.push(node.value);
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return data
}

BinarySearchTree.prototype.DFSPreOrder = function() {
    var data = [];
    var current = this.root;

    function helperTraverse(node) {
        data.push(node.value);
        if (node.left) helperTraverse(node.left);
        if (node.right) helperTraverse(node.right);
    }
    helperTraverse(current);
    return data;
}


BinarySearchTree.prototype.DFSPostOrder = function() {
    var data = [];
    var current = this.root;

    function helperTraverse(node) {
        if (node.left) helperTraverse(node.left);
        if (node.right) helperTraverse(node.right);
        data.push(node.value);
    }
    helperTraverse(current);
    return data;
}

BinarySearchTree.prototype.DFSInOrder = function() {
    var data = [];
    var current = this.root;

    function helperTraverse(node) {
        if (node.left) helperTraverse(node.left);
        data.push(node.value);
        if (node.right) helperTraverse(node.right);
    }
    helperTraverse(current);
    return data;
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(6);
tree.insert(15);
tree.insert(3);
tree.insert(8);
tree.insert(20);
// console.log(tree);
// console.log(tree.contains(3));
// console.log(tree.contains(11));
// console.log(tree.contains(10));
// console.log(tree.contains(13));
// console.log(tree.contains(110));

//        10
//    6      15
//  3   8       20

console.log(tree.BFS());
console.log(tree.DFSPreOrder());
console.log(tree.DFSPostOrder());
console.log(tree.DFSInOrder());