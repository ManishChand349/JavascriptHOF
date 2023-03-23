const prices = {
  "item1": 10,
  "item2": 20,
  "item3": 30,
  "item4": 40
};

const exchangeRate = 80;

const pricesInRupees = Object.entries(prices).map(([itemName, price]) => {
  const priceInRupees = price * exchangeRate;
  return [itemName, priceInRupees];
});

const pricesObjectInRupees = Object.fromEntries(pricesInRupees);

console.log(pricesObjectInRupees);
