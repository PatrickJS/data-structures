var makeStack = function(){
  var storage = {},
      size = 0,
      stack = {};

  stack.push = function(value){
    storage[size++] = value;
  };

  stack.pop = function(){
    if (size) {
      var temp = storage[size - 1];
      return (delete storage[size--]) && temp;
    }
  };

  stack.size = function(){
    return size;
  };

  return stack;
};
