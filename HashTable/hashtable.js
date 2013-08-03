// Start Helper functions
var makeLimitedArray = function(limit) {
  var storage = [];

  var limitedArray = {};
  limitedArray.get = function(index){
    checkLimit(index);
    return storage[index];
  };
  limitedArray.set = function(index, value) {
    checkLimit(index);
    storage[index] = value;
  };

  var checkLimit = function(index){
    if(typeof index !== 'number'){ throw new Error('setter requires a numeric index for its first argument'); }
    if(limit <= index){ throw new Error('Error trying to access an over-the-limit index'); }
  };

  return limitedArray;
};
var getIndexBelowMaxForKey = function(str, max){
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash<<5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};
// End Helper functions



var HashTable = function(limit){
  this._limit = limit || 8;

  this.initializeStorage();
};

HashTable.prototype.initializeStorage = function() {
  this._storage = makeLimitedArray(this._limit);
  for (var i = 0; i < this._limit; i++) {
    this._storage.set(i,[]);
  }
};

HashTable.prototype.insert = function(key, value){
  var index = getIndexBelowMaxForKey(key,this._limit);
  var subArray = this._storage.get(index);

  //check if key is already there
  for (i = 0; i<subArray.length; i++) {
    var obj = subArray[i];
    if (obj[0] === key) {
      obj[1] = value;
      //when you replace value at key, size is unchanged
      //don't need to check size
      return;
    }
  }

  //else, push onto array
  var keyValueArray = [key, value];
  subArray.push(keyValueArray);

  //check size and re-size if necessary
  if (this.length() >= this._limit*0.75) {
    this.resize(2);
  }
};

HashTable.prototype.retrieve = function(key){
  var index = getIndexBelowMaxForKey(key,this._limit);
  var subArray = this._storage.get(index);
  for (var i = 0; i<subArray.length; i++) {
    var obj = subArray[i];
    if (obj[0] === key) {
      return obj[1];
    }
  }
  //else case:
  return undefined;
};

HashTable.prototype.remove = function(key){
  var index = getIndexBelowMaxForKey(key, this._limit);
  var subArray = this._storage.get(index);
  for (var i = 0; i<subArray.length; i++) {
    var obj = subArray[i];
    if (obj[0] === key) {
      subArray.splice(i);
      break; //when you remove object, must still check size;
    }
  }

  //check size and re-size if necessary
  if(this.length() < this._limit*0.25) {
    this.resize(0.5);
  }
};

HashTable.prototype.resize = function(factor) {
  var oldStorage = this._storage;
  var oldLimit = this._limit;
  this._limit = this._limit * factor;
  this.initializeStorage();
  for (var i = 0; i < oldLimit; i++) {
    var bucket = oldStorage.get(i);
    if (bucket) {
      for (var j = 0; j < bucket.length; j++) {
        var tuple = bucket[j];
        var key = tuple[0];
        var value = tuple[1];
        this.insert(key, value);
      }
    }
  }
};

HashTable.prototype.length = function() {
  var size=0;
  for (var i = 0; i < this._limit; i++) {
    if (this._storage.get(i).length>0) {
      size +=1;
    }
  }
  return size;
};


