def maximumToys(prices, k)
  poss_prices = []
  prices.map { |price| poss_prices << price if price < k }

  max_toys = 0
  if poss_prices.reduce(:+) < k
    max_toys = poss_prices.length
    return max_toys
  else
    rem_money = k
    poss_prices.sort.each do |price|
      if rem_money > price
        rem_money -= price
        max_toys += 1
      end
    end
  end
  max_toys
end
