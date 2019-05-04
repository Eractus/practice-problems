def multiply(num1, num2)
    if num1 == "0" || num2 == "0"
        return "0"
    end

    if num1 === "1"
        return num2;
    end
    if num2 === "1"
        return num1
    end

    if num2.length > num1.length
        temp = num2;
        num2 = num1;
        num1 = temp;
    end

    integers = {
        "0": 0,
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
    }

    ans = 0
    zeros = ""
    i = num2.length - 1
    while i >= 0
        dig1 = integers[num2[i].to_sym]
        carry = 0
        prod = []
        j = num1.length - 1
        while j >= 0
            dig2 = integers[num1[j].to_sym]
            res = dig1 * dig2
            if carry != 0
                res += carry
                carry = 0
            end

            if res > 9 && j != 0
                carry = res / 10
                res = res % 10
            end
            prod.unshift(res.to_s)
            j -= 1
        end
        prod = prod.join("").concat(zeros)
        zeros += "0"
        ans += prod.to_i
        i -= 1
    end
    ans.to_s
end
