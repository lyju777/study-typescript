/**
 *  Union Basics
 *
 * 유니언은 TS에서 타입을 병합 할 수 있는 수많은 방법중 하나이다.
 */
type StringOrBooleanType = string | boolean;

let stringOrBooleanType: StringOrBooleanType = "아이브";
stringOrBooleanType = true;

// stringOrBooleanType = undefined;

type StrBoolNullType = string | boolean | null;

type StateTypes = "DONE" | "LOADING" | "ERROR";

let state: StateTypes = "DONE";
state = "LOADING";
// state = "INITIAL";

/**
 * 리스트의 유니언
 */
type StringListOrBooleanList = string[] | boolean[];

let stringListOrBooleanList: StringListOrBooleanList = [
  "아이유",
  "김고은",
  "박소담",
];

type StrOrNumberList = (string | number)[];

let stringOrNumberList = [1, 2, 3, "아이유"];

/**
 * Interface 로 사용하는 유니온
 */
interface Animal {
  name: string;
  age: number;
}

interface Human {
  name: string;
  age: number;
  adderss: string;
}

type AnimalOrHuman = Animal | Human;

let animalOrHuman: AnimalOrHuman = {
  name: "최지호",
  age: 32,
  adderss: "대한민국",
};

let animalOrHuman2:
  | {
      name: string;
      age: number;
    }
  | {
      name: string;
      age: number;
      adderss: string;
    } = {
  name: "홍길동",
  age: 32,
  adderss: "대한민국",
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
console.log(animalOrHuman2.adderss);

animalOrHuman2 = {
  name: "오리",
  age: 9,
};

console.log(animalOrHuman2.name);
console.log(animalOrHuman2.age);
// console.log(animalOrHuman2.adderss);

// 서로 관계가 없는 유니언
type Person = {
  name: string;
  age: number;
};

type Cat = {
  breed: string;
  country: string;
};

type PersonOrCat = Person | Cat;

const personOrCat: PersonOrCat = {
  name: "코드팩토리",
  age: 32,
  breed: "요크셔테리어",
  country: "영국",
};
