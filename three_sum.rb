def three_sum(nums)
    total = nums.length
    sorted = nums.sort
    col = Hash.new(false)
    ans = []

    # for i in 0..(total - 3)
    i = 0
    while i < total - 2
        # next if i > 0 && sorted[i] == sorted[i - 1]
        j = i + 1
        k = total - 1
        while j < k
            sum = sorted[i] + sorted[j] + sorted[k]
            if sum > 0
                k -= 1
            elsif sum < 0
                j += 1
            else
                zero_sum = [sorted[i], sorted[j], sorted[k]]
                if col[zero_sum] != true
                    col[zero_sum] = true
                    ans << zero_sum
                end
                j += 1
                k -= 1
                j += 1 while sorted[j] == sorted[j - 1]
                k -= 1 while sorted[k] == sorted[k + 1]
            end
        end
        i += 1
    end

    ans
end
