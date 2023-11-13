/**
 *
 * Narrowing
 *
 * Narrowing 은 union 타입에서 더욱 구체적인 타입으로
 * 논리적으로 유추 할 수 있게 되는걸 의미함.
 */
// let numberOrString: number | string = "코드팩토리";
// numberOrString;

// const decimal = 12.3278;
// console.log(decimal.toFixed(2));

// numberOrString.toFixed();

/**
 * Narrowing의 종류
 *
 * 1) Assignment Narrowing
 * 2) typeof Narrowing
 * 3) Truthiness Narrowing
 * 4) Eqality Narrowing
 * 5) in operator Narrowing
 * 6) instanceof narrowing
 * 7) discrimated union narrowing (차별된 유니언 내로잉)
 * 8) exhaustiveness checkong
 */

// 1) Assignment Narrowing
// 특적 값을 할당해서 내로잉
let numberOrString: number | string = "아이유";
numberOrString.toString();

// 2) typeof Narrowing
numberOrString = Math.random() > 0.5 ? 1111 : "아이유";

if (typeof numberOrString === "string") {
  numberOrString;
} else {
  numberOrString;
}

// 3) Truthiness Narrowing
let nullOrstring: null | string[] =
  Math.random() > 0.5 ? null : ["아이유", "레드벨벳"];

if (nullOrstring) {
  nullOrstring;
} else {
  nullOrstring;
}

//  4) Eqality Narrowing
let numberOrString2: number | string = Math.random() > 0.5 ? 1111 : "아이유";

let stringOrBool2: string | boolean = Math.random() > 0.5 ? "아이브" : true;

if (numberOrString2 === stringOrBool2) {
  numberOrString2;
  stringOrBool2;
} else {
  numberOrString2;
  stringOrBool2;
}

let numberOrStringOrNull: number | string | null =
  Math.random() > 0.5 ? "1111" : Math.random() > 0.5 ? "안유진" : null;

if (typeof numberOrStringOrNull === "number") {
  numberOrStringOrNull;
} else {
  numberOrStringOrNull;
}

// 5) in operator Narrowing
interface Human {
  name: string;
  age: number;
}

interface Dog {
  name: string;
  type: string;
}

let human: Human = {
  name: "안유진",
  age: 23,
};

let dog: Dog = {
  name: "멍멍",
  type: "강아지",
};

let humanOrDog: Human | Dog = Math.random() > 0.5 ? human : dog;
console.log("age" in human);

if ("type" in humanOrDog) {
  humanOrDog;
} else {
  humanOrDog;
}

// 6) instanceof narrowing
let dateOrString: Date | string =
  Math.random() > 0.5 ? new Date() : "코드팩토리";

if (dateOrString instanceof Date) {
  dateOrString;
} else {
  dateOrString;
}

// 7) discrimated union narrowing (차별된 유니언 내로잉)
interface Animal {
  type: "dog" | "human";
  height?: number;
  // 강아지 종
  breed?: string;
}

let animal: Animal =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "요크셔테리어",
      };

if (animal.type === "human") {
  animal.height;
} else {
  animal.height;
  animal.breed;
}

interface Human2 {
  type: "human";
  height: number;
}

interface Dog2 {
  type: "dog";
  breed: string;
}

type HumanOrDog2 = Human2 | Dog2;
let humanOrDog2: HumanOrDog2 =
  Math.random() > 0.5
    ? {
        type: "human",
        height: 177,
      }
    : {
        type: "dog",
        breed: "요크셔테리어",
      };

if (humanOrDog2.type === "human") {
  humanOrDog2;
} else {
  humanOrDog2;
}

//  8) exhaustiveness checkong
switch (humanOrDog2.type) {
  case "human":
    humanOrDog2;
    break;
  case "dog":
    humanOrDog2;
    break;
  default:
    humanOrDog2;

    const _check: never = humanOrDog2;
    break;
}
