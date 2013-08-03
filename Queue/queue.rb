class Queue
  attr_reader :add, :remove, :length
  def initialize
    @storage = {}
    @size    = 0
    @front   = 0
  end

  def add(value)
    @storage[@size] = value
    @size += 1
  end
  def remove
    @front += 1
    return @storage[@front-1]
  end
  def length
    return @size-@front
  end
end
