/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @param {number} val
//  * @return {ListNode}
//  */
var removeElements1 = function(head, val) {

  if (head === []) return [];
  
  let previous = null;
  let current = head;
  
  while (current) {
      if (current.val === val) {
          if (previous === null) {
              head = current.next;
          } else {
              previous.next = current.next;
          }
      } else {
          previous = current;
      }
      current = current.next;
  }
  
  return head;
  
};