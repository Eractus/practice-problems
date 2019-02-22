def three_sum(nums)
    ans = []

    i = 0
    while i < nums.length
        arr1 = [nums[i]]
        j = i + 1
        while j < nums.length
            arr2 = arr1 + [nums[j]]
            k = j + 1
            while k < nums.length
                if arr2.reduce(:+) + nums[k] == 0
                    arr3 = (arr2 + [nums[k]]).sort
                    if !ans.include?(arr3)
                        ans << arr3
                        break
                    end
                end
                k += 1
            end
            j += 1
        end
        i += 1
    end

    ans
end
