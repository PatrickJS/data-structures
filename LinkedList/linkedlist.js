/*
A linkedList class, in functional style, with the following properties:

.head property, a linkedListNode instance
.tail property, a linkedListNode instance
.addToTail() method, takes a value and adds it to the end of the list
.removeHead() method, removes the first node from the list and returns its value
.contains() method, returns boolean reflecting whether or not the passed-in value is in the linked list
*/

var LinkedList = function() {
  this.head = null;
  this.tail = null;
};
var MakeNode = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.addToTail = function(value) {
  // body...
};

