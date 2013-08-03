// Pseudo-Classical pattern

var Stack = function(){
  this.storage = {};
  this.stackSize = 0;
};


Stack.prototype.push = function(value){
  this.storage[this.stackSize++] = value;
};

Stack.prototype.pop = function(){
  if (this.stackSize) {
    var temp = this.storage[this.stackSize - 1];
    return (delete this.storage[this.stackSize--]) && temp;
  }
};

Stack.prototype.size = function(){
  return this.stackSize;
};
