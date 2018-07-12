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
var mergeTwoLists = function(l1, l2) {
    if(l1 == null && l2 == null) {
        return [];
    }
    if(l1 == null) {
        return l2;
    }
    if(l2 == null) {
        return l1;
    }
    
    var head = null;
    
    if(l1.val <= l2.val) {
        head = new ListNode(l1.val);
        l1 = l1.next;
    } else {
        head = new ListNode(l2.val);
        l2 = l2.next;
    }
    
    var answer = head;
    
    while(l1 || l2) {
        if(l1 == undefined) {
            answer.next = new ListNode(l2.val);
            answer = answer.next;
            l2 = l2.next;
            continue;
        }
        if(l2 == undefined) {
            answer.next = new ListNode(l1.val);
            answer = answer.next;
            l1 = l1.next;
            continue;
        }
        if(l1.val <= l2.val) {
            answer.next = new ListNode(l1.val);
            answer = answer.next;
            l1 = l1.next;
        } else {
            answer.next = new ListNode(l2.val);
            answer = answer.next;
            l2 = l2.next;
        }
    }
    
    return head;
    
};