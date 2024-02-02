const modeIcon = document.getElementById('mode_icon');

modeIcon.addEventListener('click', (e) => {
  const form = document.getElementById('login_form');

  if (modeIcon.classList.contains('fa-moon')) {
    modeIcon.classList.remove('fa-moon');
    modeIcon.classList.add('fa-sun');

    form.classList.add('dark');
    return;
  }

  modeIcon.classList.add('fa-moon');
  modeIcon.classList.remove('fa-sun');
  form.classList.remove('dark');
});
