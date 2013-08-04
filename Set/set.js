var makeSet = function(){
  var set = Object.create(makeSet.prototype);
  set._storage = {};
  return set;
};

makeSet.prototype.generateKey = function(value) {
  var type = typeof value;
  if (type === 'function') {
    value = value.toString();
  }
  else if (type === 'undefined') {
    return 'undefined';
  }
  //NaN
  else if (type === 'number' && !value && value !== 0) {
    return 'NaN';
  }
  return value;
};

makeSet.prototype.add = function(value){
  value = this.generateKey(value);
  this._storage[value] = value;
};

makeSet.prototype.contains = function(value){
  value = this.generateKey(value);
  return this._storage[value] === value;
};

makeSet.prototype.remove = function(value){
  value = this.generateKey(value);
  var temp = this._storage[value];
  return (delete this._storage[value]) && temp;
};
