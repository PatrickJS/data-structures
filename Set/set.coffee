class Set
  constructor: ->
    @_storage = {}
  generateKey: (value)->
  add: (value)->
    value = @generateKey(value)
    @_storage[value] = value
  contains: (value)->
    value = @generateKey(value)
    @_storage[value] is value
  remove: (value)->
    value = @generateKey(value)
    temp = @_storage[value]
    return temp if (delete @_storage[value])
