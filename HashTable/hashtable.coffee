# Start Helper functions
makeLimitedArray = (limit) ->
  storage = []
  limitedArray = {}
  limitedArray.get = (index) ->
    checkLimit index
    storage[index]

  limitedArray.set = (index, value) ->
    checkLimit index
    storage[index] = value

  checkLimit = (index) ->
    throw new Error("setter requires a numeric index for its first argument")  if typeof index isnt "number"
    throw new Error("Error trying to access an over-the-limit index")  if limit <= index

  limitedArray

getIndexBelowMaxForKey = (str, max) ->
  hash = 0
  i = 0

  while i < str.length
    hash = (hash << 5) + hash + str.charCodeAt(i)
    hash = hash & hash # Convert to 32bit integer
    hash = Math.abs(hash)
    i++
  hash % max
# End Helper functions



HashTable = (limit) ->
  @_limit = limit or 8
  @initializeStorage()

HashTable::initializeStorage = ->
  @_storage = makeLimitedArray(@_limit)
  i = 0

  while i < @_limit
    @_storage.set i, []
    i++

HashTable::insert = (key, value) ->
  index = getIndexBelowMaxForKey(key, @_limit)
  subArray = @_storage.get(index)

  # check if key is already there
  i = 0
  while i < subArray.length
    obj = subArray[i]
    if obj[0] is key
      obj[1] = value
      #when you replace value at key, size is unchanged
      #don't need to check size
      return
    i++

  #else, push onto array
  keyValueArray = [key, value]
  subArray.push keyValueArray

  #check size and re-size if necessary
  @resize 2  if @length() >= @_limit * 0.75

HashTable::retrieve = (key) ->
  index = getIndexBelowMaxForKey(key, @_limit)
  subArray = @_storage.get(index)
  i = 0

  while i < subArray.length
    obj = subArray[i]
    return obj[1]  if obj[0] is key
    i++

  # else case:
  return undefined

HashTable::remove = (key) ->
  index = getIndexBelowMaxForKey(key, @_limit)
  subArray = @_storage.get(index)
  i = 0

  while i < subArray.length
    obj = subArray[i]
    if obj[0] is key
      subArray.splice i
      break #when you remove object, must still check size;
    i++

  #check size and re-size if necessary
  @resize 0.5  if @length() < @_limit * 0.25

HashTable::resize = (factor) ->
  oldStorage = @_storage
  oldLimit = @_limit
  @_limit = @_limit * factor
  @initializeStorage()
  i = 0

  while i < oldLimit
    bucket = oldStorage.get(i)
    if bucket
      j = 0

      while j < bucket.length
        tuple = bucket[j]
        key = tuple[0]
        value = tuple[1]
        @insert key, value
        j++
    i++

HashTable::length = ->
  size = 0
  i = 0

  while i < @_limit
    size += 1  if @_storage.get(i).length > 0
    i++
  size
