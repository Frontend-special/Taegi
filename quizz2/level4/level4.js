/* 
페이지네이션 구현하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

기초 변수

let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

    * 1.요구사항 *
    1. 페이지당 버튼이 1~9까지 있다.
    2. 오른쪽 버튼을 누르면 다음 버튼들로 교체된다. 
    3. 버튼을 누르면 url에 누른 번호를 보여준다.
    4. 새로고침을 해도 page1이 아닌 지금 페이지를 보여줘야한다.

    * 한글 설계 및 구글링  *
    1. page_list에 버튼 9개 구현
    2. 오른쪽 화살표 눌렀을때, page_list 다 +9하고 변경
    3. page번호를 누르면 url에 페이지 번호 추가
    
*/
