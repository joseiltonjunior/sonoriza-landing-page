# Sonoriza Contacts

![Sonoriza Logo](https://i.ibb.co/hZ7QNB3/sonoriza.png)

Sonoriza Contacts landing page built with HTML, CSS, and vanilla JavaScript.

## Overview

The landing page currently covers:

- institutional presentation of the Sonoriza product
- public contact flow for artists, production teams, and partners
- product proof section with real app screenshots inside a device showcase
- manual catalog entry explanation for the pilot phase
- contact form with field validation and humanized error handling
- automatic local vs production API endpoint selection
- responsive layout for desktop and mobile
- static deploy compatibility with platforms like Vercel and GitHub Pages

## Stack

- HTML
- CSS
- JavaScript

## Requirements

- Any static hosting platform or local static server
- Sonoriza API running locally on `http://localhost:3333` for local contact testing

## Project structure

```text
.
├── assets/
│   └── screens/
│       ├── artista.jpeg
│       ├── explorar.jpeg
│       ├── favoritos.jpeg
│       ├── home.jpeg
│       ├── login.jpeg
│       ├── player.jpeg
│       └── README.md
├── index.html
└── README.md
```

## Local preview

### 1) Start a static server

Example with Python:

```bash
python -m http.server 3000
```

### 2) Open the landing page

```text
http://localhost:3000/
```

### 3) Run the API locally if you want to test the contact flow

The landing automatically uses:

- `http://localhost:3333/contacts` on `localhost` or `127.0.0.1`
- `https://api.appsonoriza.com.br/contacts` on production domains

## Contact form behavior

- all fields are required
- phone input is formatted for Brazilian numbers in the UI
- phone is sanitized before being sent to the API
- email format is validated on the client
- message requires at least 10 characters
- field-level validation errors are shown in Portuguese
- API validation responses are translated into more human-readable messages

## Showcase assets

The product showcase expects these files inside `assets/screens/`:

- `login.jpeg`
- `home.jpeg`
- `explorar.jpeg`
- `artista.jpeg`
- `player.jpeg`
- `favoritos.jpeg`

If you change file names or extensions, update the related `data-image` attributes in `index.html`.

## Deploy

The project is ready for static deployment on:

- Vercel
- GitHub Pages
- Netlify

For Vercel:

- import the repository
- keep `index.html` at the root
- keep `assets/` in the repository
- connect the custom domain after the first successful deploy

## Notes

- This is a static landing page, so there is no build step required.
- The landing was designed to keep the current implementation simple while the product matures.
- The current content is aligned with the Sonoriza pilot stage and manual catalog intake flow.

## Credits

- Developed by [Joseilton Junior](https://github.com/joseiltonjunior)
- Technical founder profile: a product-oriented full stack engineer with pragmatic software architecture and systemic platform vision.
