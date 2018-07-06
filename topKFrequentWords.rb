def top_k_frequent(words, k)
    ans = []
    counter = 0
    hash = Hash.new(0)

    words.each do |word|
        hash[word] += 1
    end

    sorted = hash.sort_by {|k, v| v }.to_h
    sorted_words = sorted.keys.reverse
    i = 0
    while counter < k
        ans << sorted_words[i]
        counter += 1
        i += 1
    end
    ans
end
