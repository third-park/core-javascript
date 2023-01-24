function 바깥함수() {
	let 상태 = 100

	return function 안쪽함수(매개변수) {
		return 상태 + 매개변수
	}
}

let 안쪽함수 = 바깥함수()
console.log(안쪽함수(200))
