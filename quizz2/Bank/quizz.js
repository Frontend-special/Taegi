// 첫번째 문제풀이 상상 하지만 망작
/*  option의 value값을 가져와서?
    그걸로 splice였던걸로 기억하는데     
    아니네 join 쓰면 가능하긋다.
*/

// // // 일단 select의 option을 가져올까?

// let optionAll = document.querySelectorAll("#bank-selector > option");

// console.log(optionAll);
// 근데 이러면 맨 위에 꺼만 가능한거잖아 이걸 클릭한거를 가져오자
// let select = document.querySelector("#bank-selector");
// // //일단 크걸로 select 태그 가져오고 음... click event ㄱㄱ
// 잘모르겠네 구글링 하고

// for (let opAll of optionAll) {
//     opAll.addEventListener("click", () => {
//         console.log(select.options[select.selectedIndex].value);
//     });
// }
// console.log(select.options[select.selectedIndex].value);

////////////////////////////////////////////////////////

// 두번째 문제 풀이
// 음... 걍 위에 다 리셋하고 빌드를 다시 짜자
/*  1. 은행을 선택한다
    2. 계좌번호를 입력한다.
    3. 제출을 누르면
    4. 은행에 따라 -위치가 달라진다.

    질문)
        1. 근데 이게 은행은 9개 -푼은 8개 어케해야할지
        2. 가운데는 다 *으로 맞추는건지
        3. 계좌번호의 딱 12개만 받을수 있게 input에서 제한을 줘야하는건지?
*/

/*  1. 은행을 선택할때c선택한 option에 innertext혹은 value값을 가져온다. 그리고 그걸 비교해서 join? 등을 통해서 - 위치를 넣어준다?
 */
// //
// let bank = document.querySelector("#bank-selector");
// let option = document.querySelectorAll("#bank-selector>option");
// console.log(bank);
// 일단 select가져왔고 option innertext가져오는거 구글링 죠져
// console.log(bank.options[bank.selectedIndex].text);
// select에 선택된거를 text가져오는거는 했지만 음...이걸 클릭 이벤트를 써서 눌렀을때 그걸 가져와자잇
// console.log(option);

// 진짜 option클릭했을때 어케오냐 미치겠네

// 이거 input값 받을거를 은행에 비교해서 넣는 형식 만들거임

/////////////////////////////////////////////////////
//다시 해보자
import { BANK_LIST, ACCOUNT_FORM } from "./mockData.js";
console.log(BANK_LIST, ACCOUNT_FORM);
/*
    1. 일단 목데이터를 가져오자
 */
// select 가져오기
let selectEl = document.querySelector("select");
//1.

// BANK_LIST key값을 가져옴
for (let bank_key in BANK_LIST) {
    console.log(BANK_LIST[bank_key]);
    console.log(selectEl);
}
selectEl.append('<option value="11">dd</option>');

// ACCOUNT_FORM key값을 가져옴
for (let account_key in ACCOUNT_FORM) {
    console.log(ACCOUNT_FORM[account_key]);
}

//
#bank-selector.append("<option>옵션</option>");
