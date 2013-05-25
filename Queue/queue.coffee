class Queue
  initialize: ->
    @storage = {}
    @size = 0
    @front = 0
  add: (value)->
    @storage[@size] = value
    @size+=1
  remove: ->
    temp = @storage[@front]
    delete @storage[@front]
    @front+=1
    return temp
  length: ->
    return @size-@front
