//変数/定数のスコープ(有効範囲)

const globalVariable = "グローバル";

function checkScope() {
  const localVaroable = "ローカル";
  console.log(localVaroable);
}

console.log(globalVariable);

checkScope();

function checkScope() {
  console.log(globalVariable);
}
checkScope();

//グローバル変数/定数はローカルで使える
//ローカル変数/定数はグローバルで使えない(関数の中で定義した変数/定数は関数の中だけでしか使えない)
