# Simple Website

This repository is a minimal static website served by a tiny Node static server.

Run locally

1. Install (no dependencies for the server):

```bash
# install dependencies if you add any later; not required now
npm install
```

2. Start the server:

```bash
npm start
```

Open http://localhost:8080 (or $PORT if set) in your browser.

What you'll find

- `index.html` — the page
- `styles.css` — basic styles
- `src/index.js` — client-side JS (safe if required in Node)
- `server.js` — small Node static file server (no external deps)

Notes

- The server serves files from the repository root. By default it listens on port 8080.
- Use `PORT=3000 npm start` to run on a different port.

