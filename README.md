# Rajan Dev Singh – Portfolio

Static site (HTML, CSS, JavaScript, Bootstrap 5). No build step.

## Run locally
- Quick: double-click `index.html`.
- Better: `python -m http.server 8000` inside this folder, then open http://localhost:8000
- Internet is needed once for Google Fonts, Bootstrap and icons (CDN).

## Customize
- **All content** (email, GitHub, LinkedIn, skills, education, projects, experience): top of `js/script.js`.
- **Colours / fonts**: `:root` tokens at the top of `css/style.css`.
- **Images**: put `profile.jpg`, `project1.jpg`, `project2.jpg`, `project3.jpg` in `images/`. Placeholders show until then.
- **Resume**: save your PDF as `resume.pdf` in this folder.
- **Add a project**: copy one object in the `PROJECTS` array.

## Connect the contact form
1. **Formspree (easiest):** create a form at formspree.io, copy its ID, uncomment the `fetch` block in `js/script.js` and replace `YOUR_ID`.
2. **EmailJS:** add their script tag and call `emailjs.sendForm(...)` in the same place.
3. **Own backend:** POST the form data to a Flask route (`/contact`) and send mail with `smtplib` or Flask-Mail.
Until one is set up, the form opens the visitor's email app (`mailto:`).

## Deploy
Upload the folder to GitHub Pages, Netlify or Vercel.
