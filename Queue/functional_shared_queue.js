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
};

queueMethods.dequeue = function(){
};

queueMethods.size = function(){
};
