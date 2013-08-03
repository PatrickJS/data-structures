class Stack
  constructor: ->
    @storage = {}
    @stackSize = 0
  push: (value)->
    @storage[@stackSize++] = value
  pop: ->
    if @stackSize
      temp = @storage[@stackSize - 1]
      return (delete @storage[@stackSize--]) and temp
  size: ->
    return @stackSize
