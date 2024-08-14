document.addEventListener("DOMContentLoaded", function () {
  var header = document.getElementById("header");
  var mainContent = document.getElementById("main-content");

  var headerHeight = header.offsetHeight;
  mainContent.style.paddingTop = headerHeight + "px";
});
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const button = themeToggleButton;

  // Foydalanuvchi tanlovini localStorage'da saqlash
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.toggle("dark-mode", currentTheme === "dark");
    button.classList.toggle("dark-mode", currentTheme === "dark");
  }

  themeToggleButton.addEventListener("click", () => {
    // Rejimni o'zgartirish
    const isDarkMode = body.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode", isDarkMode);

    // Tanlovni localStorage'da saqlash
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleButton = document.getElementById("theme-toggle");
  const body = document.body;
  const button = themeToggleButton;

  // Foydalanuvchi tanlovini localStorage'da saqlash
  const currentTheme = localStorage.getItem("theme");
  if (currentTheme) {
    body.classList.toggle("dark-mode", currentTheme === "dark");
    button.classList.toggle("dark-mode", currentTheme === "dark");
  }

  themeToggleButton.addEventListener("click", () => {
    // Rejimni o'zgartirish
    const isDarkMode = body.classList.toggle("dark-mode");
    button.classList.toggle("dark-mode", isDarkMode);

    // Tanlovni localStorage'da saqlash
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  });
});
