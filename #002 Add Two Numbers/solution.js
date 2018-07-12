/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var head = new ListNode(0);
    var current = head;
    var carry = 0;
    while(l1 || l2 || carry > 0) {
        var val1 = l1 == null ? 0 : l1.val;
        var val2 = l2 == null ? 0 : l2.val;
        var sum = val1 + val2 + carry;
        if(sum >= 10) {
            carry = parseInt(Math.floor(sum / 10));
            sum = sum % 10;
        } else {
            carry = 0;
        }
        current.next = new ListNode(sum);
        current = current.next;
        if(l1) {
            l1 = l1.next;
        }
        if(l2){
            l2 = l2.next;
        }
    }
    
    return head.next;
};