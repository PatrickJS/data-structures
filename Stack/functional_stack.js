var makeStack = function(){
  var storage = {},
      size = 0,
      stack = {};

  stack.push = function(value){
    storage[size++] = value;
  };

  stack.pop = function(){
  };

  stack.size = function(){
  };

  return stack;
};
