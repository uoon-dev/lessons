function buyLottos() {
    var cost = document.querySelector('.cost').value;
    var getLottos = cost / 1000;
    var getLottosText = document.querySelector('.get-lottos');
    getLottosText.innerHTML = '총 ' + getLottos + '개를 구입했습니다.';

    if (cost < 1000) {
        getLottosText.innerHTML = '최소 구매단위는 1000원 입니다.'
    }

    for (var i = 0; i < getLottos; i++) {
        pickNumbers();
    }
}

function setLuckyNumbers() {
    var luckyNumbersArr = [];
    // var numbers = document.querySelector('.numbers');
    var pickNumbersMaxLen = 6;
    var resultNumbers = document.querySelector('.result-numbers');
    var button = document.querySelector('#lucky-numbers-button');

    while (luckyNumbersArr.length < pickNumbersMaxLen) {
        var getNumbers = parseInt(Math.random() * 45) + 1;
        if (luckyNumbersArr.indexOf(getNumbers) == -1) {
            luckyNumbersArr.push(getNumbers);
        }
    }


    // console.log('pickArr : ' + pickNumbers);
    console.log('luckyArr : ' + luckyNumbersArr);
    resultNumbers.innerHTML =
        '<h4>Lucky Numbers</h4>'
        + '<p><span>' + luckyNumbersArr[0] + '</span>'
        + '<span>' + luckyNumbersArr[1] + '</span>'
        + '<span>' + luckyNumbersArr[2] + '</span>'
        + '<span>' + luckyNumbersArr[3] + '</span>'
        + '<span>' + luckyNumbersArr[4] + '</span>'
        + '<span>' + luckyNumbersArr[5] + '</span></p>';

        button.setAttribute("disabled","true");
        button.setAttribute("style","background-color: #ddd; color: #333; border-color: #333; cursor: auto;")

}

function pickNumbers(){
    var pickNumbersArr = [];
    var pickNumbersMaxLen = 6;
    var buyNumbers = document.querySelector('.buy-numbers');
    var buyNumbersObj = document.createElement('div');
    buyNumbersObj.classList.add('buy-numbers-object');
    buyNumbers.appendChild(buyNumbersObj);

    while (pickNumbersArr.length < pickNumbersMaxLen) {
        var getNumbers = parseInt(Math.random() * 45) + 1;
        if (pickNumbersArr.indexOf(getNumbers) == -1) {
            pickNumbersArr.push(getNumbers);
        }
    }

    console.log('pickMethodArr : ' + pickNumbersArr);
    buyNumbersObj.innerHTML =
        '<h4>Lotto</h4>'
        + '<p class="numbers"><span>' + pickNumbersArr[0] + '</span>'
        + '<span>' + pickNumbersArr[1] + '</span>'
        + '<span>' + pickNumbersArr[2] + '</span>'
        + '<span>' + pickNumbersArr[3] + '</span>'
        + '<span>' + pickNumbersArr[4] + '</span>'
        + '<span>' + pickNumbersArr[5] + '</span></p>';
}