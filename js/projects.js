// Chips are ordered by potential impact. Projects sort by `rank` (5 = active and most important, 1 = least),
// never shown on the page; ties keep array order.
// Each gif is a small hotlinked animated WebP from Tenor or Giphy, shown on a little TV under its blurb;
// 'snow' draws static instead.
const CATEGORIES = [
  {id: 'learn', emoji: '🎓', label: 'Learn', blurb: 'Take chances, make mistakes, get messy!',
   gif: 'https://media1.tenor.com/m/UiMXab_UqQsAAAA1/ms-frizzle-magic-school-bus.webp'},
  {id: 'tools', emoji: '🛠️', label: 'Tools', blurb: 'I don’t think so, Tim.',
   gif: 'https://media1.tenor.com/m/nSVu8ROH8bUAAAA1/home-improvement-tim-allen.webp'},
  {id: 'tinkering', emoji: '🧪', label: 'Tinkering', blurb: 'Informal bricolage, not deep science.', gif: 'snow'},
  {id: 'fun', emoji: '🎪', label: 'Just for fun', blurb: 'Fun will now commence.',
   gif: 'https://i.giphy.com/media/VhpuNI1KejNbBGXCxS/100.webp'},
];

const PROJECTS = [
  {
    name: 'local-llm-elevator',
    rank: 5,
    icon: '🛗',
    cats: ['learn'],
    description: 'How deep can your machine go? A field guide to which open-weight LLMs fit on your Mac, gaming GPU, or data center cluster, drawn as floors in an elevator shaft.',
    live: 'https://niznik-dev.github.io/local-llm-elevator/',
    repo: 'https://github.com/niznik-dev/local-llm-elevator',
  },
  {
    name: 'slurm-gridlock',
    rank: 5,
    icon: '🚦',
    cats: ['learn', 'tools'],
    description: 'Why is my Slurm job still waiting? Run one command, load the report, and see your fairshare standing, each job’s place in line, and what you can do about it, all as highway traffic. Everything stays in your browser.',
    live: 'https://niznik-dev.github.io/slurm-gridlock/',
    repo: 'https://github.com/niznik-dev/slurm-gridlock',
  },
  {
    name: 'hpc-cluster-tour',
    rank: 4,
    icon: '🗄️',
    cats: ['learn'],
    description: 'What does an HPC cluster actually look like? Walk into the data hall, pick a rack, pull a node, and lift the lid, from CPU sockets and DIMMs to NVLink bridges and Grace Hopper. Princeton’s Della is the example throughout.',
    live: 'https://niznik-dev.github.io/hpc-cluster-tour/',
    repo: 'https://github.com/niznik-dev/hpc-cluster-tour',
  },
  {
    name: 'cruijff_kit',
    rank: 2,
    image: 'img/cruijff_kit_logo.png',
    cats: ['tools'],
    description: 'A Python toolkit for conducting social research with large language models on HPC clusters. Design experiments, scaffold configurations, submit jobs, and analyze results—all from a unified workflow.',
    repo: 'https://github.com/niznik-dev/cruijff_kit',
  },
  {
    name: 'llm-personas',
    rank: 5,
    icon: '🎭',
    cats: ['tools'],
    description: 'Reusable personas for LLM-assisted code review, research critique, and creative collaboration: characters with opinions and guardrails, built as a countermeasure to sycophancy.',
    repo: 'https://github.com/niznik-dev/llm-personas',
  },
  {
    name: 'giraffe-bench',
    rank: 4,
    icon: '🦒',
    cats: ['tinkering', 'fun'],
    description: 'A herd of three.js pages, each an LLM’s answer to the same prompt: animate a giraffe walking through a savannah. Some of them even have knees.',
    live: 'https://niznik-dev.github.io/giraffe-bench/',
    repo: 'https://github.com/niznik-dev/giraffe-bench',
  },
  {
    name: 'hot-dog-man',
    rank: 1,
    icon: '🌭',
    cats: ['fun'],
    description: 'A fully animated, CSS-powered hot dog person of extraordinary dignity and poise.',
    live: 'https://niznik-dev.github.io/hot-dog-man/',
    repo: 'https://github.com/niznik-dev/hot-dog-man',
  },
];
