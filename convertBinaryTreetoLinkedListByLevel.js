
// =======PROBLEM DESCRIPTION===================================================================================
// Given a Binary Tree, create an algorithm that creates a linked list of all the nodes at each depth


// =======SET-UP================================================================================================

// First, implement Binary Tree
class Node {
  constructor(data) {
    this.val = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {

  constructor() {
    this.root = null;
  }

  addNode(val) {
    let node = new Node(val);
    if (!this.root) {
      this.root = node;
    } else {
      this.insertNode(node);
    }
  }

  insertNode(node) {
    let queue = [this.root];
    while (queue.length) {
      let n = queue.shift();
      if (n === null) return;
      if (!n.left) {
        n.left = node;
        return;
      } else if (!n.right) {
        n.right = node;
        return;
      } else {
        queue.push(n.left);
        queue.push(n.right);
      }
    }
    return this.root;
  }

}


// ===========================================
// Next, implement Linked List
class Item {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {

  constructor() {
    this.head = null;
  }

  push(val) {
    let newItem = new Item(val);
    if (!this.head) {
      this.head = newItem;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newItem;
    }
  }

}



// =======SOLUTION================================================================================================

const binaryTreeToLinkedList = function(root) {
  
  if (!root) return [];

  let res = [];

  const helper = function(node, level) {
    
    if (node === null) return;

    if (!res[level]) res[level] = new LinkedList(); 
    res[level].push(node.val);

    helper(node.left, level+1);
    helper(node.right, level+1);

  }

  helper(root, 0);
  return res;

}



// =======TEST CASES================================================================================================

let tree1 = new BinaryTree;
tree1.addNode(1);
tree1.addNode(2);
tree1.addNode(3);
tree1.addNode(4);
tree1.addNode(5);
tree1.addNode(6);
tree1.addNode(7);
tree1.addNode(8);
tree1.addNode(9);

let tree2 = new BinaryTree;
tree2.addNode('a');
tree2.addNode('b');
tree2.addNode('c');
tree2.addNode('d');
tree2.addNode('e');
tree2.addNode('f');
tree2.addNode('g');
tree2.addNode('h');
tree2.addNode('i');

console.log(binaryTreeToLinkedList(tree1.root));
console.log(binaryTreeToLinkedList(tree2.root));

