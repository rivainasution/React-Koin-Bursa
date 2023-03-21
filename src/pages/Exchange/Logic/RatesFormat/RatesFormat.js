export default function RatesFormat(value, symbol, rates, currencySymbol) {
  if (isNaN(rates)) {
    return `${value} ${symbol || currencySymbol}`;
  }

  const rateValue = value / rates;
  const rateValueFormatted = rateValue < 0.001 ? rateValue.toFixed(8) : rateValue.toFixed(3);

  if (symbol === 'Rp'){
    return `${symbol} ${rateValueFormatted}`
  }

  return symbol ? `${rateValueFormatted} ${symbol}` : `${rateValueFormatted} ${currencySymbol}`;
}