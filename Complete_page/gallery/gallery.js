function changeTheme(theme) {
  document.body.classList.remove('light');
  document.body.classList.remove('dark');
  document.body.classList.remove('green');
  document.body.classList.add(theme);
}