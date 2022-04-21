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

const myProfile = ["かほ", 23];
const message3 =
  "私の名前は" + myProfile[0] + "です。年齢は" + myProfile[1] + "です。";
console.log(message3);

const [name, age] = myProfile;
const message4 = "私の名前は" + name + "です。年齢は" + age + "です。";
console.log(message4);

/*
 *
 *デフォルト値、引数など
 */

const sayHello = (name = "かほ") => console.log("こんにちは!" + name + "さん!");
sayHello();

/**
 *
 * スプレッドシート*/
