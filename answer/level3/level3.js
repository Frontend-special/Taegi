/* 
레시피추가하기
*/

const $form = document.querySelector("#ingredient-form");
const $ingredient = document.querySelector("[name='ingredient']");
const $weight = document.querySelector("[name='weight']");
const $table = document.querySelector("table");
const $button = document.querySelector("#submit_button");
const $list = document.querySelector("#ingredient-list");
// 위에 같은 경우는 tag 불러오는거

const INGREDIENT_LIST = new Map();
/*
  [구글링x 분석]
  1. 새로운 new Map() 생성 const INGREDIENT_LIST
*/

function deleteIngredient(e) {
    if (!e.target.matches("button")) return;
    const $tr = e.target.closest("tr");
    const ingredient = $tr.querySelector("td").textContent;
    console.log(ingredient);
    $tr.remove();
    INGREDIENT_LIST.delete(ingredient);
}
/*
  [구글링x 분석]
  1. 파라미터 e가 tr로 추정
  2. if로 tr에서 button이 아닌 다른걸 누르면 return
  3. ingredient에 text를 가져온다?
  4. umm...
*/
/*
  
*/

$form.addEventListener("submit", (e) => {
    e.preventDefault();
    const ingredientValue = $ingredient.value;
    const weightValue = $weight.value;
    if (INGREDIENT_LIST.has(ingredientValue)) return alert("이미 존재하는 재료입니다");
    if (!ingredientValue || !weightValue) return alert("입력해주세요");
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${ingredientValue}</td>
    <td>${weightValue}</td>
    <td><button type="button">삭제</button></td>
    `;

    tr.addEventListener("click", deleteIngredient);

    INGREDIENT_LIST.set(ingredientValue, weightValue);
    $table.append(tr);
    $ingredient.value = "";
    $weight.value = "";
});
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

$button.addEventListener("click", () => {
    if ($list.children.length > 0) $list.innerHTML = "";

    INGREDIENT_LIST.forEach((weight, ingredient) => {
        const li = document.createElement("li");
        li.innerText = `${ingredient} : ${weight}`;
        $list.append(li);
    });
});
/*
  1. $button 클릭 이벤트 추가
  2. 만약  ul.children 즉 li가 한개 이상이면 ul을 비우고 시작
  3. 80번째 줄 이해x
 */
/*
  [구글링 키워드]
  1. js html 태그 추가
  2. js 객체 for문
*/
