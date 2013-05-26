class LinkedList

  def initialize
    @head = nil
    @tail = nil
  end
  def method_missing(name, *args, &block)
    name.to_s.split('_')

  end
end
