// 206. Reverse Linked List
// Reverse a singly linked list.


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

var reverseListRecursive1 = function(head) {
  if (!head) return null;
  
  const helper = (p1, p2) => {
      // console.log({p1, p2, head});
      if (p2 !== null) {
          let p3 = p2.next;
          p2.next = p1;
          return helper(p2, p3);
      } else {
          return p1;
      }
  }
  
  return helper(null, head);
  
};



var reverseListRecursive2 = function(head, previous = null) {
  if (!head) return previous;
  
  let next = head.next;
  head.next = previous;
  return reverseList(next, head);
  
};



var reverseListRecursiveIterative = function(head) {

    if (!head) return null;

    let previous = null;
    let next = null;

    while (head) {
        let next = head.next;
        head.next = previous;
        previous = head;
        head = next;
    } 
    
    return previous;
  
};

