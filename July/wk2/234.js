// 234. Palindrome Linked List
var isPalindrome = function(head) {
    let fast = head;
    let slow = head;

    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }

    slow = reverese(slow);
    fast = head;

    while (slow !== null) {
        if (slow.val !== fast.val) {
            return false;
        }

        slow = slow.next;
        fast = fast.next;
    }

    return true;
};

let reverese = function (head) {
    let prevNode = null;

    while (head !== null) {
        let nextNode = head.next;
        head.next = prevNode;
        prevNode = head.next;
        head = nextNode;
    }

    return prevNode;
}