/* 
레시피추가하기
*/

/*
  [구글링x 분석]
  1. 새로운 new Map() 생성 const INGREDIENT_LIST
*/
// let data = new Map();
/*
  [구글링x 분석]
  1. 파라미터 e가 tr로 추정
  2. if로 tr에서 button이 아닌 다른걸 누르면 return
  3. ingredient에 text를 가져온다?
  4. umm...
*/
/*
  [구글링 키워드]
  1. js 해당 요소 클릭 비교
  2. js html 태그 삭제
  3. 
*/
// let thead = document.querySelector(".thead");
// let ingredient = document.getElementsByName("ingredient")[0];
// let weight = document.getElementsByName("weight")[0];
// let ingredient_form = document.querySelector("#ingredient-form");
// ingredient_form.addEventListener("submit", (el) => {
//     el.preventDefault();
//     let ingredientValue = ingredient.value;
//     let weightValue = weight.value;
//     let push_value = document.createElement("td");
//     push_value.innerHTML = `
//     <tr class="thead">
//     <th>재료</th>
//      <td>ingredientValue</td>
//      <th>무게</th>
//      <td>weightValue</td>
//      <th>관리</th>
//      <td><button>삭제</button></td>
//      </tr>
//     `;
//     push_value.append(thead);
//     //둘다 입력이 없을때
//     if (!ingredientValue.length || !weightValue.length) {
//         alert("입력된 값이 없습니다.");
//     }
// });

/*
  [구글링x 분석]
  1. 파라미터 (e)는 form일 것이다.
  2. ingredientValue, weightValue에 value값을 핳당한다.
  3. 만약 객체에 재료명이 있으면 alert
  4. 만약 재료명 무게 둘다 inputvalue가 없으면 alert
  5. const tr 생성하고 tr만들어줌
  6. 그 tr에 td 재료명, 용량, 삭제버튼 넣음
  7. 그리고 set을 통해 데이터 저장
  8. 54번째 줄부터는 이해 x
*/

/*
  [구글링 키워드]
  1. js로 객체 만들기
  2. js로 객체 데이터 만들기
  3. js로 html 추가
  4. js로 .set(재료명, 용량)
 */

/*
  1. $button 클릭 이벤트 추가
  2. 만약  ul.children 즉 li가 한개 이상이면 ul을 리셋하고 시작함
  3. INGREDIENT_LIST 내용을 foreach로 돌린다.
  4. 그래서 INGREDIENT_LIST에 있는 데이터를 HTML에 li로 추가
  5. li의 innerText에 재료, 무게 넣고
  6. append를 통해 li tag? 추가? 하는거같습니다.
*/
/*
  [구글링 키워드]
  1. js html 태그 추가
  2. js 객체 for문
  6. js .create
*/

const $table = document.querySelector("table");
const $ingredientForm = document.querySelector("#ingredient-form");
const $ingredient = document.getElementsByName("ingredient")[0];
const $tr = document.querySelector("tr");

const $weight = document.getElementsByName("weight")[0];
$ingredientForm.addEventListener("submit", (form) => {
    form.preventDefault();
    const ingredient_value = $ingredient.value;
    const weight_value = $weight.value;

    const push_tr = document.createElement("tr");
    push_tr.innerHTML = `
                <td>${ingredient_value}</td>
                <td>${weight_value}</td>
                <td><button>삭제</button></td>
    `;
    $table.append(push_tr);
    del(push_tr);
});

function del(push_tr) {
    let button = document.querySelector("button");
    console.log(button);
}
