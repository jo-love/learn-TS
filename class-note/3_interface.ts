interface User {
  age: number;
  name: string;
}

//변수에 인터페이스 활용하기
let yeonjeong: User = {
  age: 12,
  name: "연정",
};

//함수에 인터페이스 활용하기
function getUser(user: User) {
  console.log(user);
}

getUser(yeonjeong);

//함수의 스펙(구조)에 인터페이스를 활용하기
interface sumFunction {
  (a: number, b: number): number;
}

let sum3: sumFunction;
sum3 = function (a: number, b: number): number {
  return a + b;
};

//인덱싱
interface StringArray {
  [index: number]: string;
}

let arr: StringArray = ["a", "b", "c"];

//딕셔너리 패턴
interface StringRegexDictionary {
  [key: string]: RegExp;
}

let obj: StringRegexDictionary = {
  //   sth: /abc/,
  cssFile: /\/css$/,
};

//인터페이스 확장
interface Person {
  name: string;
  age: number;
}

//변경 후 코드
interface Developer extends Person {
  language: string;
}

let Thor: Developer = {
  name: "토르",
  age: 100,
  language: "TS",
};
