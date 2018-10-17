def activityNotifications(expenditure, d)
  notifications = 0
  poss_expends = Array.new(201, 0)
  queue = []

  expenditure.each_with_index do |exp, idx|
    if idx < d
      queue << exp
      poss_expends[exp] += 1
    else
      notifications += 1 if exp >= 2*(findMedian(poss_expends, d))
      poss_expends[queue[0]] -= 1
      queue.shift
      poss_expends[exp] += 1
      queue << exp
    end
  end
  notifications
end

def findMedian(expends, d)
  median = nil
  mid = 0
  expends.each_with_index do |expend, idx|
    mid += expend
    unless median
      if mid >= d/2
        median = idx
      end
    end
    if mid > d/2
      if d%2 == 0
        return (median + idx)/2.0
      else
        return idx
      end
    end
  end
end
