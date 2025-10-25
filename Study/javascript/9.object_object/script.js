//objectObject//オブジェクトを文字として扱おうとすると出る表示

//const test = new Object();
const test = {
  //簡単な書き方
  test1: 10,
  test2: 20,
  test3: 30,
};
console.log(test);
console.log(Object.values(test));

for (value of Object.values(test)) {
  console.log(value);
}

// ユーザー定義関数
const postalCode = "123-4567";
const postal = {
  postalCode: "123-4567",

  //this.postalCode
  checkPostalCode(string) {
    const replaced = string.replace("-", "");
    const length = replaced.length;

    if (length === 7) {
      return true;
    }
    return false;
  },
};
console.log(postal.checkPostalCode(postalCode));

function checkPostalCode(string) {
  const replaced = string.replace("-", "");
  const length = replaced.length;

  if (length === 7) {
    return true;
  }
  return false;
}
console.log(checkPostalCode(postalCode)); //-とって7文字になるのでtrue
console.log(postal.postalCode);

//メソッドチェーン メソッド(関数)をつなげる仕組み

//const replaced = string.replace();
//condt length = replaced.length;
//⬇︎まとめて書くことができる⬇︎
//const length = string.replace().length;
const postal_1 = {
  postalCode: "123-45678",
  //thid.postalCode
  checkPostalCode() {
    const replaced_1 = this.postalCode.replace("-", "").length;
    //const length = replaced.length;
    if (replaced_1 === 7) {
      return true;
    }
    return false;
  },
};

const person = {
  name: "本田",
  age: 30,

  getName() {
    console.log(this.name);
    return this;
  },
  getAge() {
    console.log(this.age);
    return this;
  },
};
person.getName().getAge();
