def generate_matrix(n)
    matrix = Array.new(n) { Array.new(n) }

    return matrix if n == 0

    left = 0
    top = 0
    right = matrix[0].length-1
    bottom = matrix.length-1
    dir = "right"
    count = 1

    while left <= right && top <= bottom
        if dir == "right"
            left.upto(right) do |i|
                matrix[top][i] = count
                count += 1
            end
            top += 1
            dir = "down"
        elsif dir == "down"
            top.upto(bottom) do |i|
                matrix[i][right] = count
                count += 1
            end
            right -= 1
            dir = "left"
        elsif dir == "left"
            right.downto(left) do |i|
                matrix[bottom][i]= count
                count += 1
            end
            bottom -= 1
            dir = "up"
        elsif dir == "up"
            bottom.downto(top) do |i|
                matrix[i][left] = count
                count += 1
            end
            left += 1
            dir = "right"
        end
    end

    matrix
end
