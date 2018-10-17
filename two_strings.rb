def twoStrings(s1, s2)
  alpha = ('a'..'z').to_a
  alpha.each do |char|
    if s1.split("").include?(char) && s2.split("").include?(char)
      return "YES"
    end
  end
  "NO"
end
