/*

변수 위치 찾기
변수 a는 main 함수 안에서만 사용된다
    - 변수 a는 main이라는 함수안에서만 쓴다면 걍 main()안에 넣어주면 되는거아님?

변수 b는 dom api selector로 다른 이벤트에서 사용될 여지가 있다.
    - 변수 b는 어떤 돔 이벤트에 쓴다는거는 solution(), parse(), main()등 어떤 함수에 들어가 addevent한다는 뜻인거 같음
    그래서 걍 b는 전역변수로 할당해서 어디든 들어갈수 있게 할거임.

변수 c는 메인 함수 안에서 실행되는 콜백함수 solution의 인자이다
    - 일단 말그대로 c는 걍 solution의 파라미터다. 맞지? 사실 이게 정확히 무슨 의미인지 모르겠음

변수 d는 솔루션 함수에서 전달받은 c를 다른 형태로 바꿔준다.
    - 음....일단 걍 solution 함수에 파라미터로 들어온 c를 if - else로 number인지 string인지 비교하고 
    그걸 toString 혹은 Number()로 강제 현 변환을 하라는 말 같다. 
    음....아니면 다른 형태라는것은 객체를 배열로 하라는건가? 음 그러면 걍 [...파라미터값] 혹은 {...파라미터값}
    이런식으로 전개연산자를 통해서 할수있을거같긴함.

변수 e는 main함수의 최종 반환 값으로 향후 다른 함수에서 재사용된다.
    - 음...이거는 걍 변수 e는 main의 return 값이고 다른 함수에 사용 가능하다? 이게 무슨 말이지?
*/

let b;
function solution(c) {
    if (typeof c === "number") {
        let Str = toString(c);
        console.log(typeof Str);
    } else {
        let Num = Number(c);
        console.log(typeof Num);
    }
}
function parse() {}
function main(solution) {
    let a;
    let c;
    solution(c);
}
let e = main();
