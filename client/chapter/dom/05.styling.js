/* ---------------------------------------------------------------------- */
/* DOM Styling                                                            */
/* ---------------------------------------------------------------------- */



const first = getNode('.first');
const second = getNode('.second');


/* 클래스를 관리할 수 있게 해주는 DOM 프로퍼티 ------------------------------------ */

// - className – 클래스 전체를 문자열 형태로 반환해주는 프로퍼티로 클래스 전체를 관리할 때 유용
// - classList – 클래스 하나를 관리할 수 있게 해주는 메서드로 개별 클래스를 조작할 때 유용

// console.log(first.className = 'hola');
// first.classList.add('hello') //기존꺼 냅두고 추가
// first.classList.remove('hello') //기존꺼 냅두고 추가
// first.classList.toggle('is-active')
// console.log(first.classList.contains('hello'))





addClass('.first', 'hello')

// removeClass('.first','')
// toggleClass??




/* 스타일 변경 방법 --------------------------------------------------------- */

// - style.cssText - "style" 속성 전체에 대응하므로 스타일 전체에 대한 문자열 저장

first.style.transform = 'rotate(360deg)'
second.style.transform = 'rotate(-1080deg)'


console.log(first.style.fontSize); //이건 안됨, 값이 나온다 하더라도 계산된 값이 아니기때문에 어뜨케 바뀔지 모름.

/* 계산된 스타일 읽기 ------------------------------------------------------- */


let size = getComputedStyle(first).fontSize;

console.log(size);




css('.first', 'font-size'); //get
css('.first', 'font-size', '100px'); //set


// - getComputedStyle(element, [pseudoElement]) `읽기 전용`