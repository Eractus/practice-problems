def spiral_order(matrix, ans = [])
    if matrix.length == 0
        return ans
    end

    matrix[0].each {|n| ans.push(n)}
    width = matrix[0].length - 1
    matrix.shift
    hash = Hash.new {|h, k| h[k] = []}
    matrix.each do |row|
        0.upto(width).each {|i| hash[i].push(row[i])}
    end
    transposed = []
    hash.keys.reverse.each {|k| transposed.push(hash[k])}

    spiral_order(transposed, ans)
end
