const toggleSwitch = document.getElementsByClassName("dark-button")[0];
const currentTheme = localStorage.getItem('theme');

document.documentElement.setAttribute('data-theme', currentTheme);


function DarkMode() {
  if (localStorage.getItem('theme') == "light") {
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
  else {        
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  }    
}

toggleSwitch.addEventListener('change', DarkMode, false);
