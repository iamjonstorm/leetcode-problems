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
    var headNode = new ListNode(0);
    var currentNode = headNode;
    var previousNode = null;
    var carry = 0;
    
    while(l1 || l2 || carry != 0) {
        var val1 = l1 && l1.val ? l1.val : 0;
        var val2 = l2 && l2.val ? l2.val : 0;
        var sum = val1 + val2 + carry;
        
        if(sum >= 10) {
            carry = Math.floor(sum / 10);
            sum = sum % 10;
        } else {
            carry = 0;
        }
        
        currentNode.val = sum;
        
        if(l1 && l1.next != null || l2 && l2.next != null || carry != 0) {
            var nextNode = new ListNode(0);
            currentNode.next = nextNode;
            currentNode = nextNode;
        }
        
        l1 = l1 && l1.next ? l1.next : undefined;
        l2 = l2 && l2.next ? l2.next : undefined;
    }
    
    return headNode;

};