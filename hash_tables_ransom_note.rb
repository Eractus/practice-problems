def checkMagazine(magazine, note)
  hash = Hash.new { |h, k| h[k] = 0 }
  magazine.each do |word|
    hash[word] += 1
  end

  note.each do |word|
    if hash[word] == 0
      puts "No"
      return
    else
      hash[word] -= 1
    end
  end
  puts "Yes"
end
