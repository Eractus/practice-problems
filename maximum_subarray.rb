def max_sub_array(nums)
    # i = 0
    # while i < nums.length
    #     temp = nums[i]
    #     sum = nums[i]
    #     j = i + 1
    #     while j < nums.length
    #         sum += nums[j]
    #         if sum > temp
    #             temp = sum
    #         end
    #         j += 1
    #     end
    #     if ans == nil || ans < temp
    #         ans = temp
    #     end
    #     i += 1
    # end
    i = 0
    j = i + 1
    temp = nums[0]
    ans = nums[0]
    while j < nums.length
        if temp < nums[j] && (temp < 0 || nums[j] < 0)
            if ans < nums[j]
                ans = nums[j]
            end
            i = j
            j = i+1
            temp = nums[i]
        else
            temp = temp + nums[j]
            if ans < temp
                ans = temp
            end
            j += 1
        end
    end

    ans
end
