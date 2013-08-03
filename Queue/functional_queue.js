var makeQueue = function(){
  var storage = {},
      front = 0,
      size = 0,
      queue = {};

  queue.enqueue = function(value){
    storage[size++] = value;
  };

  queue.dequeue = function(){
  };

  queue.size = function(){
  };

  return queue;
};
