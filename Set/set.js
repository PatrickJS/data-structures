var makeSet = function(){
  var set = Object.create(makeSet.prototype);
  set._storage = {};
  return set;
};


makeSet.prototype.add = function(value){
  this._storage[value] = value;
};

makeSet.prototype.contains = function(value){
};

makeSet.prototype.remove = function(value){
};
