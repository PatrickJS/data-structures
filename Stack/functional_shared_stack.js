var makeStack = function(){
  methods = {};
  methods.storage = {};
  methods.stackSize = 0;
  _.extend(methods, stackMethods);

  return methods;
};

stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.stackSize++] = value;
};

stackMethods.pop = function(){
  if (this.stackSize) {
    var temp = this.storage[this.stackSize - 1];
    return (delete this.storage[this.stackSize--]) && temp;
  }
};

stackMethods.size = function(){
  return this.stackSize;
};
