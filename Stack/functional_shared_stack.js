var makeStack = function(){
  this.storage = {};
  this.size = 0;
  methods = {};
  _.extend(methods, stackMethods);

  return methods;
};

stackMethods = {};

stackMethods.push = function(value){
  this.storage[this.size++] = value;
};

stackMethods.pop = function(){
  if (this.size) {
    var temp = this.storage[this.size - 1];
    return (delete this.storage[this.size--]) && temp;
  }
};

stackMethods.size = function(){
};
