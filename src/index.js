import menu from './menu.json';
import menuItems from './menuItems.hbs'
import './styles.css'

const refs = {
    body: document.querySelector('body'),
    menu: document.querySelector('.menu'),
    switchButton : document.querySelector('#theme-switch-toggle')
};

const setTheme = (checked) => {
    if (checked) {
        refs.body.classList.add('dark-theme');
        refs.body.classList.remove('light-theme');
    } else {
        refs.body.classList.remove('dark-theme');
        refs.body.classList.add('light-theme');
        
    }
};
const localSaveTheme = (checked) => {
    localStorage.setItem('theme', JSON.stringify({ isDark: checked }));
};

const loadTheme = () => {
    const { isDark }= JSON.parse(localStorage.getItem('theme'));

    setTheme(isDark);
    refs.switchButton.checked = isDark;
    
};

const changeButtonTheme = (e) => {
  setTheme(e.target.checked); localSaveTheme(e.target.checked);
};
const itemsDrawing = menu.map((items) => menuItems(items)).join('');

 loadTheme(); 
  
refs.menu.insertAdjacentHTML('beforeend', itemsDrawing)
refs.switchButton.addEventListener('change', changeButtonTheme);



  

    


