function buyLottos() {
    var cost = document.querySelector('.cost').value;
    var minPrice = 1000;
    var lottoCnt = cost / minPrice;
    var lottoCntText = document.querySelector('.lotto-numbers-text');
    lottoCntText.innerHTML = '총 ' + lottoCnt + '개를 구입했습니다.';

    if (cost < minPrice) {
        lottoCntText.innerHTML = '최소 구매단위는 ' + minPrice +'원 입니다.'
    }

    for (var i = 0; i < lottoCnt; i++) {
        pickNumbers();
    }
}

function setLuckyNumbers() {
    var luckyNumbersArr = [];
    var luckyNumberText = "";
    // var numbers = document.querySelector('.numbers');
    var pickNumbersMaxLen = 6;
    var resultNumbers = document.querySelector('.result-numbers');
    var button = document.querySelector('.lucky-numbers-button');

    while (luckyNumbersArr.length < pickNumbersMaxLen) {
        var getNumbers = parseInt(Math.random() * 45) + 1;
        if (luckyNumbersArr.indexOf(getNumbers) == -1) {
            luckyNumbersArr.push(getNumbers);
        }
    }

    for(i = 0; i < luckyNumbersArr.length; i++){
        luckyNumberText += '<span>' + luckyNumbersArr[i] + '</span>';
    }
    
    console.log('luckyNumberText : ' + luckyNumberText);
    console.log('luckyArr : ' + luckyNumbersArr);
    resultNumbers.innerHTML =
        '<h4>Lucky Numbers</h4>'
        + '<p>' + luckyNumberText +'</p>';

    button.classList.add('button-disabled');
    button.setAttribute("disabled","true");

}

function pickNumbers(){
    var pickNumbersArr = [];
    var pickNumbersMaxLen = 6;
    var buyNumbers = document.querySelector('.lotto-numbers-ball');
    var buyNumbersObj = document.createElement('div');
    buyNumbersObj.classList.add('lotto-numbers-ball-object');
    buyNumbers.appendChild(buyNumbersObj);

    while (pickNumbersArr.length < pickNumbersMaxLen) {
        var getNumbers = parseInt(Math.random() * 45) + 1;
        console.log('pickNumbersArr : ' + pickNumbersArr);
        console.log('getNumbers : ' + getNumbers);
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