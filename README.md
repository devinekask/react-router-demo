# React + Vite + React Router

## Takeaways

- State lives in the `App.jsx`
- The Routes are defined in `App.jsx`, not in `main.jsx.`
  - Doing so, all the routes can access the state variables.
- In `main.jsx` We make use of a `HashRouter` instead of the default `BrowserRouter`
  - This is because of the way GitHub Pages handles requests. When one would refresh a route like `/edit/` or so, GitHub Pages expects a 'edit' file or directory. Since we're creating a SPA, there is only an `index.html`. There is no way to configure GitHub Pages to redirect everything to the `index.html`.
  When using a `HashRouter`, a `#` is prepended to the route, so every request is passed to the `index.html` file.
