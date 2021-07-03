// 206. Reverse Linked List
// function ListNode(val, next) {
//        this.val = (val===undefined ? 0 : val)
//          this.next = (next===undefined ? null : next)
//     }
var reverseList = function(head) {
    let prevNode = null;

    while(head !== null) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head;
        head = nextNode;
    }
    return prevNode;
};