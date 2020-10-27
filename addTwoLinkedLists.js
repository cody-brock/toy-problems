// 445. Add Two Numbers II

// You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
  const reverseList = function(head) {
      let prev = null;
      let next = null;
      while (head) {
          next = head.next;
          head.next = prev;
          prev = head;
          head = next;
      }
      return prev;   
  }
  
  const findLength = function(head) {
      let tally = 0;
      while (head) {
          tally++;
          head = head.next;
      }
      return tally;
  }
  
  const addLists = function(long, short) {
      
      let l = long;
      let s = short;
      let carry = 0;
      
      while (l) {
          
          if (s) {

              let sum = l.val + s.val + carry;

              if (sum >= 10) {
                  l.val = sum % 10;
                  carry = 1;
              } else {
                  l.val = sum;
                  carry = false;
              }
              
              if (carry !== false && l.next === null) {
                  l.next = new ListNode(carry, null);
                  carry = false;
              }

              l = l.next;
              s = s.next;
              
          } else {
              
              if (carry !== false) {
                  
                  let sum = l.val + carry;
                  
                  if (l.next !== null) {
                      if (sum >= 10) {
                          l.val = sum % 10;
                          carry = 1;
                      } else {
                          l.val = sum;
                          return long;
                      }

                  } else if (l.next === null) {
                      
                      if (sum >= 10) {
                          l.val = sum - 10;
                          let last = Math.floor(sum / 10 % 10);
                          l.next = new ListNode(last, null);
                          return long
                      } else {
                          l.val = sum;
                          return long
                      }
                  }
              }
              l = l.next;
          } 
          
      }
      return long;
  }
  
  let l1Length = findLength(l1);
  let l2Length = findLength(l2);
  
  const longer = l1Length >= l2Length ? l1 : l2;
  const shorter = l1Length < l2Length ? l1 : l2;
  
  let res = addLists(reverseList(longer), reverseList(shorter));
  
  return reverseList(res);
  
};