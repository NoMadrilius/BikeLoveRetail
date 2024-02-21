export const prettyPrice = (price: string | number): any => {
  let currency;
  let selectedCurr;
  let selectedCurrView;
  if (typeof window !== "undefined") {
    const jopix = localStorage.getItem("currency");
    const jopix2 = localStorage.getItem("selectedCurrency");
    //@ts-ignore
    currency = JSON.parse(jopix);
    //@ts-ignore
    selectedCurr = JSON.parse(jopix2) === "UAH" ? "Гривна" : "Dollar";
    //@ts-ignore
    selectedCurrView = JSON.parse(jopix2);
  }
  if (currency) {
    const filteredCurrency = currency
      ? currency.filter((el: any) => el.name === "Гривна")
      : [];
    const saleRate = parseFloat(filteredCurrency[0]?.coefficient) || 1;

    let priceStr: string;

    if (typeof price === "number") {
      const adjustedPrice =
        selectedCurr === "Гривна" ? price * saleRate : price;
      priceStr = adjustedPrice.toFixed(2);
    } else if (typeof price === "string") {
      const adjustedPrice =
        selectedCurr === "Гривна" ? parseFloat(price) * saleRate : price;
      //@ts-ignore
      priceStr = adjustedPrice.toFixed(2);
    } else {
      throw new Error("Invalid input type. Expected string or number.");
    }

    let priceArray = priceStr.split("");

    if (priceArray.length > 3) {
      let formattedPrice = "";
      let count = 0;

      for (let i = priceArray.length - 1; i >= 0; i--) {
        formattedPrice = priceArray[i] + formattedPrice;
        count++;

        if (count % 3 === 0 && i !== 0) {
          // eslint-disable-next-line no-self-assign

          formattedPrice = formattedPrice;
        }
      }

      return formattedPrice + " " + selectedCurrView;
    }

    return priceStr + selectedCurrView;
  } else {
    return price + " " + "USD";
  }
};
