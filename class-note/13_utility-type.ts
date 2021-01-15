interface Product {
    id: number;
    name: string;
    price: number;
    brand: string;
    stock: number;
}

//상품 목록을 받아오기 위한 API함수

function fetchProdcuts(): Promise<Product[]> {

}

interface ProductDetail {
    id: number;
    name: string;
    price: number;
}

//product에 일부 속성만 필요한 케이스
// function displayProductDetail(shoppingItem: ProductDetail)
type ShoppingItem = Pick<Product, 'id'|'name'|"price">
function displayProductDetail(shoppingItem: ShoppingItem) {

}

// interface UpdateProduct {
//     id?: number;
//     name?: string;
//     price?: number;
//     brand?: string;
//     stock?: number;
// }

type UpdateProduct = Partial<Product> 
// 3. 특정 상품 정보(필요한 것만)를 업데이트하는 함수 속성을 써도 되고, 안써도 된다.
function updateProductItem(productItem: Partial<Product>) {

}
// 4. 유틸리티 타입 구현하기
interface UserProfil {
    username: string;
    email: string;
    profilImgUrl: string;
}

// 프로필 사진이나 닉네임을 바꿀 때


//1번째 방식
// type UserProfilUpdate = {
//     username?: UserProfil['username'];
//     email?: UserProfil['email'];
//     profilImgUrl?: UserProfil['profilImgUrl'];
// }
//2번째 방식(축약) = 맵드 타입
type UserProfilUpdate = {
    [p in 'username' | 'email' | 'profilImgUrl']?: UserProfil[p]
}  
type UserProfilKeys = keyof UserProfil

//3번째 방식
type UserProfilUpdate1 = {
    [p in keyof UserProfil]?: UserProfil[p]
}
 
//4번째 방식
type Subset<T> = {
    [p in keyof T]?: T[p]
}
