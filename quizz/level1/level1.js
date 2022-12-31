/*
배열 나누기
함수 division 특정한 배열을 내가 원하는 원소의 갯수를 길이로 가진 배열들로 분해하려고한다
이후, 해당 배열들을 요소로 갖는 배열을 반환한다
ex) 길이기 80인 배열은 길이가 5로 분해한다면 16개의 배열을 요소로 갖는 배열을 반환한다

1. 요구사항 확인하기
2. 요구사항 바탕으로 인풋 생각하기
3. 인풋 바탕으로 단계별 한글로 함수 설계하기
4. 단계별 구글링 키워드 생각하기

*/

/*  1. division() 파라미터에 arr은 우리가 받을 배열, 두번째 파라미터(count)는 쪼개어 들어갈 개수임
    2. let arr1 = []이라는 새로운 배열을 생성한다. 이거는 받는 배열
    3. for (let i = 0; i < arr.length; i += count){
        이런식으로 돌린다. 즉 i를 인덱스 번호로 하고 이걸로 통해서 슬라이스를 사용할 생각이다.
        그래서 let a = arr.slice(i, i + count); 이런식으로 하면 slice(시작점:0, 0+count번호)로 해서 division될듯
    }
    4. 그러면 여기서 for돌리는 것을 push를 통해서 아까만든 arr1에 배열에 넣으면 끝?
    6. 그리고 arr1에 즉 푸시한다 가공된 a를 push한다.
*/

function division(arr, count) {
    let arr1 = [];
    for (let i = 0; i < arr.length; i += count) {
        let a = arr.slice(i, i + count);
        // console.log(a);
        arr1.push(a);
    }
    return arr1;
}

console.log(division([1, 2, 3, 4, 5], 5));

// arr = [1,2,3,4,5]
// divition(arr, 2); === [ [1,2], [3,4], [5] ]
