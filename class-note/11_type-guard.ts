interface Magician {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
} 

function introduce() : Magician | Person {
    return {name: 'Tony', age:40, skill:"fire"}
}

const tony = introduce();
console.log(tony.name)  
console.log(tony.skill) //error

// 타입 단언를 사용해서 skill 사용하기
if((tony as Magician).skill) {
console.log(((tony as Magician).skill))
} else if ((tony as Person).age) {
    console.log((tony as Person).age)
}

//타입 가드 정의
function isMagician(target: Magician | Person): target is Magician {
 return (target as Magician).skill !== undefined;
}

if(isMagician(tony)) {
    console.log(tony.skill);
}else {
    console.log(tony.age);
}