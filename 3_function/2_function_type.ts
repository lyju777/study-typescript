/**
 * 2_function_type
 */
type Mapper = (x: string) => string;
const runner = (callback: Mapper) => {
  return ["안유진", "장원영", "레이"].map((x) => `아이브 멤버:${x}`);
  callback;
};

console.log(runner((x) => `아이브 멤버: ${x}`));
