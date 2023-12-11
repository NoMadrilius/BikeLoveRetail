export const prettyPrice = (price: string) => {
  let priceStr = String(price);
  
  let priceArray = priceStr.split('');

  if (priceArray.length > 3) {
    let formattedPrice = '';
    let count = 0;

    for (let i = priceArray.length - 1; i >= 0; i--) {
      formattedPrice = priceArray[i] + formattedPrice;
      count++;

      if (count % 3 === 0 && i !== 0) {
        formattedPrice = ' ' + formattedPrice;
      }
    }

    return formattedPrice;
  }

  return priceStr;
}