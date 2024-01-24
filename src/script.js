// Mudar para o tema Dark
const html = document.querySelector("html");
const chk = document.getElementById("chk");
const ball = document.getElementById("ball");

chk.addEventListener("click", () => {
  html.classList.toggle("dark");
});
