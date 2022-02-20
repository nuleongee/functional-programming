import { log, map, filter, reduce } from '../fx.js';

const products = [
  { name: '반팔티', price: 15000 },
  { name: '목폴라', price: 19000 },
  { name: '후리스', price: 79000 },
  { name: '후드티', price: 48000 },
  { name: '청바지', price: 56000 },
];

const add = (a, b) => a + b;

log(map(p => p.price, products));
log(
  map(
    p => p.price,
    filter(p => p.price < 20000, products),
  ),
);
log(
  reduce(
    add,
    map(
      p => p.price,
      filter(p => p.price < 20000, products),
    ),
  ),
);
log(
  reduce(
    add,
    filter(
      p => p < 20000,
      map(p => p.price, products),
    ),
  ),
);
