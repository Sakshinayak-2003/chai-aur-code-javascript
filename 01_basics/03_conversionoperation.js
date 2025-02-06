let score= "33abc"
let scores =undefined
// console.log(typeof score);
// console.log(typeof(score));


// conversion in number
 let valueInNumber=Number(score)
//  console.log(typeof valueInNumber)
//  console.log(valueInNumber);


 //"33" string easily converted into numbers =>33
 // when we make "33abc" not able to convert this type of values give NAN that it is not a number
 //true=> converts as 1; false =>0;

//  CONVERSION IN BOOLEAN

 let isLoggedIn = 1     //"sakshi","",
 let booleanIsLoggedIn = Boolean(isLoggedIn)
//  console.log(booleanIsLoggedIn);

 //CONVERSION IN STRING
 let someNumber= 33
 let stringNumber =String(someNumber)
//  console.log(stringNumber);
//  console.log(typeof stringNumber);



//  *********************operations******************
let value =3
let negValue =-value
// console.log(negValue)     //understand it deep
// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2%2);


let str1 ="hello"
let str2 =" hitesh"
let concat=str1+str2
console.log(concat)


console.log("1"+2); // string and number=> convert into string
console.log(1+"2");  //samee 
console.log("1"+"2")
console.log("1"+2+2); //here convert into string 
console.log(1+2+"2");  // here first add as 3 then and add as a string that is => 32



console.log(true)       // output will => true
console.log(+true)      // output will => 1
console.log(true+)     // errorrrrr
console.log(+"");      //output will => 0


// presendenceeeeeeeeeeee operator

let gameCounter =100
gameCounter++;    //++gameCounter
console.log(gameCounter);     //output: 101