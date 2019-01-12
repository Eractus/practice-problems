# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val)
#         @val = val
#         @next = nil
#     end
# end

# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def add_two_numbers(l1, l2)
    n1 = makeNumber(l1)
    n2 = makeNumber(l2)
    sum = n1 + n2
    sum_arr = sum.to_s.split("")

    currNode = nil
    sum_arr.each do |int|
        node = ListNode.new(int)
        if currNode == nil
            currNode = node
        else
            node.next = currNode
            currNode = node
        end
    end
    currNode
end

def makeNumber(node)
    if node.next === nil
        return node.val
    end

    arr = []
    while node != nil
        arr.unshift(node.val)
        node = node.next
    end

    ans = arr.join("").to_i
    ans
end
