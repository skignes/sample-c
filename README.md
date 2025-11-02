# Simple Website

This is a minimal static website scaffold (HTML + CSS + JS) suitable for demos and learning.

How to run

- Option A (recommended, no global install):

  Run via npx (uses http-server temporarily):

  ```bash
  cd web-app
  npm start
  ```

  Then open http://localhost:8080 in your browser.

- Option B (install server globally):

  ```bash
  npm install -g http-server
  cd web-app
  http-server -p 8080
  ```

What you'll find

- `index.html` — the page
- `styles.css` — basic styles
- `src/index.js` — tiny JS demo that updates the heading on click

Notes

- The `start` script uses `npx http-server` so no extra install is strictly necessary.
