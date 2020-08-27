const lottoPrice = 1000;
const lottoNumberLimit = 45;
const lottoMaxLength = 6;

const buyLottos = (inputPrice) => {
    console.log('buyLotts(inputPrice) >>> ');
    const boughtLottoCnt = Math.floor(inputPrice / lottoPrice);

    console.log('inputPrice : ' + inputPrice);
    console.log('boughtLottoCnt : ' + boughtLottoCnt);

    createLottos(boughtLottoCnt);
    console.log('buyLotts(inputPrice) <<< ');
}

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
    let lottoBalls = "";

    for (let i = 0; i < boughtLottoCnt; i++){
        lottos.push(createLottoNumbers());
    }

    for (let i = 0; i< lottos.length; i++){
        lottoBalls += '<span>' + lottos[i] + '</span>';
    }

    let lottoContents = document.querySelector('.lotto-contents');
    let lottoContentObj = document.createElement('div');
    lottoContentObj.classList.add('lotto-contents-balls');
    lottoContents.appendChild(lottoContentObj);

    lottoContentObj.innerHTML = lottoBalls;
    
    console.log('createLottos(boughtLottoCnt) <<< ');
    return lottos;
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

const compareLottos = () => {
    console.log('compareLottos() >>> ');
    
    const boughtLottoNumbers = [];
    const winNumbers = [];
    let equalNumbers = 0;

    createLottos(boughtLottoCnt);
    setLuckyNumbers();

    boughtLottoNumbers.push(createLottos(boughtLottoCnt));
    winNumbers.push(setLuckyNumbers());

    console.log('boughtLottoNumbers : ' + boughtLottoNumbers);
    console.log('boughtLottoNumbers.length : ' + boughtLottoNumbers.length);
    console.log('winNumbers : ' + winNumbers);
    console.log('winNumbers.length : ' + winNumbers.length);

    for (let i = 0; i < boughtLottoNumbers.length; i++){
        for (let j = 0; j < winNumbers.length; j++){
            if(boughtLottoNumbers[i]===winNumbers[j]){
                equalNumbers++;
            }
        }
    }
    console.log('equalNumbers : ' + equalNumbers);

    console.log('compareLottos() <<< ');
    return equalNumbers;
}

const displayResult = () => {
    console.log('displayResult() >>> ');
    console.log('displayResult() <<< ');
}

console.log(' end) buyLottos(2000) : ' + buyLottos(5000));
console.log(' end) createLottos(2) : ' + createLottos(5));
console.log(' end) createLottoNumbers() : ' + createLottoNumbers());
console.log(' end) compareLottos() : ' + compareLottos());
console.log(' end) displayResult() : ' + displayResult());

