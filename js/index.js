const sections = ['home', 'cv', 'research'];

function route() {
  const section = location.hash.slice(1);
  const target = sections.includes(section) ? section : 'home';
  sections.forEach(s =>
    document.getElementById('content-' + s).classList.toggle('d-none', s !== target)
  );
}

window.addEventListener('hashchange', route);
route();
