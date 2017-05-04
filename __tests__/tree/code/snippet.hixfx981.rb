class Unit
  # A list of all the units we know.
  @@units = { }

  # Access to @@units.
  def Unit.exists(n)
    return @@units.has_key?(n)
  end
  def Unit.named(n)
    return @@units[n]
  end

  # If this were Java, I'd define an abstract function isbase() which tells
  # if this object is a BaseUnit or not.
  def initialize(name)
    @name = name
    @@units[name] = self
    @@units[name + 's'] = self
  end
  attr_reader :name
  def alias(*names)
    names.each { |n| @@units[n] = self }
  end
end
