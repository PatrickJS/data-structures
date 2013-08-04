class Set
  def initilaize
    @storage = {}
  end

  def add(value)
  end

  def contains(value)
    return @storage[value] == value
  end

  def remove(value)
    return @storage.delete(value)
  end

end
