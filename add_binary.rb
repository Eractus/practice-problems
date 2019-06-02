def add_binary(a, b)
    a = a.to_i(2)
    b = b.to_i(2)
    sum = a + b
    sum.to_s(2)
end
