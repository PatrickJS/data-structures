class Set
  constructor: ->
    @_storage = {}
  generateKey: (value)->
  add: (value)->
    value = @generateKey(value)
    @_storage[value] = value
  contains: (value)->
  remove: (value)->
