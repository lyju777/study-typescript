"use strict";
/**
 * Types
 *
 */
let helloText = "Hello";
// helloText = true;
/**
 * JS 7개의 타입
 */
const stringVar = "String";
const numberVar = 3;
const bigIntVar = BigInt(99999);
const booleanVar = true;
const symbolVar = Symbol(1);
const nullVar = null;
const undefinedVar = undefined;
/**
 * TS 7개의 타입
 */
// any - 아무타입이나 입력 할 수 있음 치트키 같은 타입
let anyVar;
// let testNumber: number = anyVar;
// let testString: string = anyVar;
// let testBolean: boolean = anyVar;
// unknown - 알 수 없는 타입
let unknownType;
unknownType = 100;
unknownType = "코드팩토리";
unknownType = true;
// let testNumber2: number = unknownType;
// let testString2: string = unknownType;
// let testBoolean2: boolean = unknownType;
let unknownType2 = unknownType;
// never - 어떤 타입도 저장되거나 반환되지 않을때 사용하는 타입
// let neverType: never = null;
// let neverType: never = undefined;
// let neverType: never = "test";
/**
 * 리스트 타입
 */
const koreanGirlGroup = ["아이브", "레드벨벳", "블랙핑크"];
