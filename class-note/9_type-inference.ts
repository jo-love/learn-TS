// 타입 추론1
let a = 'abc';

function getB(b = 10) {
    const c = 'hello';
    return b+c;
}

10 + '10' // 1010

// 타입추론2
interface Dropdown<T> {
    value: T;
    title: string;
}

let shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello'

}
// 타입추론3

interface DropdownInterface<T1> {
    value: T1; 
    title: string;
}

interface DetailedDropdown<T2> extends DropdownInterface<T2> {
    description: string ;
    tag: T2;
    //DropdownInterface속성 value, title이 들어옴
}

let detailedItem: DetailedDropdown<string> = {
    title: 'type-inference',
    description:'This is type-inference',
    value: 'good',
    tag:'TI'
}

//Best Common Type
const arr = [1,2,true,'a'];
