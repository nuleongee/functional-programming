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

/* odds */

/**
 * @param i : 시작 값
 */
function* infinity(i = 0) {
  while (true) yield i++;
}

/**
 * @param l : 마지막 값
 * @param iter : 받은 이터러블
 */
function* limit(l, iter) {
  for (const a of iter) {
    yield a;
    if (a === l) return;
  }
}

/**
 * @param l : 마지막 값
 */
function* odds(l) {
  for (const a of limit(l, infinity(1))) {
    if (a % 2) yield a;
  }
}
let iter2 = odds(10);
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());
console.log(iter2.next());

for (const a of odds(40)) console.log(a);

/* for of, 전개 연산자, 구조 분해, 나머지 연산자 */
console.log(...odds(10));
console.log([...odds(10), ...odds(20)]);

const [head, ...tail] = odds(5);
console.log(head);
console.log(tail);

const [a, b, ...rest] = odds(10);
console.log(a);
console.log(b);
console.log(rest);
