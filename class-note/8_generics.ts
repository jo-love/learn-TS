// function logText(text: string) {
//   console.log(text);
//   return text;
// }

// function logNumber(num: number) {
//   console.log(num);
//   return num;
// }

// function logText(text: string | number) {
//   console.log(text);
//   return text;
// }

function logText<T>(text: T): T {
  console.log(text);
  return text;
}
const str = logText<string>("hi");
str.split("");
logText<number>(10);

// interface dropdown {
//   value: string;
//   selected: boolean;
// }

// const obj: dropdown = { value: "abc", selected: false };

interface dropdown<T> {
  value: T;
  selected: boolean;
}

const obj: dropdown<string> = { value: "abc", selected: false };

//제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
  console.log(text.length);
  text.forEach(function (text) {
    console.log(text);
  });
  return text;
}
logTextLength<string>(["hi", "abc"]);

//제네릭 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
  length: number;
}

function logTextLength2<T extends LengthType>(text: T): T {
  text.length;
  return text;
}

logTextLength2("a");
logTextLength2({ length: 10 });

//제네릭타입 제한3 =keyof
interface ShoppingItem {
  name: string;
  price: number;
  stock: number;
}

// keyof를 사용하면 shoopingItem중에 한가지 속성이 제네릭속성이 된다.
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
  return itemOption;
}

getShoppingItemOption("name");
getShoppingItemOption("price");
