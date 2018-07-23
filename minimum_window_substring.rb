def min_window(s, t)
    hash = {}
    t.each_char do |c|
        hash[c] ||= 0
        hash[c] -= 1
    end
    valid_count = hash.keys.length * -1
    left = 0
    ans = ""
    s.chars.each_with_index do |c, right|
        if hash[c]
            hash[c] += 1
            valid_count += 1 if hash[c] == 0
        end
        if valid_count >= 0
            while valid_count >= 0
                if hash[s[left]]
                    hash[s[left]] -= 1
                    valid_count -= 1 if hash[s[left]] == -1
                end
                left += 1
            end
            if ans.length == 0 || ans.length >= right - left + 2
                ans = s[left-1..right]
            end
        end
    end
    ans
end
