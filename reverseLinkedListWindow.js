// 92. Reverse Linked List II
// Reverse a linked list from position m to n. Do it in one-pass.
// Note: 1 ≤ m ≤ n ≤ length of list.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} m
//  * @param {number} n
//  * @return {ListNode}
//  */
var reverseBetween = function(head, m, n) {
    
  // handle edge cases
  if (!head) return null;
  
  // set up pointers
  let prev = null;
  let curr = head;
  
  // move our head to m, the beginning of our window to reverse
  for (let i = 0; i < m - 1; i++) {
      prev = curr;
      curr = curr.next;
  }
  
  // Remember these positions to reconnect list at end
  left = prev;
  right = curr;
  
  // reverse list from m to n
  for (let i = 0; i <= n - m; i++) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }

  // Connect up the remaining items, left and right
  if (left) {
      left.next = prev
  } else {
      head = prev;
  }
  
  right.next = curr;
  
  
  return head
  
};