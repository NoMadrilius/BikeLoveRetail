export const prettyPrice = (price: number, symbol: string = ''): string => {
  const formattedPrice = price.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return symbol ? `${formattedPrice} ${symbol}` : formattedPrice;
};