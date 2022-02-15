/**
 * 제너레이터: 이터레이터이자 이터러블을 생성하는 함수
 */

function* gen() {
  yield 1;
  yield 2;
  // if (false) yield 2;
  yield 3;
  return 100; // return 값은 done: true 일때
}
let iter = gen();
console.log(iter[Symbol.iterator]() === iter);
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());

for (const a of gen()) console.log(a);
