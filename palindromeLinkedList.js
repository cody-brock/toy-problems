// 234. Palindrome Linked List
// Given a singly linked list, determine if it is a palindrome.


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// /**
//  * @param {ListNode} head
//  * @return {boolean}
//  */
var isPalindromeIterative = function(head) {
    
  if (!head || !head.next) return true;
  
  let slow = head;
  let fast = head;
  
  while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
  }
  
  slow.next = reverseList(slow.next);
  slow = slow.next;
  
  while (slow !== null) {
      if (slow.val !== head.val) return false;
      slow = slow.next;
      head = head.next;
  }
  
  return true;
  
};

reverseList = function(n) {
  let prev = null;
  let next = null;
  while (n) {
      next = n.next;
      n.next = prev;
      prev = n;
      n = next;
  }
  return prev;
}


// ===================================
// using stack
var isPalindromeStack = function(head) {
    
  let fast = head;
  let slow = head;
  let stack = [];
  
  while (fast !== null && fast.next !== null) {
      stack.push(slow.val);
      slow = slow.next;
      fast = fast.next.next;
  }
  
  if (fast !== null) slow = slow.next;
  
  while (slow !== null) {
      let value = stack.pop();
      if (value !== slow.val) return false;
      slow = slow.next;
  }
  
  return true;
  
};
