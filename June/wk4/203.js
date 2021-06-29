// Remove Linked List Elements
// Input: head = [1,2,6,3,4,5,6], val = 6
var removeElements = function(head, val) {
    if (head === null) {
        return null;
    }

   let currentNode = new ListNode(-1);
   currentNode.next = head;
   head = currentNode;

   while (currentNode.next !== null) {
       if (currentNode.next.val === val) {
           currentNode.next = currentNode.next.next;
       } else {
           currentNode = currentNode.next;
       }
   }

   return head.next;
};

function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}