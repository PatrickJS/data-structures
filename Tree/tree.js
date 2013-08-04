var Tree = function(value) {
  this.value = value;
  this.children = [];
};

Tree.prototype.addChild = function(value) {
  this.children.push(new Tree(value));
};

Tree.prototype.contains = function(value) {
  if (this.value === value) {
    return true;
  } else if (this.children.length) {
    var child = this.children;
    for (var i = 0, l = child.length; i < l; i++) {
      return child[i].contains(value) && true;
    }
  }
  return false;
};
