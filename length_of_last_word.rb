def length_of_last_word(s)
    ans = 0
    char_found = false
    i = s.length - 1
    while i >= 0
        if !char_found
            if s[i] == " "
                i -= 1
                next
            else
                char_found = true
                ans += 1
            end
        else
            if s[i] == " "
                break
            else
                ans += 1
            end
        end
        i -= 1
    end

    ans
end
