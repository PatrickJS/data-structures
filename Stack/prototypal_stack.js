var Stack = function(){
  var methods = Object.create(Stack.prototype);
  methods.storage = {};
  methods.stackSize = 0;
  return methods;
};
