const open = document.getElementById('open');
const close = document.getElementById('close'); 
const sidebar = document.getElementById('sidebar-container');


open.onclick = () => {
    sidebar.style.display = 'block';

}

close.onclick = () => {
    sidebar.style.display = 'none'
}