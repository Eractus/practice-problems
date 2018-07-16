def repeated_string_match(a, b)
    count = 1
    astring = a
    while astring.length <= 10000
        if astring.include?(b)
            return count
        else
            count += 1
        end
        astring += a
    end
    return -1 if astring.length > 10000
end
