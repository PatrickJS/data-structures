var makeQueue = function(){
  var storage = {},
      front = 0,
      size = 0,
      queue = {};

  queue.enqueue = function(value){
    storage[size++] = value;
  };

  queue.dequeue = function(){
    if (size - front) {
      var temp = storage[front];
      return (delete storage[front++]) && temp;
    }
  };

  queue.size = function(){
    return size - front;
  };

  return queue;
};
