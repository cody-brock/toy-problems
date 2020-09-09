// 160. Intersection of Two Linked Lists

// Write a program to find the node at which the intersection of two singly linked lists begins.

// For example, the following two linked lists:


// begin to intersect at node c1.


var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let copyA = headA;
  let copyB = headB;
  
  while(copyA !== copyB) {
      // console.log({copyA, copyB})
      
      if (copyA === null) {
          copyA = headB;
      } else {
          copyA = copyA.next;
      }
      
      if (copyB === null) {
          copyB = headA;
      } else {
          copyB = copyB.next;
      }
  }

  return copyA
  
};