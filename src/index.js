// var val1 = "val変数";
// console.log(val1);

// val1 = "var変数を上書き";
// console.log(val1);

// var val1 = "val変数を再宣言";
// console.log(val1);

// let val2 = "let変数";
// console.log(val2);

// // letは上書き可能
// val2 = "let変数を上書き";
// console.log(val2);

// // letは再宣言不可能
// let val2 = "let変数を再宣言";

// const val3 = "const変数";
// console.log(val3);

// // const変数は上書き不可
// // val3 = "const変数を上書き";
// const val3 = "const変数を再宣言";

// const val4 = {
//   name: "かほ",
//   age: 28,
// };
// val4.name = "kaho";
// val4.addres = "Toyama";
// console.log(val4);

// constで定義した配列はプロパティの変更が可能
// const val5 = ["dog", "cat"];
// val5[0] = "bird";
// val5.push("monkey");
//

/**
 *  テンプレート文字列
 */

// const name = "かほ";
// const age = 23;

// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

// テンプレート文字列を用いた方法
//

/**
 *
 * アロー関数
 *  */

// function func1(str) {
//   return str;
// }

// const func1 = function(str){
//   return str;
// }

// console.log(func1("func1です"));

// // アロー関数
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1,num2) => num1 + num2;

// console.log(func3(10,20));

// /*
// *
// *分割代入
// */
// const myProfile = {
//   name: "かほ",
//   age: 23,
// };

// const {name,age} = myProfile;
// const message2 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message2);

// const myProfile = ["かほ", 23];
// const message3 =
//   "私の名前は" + myProfile[0] + "です。年齢は" + myProfile[1] + "です。";
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message4);

/*
 *
 *デフォルト値、引数など
 */

const sayHello = (name = "かほ") => console.log("こんにちは!" + name + "さん!");
sayHello();

/**
 *
 * スプレッドシート*/
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(...arr1);

// // まとめる
// const arr2 = [1, 2, 3, 4, 5];
// const [num1, num2, ...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

// // 配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

// const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(nameArr[index]);
// }

// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// nameArr.map((name) => console.log(name));

// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 1;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) =>{
//   if(name === "かほ"){
//     return name
//   }else{
//     return '${name}さん'
//   }
// })
// console.log(newNameArr);

/*三項演算子
 */

// const val1 = 1 < 0 ? 'trueです' : 'falseです';
// console.log(val1);

// const num = 1300;
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力する';
// console.log(formattedNum);

const checkSum = (num1, num2) => {
  return num1 + num2 > 100 ? "100を超えています" : "許容範囲内です";
};
console.log(checkSum(50, 40));

const flag1 = true;
const flag2 = false;

// if (flag1 || flag2){
//   console.log("1か2はtrueになります");
// }

// if (flag1 && flag2){
//   console.log("1か2もtrueになります");
// }

// const num = null;
// const fee = num || "金額未設定です";
// console.log(fee);

// &&は左側がtrueなら右側を返す
const num2 = 100;
const fee2 = num2 && "何か設定されました";
console.log(fee2);
