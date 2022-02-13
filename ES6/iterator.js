// Array
const arr = [1, 2, 3];
console.log(arr[Symbol.iterator]);
// arr[Symbol.iterator] = null;
for (const a of arr) console.log(a);

// Set
const set = new Set([1, 2, 3]);
console.log(set[Symbol.iterator]);
for (const a of set) console.log(a);

// Map
const map = new Map([
  ['a', 1],
  ['b', 2],
  ['c', 3],
]);
console.log(map[Symbol.iterator]);
for (const a of map) console.log(a);
for (const a of map.keys()) console.log(a);
for (const a of map.values()) console.log(a);
for (const a of map.entries()) console.log(a);

/**
 * 이터러블: 이터레이터를 리턴하는 [Symbol.iterator]() 를 가진 값
 * 이터레이터: { value, done } 객체를 리턴하는 next() 를 가진 값
 * 이터러블/이터레이터 프로토콜: 이터러블을 for...of, 전개 연산자 등과 함께 동작하도록한 규약
 */

/* 사용자 정의 이터러블 */
const iterable = {
  [Symbol.iterator]() {
    let i = 3;
    return {
      next() {
        return i === 0 ? { done: true } : { value: i--, done: false };
      },
      [Symbol.iterator]() {
        return this;
      },
    };
  },
};

let iterator = iterable[Symbol.iterator]();
// iterator.next();
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
for (const a of iterator) console.log(a);
