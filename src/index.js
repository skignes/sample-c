// Simple DOM interaction for the sample site
const btn = document.getElementById('btn');
const title = document.getElementById('title');

btn.addEventListener('click', () => {
  const now = new Date().toLocaleTimeString();
  title.textContent = `Hello — clicked at ${now}`;
});

console.log('Simple website JS loaded');
