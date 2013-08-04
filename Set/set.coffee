class Set
  constructor: ->
    @_storage = {}
  generateKey: (value)->
    type = typeof value
    if type is "function"
      value = value.toString()
    else if type is "undefined"
      return "undefined"
    else if type is "number" and not value and value isnt 0
      return "NaN"
    else
      value = JSON.stringify(value)
    return value
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
