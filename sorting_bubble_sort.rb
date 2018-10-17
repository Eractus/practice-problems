def countSwaps(a)
  swaps = 0
  sorted = true
  while sorted
    sorted = false
    0.upto(a.length - 2) do |idx|
      if a[idx] > a[idx+1]
        a[idx],a[idx+1] = a[idx+1],a[idx]
        swaps += 1
        sorted = true
      end
    end
  end
  puts "Array is sorted in " + swaps.to_s + " swaps."
  puts "First Element: " + a[0].to_s
  puts "Last Element: " + a[-1].to_s
end
