// 876. Middle of the Linked List

// Given a non-empty, singly linked list with head node head, return a middle node of linked list.

// If there are two middle nodes, return the second middle node.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {ListNode}
//  */
var middleNode = function(head) {
    
  if (!head) return null;
  let mid;
  
  let headLength = findLength(head);
      
  if (headLength % 2 === 1) mid = Math.ceil(headLength/2);
  else mid = (headLength / 2) + 1;
  
  return findIndex(head, mid);
  
};

var findLength = function(node) {
  let tally = 1;
  while (node.next) {
      tally++;
      node = node.next;
  }
  return tally;
};

var findIndex = function(node, idx) {
  let tally = 1;
  while (tally < idx) {
      tally++;
      node = node.next
  }
  return node
};


// ====================================