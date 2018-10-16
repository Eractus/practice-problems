def minimumSwaps(arr)
  swaps = 0
  i=0
  while i < arr.length - 1
    if arr[i] != i+1
      swap = arr[arr[i]-1]
      arr[arr[i]-1] = arr[i]
      arr[i] = swap
      swaps += 1
      i -= 1
    end
    i += 1
  end
  swaps
end
