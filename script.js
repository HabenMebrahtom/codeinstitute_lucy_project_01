const openIcon = document.getElementById('open');
const closeIcon = document.getElementById('close'); 
const sidebar = document.getElementById('sidebar-container');


openIcon.onclick = function() {
    sidebar.style.display = 'block';

};

closeIcon.onclick = function() {
    sidebar.style.display = 'none';
};