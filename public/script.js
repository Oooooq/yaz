document.addEventListener('keydown', function(event) {
  if (event.key === '=') {
    const password = prompt('Enter password for admin access:');
    fetch('/admin/auth', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ keybind: '=', password: password })
    })
    .then(response => {
      if (response.ok) {
        window.location.href = '/public/admin.html';
      } else {
        alert('Unauthorized access');
      }
    });
  }
});
