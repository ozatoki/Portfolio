const toggleBtn = document.getElementById("toggleBtn");
toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("add");
});

const Nav = document.getElementById("Nav");
toggleBtn.addEventListener("click", () => {
  Nav.classList.toggle("open");
});
