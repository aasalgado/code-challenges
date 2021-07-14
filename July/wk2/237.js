// 237. Delete Node in a Linked List
//   Definition for singly-linked list.
//     function ListNode(val) {
//       this.val = val;
//       this.next = null;
//   }

deleteNode = function(node) {
    node.val = node.next.val;
    node.next = node.next.next;
};