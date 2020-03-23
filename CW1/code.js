//1
let name = prompt("Enter your name");
let age = prompt("Enter your age");

console.log(name, age);

//2
let name = prompt("Enter your name: ");
let age = prompt("Enter your age: ");

if (age>= 18 && name == "Ярополк") {
 console.log("Hello");
}

//3
let whiteList = ['Зевс', 'Гера', 'Аполлон', 'Афродита'];

let name = prompt("Enter your name: ");

if (whiteList.includes(name)){
 console.log("secret information");
}

else if (!whiteList.includes(name)) {
  console.log("false informationt");
}

//4
let blacklist = [];

let name = prompt("Enter your name");
let age = prompt("Enter your age");
  
if (age < 18){
  blacklist.push(name);
}

//5
let nechet = [];

for (;;){
  
  let name = prompt("Enter your name");
  let age = prompt("Enter your age");
  
    if (age % 2 !== 0){
      nechet.push(name);
    }
  
   if (window.confirm("Leave?")) {
    break;
   }
}


//6
let arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];
  let a = "#";

for (let i = 0; i < arr.length; i = i + 1) {
  let multyA = a.repeat(arr[i]);
  console.log(multyA);
}

//7
let arr = [12, 43, 11, 27, 18];
let a = '#';

for (let i = 0; i < arr.length; i = i + 1){
  let multyA = a.repeat(arr[i]);
  console.log(multyA);
}

//8
function age(a, b, c){
    let d = ( parseInt(a) + parseInt(b) + parseInt(c) )/3;
     console.log(d);
   }
    
   let age1 = prompt("Enter your age: ");
   let age2 = prompt("Enter your age: ");
   let age3 = prompt("Enter your age: ");
   
   age(age1, age2, age3);
   age(1, 2, 6);

//9
let arr = [34, 1, 41, 22, 98];

function sqArr(a){
  let arrS = [];
  
  for (let i = 0; i < arr.length; i = i + 1) {
   if (arr[i] % 2 !=0) {
     let s = arr[i]**2;
     arrS.push(s);
   }
  }
  return arrS
}

console.log(sqArr(arr));

//10
let arr = [45, 44, 77, 22, 11];

function chet(a, n){
 let newArr = [];
  
  for (let i = 0; i < arr.length; i = i + 1){
     if (arr[i]%2 ==0){
       newArr.push(sq(arr[i], n));
     }
  }
  return newArr
}

function sq(el, n){
  let s = el**n
  return(s);
}


console.log(chet(arr, 2));

//11
let arr = [24, 'text', 16, 45, 'e', 'PAX ROMANA'];

function numberYo(massiv){
  let arrNumber = [];
  
    for (let i = 0; i < massiv.length; i = i + 1){
     if (typeof massiv[i] == 'number'){
       arrNumber.push(sq(massiv[i]));
     }      
  }
  return arrNumber
}
  
function sq(el){
  let s = el**2;
  return s
}

function con(){
   console.log(numberYo(arr));
}

con()

//12
let names = [];
let ages = [];

for (;;){
  let name = prompt("Enter your name");
  let age = prompt("Enter your age");
  
  names.push(name);
  ages.push(age);
  
   if (window.confirm("Leave?")) {
    break;
   }
}

function mass(inputArr, names){
 let arr = [];
  for (let i = 0; i < inputArr.length; i++) {
    if (inputArr[i] > sred(inputArr)){
      arr.push(names[i]);
    }
  }
  return arr
}

function sred(a){
  let s = 0;
  for (let i = 0; i< a.length; i++) {
    s = s + parseInt(a[i]); 
  }
  return s / a.length;
}

console.log(mass(ages, names));
