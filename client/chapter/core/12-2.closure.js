
//함수를 짜면 환경이 구성됨(렉시컬 환경)
function earth() {
  

  let water = true;
  let apple = {
    founder: 'Steve Jobs',
    ceo: 'Tim Cook',
    product: ['iphone', 'macbook', 'macStudio']
  }
  let o2 = 9999

  function tiger() {
    
    console.log(water, o2);
  }

  return tiger
// tiger는 earth의 정보를 전달해줄 뿐이기 때문에 밑처럼 이름은 중요하지 않다.
/*   return function(){
    console.log(water, o2);
  }
 */

}

const ufo = earth()
//이렇게 클로저 처리하면 폐쇄되아서 가비지컬렉터가 삭제시킬 수 없따




function handler() {
  
  console.log('hit');
}

document.querySelector('.first').addEventListener('click',handler)