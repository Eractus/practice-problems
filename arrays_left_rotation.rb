def rotLeft(a, d)
  array = a
  while d > 0
    array = array[1..-1].concat([array[0]])
    d -= 1
  end
  array.each { |int| int  }
end
