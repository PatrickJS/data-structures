var Queue = function() {
  this.storage = {};
  this.size = 0;
  this.front = 0;
};

Queue.prototype.add = function(value) {
  this.storage[this.size++] = value;
};
Queue.prototype.remove = function() {
  var temp = this.storage[this.front];
  delete this.storage[this.front++];
  return temp;
};
Queue.prototype.length = function(value) {
  return this.size - this.front;
};
