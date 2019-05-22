def find_tilt(root)
    @tilt = 0
    if root == nil
        return 0
    end

    def dfs(node)
        if !node
            return 0
        else
            left = node.left
            right = node.right
            lval = dfs(left)
            rval = dfs(right)

            @tilt += (lval - rval).abs
            lval+rval+node.val
        end
    end

    dfs(root)
    @tilt
end
