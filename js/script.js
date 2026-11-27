/* ==========================================================
   EDIT YOUR DETAILS HERE – everything on the page uses this
   ========================================================== */
const CONFIG = {
  shortName: "MY PORTFOLIO PAGE : RAJAN",
  email: "rajandeviitm6204@gmail.com",               // TODO: add your email
  github: "https://github.com/24f2003258",    // TODO: add GitHub URL
  linkedin: "https://www.linkedin.com/in/rajandevsingh6204", // TODO: add LinkedIn URL
  //cgpa: "7",
  typed: ["Python Programming","Web Development","Data Science","Artificial Intelligence","Machine Learning","Software Development"]
};

/* ---------- Skills: add/remove items freely ---------- */
const SKILLS = [
  {title:"Programming",icon:"bi-code-slash",items:["Python","Java","C","SQL"]},
  {title:"Web Development",icon:"bi-globe2",items:["HTML","CSS","JavaScript","Flask","SQLAlchemy"]},
  {title:"Database",icon:"bi-database",items:["","MySQL"]},
  {title:"Core CS",icon:"bi-cpu",items:["Data Structures & Algorithms","OOP","DBMS","Operating Systems"]},
  {title:"Data Science",icon:"bi-bar-chart-line",items:["NumPy","Pandas","Data Visualization"]},
  {title:"Tools",icon:"bi-tools",items:["Git","GitHub","VS Code"]}
];

/* ---------- Education: fill in the placeholders ---------- */
const EDUCATION = [
  {degree:"B.Tech Degree in CSE(CYBERSECURITY)",school:"DARBHANGA COLLEGE OF ENGINEERING , DARBHANGA ,BIHAR",period:"2023 – 2027",note:"CGPA: 8.14"},
  {degree:"BS Degree in Data Science and Applications",school:"IIT Madras",period:"MAY 2024 – APR 2028",note:"CGPA: 7"}
];

/* ---------- Projects: copy a block to add more ---------- */
const PROJECTS = [
  {title:"Examination Management Portal",img:"images/project1.png",icon:"bi-journal-check",
   points:["Flask-based examination management application","Admin, examiner and student roles","Exam scheduling, slot booking and evaluation management"],
   tech:["Python","Flask","SQLAlchemy","HTML","CSS"],github:"#",demo:"#"},
  {title:"Trekking Management System",img:"images/project2.png",icon:"bi-compass",
   points:["Web application for managing trekking activities","Admin, staff and user dashboards","Trek management, booking and participant management"],
   tech:["Python","Flask","SQLAlchemy","HTML","CSS"],github:"https://github.com/24f2003258/Trekking-Management-Application.git",demo:"#"},
  {title:"Hospital Management System",img:"images/project3.png",icon:"bi-hospital",
   points:["Web-based hospital management application","Patient, doctor and admin dashboards","Appointment, laboratory and hospital management"],
   tech:["Python","Flask","SQLite","HTML","CSS","Bootstrap"],github:"https://github.com/24f2003258/HospitalManagementSystem.git",demo:"#"}
];

/* ---------- Experience: replace placeholders with real entries ---------- */
/* ---------- Experience: paste over the EXPERIENCE array in js/script.js ---------- */
const EXPERIENCE = [
  {title:"Internships",icon:"bi-briefcase",
   text:[
   "1) Cyber Security ,XpertIntern, Virtual Internship • Nov 2026 - Present (1 month) ",
   "2) Cyber Security ,XpertIntern, Patna ,Internship • Oct 2026 - Nov 2026 (1 month)",
  "3) Python Programming Invigo Infotech, Purnia ,Internship • Jun 2025 - Jun 2025 (1 month)"
]},
  {title:"Certifications",icon:"bi-patch-check",
  text:[
    "1) The Joy of Computing using Python, NPTEL Elite, 88% (Jul–Oct 2026).",
    "2) Programming, Data Structures and Algorithms using Python, NPTEL Elite, 75% (Jan–Mar 2026)",
    "3)Spoken Tutorial IIT Bombay. :>> Advanced C++: 100% (Mar 2025) ; Linux:  67.78% (Oct 2024) ; C: 52.50% (Feb 2024)"]},
  {title:"Trainings & Courses ",icon:"bi-people",text:[
    "1) Iot Training IHUB DIVYASAMPARK ,IIT ROORKEE, Darbhanga ,Aug 2025 - Oct 2025 ,40 Hours Skill Devlopement  program on Internet Of Things.",
    "2)Robotics Training AKURAM ROBO PVT. LTD, Darbhanga ,May 2024 - May 2024 ,Gained hands-on experience in Arduino programming by learning coding syntax, functions, and hardware integration to develop a Wi-Fi-controlled robotic car.",
    "3)Bootcamp on Drone  and Allied Technology under the project 'Capacity Building for Human Resource Development in Drone and Related Technology'  conducted by CDAC PATNA and secured with Grade 'A' ,Mar 2024 - Mar 2024"]},

  {title:"Academic Accomplishments",icon:"bi-mortarboard",
    text:[
    "1) The Joy of Computing using Python, NPTEL Elite, 88% (Jul–Oct 2026).",
    "2) Programming, Data Structures and Algorithms using Python, NPTEL Elite, 75% (Jan–Mar 2026)",
    "3)Spoken Tutorial IIT Bombay. :>> Advanced C++: 100% (Mar 2025) ; Linux:  67.78% (Oct 2024) ; C: 52.50% (Feb 2024)"]}
    ]

/* ========================== RENDERING ========================== */
const $ = (s, r = document) => r.querySelector(s);
const esc = t => String(t).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const tags = a => `<ul class="tags">${a.map(t => `<li>${esc(t)}</li>`).join("")}</ul>`;

// Personal info binding
document.querySelectorAll("[data-bind]").forEach(el => el.textContent = CONFIG[el.dataset.bind]);
document.querySelectorAll("[data-link]").forEach(a => {
  const k = a.dataset.link;
  if (k === "email") a.href = "mailto:" + CONFIG.email;
  else { a.href = CONFIG[k]; a.target = "_blank"; a.rel = "noopener"; }
});
$("#year").textContent = new Date().getFullYear();

// Marquee strip (duplicated for a seamless loop)
const stripHTML = ["Python","Flask","SQL","Data Science","Web Development","AI & ML"]
  .map(t => `<span>${t}</span><i class="bi bi-stars"></i>`).join("");
$("#strip").innerHTML = stripHTML + stripHTML;

$("#skillsGrid").innerHTML = SKILLS.map(s =>
  `<article class="card-x reveal"><h3><i class="bi ${s.icon}"></i>${esc(s.title)}</h3>${tags(s.items)}</article>`).join("");

$("#eduList").innerHTML = EDUCATION.map(e =>
  `<article class="card-x reveal"><h3>${esc(e.degree)}</h3><p class="meta">${esc(e.school)} · ${esc(e.period)}</p><p class="placeholder">${esc(e.note)}</p></article>`).join("");

$("#projectGrid").innerHTML = PROJECTS.map(p => `
  <article class="card-x project reveal">
    <div class="thumb"><img src="${p.img}" alt="${esc(p.title)} screenshot" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('i'),{className:'bi ${p.icon}'}))"></div>
    <div class="body"><h3>${esc(p.title)}</h3>
      <ul class="pts">${p.points.map(x => `<li>${esc(x)}</li>`).join("")}</ul>${tags(p.tech)}
      <div class="links"><a class="btn-outline" href="${p.github}" target="_blank" rel="noopener"><i class="bi bi-github"></i> GitHub</a>

  </article>`).join("");

$("#expGrid").innerHTML = EXPERIENCE.map(x =>
  `<article class="card-x reveal"><h3><i class="bi ${x.icon}"></i>${esc(x.title)}</h3><p class="placeholder">${esc(x.text)}</p></article>`).join("");

/* ========================== BEHAVIOUR ========================== */
// Typing animation
let wi = 0, ci = 0, del = false;
(function type() {
  const w = CONFIG.typed[wi];
  ci += del ? -1 : 1;
  $("#typed").textContent = w.slice(0, ci);
  let d = del ? 40 : 90;
  if (!del && ci === w.length) { del = true; d = 1400; }
  else if (del && ci === 0) { del = false; wi = (wi + 1) % CONFIG.typed.length; d = 300; }
  setTimeout(type, d);
})();

// Theme toggle (remembered in localStorage)
const root = document.documentElement, tbtn = $("#themeToggle");
function setTheme(t) {
  root.dataset.theme = t;
  tbtn.innerHTML = `<i class="bi ${t === "dark" ? "bi-sun" : "bi-moon-stars"}"></i>`;
  try { localStorage.setItem("theme", t); } catch (e) {}
}
let saved = "dark"; try { saved = localStorage.getItem("theme") || "dark"; } catch (e) {}
setTheme(saved);
tbtn.addEventListener("click", () => setTheme(root.dataset.theme === "dark" ? "light" : "dark"));

// Scroll reveal
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .15 });
document.querySelectorAll(".reveal").forEach(el => io.observe(el));

// Active nav link highlight
const links = [...document.querySelectorAll(".nav-link")];
const spy = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle("active", l.getAttribute("href") === "#" + e.target.id));
}), { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => spy.observe(s));

// Close mobile menu after clicking a link
links.forEach(l => l.addEventListener("click", () => {
  const m = $("#menu"); if (m.classList.contains("show")) bootstrap.Collapse.getInstance(m)?.hide();
}));

// Back-to-top
const toTop = $("#toTop");
addEventListener("scroll", () => toTop.classList.toggle("show", scrollY > 500), { passive: true });
toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

// Contact form validation
const form = $("#contactForm"), statusEl = $("#formStatus");
const rules = {
  name: v => v.trim().length >= 2 || "Enter your name (at least 2 characters).",
  email: v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || "Enter a valid email address.",
  subject: v => v.trim().length >= 3 || "Enter a subject (at least 3 characters).",
  message: v => v.trim().length >= 10 || "Write a message of at least 10 characters."
};
form.addEventListener("submit", e => {
  e.preventDefault();
  let ok = true;
  for (const k in rules) {
    const f = form.elements[k], r = rules[k](f.value), box = f.closest(".field");
    box.classList.toggle("bad", r !== true);
    $(".err", box).textContent = r === true ? "" : r;
    if (r !== true) ok = false;
  }
  if (!ok) return;

  /* ---- CONNECT A BACKEND HERE (see README) ----
     Formspree: make this handler async, uncomment, and set your form ID:
     const res = await fetch("https://formspree.io/f/YOUR_ID", {
       method: "POST", headers: {Accept: "application/json"}, body: new FormData(form)});
     if (!res.ok) { statusEl.textContent = "Could not send. Please try again."; return; }
  */
  // Default fallback: open the visitor's email app with the message filled in
  const d = Object.fromEntries(new FormData(form));
  location.href = `mailto:${CONFIG.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(d.message + "\n\nFrom: " + d.name + " (" + d.email + ")")}`;
  statusEl.textContent = "Thanks! Your email app should open to send the message.";
  form.reset();
});

