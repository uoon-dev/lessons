const content = document.querySelector("section");
//window.pageYOffset: 현재 페이지가 얼마나 스크롤됬는지 픽셀단위로 반환
let currentPos = window.pageYOffset;

const callDistort = function () {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.35;

  content.style.transform = "skewY(" + speed + "deg)";
  currentPos = newPos;
  requestAnimationFrame(callDistort);
};

callDistort();
