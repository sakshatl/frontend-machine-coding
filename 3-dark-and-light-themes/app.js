// Set current theme
const theme = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', theme ? theme : "light");

// Function to handle toggle theme
function toogleTheme() {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
}

// Event Listener
const toogleThemeBtn = document.getElementById('toggle-theme-btn');
toogleThemeBtn.addEventListener('click', toogleTheme);