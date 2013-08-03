class Stack
  constructor: ->
  push: (value)->
  pop: ->
    if @stackSize
      temp = @storage[@stackSize - 1]
      return (delete @storage[@stackSize--]) and temp
  size: ->
    return @stackSize
