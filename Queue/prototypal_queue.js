var Queue = function(){
  var methods = Object.create(Queue.prototype);
  methods.storage = {};
  methods.front = 0;
  methods.queueSize = 0;

  return methods;
};

var queueMethods = Queue.prototype;

queueMethods.enqueue = function(value){
};

queueMethods.dequeue = function(){
};

queueMethods.size = function(){
};
