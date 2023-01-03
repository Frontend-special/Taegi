/* 
    1번
    1.  "페이지가 로딩될 때 이곳의 글씨를 변경하시오"
    이 걸 가져온다.
    2. 가져 온 것에 text를 변경한다.
    3. 페이지가 로딩 될 때 이니깐 window.onload를 활용
*/
window.onload = () => {
    let dis = document.querySelector(".disp>form>p");
    dis.innerText = "음.....이걸로 변경?";
};

/* 
    2번
    1. 탭 1~6번까지 가져온다
    2. 클릭한 탭의 html 태그를 가져온다
    3. 가져온것탭만 색상 변경하고 배경색 변경한다.
    4. 다시 다른탭을 클릭할 시 기존 탭 효과 지우고
    새로 클릭한 탭 효과 넣어준다.
*/

let tab = document.querySelectorAll(".tab");
function solution2() {
    for (let t of tab) {
        t.addEventListener("click", () => {
            for (let t of tab) {
                t.classList.remove("classTab");
            }
            t.classList.add("classTab");
            let text = t.innerHTML;
            solution3(text);
        });
    }
}
solution2();
/* 
    3번
    1. 위에 탭 클릭한것을 가져온다
    2. class="block" 6개를 가져온다.
    3. 2번에 가져온 탭과 block 내용과 비교한다
    4. 비교해서 같은것만 보이게 한다.
*/
let block = document.querySelectorAll(".block");
function solution3(text) {
    for (let b of block) {
        b.style.visibility = "hidden";
    }
    for (let b of block) {
        if (b.innerHTML.includes(text)) {
            b.style.visibility = "visible";
        }
    }
}

/*
    4번
    1. input에 입력을 할 때 마다 그 값을 받는다
    2. 정수만 입력을 해야한다.
    3. 아니면 alert로 메세지를 줘야한다.
 */
document.querySelector;
/*
    5번
    1. input을 가져온다.
    2. ul을 가져온다.
    3. 저장, 초기화 버튼 가져온다.
    4. input에 값을 입력한다.
    5. enter 혹은 저장 버튼을 누르면 
    6. 가져온 ul안에 li로 추가해야함
    7. 초기화 버튼을 누르면 li다 없애야함.   
*/

/* 
    6번
*/
