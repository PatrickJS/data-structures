class LinkedList
  attr_writer :head, :tail
  def initialize
    @head, @tail = nil
  end

  def add_to_head(value)
    node = Node.new(value)
    if !@head
      @head, @tail = node
    else
      @head.next = @head
      @head = node
    end
  end

  def add_to_tail(value)
    node = Node.new(value)
    if !@tail
      @head, @tail = node
    else
      @head.next = @head
      @head = node
    end
  end

  def remove_head
    @head.next = @head
  end

  def remove_tail(node=@head)
    if node.next == @tail
      @tail = node
    else
      self.remove_head(node.next)
    end
  end

  def contains(value, node=@head)
    if node.value == value
      return true
    else node.next
      return node.contains(value, node.next)
    end
    return false
  end

end

class Node
  attr_accessor :value, :next
  def initialize(value)
    @value = value
    @next = nil
  end
end
