import { useCurrencyStore } from "@/store/CurrencyStore";

export const prettyPrice = (price: string | number): any => {
  let currency
  let selectedCurr
if(typeof window !== 'undefined'){
  const jopix = localStorage.getItem('currency')
  const jopix2 = localStorage.getItem('selectedCurrency')
  //@ts-ignore
  currency = JSON.parse(jopix) 
  //@ts-ignore
  selectedCurr = JSON.parse(jopix2)
}
if(currency){
  const filteredCurrency = currency ? currency.filter((el:any) => el.ccy === "USD") : [];
  const saleRate = parseFloat(filteredCurrency[0]?.sale) || 1;

  let priceStr: string;

  if (typeof price === 'number') {
  const adjustedPrice = selectedCurr === 'UAH'? price * saleRate: price;
    priceStr = adjustedPrice.toFixed(2); 
  } else if (typeof price === 'string') {
    const adjustedPrice = selectedCurr === 'UAH'? parseFloat(price) * saleRate:price;
    //@ts-ignore
    priceStr = adjustedPrice.toFixed(2);
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
        formattedPrice =  formattedPrice;
      }
    }

    return formattedPrice+ ' ' + selectedCurr;
  }

  return priceStr + selectedCurr;
}else{
  return price
}

};
