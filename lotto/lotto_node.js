/**
 * 로또를 구매하는 함수
 * 로또를 발행하는 함수
 * 로또를 비교하는 함수
 * 로또 통계를 출력하는 함수
 */
const winningAmount = {
  win3: 5000,
  win4: 50000,
  win5: 1500000,
  win6: 2000000000,
}
const lottoPrice = 1000;
const lottoNumberLimit = 45;
const lottoMaxLength = 6;
let myLottos;

const buyLottos = (inputPrice) => {
  const buyedLottoCount = Math.floor(inputPrice / lottoPrice);
  myLottos = createLottos(buyedLottoCount);
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
  const lottos = [];
  for (let i = 0; i < buyedLottoCount; i++) {
    lottos.push(createLotto());
  }

  return lottos;
}

const compareLottos = (lottos) => {
  const luckyLotto = createLotto();
  const winsTotalCount = Array.from(new Array(7)).map(() => 0);

  lottos.forEach(lotto => {
    let wins = 0;
    lotto.forEach(lottoNumber => {
      if (luckyLotto.includes(lottoNumber)) {
        wins = wins + 1;
      }
    })

    winsTotalCount[wins] = winsTotalCount[wins] + 1;
  })

  displayResult(winsTotalCount);
}

const displayResult = (result) => {
  console.log(`
    0개 일치 (0원)- ${result[0]}개
    1개 일치 (0원)- ${result[1]}개
    2개 일치 (0원)- ${result[2]}개
    3개 일치 (${winningAmount.win3}원)- ${result[3]}개
    4개 일치 (${winningAmount.win4}원)- ${result[4]}개
    5개 일치 (${winningAmount.win5}원)- ${result[5]}개
    6개 일치 (${winningAmount.win6}원)- ${result[6]}개  
  `)
}

buyLottos(10000000);
compareLottos(myLottos);