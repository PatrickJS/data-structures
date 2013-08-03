var makeQueue = function(){
  var methods = {};
  methods.storage = {};
  methods.front = 0;
  methods.queueSize = 0;
  _.extend(methods, queueMethods);

  return methods;
};

var queueMethods = {};

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
};
