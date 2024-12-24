document.querySelector('.button').addEventListener('click', () => {
  document.getElementById('sidebar').classList.toggle('hidden');
});

document.getElementById('close-sidebar').addEventListener('click', () => {
  document.getElementById('sidebar').classList.add('hidden');
});

function toggleSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.toggle('open');
}
