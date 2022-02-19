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

/* 이터러블 프로토콜에 따른 map의 다형성 */
// console.log(document.querySelectorAll('*'));

function* gen() {
  yield 2;
  if (false) yield 3;
  yield 4;
}
console.log(map(a => a * a, gen()));

let m = new Map();
m.set('a', 10);
m.set('b', 20);
// const it = m[Symbol.iterator]();
// console.log(it.next());
// console.log(it.next());
// console.log(it.next());
console.log(map(([k, a]) => [k, a * 2], m));
console.log(new Map(map(([k, a]) => [k, a * 2], m)));

/* filter */
// let over20000 = [];
// for (const p of products) {
//   if (p.price < 20000) over20000.push(p);
// }
// console.log(...over20000);

const filter = (f, iter) => {
  let res = [];
  for (const a of iter) {
    if (f(a)) res.push(a);
  }
  return res;
};
console.log(...filter(p => p.price < 20000, products));

console.log(filter(n => n % 2, [1, 2, 3, 4, 5]));
console.log(
  filter(
    n => n % 2,
    (function* () {
      yield 1;
      yield 2;
      yield 3;
      yield 4;
      yield 5;
    })(),
  ),
);

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
