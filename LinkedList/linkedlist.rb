class LinkedList
  attr_writer :head, :tail

  def initialize
    @head, @tail = nil, nil

  end

  def unshift(value)
    node = Node.new(value)
    if @head
      node.next = @head
      @head = node
    else
      @tail, @head = node, node
    end

  end

  def shift
    temp = @head
    @head = @head.next
    return temp
  end

  def push(value)
    node = Node.new(value)
    if @tail
      @tail.next = node
      @tail = node
    else
      @head, @tail = node, node
    end

  end

  def pop(node=@head)
    if node.next == @tail
      temp = @tail.next
      @tail = node
      @tail.next = nil
      return temp
    elsif node.next
      self.pop(node.next)
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
