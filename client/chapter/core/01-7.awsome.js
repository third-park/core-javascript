

// 객체의 메서드로서는 일반함수가 좋다. this 를 찾기가 쉽다. 나를 호출한 대상 객체.메서드(this:객체)
// 객체의 메서드 안에 있는 함수는 화살표 함수가 좋다. : this를 찾기가 쉽다. 애초에 this가 없으니 상위 컨텍스트의 this가 된다.
const user = {
  name: 'semyeong',
  age: 28,
  sayHi() {

    const sayHo = () => {
      console.log(this);
    }
    sayHo()
  }
}
// 화살표함수는 this를 바인딩하지 않는다.
user.sayHi();





/* 
console.log(this); //모듈화하면 undefined가 나온다. -> 전역에서 찾으면 안된다. 디스가 없썽
 */


















