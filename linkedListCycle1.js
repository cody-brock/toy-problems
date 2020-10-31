// 141. Linked List Cycle
// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.

// Follow up:

// Can you solve it using O(1) (i.e. constant) memory?


/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var hasCycle = function(head) {
    
  if (!head || head.next === null) return false;
  
  let set = new Set();
  let node = head;
  
  while (node !== null) {
      if (set.has(node)) {
          return true;
      } else {
          set.add(node);
          node = node.next;
      }
  }
  
  return false;
  
};