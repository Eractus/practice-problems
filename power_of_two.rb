def is_power_of_two(n)
    x = 1
    i = 1
    while x < n
        x = 2**i
        i += 1
    end
    if x == n
        return true
    else
        false
    end
end
