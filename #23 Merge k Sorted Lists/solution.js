/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
    var head = new ListNode(0);
    var current = head;
    var pointerList = [];
    var valuesList = [];
    var listsLeftToGoThrough = 0;

    //console.log(lists.length);
    //console.log(lists[0]);
    for(var i = 0; i < lists.length; i++) {
        if(lists[i] == null) {
            valuesList[i] = null;
        } else {
            valuesList[i] = lists[i].val;
            listsLeftToGoThrough++;
        }
    }
    
    while(listsLeftToGoThrough > 0) {
        var indexToPullFrom = smallestIndexByValue(valuesList);
        //console.log("Values List: " + valuesList);
        //console.log("Smallest Value: " + valuesList[indexToPullFrom]);
        var newNode = new ListNode(valuesList[indexToPullFrom]);
        current.next = newNode;
        current = current.next;
        if(lists[indexToPullFrom].next == null) {
            lists[indexToPullFrom] = lists[indexToPullFrom].next;
            valuesList[indexToPullFrom] = null;
            listsLeftToGoThrough--;
        } else {
            lists[indexToPullFrom] = lists[indexToPullFrom].next;
            valuesList[indexToPullFrom] = lists[indexToPullFrom].val;
        }

    }
    
    return head.next;
    
};

var smallestIndexByValue = function(arr) {
    var smallestNumber = null;
    var indexOfSmallestNumber = 0;
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] === null) {
            continue;
        }
        if(smallestNumber == null || arr[i] < smallestNumber) {
            smallestNumber = arr[i];
            indexOfSmallestNumber = i;
        }
    }
    return indexOfSmallestNumber;
};