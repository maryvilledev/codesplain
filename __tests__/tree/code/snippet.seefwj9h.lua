-- Just a concatenation of some of the snippets from https://en.wikipedia.org/wiki/Lua_(programming_language)

function factorial(n)
  local x = 1
  for i = 2, n do
    x = x * i
  end
  return x
end

function addto(x)
  -- Return a new function that adds x to the argument
  return function(y)
    --[=[ When we refer to the variable x, which is outside of the current
         scope and whose lifetime would be shorter than that of this anonymous
         function, Lua creates a closure.]=]
    return x + y
  end
end
fourplus = addto(4)
print(fourplus(3))  -- Prints 7

--This can also be achieved by calling the function in the following way:
print(addto(4)(3))
--[[ This is because we are calling the returned function from `addto(4)' with the argument `3' directly.
     This also helps to reduce data cost and up performance if being called iteratively.
]]

a_table = {x = 10}  -- Creates a new table, with one entry mapping "x" to the number 10.
print(a_table["x"]) -- Prints the value associated with the string key, in this case 10.
b_table = a_table
b_table["x"] = 20   -- The value in the table has been changed to 20.
print(b_table["x"]) -- Prints 20.
print(a_table["x"]) -- Also prints 20, because a_table and b_table both refer to the same table.

Point = {}

Point.new = function(x, y)
  return {x = x, y = y}  --  return {["x"] = x, ["y"] = y}
end

Point.set_x = function(point, x)
  point.x = x  --  point["x"] = x;
end

fibs = { 1, 1 }                                -- Initial values for fibs[1] and fibs[2].
setmetatable(fibs, {
  __index = function(values, n)                --[[ __index is a function predefined by Lua,
                                                    it is called if key "n" does not exist. ]]
    values[n] = values[n - 1] + values[n - 2]  -- Calculate and memoize fibs[n].
    return values[n]
  end
})

local Vector = {}
Vector.__index = Vector

function Vector:new(x, y, z)    -- The constructor
  return setmetatable({x = x, y = y, z = z}, Vector)
end

function Vector:magnitude()     -- Another method
  -- Reference the implicit object using self
  return math.sqrt(self.x^2 + self.y^2 + self.z^2)
end

local vec = Vector:new(0, 1, 0) -- Create a vector
print(vec:magnitude())          -- Call a method (output: 1)
print(vec.x)                    -- Access a member variable (output: 0)
