def top_k_frequent(words, k)
  hash = Hash.new(0)

  words.each do |word|
      hash[word] += 1
  end

  sorted = hash.sort_by {|k, v| v }.to_h
  sorted_words = sorted.keys.reverse.take(k)
  sorted_words
end
