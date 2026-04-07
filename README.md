# Vishwaja Deshmukh — Personal Website

A clean, monochrome personal portfolio website with a separate frontend and backend.

## Project Structure

```
personal-website/
├── frontend/               # Static site (HTML/CSS/JS)
│   ├── index.html          # Main page with all sections
│   ├── css/
│   │   └── style.css       # Monochrome design system
│   ├── js/
│   │   └── main.js         # Interactions, animations, form
│   └── assets/             # Images, favicons (add your own)
│
└── backend/                # Express.js API
    ├── server.js           # App entry point
    ├── package.json
    └── routes/
        └── contact.js      # POST /api/contact
```

## Running the site

### Frontend (no server needed)
Just open `frontend/index.html` in your browser.

For a local dev server (recommended):
```bash
cd frontend
npx serve .
# Visit http://localhost:3000
```

### Backend (optional — enables contact form)
```bash
cd backend
npm install
```

Create a `.env` file or export environment variables:
```
EMAIL_USER=vishwajadeshmukh0826@gmail.com
EMAIL_PASS=your_gmail_app_password
```

> **Get a Gmail App Password:** Google Account → Security → 2-Step Verification → App passwords

```bash
node server.js
# Runs on http://localhost:3001
```

## Customisation

| What | Where |
|------|-------|
| GitHub URL | `frontend/index.html` → search `github.com/vishwaja-deshmukh` |
| LinkedIn URL | `frontend/index.html` → search `linkedin.com/in/vishwaja-deshmukh` |
| Colours / fonts | `frontend/css/style.css` → `:root` block |
| Add new skill | `frontend/index.html` → `.skill-chips` div |
| Add new project | `frontend/index.html` → `.projects-grid` section |
