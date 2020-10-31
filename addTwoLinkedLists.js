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
// /**
//  * @param {ListNode} l1
//  * @param {ListNode} l2
//  * @return {ListNode}
//  */
var addTwoNumbers = function(l1, l2) {
    
  return reverseList(addLists(reverseList(l1), reverseList(l2)));
  
};

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
};

const addLists = function(list1, list2) {

  let sumList = new ListNode();
  let head = sumList;
  let sum = 0;
  let carry = 0;

  while (list1 || list2 || sum > 0) {

      if (list1) {
          sum += list1.val;
          list1 = list1.next;
      }

      if (list2) {
          sum += list2.val;
          list2 = list2.next;
      }

      if (sum >= 10) {
          carry = 1;
          sum = sum - 10;
      }

      head.next = new ListNode(sum);
      head = head.next;

      sum = carry;
      carry = 0;

  }

  return sumList.next;

};