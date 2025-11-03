// Simple DOM interaction for the sample site
// Guard DOM access so this file is safe to `require`/run under Node.
if (typeof document !== 'undefined' && document.getElementById) {
  const btn = document.getElementById('btn');
  const title = document.getElementById('title');

  if (btn && title) {
    btn.addEventListener('click', () => {
      const now = new Date().toLocaleTimeString();
      title.textContent = `Hello — clicked at ${now}`;
    });
  } else {
    // Elements not present in the current document (for example when
    // this module is required by a Node script). Fail quietly.
    console.warn('src/index.js: #btn or #title not found in document');
  }
} else {
  // Running in Node (no DOM) — do nothing that accesses `document`.
}

console.log('Simple website JS loaded');
