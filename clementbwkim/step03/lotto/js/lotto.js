/*로또를 구매하는 함수 buyLottos(){}

버튼을 클릭하면 해당 함수 buyLottos(){} 가 실행된다

매개변수에 들어가는 숫자가 로또를 살 수 있는 수
-> 한장에 1000원으로 책정

setLuckyNumber(length)*/

//금액 입력 후 구입가능한 로또 갯수 조회 함수
function calculating() {
  let paidAmount = document.querySelector(".paidAmount").value;
  let ownLottos = Math.floor(paidAmount / 1000);
  document.querySelector(".ownLottos").innerHTML = ownLottos;
}

let numbers = [];
for (let i = 1; i < 46; i++) {
  numbers.push(i);
}
console.log("numbers: ", numbers);

// function buyLottos(element) {
//   for (let k = 0; k < element.length; k++) {
//     let myNumbers = [];
//     //j 범위를 999로 해주는 이유는 랜덤번호를 계속 뽑아내기 위해서
//     for (let j = 1; j < 999; j++) {
//       let pickedNumbers = Math.floor(Math.random() * numbers.length) + 1;

//       //myNmbers에 pickedNumbers의 값이 없을 때 -1을 반환한다
//       if (myNumbers.indexOf(pickedNumbers) == -1) {
//         myNumbers.push(pickedNumbers);
//         //myNumbers 의 길이는 5로 제한
//         if (myNumbers.length == 5) {
//           break;
//         }
//       }
//     }
//     console.log("myNumbers: ", myNumbers);

//     //myNumbers 를 오름차순으로 정리
//     function sortNumber(a, b) {
//       return a - b;
//     }
//     myNumbers.sort(sortNumber);
//     console.log(myNumbers);
//   }
// }

let myNumbers = [];
//j 범위를 999로 해주는 이유는 랜덤번호를 계속 뽑아내기 위해서
for (let j = 1; j < 999; j++) {
  let pickedNumbers = Math.floor(Math.random() * numbers.length) + 1;

  //myNmbers에 pickedNumbers의 값이 없을 때 -1을 반환한다
  if (myNumbers.indexOf(pickedNumbers) == -1) {
    myNumbers.push(pickedNumbers);
    //myNumbers 의 길이는 5로 제한
    if (myNumbers.length == 6) {
      break;
    }
  }
}
console.log("myNumbers: ", myNumbers);

//myNumbers 를 오름차순으로 정리
function sortNumber(a, b) {
  return a - b;
}
myNumbers.sort(sortNumber);
console.log(myNumbers);
