/* reduce */
const nums = [1, 2, 3, 4, 5];

let total = 0;
for (const n of nums) {
  total = total + n;
}
console.log(total);

const reduce = (f, acc, iter) => {
  // acc 값 없을 때
  if (!iter) {
    iter = acc[Symbol.iterator]();
    acc = iter.next().value;
  }
  for (const a of iter) {
    acc = f(acc, a);
  }
  return acc;
};

const add = (a, b) => a + b;

console.log(reduce(add, 0, [1, 2, 3, 4, 5])); // 15
console.log(reduce(add, [1, 2, 3, 4, 5])); // 15

const products = [
  { name: '반팔티', price: 15000 },
  { name: '목폴라', price: 19000 },
  { name: '후리스', price: 79000 },
  { name: '후드티', price: 48000 },
  { name: '청바지', price: 56000 },
];

console.log(reduce((total_price, product) => total_price + product.price, 0, products));
