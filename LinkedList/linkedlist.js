var LinkedList = function() {
  this.head = null;
  this.tail = null;
};
var MakeNode = function(value) {
  this.value = value;
  this.next = null;
};

LinkedList.prototype.unshift = function(value) {
  var node = new MakeNode(value);
  if (this.head) {
    node.next = this.head;
    this.head = node;
  } else {
    this.head = node;
    this.tail = node;
  }
};
LinkedList.prototype.shift = function() {
  var temp = this.head;
  this.head = this.head.next;
  return temp;
};
LinkedList.prototype.push = function(value) {
  var node = new MakeNode(value);
  if (this.tail) {
    this.tail.next = node;
    this.tail = node;
  } else {
    this.head = node;
    this.tail = node;
  }
};
LinkedList.prototype.pop = function(node, temp) {
  node = node || this.head;
  temp = this.tail;
  if (node.next === this.tail) {
    this.tail = node;
    this.tail.next = null;
  } else if (node.next) {
    return this.pop(node.next);
  }
  return temp;
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
