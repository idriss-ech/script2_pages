const sidebar = document.getElementById('sidebar');

function closeSidebar(){
    sidebar.classList.remove('-translate-x-full')
    sidebar.classList.add('translate-x-full')
}
function openSidebar(){
    sidebar.classList.remove('translate-x-full')
    sidebar.classList.add('-translate-x-full')
}