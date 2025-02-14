const sidebar = document.getElementById('sidebar');
const openSidbarBtn = document.getElementById('openSidbarBtn')
const closeSidbarBtn = document.getElementById('closeSidbarBtn')

openSidbarBtn.addEventListener('click',openSidebar)
closeSidbarBtn.addEventListener('click', closeSidebar)

function closeSidebar(){
    sidebar.classList.remove('-translate-x-full')
    sidebar.classList.add('translate-x-full')
}
function openSidebar(){
    sidebar.classList.remove('translate-x-full')
    sidebar.classList.add('-translate-x-full')
}