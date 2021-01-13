let apple;
apple = 'a'
apple = 10
let b = apple as number; // 내가 너보다 타입을 잘 아니까 내가 정한 타입으로 가자

//dom api 조작
// <input id="myInp">
const myInp = document.querySelector('#myInp') as HTMLInputElement;  
myInp.innerText= "...";
// myInp 타입은 htmlElement타입이다. input은 myinp

