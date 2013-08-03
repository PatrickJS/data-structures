var Stack = function(){
  this.storage = {};
  this.stackSize = 0;
};


Stack.prototype.push = function(value){
  this.storage[this.stackSize++] = value;
};

Stack.prototype.pop = function(){
};

Stack.prototype.size = function(){
};
