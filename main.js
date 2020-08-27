//関数
function test1(){
  return '関数１';
}
console.log(test1());

//変数や定数に入れる

// const test2 = function(){
//   return '関数2';
// }
// console.log(test2());

//アロー関数

const test2 = () => {
  return '関数2';
}
console.log(test2());

//Promiseで気をつけること
//1 状態（ok / ng）と値
//2 Promiseチェーン

//promiseの引数にはcallback関数
//callbackの引数が状態（1つでも可）


function promiseTest1(){
  return new Promise( ok => {
    //何かしら処理
    ok('プロミス1です');

  });
}
console.log(promiseTest1());

//定数・変数に代入するケース

const promiseTest2 = new Promise(ok => {
  ok('プロミス2です');
});

console.log(promiseTest2);

//引数があるパターン

function testPromise3(input){
  return new Promise(ok => {
    //何かしらの処理
    ok(`プロミスは${input}です`);
  }); 
}
console.log(testPromise3('太郎'));



