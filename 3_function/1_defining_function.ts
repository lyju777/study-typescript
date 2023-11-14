/**
 * 1_defining_function
 */
// function printName(name) {
//   console.log(name);
// }

function printName(name: string) {
  console.log(name);
}

function returnTwoCouples(person1: string, person2: string) {
  return `${person1}과 ${person2}는 사귀고 있습니다.`;
}

console.log(returnTwoCouples("나", "너"));
// returnTwoCouples(0, 1);
// returnTwoCouples("아이유");

/**
 * Optionl Parameter
 */
function mulitiplyOrReturn(x: number, y?: number) {
  if (y) {
    return x * y;
  } else {
    return x;
  }
}

function mulitiplyOrReturn2(x: number, y: number = 20) {
  return x * y;
}

/**
 * 나머지 매개변수
 */
function getInfiniteParameters(...args: string[]) {
  return args.map((x) => `${x}`);
}

console.log(getInfiniteParameters("아이유", "블랙핑크", "아이브"));

/**
 * 리턴 타입
 */
function addTwoNumbers(x: number, y: number) {
  return x + y;
}

addTwoNumbers(10, 20);

function subtractTwoNumbers(x: number, y: number): number {
  //   return `이게 되나요?`;
  return x - y;
}

const subtractTwoNumbers2 = (x: number, y: number): number => {
  //   return `이게 되나요?`;
  return x - y;
};

/**
 * 특수 반환 타입
 * void / never
 */
function doNotReturn(): void {
  console.log("반환값 없음");
}

function throwError(): never {
  while (true) {}
}
// throwError();
