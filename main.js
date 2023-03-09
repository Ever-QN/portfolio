const toggleBtn = document.getElementById("toggle-theme");
const body = document.body;

toggleBtn.addEventListener("click", function() {
  body.classList.toggle("dark-mode");
});