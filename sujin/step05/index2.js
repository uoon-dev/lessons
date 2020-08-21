function setLuckyNumbers() {
    var luckyNumbersArr = [];
    var pickNumbersArr = [];
    var pickNumbers = 6;
    var pickCnt = 0;

    while (luckyNumbersArr.length < pickNumbers) {
        var getNumbers = parseInt(Math.random() * 45) + 1;
        if (luckyNumbersArr.indexOf(getNumbers) == -1) {
            luckyNumbersArr.push(getNumbers);
        }
    }

    while (pickNumbersArr.length < pickNumbers) {
        var getNumbers = parseInt(Math.random() * 45) + 1;
        if (pickNumbersArr.indexOf(getNumbers) == -1) {
            pickNumbersArr.push(getNumbers);
        }
    }

    console.log('pickArr : ' + pickNumbersArr);
    console.log('luckyArr : ' + luckyNumbersArr);

    for (var j = 0; j < pickNumbers; j++) {
        for (var k = 0; k < pickNumbers; k++) {
            if (luckyNumbersArr[j] == pickNumbersArr[k]) {
                if (j == pickNumbers) {
                    pickCnt++;
                }
            }
        }
    }
    if (pickCnt == 6) {
        alert("2000000000원");
    }
    else if (pickCnt == 5) {
        alert("1500000원");
    }
    else if (pickCnt == 4) {
        alert("50000원");
    }
    else if(pickCnt == 3) {
        alert("5000원");
    }else {
        alert("fail");
    }
}