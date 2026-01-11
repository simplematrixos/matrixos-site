/* app/globals.css */

@import "tailwindcss";

/* -------------------------------------------------
   Base variables
-------------------------------------------------- */

:root {
  --background: #050607;
  --foreground: #ffffff;

  --font-sans: var(--font-geist-sans);
  --font-mono: var(--font-geist-mono);
}

/* -------------------------------------------------
   Dark mode (explicit, deterministic)
-------------------------------------------------- */

@media (prefers-color-scheme: dark) {
  :root {
    --background: #050607;
    --foreground: #ffffff;
  }
}

/* -------------------------------------------------
   Global reset / base
-------------------------------------------------- */

html,
body {
  margin: 0;
  padding: 0;
  min-height: 100%;
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-sans), system-ui, -apple-system, Segoe UI, Roboto,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* -------------------------------------------------
   Utility baseline (keep minimal)
-------------------------------------------------- */

* {
  box-sizing: border-box;
}
