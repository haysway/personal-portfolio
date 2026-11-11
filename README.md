# Hayden Swain-Schmit | Portfolio

A personal portfolio built with React and Vite. It introduces me, shares my education and experience, and showcases projects in a browsable gallery.

## Pages

- **Home** — introduction, GitHub profile link, and downloadable resume.
- **About** — education, relevant coursework, technical skills, and work experience.
- **Gallery** — project list and individual project detail pages.

The gallery loads project data from Firebase Realtime Database.

## Run locally

Install dependencies and start the Vite development server:

```sh
npm install
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available commands

```sh
npm run dev      # Start the development server
npm run build    # Create a production build in dist/
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Portfolio assets

- The home page profile image is `src/assets/me.jpg`.
- The home page imports the downloadable resume from `src/assets/resume.pdf`.

Keep the resume at that path (or update the import in `src/pages/HomePage.jsx` if you move it).
