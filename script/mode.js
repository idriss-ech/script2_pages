const modeIcon = document.querySelectorAll('.modeIcon');
const modeCont = document.querySelectorAll('.modeCont');

let currentMode = localStorage.getItem('theme') || 'light';

// Appliquer le thème au chargement de la page
const applyTheme = (theme) => {
  // Ajouter ou mettre à jour l'attribut data-theme
  document.documentElement.setAttribute('data-theme', theme);

  // Mettre à jour les icônes
  modeIcon.forEach(item => {
    item.classList.toggle('fa-moon', theme === 'light');
    item.classList.toggle('fa-sun', theme === 'dark');
  });
};

applyTheme(currentMode);

// Basculer entre les modes
modeCont.forEach(item=> item.addEventListener('click', () => {
    console.log('click')
  currentMode = currentMode === 'light' ? 'dark' : 'light';
  localStorage.setItem('theme', currentMode);
  applyTheme(currentMode);
}));