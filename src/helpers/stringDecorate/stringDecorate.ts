export const prettyPrice = (price: string | number): string => {
  let priceStr: string;

  if (typeof price === 'number') {
    priceStr = String(price.toFixed(2)); // Преобразование числа в строку с двумя десятичными знаками
  } else if (typeof price === 'string') {
    priceStr = price;
  } else {
    throw new Error('Invalid input type. Expected string or number.');
  }

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
};
