/*
 - 로또를 구매하는 함수
 - 로또를 발행하는 함수
 - 로또를 비교하는 함수
 - 로또 통계를 출력하는 함수
*/ 

// const : 상수개념, bug 방지 

const lottoPrice = 1000;
const lottoNumberLimit = 45;
const lottoMaxLength = 6;

const buyLottos = (inputPrice) => {
    // 소수점 떼버리기
    const buyedLottoCnt = Math.floor(inputPrice / lottoPrice);

    createLottos(buyedLottoCnt);
}

// () => { return Math.random() * 45;} 과 같음 한 줄로 했을 경우 아래처럼 사용가능
// 0부터 시작이기 때문에 44까지 출력
const generateRandomNumber = (maxLen) => Math.floor(Math.random() * maxLen); 
// const generateRandomNumber = () => Math.floor(Math.random() * 44) + 1;

// 랜덤숫자 만드는 함수
const createLottoNumbers = () => {
    const lottoNumbers = [];
    const numberRange = [];

    /*
        numberRange에 먼저 46까지 담고, 하나씩 빼내기
    */
    for(let i = 0; i < lottoNumberLimit; i++){
        numberRange.push(i + 1);
    }

    // console.log('numberRange : ' + numberRange);

    for(let i = 0; i < lottoMaxLength; i++){
        // random으로 나온 숫자를 빼기
        // 원본배열은 오염되서 빠지고 .splice 값은 빠진 값
        const pickedNumber = numberRange.splice(generateRandomNumber(numberRange.length), 1)[0];
        lottoNumbers.push(pickedNumber);
    }

    return lottoNumbers;
}


// 구매한 것(lottoCnt) 만큼 발행
const createLottos = (buyedLottoCnt) => {
    /*
     - 랜덤 숫자를 만드는 함수
     - 중복 확인하는 로직
     ------------------------------
     - 구매한 것 만큼 발행
     - 로또 길이만큼 만들기
    */

    const lottos = [];

    for (let i = 0; i < buyedLottoCnt; i++){
        lottos.push(createLottoNumbers());
    }
    console.log('lottos : ' + lottos);
    console.log('buyedLottoCnt : ' + buyedLottoCnt);
    
    return lottos;
}

// 구매함수, 당첨함수 비교
const compareLottos = () => {
    let equalNumbers = 0;

    
    console.log('equalNumbers : ' + equalNumbers);

    return equalNumbers;
}


// 통계 출력
const displayResult = () => {
    // 반복문 안에 반복문에서 일치할 때마다 카운트를 늘려주기
    // 구매함수 안에 당첨함수 돌고 그 안에 일치할 때마다 카운트 늘려주기
    // 일치값 변수로 저장 후 클래스 담고 일치값 공 색 변경
    console.log('displayResult >>');
}

console.log('createLottoNumbers() : ' + createLottoNumbers());
console.log('createLottos(2) : ' +createLottos(2));
console.log('compareLottos() : ' + compareLottos());
console.log('displayResult() : ' + displayResult());

// const arr = [1, 3, 5];
// // splice(startIdx, 삭제 갯수)
// console.log('arr.splice : ' + arr.splice(0, 1));
// console.log('arr[0] : ' + arr.splice(1, 1)[0]);
// console.log('arr : ' + arr);