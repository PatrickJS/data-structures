var Queue = function(){
  var methods = Object.create(Queue.prototype);
  methods.storage = {};
  methods.front = 0;
  methods.queueSize = 0;

  return methods;
};

var queueMethods = Queue.prototype;

queueMethods.enqueue = function(value){
  this.storage[this.queueSize++] = value;
};

queueMethods.dequeue = function(){
  if (this.queueSize - this.front) {
    var temp = this.storage[this.front];
    return (delete this.storage[this.front++]) && temp;
  }
};

queueMethods.size = function(){
  return this.queueSize - this.front;
};
