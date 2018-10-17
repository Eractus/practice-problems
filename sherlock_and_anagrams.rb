def sherlockAndAnagrams(s)
  pairs = 0
  substrings = []
  arr = s.chars
  i=0
  while i < arr.length
    j=0
    while j < arr.length
      if arr[i..j] != []
        substrings << arr[i..j].sort.join("")
      end
      j+=1
    end
    i+=1
  end

  i=0
  while i < substrings.length
    j=i+1
    while j < substrings.length
      if substrings[i] == substrings [j]
        pairs += 1
      end
      j+=1
    end
    i+=1
  end
  pairs
end
