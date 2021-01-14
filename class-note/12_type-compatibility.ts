interface Dev {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

let developer: Dev;
let person: Person;

developer = person; //할당해주는 변수가 왼쪽의 변수에 속하기 때문에 skill속성이 없다. 

//함수
let add = function(a:number): any {
    console.log(a)
}

let sum = function(a:number, b:number): number {
    return a+b
}

//sum이라는 함수의 구조가 add함수의 구조보다 크다.
sum = add;
// add = sum;

//제네릭 타입
interface Empty<T> {

}

let empty1: Empty<string>;
let empty2: Empty<number>;
empty1 = empty2;  //o
empty2 = empty1;  //o

interface NotEmpty<T> {
    data: T;
}

let notempty1: NotEmpty<string>;
let notempty2: NotEmpty<number>;
notempty1 = notempty2;  //err
notempty2 = notempty1;  //err

