class Tree
  constructor: (value)->
    @value = value
    @children = []
  addChild: (value)->
    @children.push new Tree(value)
  contains: (value)->
    if @value == value
      return true
    else if @children.length
      for child in @children
        return true if child.contains(value)
    return false
