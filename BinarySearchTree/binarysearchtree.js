var makeBinarySearchTree = function(){
  var newTree = Object.create(makeBinarySearchTree.prototype);
  newTree.value = undefined;
  newTree.left = null;
  newTree.right = null;

  return newTree;
};

//if the value is equal, it goes to the left
makeBinarySearchTree.prototype.insert = function(value) {
  var bst;
  if(this.value === undefined) {
    this.value = value;
  } else if (value > this.value) {
    if(this.right) {
      this.right.insert(value);
    } else {
      bst = makeBinarySearchTree();
      bst.value = value;
      this.right = bst;
    }
  } else {
    if(this.left) {
      this.left.insert(value);
    } else {
      bst = makeBinarySearchTree();
      bst.value = value;
      this.left = bst;
    }
  }

};
makeBinarySearchTree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  else if (this.right && value > this.value) {
    return this.right.contains(value);
  }
  else if (this.left && value <= this.value) {
    return this.left.contains(value);
  }
  else {
    return false;
  }

};
makeBinarySearchTree.prototype.depthFirstLog = function(callback) {
  callback(this.value);
  if (this.left) {
    this.left.depthFirstLog(callback);
  }
  if (this.right) {
    this.right.depthFirstLog(callback);
  }
};

makeBinarySearchTree.prototype.breadthFirstLog = function (callback) {
  //TODO: merge into one queue that dequeues and enqueues

  //trees that we examine now
  var queuedTrees = [];
  //trees we will examine next
  var queuedTreesOnDeck = [];

  //a standalone function
  var examineTree = function (subtree) {
    callback(subtree.value);
    queuedTreesOnDeck.push(subtree.left);
    queuedTreesOnDeck.push(subtree.right);
  };
//need to clear out queued trees
  var organizer = function() {
    //once a level is cleared, run this
    _.each(queuedTrees, function(subtree) {
      if (subtree!==null) {
        examineTree(subtree);
      }
    });
    queuedTrees = queuedTreesOnDeck;
    queuedTreesOnDeck = [];

    if (queuedTrees.length) {
      organizer();
    }
  };

  //set things off with the current tree
  queuedTrees.push(this);
  organizer();
};
