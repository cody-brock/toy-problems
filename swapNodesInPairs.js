// 24. Swap Nodes in Pairs
// Given a linked list, swap every two adjacent nodes and return its head.

// You may not modify the values in the list's nodes. Only nodes itself may be changed.

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
var swapPairs = function(head) {
    
  if (!head) return null;
  if (!head.next) return head;
  
  let swap = function(node) {
      
      if (node === null || node.next === null) return node;
      
      let one = node;
      let two = node.next;
      
      let next = node.next.next;
              
      two.next = one;
      one.next = swap(next);
              
      return two;
      
  }
  
  return swap(head);
      
};