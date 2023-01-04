/* 
페이지네이션 구현하기
*/

const $pageList = document.querySelector(".page_list");
const $nextPage = document.querySelector(".btn_nav.next");
const $prevPage = document.querySelector(".btn_nav.pre");

let totalPage = 80;
let PAGE_LST = [];
let currentPageIndx = 0;
let currentPage = new URLSearchParams(location.search).get("page") || 1;

Array.prototype.division = function (div) {
    const arr = this;
    //this
    const result = [];
    const len = arr.length;
    for (let i = 0; i < len; i += div) {
        result.push(arr.slice(i, i + div));
    }
    return result;
};
/*
  [분석]
  파라미터 div에 limit값을 넣고
  result에 [1~10], [11~20] ...이런식으로 배열 생성
*/

(function pagaNation(totalPage, currentPage) {
    const paageNation_list = [];
    const paageNation_limit = 10;
    currentPageIndx = Math.floor(currentPage / paageNation_limit);

    for (let i = 1; i <= totalPage; i++) {
        paageNation_list.push(i);
    }
    PAGE_LST = paageNation_list.division(paageNation_limit);
    renderPageNation();
})(totalPage, currentPage);
/*
  1. 즉시 실행 함수로 function 선언
  2. 빈 배열 list 만들고
  3. 한 페이지당 limit을 10을 잡고
  4. ex) 74/10 7.4 8 - 1 7
  5. for문을 통해서 paageNation_list에 [1~80] 완성
  6. PAGE_LST에 74 = 
  7. 
*/
// 페이지네이션 랜더링
function renderPageNation() {
    const pageNationList = PAGE_LST[currentPageIndx];
    $pageList.innerHTML = pageNationList
        .map((page) => {
            return `<a href="?page=${page}" class="nav_page" data-page="${page}">${page}</a>`;
        })
        .join("");

    const pageList = document.querySelector(".page_list").children;
    for (let i = 0; i < pageList.length; i++) {
        if (pageList[i].dataset.page == currentPage) {
            pageList[i].classList.add("on");
        }
    }
}

// 넥스트 페이지 그룹
function nextPageGroup() {
    if (!(currentPageIndx < PAGE_LST.length - 1)) return;
    currentPageIndx++;
    renderPageNation();
}

// 이전 페이지 그룹
function prevPageGroup() {
    if (!(currentPageIndx > 0)) return;
    currentPageIndx--;
    renderPageNation();
}

$nextPage.addEventListener("click", nextPageGroup);
$prevPage.addEventListener("click", prevPageGroup);
