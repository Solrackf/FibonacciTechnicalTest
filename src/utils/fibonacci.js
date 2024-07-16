export const calculateFibonacci = (x, y, n) => {
  const series = [x, y];
  for (let i = 2; i < n + 2; i++) {
    series.push(series[i - 1] + series[i - 2]);
  }
  return series.reverse();
};
