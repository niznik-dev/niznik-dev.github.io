const sections = ['home', 'cv', 'projects'];
const aliases = {research: 'projects'};

let snowTimer = null;

function startSnow() {
  if (snowTimer) return;
  const canvas = document.getElementById('project-snow');
  const ctx = canvas.getContext('2d');
  const frame = ctx.createImageData(canvas.width, canvas.height);
  snowTimer = setInterval(() => {
    for (let i = 0; i < frame.data.length; i += 4) {
      frame.data[i] = frame.data[i + 1] = frame.data[i + 2] = Math.random() * 255;
      frame.data[i + 3] = 255;
    }
    ctx.putImageData(frame, 0, 0);
  }, 60);
}

function stopSnow() {
  clearInterval(snowTimer);
  snowTimer = null;
}

function renderProjects(filter) {
  const byId = Object.fromEntries(CATEGORIES.map(c => [c.id, c]));
  const active = byId[filter] ? filter : 'all';

  const chip = (id, text) =>
    `<a class="project-chip" href="#projects${id === 'all' ? '' : '/' + id}"${id === active ? ' aria-current="true"' : ''}>${text}</a>`;
  document.getElementById('project-filters').innerHTML =
    chip('all', 'All') + CATEGORIES.map(c => chip(c.id, `${c.emoji} ${c.label}`)).join('');

  const blurb = document.getElementById('project-blurb');
  blurb.textContent = byId[active]?.blurb || '';
  blurb.hidden = !blurb.textContent;

  // The TV is decorative (each gif repeats its blurb as a caption), so it's skipped entirely for reduced motion.
  const gifSrc = matchMedia('(prefers-reduced-motion: reduce)').matches ? '' : byId[active]?.gif;
  const isSnow = gifSrc === 'snow';
  const gif = document.getElementById('project-gif');
  document.getElementById('project-tv').hidden = !gifSrc;
  document.getElementById('project-snow').hidden = !isSnow;
  gif.hidden = !gifSrc || isSnow;
  if (gifSrc && !isSnow) gif.src = gifSrc; else gif.removeAttribute('src');
  if (isSnow) startSnow(); else stopSnow();

  document.getElementById('project-cards').innerHTML = PROJECTS
    .filter(p => active === 'all' || p.cats.includes(active))
    .sort((a, b) => (b.rank ?? 0) - (a.rank ?? 0))
    .map(p => {
      const art = p.image
        ? `<img src="${p.image}" alt="" class="project-icon" width="64" height="64">`
        : `<span class="project-icon" aria-hidden="true">${p.icon}</span>`;
      const tags = p.cats.map(id => `<a class="project-tag" href="#projects/${id}">${byId[id].emoji} ${byId[id].label}</a>`).join('');
      const live = p.live ? `<a href="${p.live}" target="_blank" rel="noopener" class="card-link">Live ↗</a>` : '';
      return `<article class="project-card">
        <div class="project-head">${art}<div><h3 class="card-title">${p.name}</h3><div class="project-tags">${tags}</div></div></div>
        <p class="card-description">${p.description}</p>
        <div class="project-links">${live}<a href="${p.repo}" target="_blank" rel="noopener" class="card-link">GitHub →</a></div>
      </article>`;
    }).join('');
}

function route() {
  const [raw, sub] = location.hash.slice(1).split('/');
  const section = aliases[raw] || raw;
  const target = sections.includes(section) ? section : 'home';
  sections.forEach(s =>
    document.getElementById('content-' + s).classList.toggle('d-none', s !== target)
  );
  if (target === 'projects') renderProjects(sub); else stopSnow();
}

// A different TV on each page load; ?tv=crt|gamegear pins one for previewing.
const TV_STYLES = ['crt', 'gamegear'];
const pinnedTv = new URLSearchParams(location.search).get('tv');
const tv = document.getElementById('project-tv');
tv.dataset.style = TV_STYLES.includes(pinnedTv) ? pinnedTv : TV_STYLES[Math.floor(Math.random() * TV_STYLES.length)];

// Mouse-only easter egg: the Game Gear links to the real TV Tuner (the TV itself stays decorative).
if (tv.dataset.style === 'gamegear') {
  tv.title = 'The SEGA Game Gear TV Tuner';
  tv.addEventListener('click', () => window.open('https://segaretro.org/TV_Tuner', '_blank', 'noopener'));
}

window.addEventListener('hashchange', route);
route();
