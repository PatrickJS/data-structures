var makeSet = function(){
  var set = Object.create(makeSet.prototype);
  set._storage = {};
  return set;
};

makeSet.prototype.generateKey = function (value) {
  var type = typeof value;
  if (type === 'function') {
    value = value.toString();
  }
  else if(type === 'undefined') {
    return 'undefined';
  }
  //NaN
  else if(type === 'number' && !value && value !==0) {
    return 'NaN';
  }
  else {
    value = JSON.stringify(value);
  }
  return value;
};

makeSet.prototype.add = function(value){
  value = this.generateKey(value);
  this._storage[value] = true;
};

makeSet.prototype.contains = function(value){
  value = this.generateKey(value);
  return !!this._storage[value];
};

makeSet.prototype.remove = function(value){
  value = this.generateKey(value);
  delete this._storage[value];
};
