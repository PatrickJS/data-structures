class Stack
  def initialize
    @storage = {}
    @stackSize = 0
  end

  def push(value)
  end

  def pop
    if @stackSize > 0
      temp = @storage[@stackSize - 1]
      @storage.delete(@stackSize -= 1);
      return temp
    end
  end

  def size
    return @stackSize
  end

end
