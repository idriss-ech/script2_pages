const modeIcon = document.querySelectorAll('.modeIcon')
const modeCont = document.getElementById('modeCont')

let currentMode = 'light';
localStorage.setItem('theme', currentMode)
modeIcon.forEach(item => item.classList.add('fa-moon'))

modeCont.addEventListener('click', () => {
    currentMode == 'light' ? currentMode = 'dark' : currentMode = 'light'
    document.documentElement.classList.toggle('dark')
    localStorage.setItem('theme', currentMode)

    if (currentMode == 'light') {
        modeIcon.forEach(item => item.classList.remove('fa-sun'))
        modeIcon.forEach(item => item.classList.add('fa-moon'))

    }
    else {
        modeIcon.forEach(item => item.classList.remove('fa-moon'))
        modeIcon.forEach(item => item.classList.add('fa-sun'))

    }
})

