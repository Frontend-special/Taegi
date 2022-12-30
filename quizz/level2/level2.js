import { RESERVATION_LIST } from "./reservation .js";
console.log(RESERVATION_LIST);

/* 
예약 고객확인하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

/*
    동작
    1. 이름 입력 
    2. 연락처 입력
    3. button클릭
    
    설계
    html tag를 js로 가져오는거
        1. input name js로 가져오기
        2. input phone js로 가져오기
        3. button js로 가져오기
    
    4. 입력한 input name value값 가져오기
    5. 입력한 input phone value값 가져오기
    6. button 클릭 시 가져온 (name, phone) value값과
    reservation에 (name, phone) value값이랑 비교
    7. 맞으면 reservation number값 주고
    8. 아니면 틀렸습니다. alert로 주고
    
*/
let name = document.getElementsByName("user-name");
let phone = document.getElementsByName("user-phone");
let button = document.getElementsByTagName("button");
console.log(name, phone, button);
