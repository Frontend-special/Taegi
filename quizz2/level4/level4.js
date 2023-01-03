/* 
페이지네이션 구현하기

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

기초 변수
window.onload = function(){

}
window.onload = ()=>{
    
}


let totalPage = 80;
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get('page') || 1;

    * 1.요구사항 *
    1. < > 1~10까지 한페이지인데 왼쪽 오른쪽으로 10씩 증가 혹은 감소

    * 한글 설계 및 구글링  *
    1. 버튼 10개 구현
    2. 오른쪽 화살표 눌렀을때, page_list 다 +10하고 변경
    3. 왼쪽 버튼 누르면 -10하고 변경
    4. 버튼 누르면 url에 해당 버튼 숫자를 출력?
    5. 새로고침을 해도 page 1이 아닌 그 페이지 유지해야함.
*/
