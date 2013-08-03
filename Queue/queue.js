// Pseudo-Classical pattern

var Queue = function() {
  this.storage = {};
  this.front = 0;
  this.queueSize = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.queueSize++] = value;
};
Queue.prototype.dequeue = function() {
  if (this.queueSize - this.front) {
    var temp = this.storage[this.front];
    return (delete this.storage[this.front++]) && temp;
  }
};
Queue.prototype.size = function(value) {
  return this.queueSize - this.front;
};
