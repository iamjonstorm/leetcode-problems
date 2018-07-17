/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head.next == null) {
        return null;
    }
    //thought process is store the last n+1 nodes in memory to jump back to once i find the end of the linked list
    var currentNode = head;
    var memory = [];
    memory.push(head);
    while(currentNode.next != null) {
        currentNode = currentNode.next;
        memory.push(currentNode);
        if(memory.length > n+1) {
            memory.shift();
        }
    }
    if(n+1 > memory.length) {
        //Missing a beginning node in case of [1,2], 2
        //memory[0] is node to remove, but since memory isnt long enough that tells us there is no node before it to link
        return memory[1];
    }
    memory[0].next = memory[2];
    return head;
};