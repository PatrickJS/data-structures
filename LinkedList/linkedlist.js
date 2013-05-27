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
    node.next = this.head;
    this.head = node;
  }
};
LinkedList.prototype.removeHead = function() {
  this.head = this.head.next;
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
LinkedList.prototype.removeTail = function(node) {
  node = node || this.head;
  if (node.next === this.tail) {
    this.tail = node;
    this.tail.next = null;
  } else if (node.next) {
    return this.removeTail(node.next);
  }
  return;
};

LinkedList.prototype.contains = function(value, node) {
  node = node || this.head;
  if (node.value === value) {
    return true;
  } else if (node.next) {
    return this.contains(value, node.next);
  }
  return false;
};
