/*
 당첨 번호 생성할 Array
 당첨 번호 배열 순서 
 로또 번호 생성 숫자

*/
function setLuckyNumbers() {
  let luckyNumbersArray = Array(6);
  let numbersIdx = 0;
  let luckyNumbers = 0;
  let winnerNumbers = document.querySelector(".winner-numbers");

  while (luckyNumbersArray.length < 7) {
    luckyNumbers = Math.floor(Math.random() * 45) + 1;
    if (luckyNumbersArray.indexOf(luckyNumbers) == -1) {
      luckyNumbersArray[numbersIdx] = luckyNumbers;
      numbersIdx++;
    }
  }

  winnerNumbers.innerHTML =
    "<span>" +
    luckyNumbersArray[0] +
    "</span><span>" +
    luckyNumbersArray[1] +
    "</span><span>" +
    luckyNumbersArray[2] +
    "</span><span>" +
    luckyNumbersArray[3] +
    "</span><span>" +
    luckyNumbersArray[4] +
    "</span><span>" +
    luckyNumbersArray[5] +
    "</span>";
}

function buyLottos() {
  //구매한 로또 수에 대한 로직
  let paid = document.querySelector(".paidAmount").value; //지불한 금액
  let ownLottos = Math.floor(paid / 1000); //구매한 로또 갯수
  document.querySelector(".own-lottos").innerHTML = ownLottos; //구매한 로또 수를 html에 출력

  for (let i = 0; i < ownLottos; i++) {
    generatingNumbers();
  }
}

//로또 번호 추출하는 로직
function generatingNumbers() {
  let clientNumberArray = []; //고객 번호 배열
  let cNumbersIdx = 0; //고객 번호 인덱스
  let clientNumbers = 0; //고객의 행운의 숫자

  while (clientNumberArray.length < 7) {
    clientNumbers = Math.floor(Math.random() * 45) + 1;
    if (clientNumberArray.indexOf(clientNumbers) == -1) {
      clientNumberArray[cNumbersIdx] = clientNumbers;
      cNumbersIdx++;
    }
  }

  let ownLottoDiv = document.createElement("div");
  ownLottoDiv.classList.add("own-lottos");
  let ownLottoSpot = document.querySelector(".own-lottos-spot");
  ownLottoSpot.appendChild(ownLottoDiv);
  ownLottoDiv.innerHTML =
    "<span>" +
    clientNumberArray[0] +
    "</span><span>" +
    clientNumberArray[1] +
    "</span><span>" +
    clientNumberArray[2] +
    "</span><span>" +
    clientNumberArray[3] +
    "</span><span>" +
    clientNumberArray[4] +
    "</span><span>" +
    clientNumberArray[5] +
    "</span>";
}
