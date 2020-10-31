// 142. Linked List Cycle II

// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Notice that you should not modify the linked list.

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
//  * @return {ListNode}
//  */

var detectCycle = function(head) {
    
  if (!head) return null;

  let node = head;
  let set = new Set();
  
  while (node !== null) {
      if (set.has(node)) {
          return node;
      } else {
          set.add(node);
          node = node.next;
      }
  }
  
  return null;
  
};

// O(1) memory
var detectCycle = function(head) {
    
  let fast = head;
  let slow = head;
  
  while (fast && fast.next && fast.next.next) {
      
      slow = slow.next;
      fast = fast.next.next;
      
      if (slow === fast) {
          slow = head;
          
          while (slow !== fast) {
              slow = slow.next;
              fast = fast.next;
          }
          
          return slow;
      }
      
  }
  
  return null;
  
};