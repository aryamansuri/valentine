const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

noBtn.addEventListener("mouseover", () => {
  const x = Math.random() * 500 - 250;
  const y = Math.random() * 300 - 150;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});

noBtn.addEventListener("click", () => {
  alert("Wrong choice 😌");
});

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
});