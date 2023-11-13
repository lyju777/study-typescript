/**
 * Type Inference
 *
 * 타입 추론
 */
let stringType = "string";
let booleanType = true;
let numberType = 30;

booleanType = false;
// booleanType = "false";

const constStringType: "const string" = "const string";
const constBooleanType = true;

let yujin = {
  name: "안유진",
  age: 2003,
};

const yujin2 = {
  name: "안유진",
  age: 2003,
};

yujin2.name = "코드팩토리";
console.log(yujin2);

const yujin3 = {
  name: "안유진" as const,
  age: 2003 as const,
};

// yujin3.name = "코드팩토리";

/**
 * Array
 */
let numbers = [1, 2, 3, 4, 5];
let numbersAndString = [1, 2, 3, "4", "5"];

// numbers.push('7');
const number = numbers[0];
const nos = numbersAndString[0];

// tuple
const twoNumbers = [1, 3] as const;

// twoNumbers[0] = 10; X
const first = twoNumbers[0];
