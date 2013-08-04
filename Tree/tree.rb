class Tree
  attr_reader :value, :children

  def initialize(value)
    @value = value
    @children = []
  end

  def add_child(value)
    @children.push(Tree.new(value))
  end
  def contains(value)
    if @value == value
      return true
    elsif (@children.length > 0)
      @children.each do |child|
        return true if child.contains(value)
      end
    end
    return false
  end
end
