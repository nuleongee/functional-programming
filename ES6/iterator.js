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
 * 이터러블
 * 이터레이터
 * 이터러블/이터레이터 프로토콜
 */
