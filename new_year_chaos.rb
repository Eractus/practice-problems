def minimumBribes(q)
  hash = Hash.new { |h, k| h[k] = 0 }
  swaps = 0
  sorted = true
  while sorted
    sorted = false
    0.upto(q.length - 2) do |i|
      if q[i] > q[i+1]
        hash[q[i]] += 1
        swaps += 1
        q[i],q[i+1] = q[i+1],q[i]
        sorted = true
      end
    end
  end
  hash.keys.each do |key|
    if hash[key] > 2
      puts "Too chaotic"
      return
    end
  end
  puts swaps
end
