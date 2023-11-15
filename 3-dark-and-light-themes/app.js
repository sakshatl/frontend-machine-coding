// Set theme as per current theme in localStorage
const theme = localStorage.getItem('theme');
document.documentElement.setAttribute('data-theme', theme ? theme : "light");

// Function to toogle theme
function toogleTheme() {
  const currentTheme = localStorage.getItem('theme');
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", newTheme);
  document.documentElement.setAttribute('data-theme', newTheme);
}


const toogleThemeBtn = document.getElementById('toggle-theme-btn');
toogleThemeBtn.addEventListener('click', toogleTheme);