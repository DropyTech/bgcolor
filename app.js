const btn = document.querySelector("button");
const random = (number) => {
  return Math.floor(Math.random() * (number + 1));
};
btn.onclick = function () {
  const chngCol =
    "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
  document.body.style.backgroundColor = chngCol;
};
