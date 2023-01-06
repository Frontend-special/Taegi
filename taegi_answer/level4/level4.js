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
    //this가 Array 80이 들어있다. 이거 솔직히 모르겠다.
    const result = []; //result 빈배열 만들고
    const len = arr.length; //len에 80이 들어갈듯
    for (let i = 0; i < len; i += div) {
        result.push(arr.slice(i, i + div));
    }
    // for문이 80까지인데 div가 limit나누는거 즉 8번 돈다.
    return result;
    //즉 return값은 [1~10], [11~20], [21~30] ~~ [71~80]
    //들어올것이다.
};

(function pagaNation(totalPage, currentPage) {
    const paageNation_list = [];
    // 빈배열 생성
    const paageNation_limit = 10;
    //limit를 10으로 잡는다.
    currentPageIndx = Math.floor(currentPage / paageNation_limit);
    /*  
        이거를 Math.floor로 바꿔도 괜찮다 생각을하여 바꿈
        ex) Math.floor(64 / 10) = 6;
        currentPageIndx = 6;
    */
    for (let i = 1; i <= totalPage; i++) {
        paageNation_list.push(i);
    }
    // for문 80번 돌림 즉 1~80까지 배열 생성? 하는거임
    PAGE_LST = paageNation_list.division(paageNation_limit);
    //이걸로 10개씩 배열로 division을 하였으니
    renderPageNation();
})(totalPage, currentPage);

// 페이지네이션 랜더링
function renderPageNation() {
    const pageNationList = PAGE_LST[currentPageIndx];
    $pageList.innerHTML = pageNationList
        .map((page) => {
            return `<a href="?page=${page}" class="nav_page" data-page="${page}">${page}</a>`;
        })
        .join("");
    /*
        이거는 잘모르겠습니다.
    */

    const pageList = document.querySelector(".page_list").children;
    // page_list 자식들 데려옴
    pageList;
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
