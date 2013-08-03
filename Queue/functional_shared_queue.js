var makeQueue = function(){
  var methods = {};
  methods.storage = {};
  methods.front = 0;
  methods.queueSize = 0;
  _.extend(methods, queueMethods);

  return methods;
};
