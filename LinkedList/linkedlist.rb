class LinkedList
  attr_writer :head, :tail

  def initialize
    @head, @tail = nil, nil
  end

  def add_to_head(value)
    node = Node.new(value)
    unless @head
      @tail, @head = node, node
    else
      node.next = @head
      @head = node
    end
  end
  def add_to_tail(value)
    node = Node.new(value)
    unless @tail
      @head = node
      @tail = node
    else
      @tail.next = node
      @tail = node
    end
  end

  def remove_head
    temp = @head
    @head = @head.next
    return temp
  end
  def remove_tail(node=@head)
    if node.next == @tail
      @tail = node
      @tail.next = nil
    elsif node.next
      self.remove_head(node.next)
    end
  end

  def contains(value, node=@head)
    if node.value == value
      return true
    elsif node.next
      return node.contains(value, node.next)
    end
    return false
  end

  private
  class Node
    attr_accessor :value, :next
    def initialize(value)
      @value = value
      @next = nil
    end
  end

end
