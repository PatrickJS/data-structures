var makeStack = function(){
  this.storage = {};
  this.size = 0;
  methods = {};
  _.extend(methods, stackMethods);

  return methods;
};
