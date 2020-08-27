const lottoPrice = 1000;
const lottoNumberLimit = 45;
const lottoMaxLength = 6;
let createdLottos;
let luckyLotto;
// const buyButton = document.querySelector('.btn-buy');
// const compareButton = document.querySelector('.btn-compare');
// const moneyInput = document.querySelector('.input-price');
// const inputPrice = moneyInput.value;
let boughtLottoCnt;
// console.log('@@@@@@inputPrice', inputPrice);

const updateInputPrice = (e) => {
    const inputPrice = Number(e.target.value);
    boughtLottoCnt = Math.floor(inputPrice / lottoPrice);
};

// buildLottos(2);
const buildLottos = (count) => {
    // const inputPrice = parseInt(moneyInput.value);
    console.log('buyLotts(inputPrice) >>> ');
    

    // console.log('inputPrice : ' + inputPrice);
    // console.log('boughtLottoCnt : ' + boughtLottoCnt);
    
    createdLottos = createLottos(count);
    bindLottos(createdLottos);
    // console.log('buyLotts(inputPrice) <<< ');
}


// const createdLottos = buyLottos(5000); 


const generateRandomNumber = (maxLen) => Math.floor(Math.random() * maxLen); 

const createLottoNumbers = () => {
    console.log('createLottoNumbers() >>> ');
    const lottoNumbers = [];
    const numberRange = [];

    for(let i = 0; i < lottoNumberLimit; i++){
        numberRange.push(i + 1);
    }

    for(let i = 0; i < lottoMaxLength; i++){
        const pickedNumber = numberRange.splice(generateRandomNumber(numberRange.length), 1)[0];
        lottoNumbers.push(pickedNumber);
    }
    console.log('createLottoNumbers() <<< ');
    return lottoNumbers;
}

const createLottos = (boughtLottoCnt) => {
    console.log('createLottos(boughtLottoCnt) >>> ');
    const lottos = [];

    for (let i = 0; i < boughtLottoCnt; i++){
        lottos.push(createLottoNumbers());
    }

    // bindLottos(lottos);
    
    console.log('createLottos(boughtLottoCnt) <<< ');
    return lottos;
}

const bindLottos = (lottos) => {
    let lottoBalls = "";

    for (let i = 0; i < lottos.length; i++){
        for (let j = 0; j < lottoMaxLength; j++) {
            lottoBalls += '<span>' + lottos[i][j] + '</span> ';
        }
        lottoBalls += '<br>';
    }

    let lottoContents = document.querySelector('.lotto-contents');
    let lottoContentObj = document.createElement('div');
    lottoContentObj.classList.add('lotto-contents-balls');
    lottoContents.appendChild(lottoContentObj);

    lottoContentObj.innerHTML = lottoBalls;
}

const setLuckyNumbers = () => {

    const luckyNumbers = [];

    luckyNumbers.push(createLottoNumbers());

    console.log('luckyNumbers : ' + luckyNumbers);

    let luckyNumberContents = document.querySelector('.lucky-number-contents');
    let luckyNumberConObj = document.createElement('div');
    luckyNumberConObj.classList.add('lucky-number-balls');
    luckyNumberContents.appendChild(luckyNumberConObj);

    luckyNumberConObj.innerHTML ='<span>' + luckyNumbers + '</span>'

    return luckyNumbers;
}

const compareLottos = (createdLottos, luckyLotto) => {
    const wins = [];
    createdLottos = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12], [44, 7, 12, 55, 123, 1232]]
    luckyLotto = [4, 5, 6, 7, 8, 9];
    createdLottos.forEach(createdLotto => {
        let win = 0; // [3, 3, 1]

        createdLotto.forEach(lottoNumber => {
            if (luckyLotto.contains(lottoNumber)) {
                win++;
            }
        })
        wins.push(win);
    })

    console.log(wins);

    const filteredWins3 = wins.filter(winCount => winCount === 3).length;
    const filteredWins4 = wins.filter(winCount => winCount === 4).length;
    const filteredWins5 = wins.filter(winCount => winCount === 5).length;
    const filteredWins6 = wins.filter(winCount => winCount === 6).length;

    console.log(filteredWins);
    // console.log('compareLottos() >>> ');
    
    // const boughtLottoCnt = 2;
    // let boughtLottoNumbers = [];
    // let winNumbers = [];
    // let equalNumbers = 0;

    // createLottos(boughtLottoCnt);
    // setLuckyNumbers();

    // boughtLottoNumbers = createLottos(boughtLottoCnt);
    // // winNumbers.push(setLuckyNumbers());
    // winNumbers = setLuckyNumbers;

    // console.log('boughtLottoNumbers : ' + boughtLottoNumbers);
    // console.log('boughtLottoNumbers.length : ' + boughtLottoNumbers.length);
    // console.log('winNumbers : ' + winNumbers);
    // console.log('winNumbers.length : ' + winNumbers.length);

    // for (let i = 0; i < boughtLottoNumbers.length; i++){
    //     for (let j = 0; j < winNumbers.length; j++){
    //         if(boughtLottoNumbers[i]===winNumbers[j]){gg
    //             equalNumbers++;
    //         }
    //     }
    // }
    // console.log('equalNumbers : ' + equalNumbers);

    // console.log('compareLottos() <<< ');
    // return equalNumbers;
}

const displayResult = () => {
    console.log('displayResult() >>> ');
    console.log('displayResult() <<< ');
}

// console.log(' end) buyLottos(2000) : ' + buyLottos(5000));
// console.log(' end) createLottos(2) : ' + createLottos(5));
// console.log(' end) createLottoNumbers() : ' + createLottoNumbers());
console.log(' end) compareLottos() : ' + compareLottos());
// console.log(' end) displayResult() : ' + displayResult());

const initialize = () => {
    luckyLotto = setLuckyNumbers();
    buyButton.addEventListener('click', () => buildLottos(boughtLottoCnt));
    compareButton.addEventListener('click', () => compareLottos(createdLottos, luckyLotto));
    moneyInput.addEventListener('input', updateInputPrice)
}

// initialize();

compareLottos();