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

LinkedList.prototype.addToHead = function(value) {
  var node = new MakeNode(value);
  if (!this.head) {
    this.head = node;
    this.tail = node;
  } else {
    this.head.next = this.head;
    this.head = node;
  }
};
LinkedList.prototype.removeHead = function() {
  this.head.next = this.head;
};
LinkedList.prototype.addToTail = function(value) {
  var node = new MakeNode(value);
  if (!this.tail) {
    this.head = node;
    this.tail = node;
  } else {
    this.tail.next = node;
    this.tail = node;
  }
};
LinkedList.prototype.removeTail = function() {

};

LinkedList.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.next) {
    this.next.contains(value);
  }
  return false;
};
