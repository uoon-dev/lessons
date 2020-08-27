/**
 * 로또를 구매하는 함수
 * 로또를 발행하는 함수
 * 로또를 비교하는 함수
 * 로또 통계를 출력하는 함수
 */

const lottoPrice = 1000;
const lottoNumberLimit = 45;
const lottoMaxLength = 6;


const buyLottos = (inputPrice) => {
  const buyedLottoCount = Math.floor(inputPrice / lottoPrice);
  createLottos(buyedLottoCount);
}

const generateRandomNumber = (max) => Math.floor(Math.random() * max);

const createLotto = () => {
  const lotto = [];
  const numberRange = [];
  for (let i = 0; i < lottoNumberLimit; i++) {
    numberRange.push(i + 1);
  }
  
  for (let i = 0; i < lottoMaxLength; i++) {
    const pickedNumber = numberRange.splice(generateRandomNumber(numberRange.length), 1)[0];
    lotto.push(pickedNumber);
  }

  return lotto;
}

const createLottos = (buyedLottoCount) => {
  // O 랜덤 숫자를 만드는 함수
  // O 중복 확인하는 로직 
  // O 구매한 것만큼만 발행
  // O 로또 길이만큼 만들기  
  const lottos = [];
  for (let i = 0; i < buyedLottoCount; i++) {
    lottos.push(createLotto());
  }

  console.log(lottos);
}

const compareLottos = () => {

}

const displayResult = () => {

}

buyLottos(2000);

// console.log(generateRandomNumber());
createLotto();