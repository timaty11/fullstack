const total = (addCount, addPrice, current_total = 0) => {
  const total_sum_price = addCount * addPrice;
  const total_sum = current_total + total_sum_price;
  const result = total_sum.toFixed(2);
  return Number(result);
};
