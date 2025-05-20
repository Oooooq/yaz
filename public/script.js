document.addEventListener('DOMContentLoaded', () => {
  const adminButton = document.getElementById('admin-button');
  adminButton.addEventListener('click', () => {
    fetch('/api/external')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.error('Error:', error));
  });
});
