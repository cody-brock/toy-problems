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

function breadthFirstSearch(tree) {
    let q = [];
    let visited = [];

    q.push(tree.root);

    if(q.length > 0) {
        let current = q.pop();
        visited.push(current.val);

        if (current.left) {
            
        }
    }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(15);
tree.insert(13);
tree.insert(11);
tree.insert(2);
tree.insert(16);
// console.log(tree);
console.log(tree.contains(3));
console.log(tree.contains(11));
console.log(tree.contains(10));
console.log(tree.contains(13));
console.log(tree.contains(110));






