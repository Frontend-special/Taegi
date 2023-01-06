import { RESERVATION_LIST } from "./reservation .js";
/*
예약 고객 확인하기 
*/
function err() {
    alert("이름 혹은 전화번호가 틀렸습니다.");
}
// [구글링x 분석 ]
// 즉 이건 오류났을때 사용되는 function이다.
// alert 표시하고, p tag text 변경하는거
/*
    [구글링 키워드]
    1. js import js 하는방법
    2. js html name 가져오기
*/

let user_name = document.getElementsByName("user-name")[0];
let user_phone = document.getElementsByName("user-phone")[0];

user_phone.addEventListener("input", (e) => {
    //정규표현식 써서 - 넣고
    const regular = e.target.value
        .replace(/[^0-9]/g, "")
        .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, "$1-$2-$3")
        .replace(/(\-{1,2})$/g, "");
    e.target.value = regular;
});

//그냥 이건 즉시 실행 함수로 키자
/*  
    [구글링x 분석 ]
    1. phone input에 addevent 추가
    2. 파라미터 e는 input 되고있는 실시간 값이라고 생각된다.
    3. e.target을 하면 이벤트에 선택된 놈 즉 phoneinput이 오고 e.target.vlaue를 해서 입력값을 받는다.
    4. 그걸 상수 phone에 할당
    5. phone에 .replace랑 정규 표현식을 통해 입력 제한을 걸고
    6. 아걸 다시 e.target.value에 넣으면서 입력을 못하게 막는다?
*/
/*
    [구글링 키워드]
    1. js addEventListener 종류
    2. js input 실시간 입력 받기 혹은 js input 입력 감지
    3. js 전화번호 입력
    4. js input 숫자만
    5. js replace
*/

let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let name1 = user_name.value;
    let phone1 = user_phone.value;
    // input name, phone

    if (!name1.length || !phone1.length) return;
    // 둘다 아무것도 없으면 걍 리턴

    let nameArr = RESERVATION_LIST.filter((el) => {
        return el.name === name1;
    });
    let phoneArr = nameArr.find((el) => {
        return phone1 === el.phone;
    });
    let reservation_number = document.querySelector("#reservation-number");
    reservation_number.innerHTML = "";
    console.log(phoneArr);
    if (phoneArr.phone === phone1) {
        reservation_number.innerHTML = phoneArr.number;
    }
    //else가 왜....
    else {
        reservation_number.innerHTML = "이름 혹은 전화번호가 틀렸습니다.";
        alert("이름 혹은 전화번호가 틀렸습니다.");
    }
});

/*  
    [구글링x 분석 ]
    1. form tag에 'submit'이라는 이벤트 추가
    2. 여기서 e파라미터는 뭔지 모르겠다.???
    3. e.preventDefault(); => 기존에 있던 이벤트 비활성화?
    4. 상수 userName과 userPhone 둘다에 input두개의 value값 넣고
    5. import로 가져온 RESERVATION_LIST 객체에 .filter를 씀
    6. 파라미터 list는 즉 RESERVATION_LIST이고
    7. list.name은 즉 RESERVATION_LIST.name이라고 생각함
    8. 그걸로 비교를 해서 참인 놈만 const sameNameUser에 할당
    9. 아니면 if문 실행해서 오류 함수 실행
    10. 
*/
/*
    [구글링 키워드]
    1. js addEventListener 종류
    2. js addeventlistener click submit 차이
    3. preventDefault();
*/
