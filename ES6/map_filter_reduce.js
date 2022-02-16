const products = [
  { name: '반팔티', price: 15000 },
  { name: '목폴라', price: 19000 },
  { name: '후리스', price: 79000 },
  { name: '후드티', price: 48000 },
  { name: '청바지', price: 56000 },
];

/* map */
const map = (f, iter) => {
  let res = [];
  for (const a of iter) {
    res.push(f(a));
  }
  return res;
};

let names = [];
for (const p of products) {
  names.push(p.name);
}
console.log(names);
console.log(map(p => p.name, products)); // map 사용

let prices = [];
for (const p of products) {
  prices.push(p.price);
}
console.log(prices);
console.log(map(p => p.price, products)); // map 사용
