var Queue = function(){
  var methods = Object.create(Queue.prototype);
  methods.storage = {};
  methods.front = 0;
  methods.queueSize = 0;

  return methods;
};
