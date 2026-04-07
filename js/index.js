sections = ['home', 'cv', 'research'];

function hideAll() {
  sections.forEach(e => document.getElementById('content-' + e).classList.add('d-none'));
}

function show(sectionName) {
  hideAll();
  document.getElementById('content-' + sectionName).classList.remove('d-none');
}