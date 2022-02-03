// তোমাকে যদি বলি একটা স্ট্রিং টাইপের ভেরিয়েবল লিখো। একটা বুলিয়ান টাইপের ভেরিয়েবল লিখো বা একটা নাম্বার টাইপের ভেরিয়েবল লিখো। সেটা কি তুমি লিখতে পারবে? যদি পারো তাহলে ভিজুয়াল ষ্টুডিও কোড খুলে লিখে ফেলো। 
// stringType
let stringType = "Afsar Uddin";
console.log(stringType);
// BoolineType
let boolineType = true
console.log(boolineType);
// numberType
let numberType = 120;
console.log(120);
// তুমি কি জানো কখন let দিয়ে ভেরিয়েবল লিখতে হয়ে আর কখন const দিয়ে ভেরিয়েবল লিখতে হয়। যদি লিখতে পারো তাহলে লিখে ফেলো। এবং যেই যেটা দিয়ে ভেরিয়েবল লিখলে আবার সেটা চেইঞ্জ করা যায়। তাহলে যেটা দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে চেইঞ্জ করা যায়। সেটার মান চেইঞ্জ করে নাও । অর্থাৎ জাস্ট দুইটা ভেরিয়েবল ডিক্লেয়ার করবে let এবং const দিয়ে। তারপর যেকোন একটার ভ্যালু চেইঞ্জ করবে। এই let এবং const মাথা গরম করে দিলে টেনশন নিয়ে না। সামনের মাইলস্টোন এর পরের মাইলস্টোন এ এইটা নিয়ে আরো ডিসকাস করা হবে। 
// constant
const prices = 1225;
console.log(prices);
// let
let price = 225;
console.log(price);
// change value of price
price = 300;
console.log(price);

// দুইটা ভেরিয়েবল এর মধ্যে যোগ, বিয়োগ, গুণ, ভাগ কিভাবে করতে হয় সেটা কি জানো। অর্থাৎ তুমি কি +, -, *, /, %এইগুলার ব্যবহার জানো। তাহলে নাম্বার টাইপের দুইটা ভেরিয়েবল লিখো তারপর তাদের যোগ করে সেটার মান আরেকটা ভেরিয়েবল এ রাখো। একইভাবে ওই দুইটা ভেরিয়েবল এর মধ্যে বিয়োগ, গুন, ভাগ এবং ভাগশেষ বের করো। 

// sum
let bookPrice = 500;
let penPrice = 30;
let totalPrice = bookPrice + penPrice;
console.log(totalPrice);
// sub
let giveMoney = 1500;
let bagPrice = 1200;
let getMoney = giveMoney - bagPrice;
console.log(getMoney);
// Mul
let gotblackPen = 5;
let gotgreenPen = 10;
let multiplePen = gotblackPen * gotgreenPen;
console.log(multiplePen);
// Div
let haveTree = 5000;
let treeRow = 10;
let oneRowhaveTree = haveTree / treeRow;
console.log(oneRowhaveTree);
// Mod
let firstNumber = 25;
let secondNumber = 5;
let modulasNumber = firstNumber % secondNumber;
console.log(modulasNumber); 

// তুমি কি দুইটা ভেরিয়েবল এরমধ্যে তুলনা করতে পারো। কম্পারিজন করতে পারো। যে দুইটা ভেরিয়েবল এর মধ্যে প্রথমটা সেকেন্ডটা এর চাইতে ছোট, বড়, অসমান, সমান , ছোট বা সমান, বড় বা সমান। এইগুলা চেক করতে পারো। অর্থাৎ <, >, ==, !=, <=, >= চিহ্নগুলা ব্যবহার করতে পারো। তাহলে দুইটা সংখ্যা টাইপের ভেরিয়েবল ডিক্লেয়ার করে তাদেরকে এই ছয়ভাবে তুলনা করে কোড লিখে ফেলো। 

let fNumber = 625485244;
let sNumber = 624789544;
// condition
if(fNumber<sNumber){
  console.log('First Number is less than SecondNumber');
}else if(fNumber > sNumber){
  console.log('First Number is getter than SecondNumber');
} else if (fNumber == sNumber){
  console.log('First Number is equal to SecondNumber');
}else if (fNumber != sNumber){
  console.log('First Number is not equale SecondNumber');
}else if (fNumber <= sNumber){
  console.log('First Number is less than equal SecondNumber');
}else if(fNumber >= sNumber){
  console.log('First Number is getter than equal SecondNumber');
}else{
  console.log('Condition End');
};

// তোমার যদি দুইটা শর্ত পূরণ করতে বলে। এবং দুইটা শর্তের মধ্যে দুইটাই পূরণ করতে হবে। তাহলে তুমি কি সেটা চেক করতে পারবে? একইভাবে যদি বলে তুমি দুইটা শর্তের যেকোন একটা পূরণ করতে পারবে। অর্থাৎ তুমি && এবং || এর ব্যবহার করতে পারো কিনা। যদি পারো তাহলে নিজে নিজে এই রকমের কোড লিখে ফেলো। 

let myNum = 100;
let youNum = 50;
let heNum = 60;
// condition
if(myNum > youNum && heNum < myNum){
  console.log('Two condition is fullfill here');
}else if(youNum != heNum || youNum > myNum){
  console.log('One condition is fullfil here');
}

// তুমি কি একটা শর্ত পালন করলে একটা কিছু করবে। শর্ত পূরণ না করলে অন্য কিছু একটা করবে এমন কোড লিখতে পারবে। অর্থাৎ তুমি কি if-else এর কোড লিখতে পারবে। পারলে একটা কোড লিখে ফেলো 

let ifYes = 'Afsuddin';
let ifNot = 'Tanbir';

if(ifYes != ifNot){
    console.log('One condition is fullfill.');
}else if(typeof(ifYes) === 'string'){
  console.log('it is true');
}else{
  console.log('What you wnant to see');
}

// তোমাকে যদি বলে একটা while লুপ দিয়ে ৭ থেকে ১৯ পর্যন্ত যতগুলা বিজোড় সংখ্যা আছে সেগুলা দেখাতে। তুমি কি সেটা দেখাতে পারবে? পারলে সেই কোড লিখে ফেলো। 

let number = 7;
while (number <=19){
   if(number % 2 == 1){
     console.log(number +' '+ 'number is even' );
   }else{
     console.log('This Number is not even');
   }
    
  number++ ;

};

// তোমাকে যদি বলা হয় তুমি একটা array ডিক্লেয়ার করবে। এবং সেটার মধ্যে কয়টা উপাদান আছে সেটা বের করবে হবে। সেই array এর এর মধ্যে চতুর্থ পজিশন এর উপাদান চেইঞ্জ করতে হবে। array এর মধ্যে দুইটা উপাদান যোগ করতে হবে। এবং একটা উপাদান কে বের করে দিতে হবে। তুমি কি সেটা করতে পারবে। 

let myArray = [10,20,40,60,70,80,90,120,54,70];
// Find  length
let totalNumber = myArray.length;
console.log(totalNumber);
// Change four postion number
 myArray[4] =  75;
 console.log(myArray);
//  sum two number

let number1 = myArray[4];
let number2 = myArray[6];

let total = number1 + number2;
console.log(total);

// remove One Element
myArray.pop();
console.log(myArray);

// তুমি কি একটা ফর লুপ দিয়ে কোন একটা array এর সবগুলা উপাদানকে দেখাতে পারবে। সেটা রেগুলার for লুপ হোক বা for of হোক। হলে সেই স্টাইলে একটা কোড লিখে ফেলো। 

let myNumber = [40,800,700,258,695,456];
// for of
for(Element of myNumber){
  console.log(Element);
}

// তোমাকে যদি বলা হয়। একটা array এর মধ্যে ৮০ এর চাইতে বড় সংখ্যা থাকলে সেগুলাকে console log করে দেখাতে সেটা কি তুমি পারবে? তাহলে তুমি সেই কোড করে ফেলো 
console.log('Here is end');
let array = [12,54,68,75,13,45,78,96,36,14,85,90,96,498];

for(let i = 0; i < array.length; i++){
  let num = array[i];
  if(num > 80){
    console.log(num +' '+'is the getter than 80');
  }
   
};

// তিনটা সংখ্যার গুনফল বের করে ফাইনাল রেজাল্ট আউটপুট হিসেবে রিটার্ন করতে হবে। তুমি কি সেই কোড লিখতে পারবে। যদি পারো তাহলে সেই কোড লিখে ফেলো। 

let sumNumber = function(numOne,numTwo,numThree){
  let multiplication = numOne * numTwo * numThree;
  return  multiplication;
}

let value = sumNumber(40,50,60);
console.log('multiplication value'+' '+value);

// একটা অবজেক্ট ডিক্লেয়ার করবে। সেটাতে তিনটা প্রপার্টি থাকবে। এবং কোন একটা প্রোপার্টি এর মান চেইঞ্জ করবা। 

let myObject = {
  name: 'Afsar Uddin',
  age : 20,
  class : 12
};
myObject.class = 'Honour';
console.log(myObject);

// প্রব্লেম সলভিং চেকলিস্ট/সেলফ এসেসমেন্ট *******************-----------------*****************

// সিম্পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ন করবে inch । অর্থাৎ এই ফাংশনকে কোন একটা ফিট বলে দিলে সে রিটার্ন হিসেবে বলে দিবে কত ইঞ্চি হয়। 

let feetToInch = function(feet){
  let inch = feet * 12;
  return inch;
}

let inch = feetToInch(1);
console.log(inch);

// একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্টিমিটার দিবে আর সেই সেন্টিমিটার কে মিটার এ কনভার্ট করে রেজাল্ট রিটার্ন করবে।

let centimeterToMeter = function(centimeter){
   let meter = centimeter *0.01 + 'm';
   return meter;
}
let metet = centimeterToMeter(1258445555);
console.log(metet);

// আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্যারামিটার হিসেবে তিনটা প্যারামিটার হবে। প্রথম প্যারামিটার হবে তুমি প্রথম বই কত কপি ছাপাতে চাও। সেকেন্ড প্যারামিটার হবে তুমি সেকেন্ড বই কত কপি ছাপাতে চাও। আর থার্ড প্যারামিটার হবে তুমি থার্ড বই কত কপি ছাপাতে চাও। অর্থাৎ কোন বই এর কত কপি ছাপানো হবে সেটাই প্যারামিটার হিসেবে নিবে। 

// এইবার ভালো করে খেয়াল করো। 
// প্রথম বই ছাপানোর জন্য পৃষ্ঠা লাগবে ১০০ টা 
// সেকেন্ড বই ছাপানোর জন্য পৃষ্ঠা লাগবে ২০০ টা 
// তৃতীয় বই ছাপানোর জন্য পৃষ্ঠা লাগবে ৩০০ টা 

// এখন তোমার কাজ হচ্ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কোন বই এর কত কপি লাগবে বলে দিবে প্যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তোমার সর্বমোট কতপৃষ্ঠা কাগজ লাগবে। 
// উত্তর হিসেবে সংখ্যা রিটার্ন করবে। 

let paperRequirements = function(eBook,bBook,sBook){

     let totalPageE = eBook *100;
     let totalPageB = bBook *200;
     let totalPageS = sBook *300;
     let allBooktotal = totalPageE + totalPageB + totalPageS;
     return allBooktotal;
}
let book = paperRequirements(1,1,1);
console.log(book);

// একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট প্যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্যে তোমার সব ফ্রেন্ডের নাম থাকবে। এখন তোমার কাজ হচ্ছে যে ফ্রেন্ড এর নাম সবচেয়ে বড় সেই ফ্রেন্ড এর নাম রিটার্ন করে দেয়া। এই ক্ষেত্রে তুমি নামটা অর্থাৎ ফ্রেন্ডের নাম (স্ট্রিং) রিটার্ন করতে হবে। 

let bestFriend = function(name){
  let storeName = '';
   for(Element of name){
     if(Element.length > storeName.length){
            storeName = Element;
     }
   }
   console.log(storeName);
}

let name = bestFriend(['Afsar','Arif','Naim','Nafiz','Nazmul','Nadim Hassan']);

// ইটা একটু ট্রিকি হতে পারে। একটা array এর মধ্যে অনেকগুলা সংখ্যা থাকবে। তোমার কাজ হচ্ছে সংখ্যা গুলা একটার পর একটা করে চেক করা। এবং সংখ্যা গুলা যদি পজিটিভ সংখ্যা হয়। অর্থাৎ শূন্য বা শূন্যের চাইতে বড় হয় তাহলে সেগুলাকে কোন একটা array এর মধ্যে রাখবে। আর যদি নেগেটিভ সংখ্যা হয়। তাহলে লুপটা স্টপ করে দিবে। এবং লুপ বন্ধ করার আগ পর্যন্ত যতগুলা পজিটিভ সংখ্যা পাওয়া গেছে। সেগুলা রিটার্ন করে দিবে। 

let posativeNumber = function(number){
  let storeArray = [];
  for(Element of number){
    if(Element >= 0){
      storeArray.push(Element);
    }else{
      break;
    }
  }
  return storeArray;

}

let pNumber = posativeNumber([10,20,50,40,5,0,7,05,42,-6,-8,-40]);
console.log(pNumber);