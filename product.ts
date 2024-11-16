//Task_4

interface Product {  // this is typeSccript Interface is contain properties name and price
    name: string;
    price: number;
}

const products: Product[] = [      //this array of string to test
    { name: "Apple", price: 5 },
    { name: "Banana", price: 10 },
    { name: "Orange", price: 15 },
];

console.log(calTotalPrice(products)); //print the result

function calTotalPrice(products: Product[]) : number {    //funcuion to calculate total price return number data type
    let totalPrice = 0;   // initial totalprice is 0
    products.forEach(product => totalPrice += product.price);
    return totalPrice;
}

//Task_5

function isValidSpecificEmail(email: string): boolean {   // function to test email is valid or no return boolean data type
    const emailRegex = /^[A-Za-z0-9_-]+@(hotmail|gmail|yahoo)\.com$/;  // is regular exprition to email valid
    return emailRegex.test(email); // check email true or false
}

console.log(isValidSpecificEmail("username@gmail.com"));     // true
console.log(isValidSpecificEmail("user_2002@hotmail.com"));  // true
console.log(isValidSpecificEmail("user-12@yahoo.com"));  // true
console.log(isValidSpecificEmail("user@domain.com"));       // false

