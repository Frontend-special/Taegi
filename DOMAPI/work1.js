//1번
window.onload = function () {
    const a = document.querySelector(".disp");
    a.innerText = "taegi";
};

//2번
const tab = document.querySelectorAll(".tab");
const content = document.querySelectorAll(".block");

for (let tb of tab) {
    tb.addEventListener("click", () => {
        for (let tb of tab) {
            tb.classList.remove("gg");
        }
        tb.classList.add("gg");
        const tx = tb.innerText;
        active(tx);
    });
}

//3번
const block = document.querySelectorAll(".block");

function active(text) {
    for (let blk of block) {
        if (blk.innerHTML.includes(text)) {
            blk.style.visibility = "visible";
        } else {
            blk.style.visibility = "hidden";
        }
    }
}

// 4번
const inputNum = document.getElementById("te_input");
inputNum.addEventListener("keypress", () => {
    if (event.keyCode >= 48 && event.keyCode <= 57) {
        event.returnValue = false;
        alert("글자만 입력하세요.");
    }
});
