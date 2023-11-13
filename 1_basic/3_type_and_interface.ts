/**
 * Type은 쉽게 말해 Ts의 타입에 이름을 짓는 역활을 함
 */
type NewStringType = string;

type NewNumberType = number;

type NewNullType = null;

type MaleOrFemale = "male" | "female";

const stringVar: NewStringType = "test";

type IdolType = {
  name: string;
  year: number;
};

const yujin: IdolType = {
  name: "안유진",
  year: 2002,
};

/**
 * Interface
 *
 *
 */
interface IdolInterface {
  name: string;
  year: number;
}

const yujin2: IdolInterface = {
  name: "안유진",
  year: 2002,
};

interface IdolIT {
  name: NewStringType;
  year: NewNumberType;
}

const yujin3: IdolIT = {
  name: "안유진",
  year: 2002,
};

interface IdolOptional {
  name: string;
  year?: number;
}

const yujin4: IdolOptional = {
  name: "안유진",
  year: 2002,
};
