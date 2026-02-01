const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const result = document.getElementById("result");

const buttonsArea = document.querySelector(".buttons");

document.addEventListener("mousemove", (e) => {
  const rect = noBtn.getBoundingClientRect();

  const dx = e.clientX - (rect.left + rect.width / 2);
  const dy = e.clientY - (rect.top + rect.height / 2);
  const distance = Math.sqrt(dx * dx + dy * dy);

  if (distance < 120) {
    const angle = Math.atan2(dy, dx);
    const moveX = Math.cos(angle) * -200;
    const moveY = Math.sin(angle) * -200;

    noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
  }
});

noBtn.addEventListener("click", () => {
  alert("Wrong choice 😌");
});

yesBtn.addEventListener("click", () => {
  result.classList.remove("hidden");
});