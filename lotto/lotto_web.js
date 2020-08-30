(() => {
  const priceInput = document.querySelector('.price-input');
  const myLottosBox = document.querySelector('.my-lottos');
  const luckyLottoBox = document.querySelector('.lucky-lotto');
  const purchaseButton = document.querySelector('.btn-purchase');
  const compareButton = document.querySelector('.btn-compare');
  const resultDisplayBox = document.querySelector('.result-display');
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

  purchaseButton.addEventListener('click', () => {
    buyLottos(priceInput.value);
    bindLottos(myLottosBox, myLottos);
  })

  compareButton.addEventListener('click', () => {
    compareLottos(myLottos);
  })

  const bindLottos = (el, lottos) => {
    el.innerHTML = lottos.map((lotto, i) => {
      return `
        <li class="my-lotto">${lotto.map(lottoNumber => {
          return `
            <span class="lotto-number">${lottoNumber}</span>
          `
        }).join('')}
      `;
    }).join('');
  }

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
    bindLottos(luckyLottoBox, [luckyLotto]);

    const winsTotalCount = Array.from(new Array(7)).map(() => 0);

    lottos.forEach((lotto, i) => {
      let wins = 0;
      lotto.forEach((lottoNumber, j) => {
        if (luckyLotto.includes(lottoNumber)) {
          wins = wins + 1;
          const selectedLottoEl = myLottosBox.children[i];
          const selectedLottoNumberEl = selectedLottoEl.children[j];
          selectedLottoNumberEl.classList.add('wins');
        }
      })

      winsTotalCount[wins] = winsTotalCount[wins] + 1;
    })

    displayResult(winsTotalCount);
  }

  const displayResult = (result) => {
    resultDisplayBox.innerHTML = `
      0개 일치 (0원)- ${result[0]}개 <br>
      1개 일치 (0원)- ${result[1]}개 <br>
      2개 일치 (0원)- ${result[2]}개 <br>
      3개 일치 (${winningAmount.win3}원)- ${result[3]}개 <br>
      4개 일치 (${winningAmount.win4}원)- ${result[4]}개 <br>
      5개 일치 (${winningAmount.win5}원)- ${result[5]}개 <br>
      6개 일치 (${winningAmount.win6}원)- ${result[6]}개 <br>
    `;
  }

  // buyLottos(10000000);
  // compareLottos(myLottos);  
})();