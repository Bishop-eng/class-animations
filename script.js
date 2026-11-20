const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const profile = document.getElementById("profile");
const works = document.getElementById("works");
const frame = document.getElementById("frame");
const codeEl = document.getElementById("code");
const tabsEl = document.getElementById("tabs");
const sectionsEl = document.getElementById("sections");
const secLabel = document.getElementById("secLabel");
const codebox = document.getElementById("codebox");
const toggleBtn = document.getElementById("toggleCode");
const intro = document.getElementById("intro");
const app = document.getElementById("app");
let token = 0;
let current = null;

// Greeting based on the visitor's own clock
const hour = new Date().getHours();
document.getElementById("greet").textContent =
  hour < 12 ? "Good morning" : hour < 17 ? "Good afternoon" : "Good evening";

document.getElementById("enter").onclick = () => {
  intro.classList.add("hidden");
  app.classList.remove("hidden");
  window.scrollTo(0, 0);
};

document.getElementById("back").onclick = () => {
  app.classList.add("hidden");
  intro.classList.remove("hidden");
  window.scrollTo(0, 0);
};

function initials(name) {
  const el = document.createElement("div");
  el.className = "initials";
  el.textContent = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  return el;
}

students.forEach((s) => {
  const card = document.createElement("button");
  card.className = "card";
  const img = document.createElement("img");
  img.src = "photos/" + s.photo;
  img.alt = s.name;
  img.onerror = () => img.replaceWith(initials(s.name));
  const name = document.createElement("span");
  name.textContent = s.name;
  const matric = document.createElement("small");
  matric.textContent = s.matric;
  card.append(img, name, matric);
  card.onclick = () => openProfile(s);
  gallery.appendChild(card);
});

// Screen 1: profile
function openProfile(s) {
  current = s;
  document.getElementById("pName").textContent = s.name;
  document.getElementById("pMatric").textContent = "Matric No: " + s.matric;
  const pPhoto = document.getElementById("pPhoto");
  pPhoto.src = "photos/" + s.photo;
  pPhoto.onerror = () => pPhoto.removeAttribute("src");

  const bio = document.getElementById("pBio");
  if (s.bio) {
    bio.textContent = s.bio;
    bio.classList.remove("empty");
  } else {
    bio.textContent = "Bio coming soon.";
    bio.classList.add("empty");
  }

  token++;
  frame.srcdoc = "";
  works.classList.add("hidden");
  profile.classList.remove("hidden");
  profile.scrollTop = 0;
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

// Screen 2: animation works
function openWorks() {
  const s = current;
  document.getElementById("mName").textContent = s.name;
  document.getElementById("mMatric").textContent = "Matric No: " + s.matric;
  const photo = document.getElementById("mPhoto");
  photo.src = "photos/" + s.photo;
  photo.onerror = () => photo.removeAttribute("src");

  const count = (s.titles && s.titles.length) || 6;
  const firstSet = s.first || [];
  const all = Array.from({ length: count }, (_, i) => i + 1);
  const firstGroup = all.filter(n => firstSet.includes(n));
  const secondGroup = all.filter(n => !firstSet.includes(n));

  const sections = [];
  if (firstGroup.length) sections.push({ label: "First Assignment", list: firstGroup });
  if (secondGroup.length) sections.push({ label: "Second Assignment", list: secondGroup });

  sectionsEl.innerHTML = "";
  sections.forEach((sec) => {
    const b = document.createElement("button");
    b.textContent = sec.label;
    b.onclick = () => showSection(s, sec, b);
    sectionsEl.appendChild(b);
  });

  profile.classList.add("hidden");
  works.classList.remove("hidden");
  sectionsEl.firstChild.click();
}

function showSection(s, sec, btn) {
  sectionsEl.querySelectorAll("button").forEach(c => c.classList.remove("active"));
  btn.classList.add("active");
  secLabel.textContent = sec.label;
  codebox.classList.add("hidden");
  toggleBtn.textContent = "Show code";

  tabsEl.innerHTML = "";
  sec.list.forEach((n) => {
    const t = document.createElement("button");
    t.textContent = (s.titles && s.titles[n - 1]) || "Animation " + n;
    t.onclick = () => {
      tabsEl.querySelectorAll("button").forEach(c => c.classList.remove("active"));
      t.classList.add("active");
      loadAnimation(s, n);
    };
    tabsEl.appendChild(t);
  });
  tabsEl.firstChild.click();
}

function loadAnimation(s, n) {
  const mine = ++token;
  fetch(`animations/${s.folder}/${n}.html`)
    .then(r => { if (!r.ok) throw new Error("missing"); return r.text(); })
    .then(text => {
      if (mine !== token) return;
      frame.srcdoc = text;
      codeEl.textContent = text;
    })
    .catch(() => {
      if (mine !== token) return;
      frame.srcdoc = "<p style='font-family:sans-serif;color:#888;padding:20px'>Not available yet.</p>";
      codeEl.textContent = "";
    });
}

function closeModal() {
  token++;
  frame.srcdoc = "";
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

document.getElementById("showWorks").onclick = openWorks;
document.getElementById("toProfile").onclick = () => openProfile(current);
document.getElementById("closeProfile").onclick = closeModal;
document.getElementById("close").onclick = closeModal;
document.onkeydown = (e) => {
  if (e.key === "Escape" && !document.fullscreenElement) closeModal();
};

document.getElementById("copy").onclick = (e) => {
  navigator.clipboard.writeText(codeEl.textContent);
  e.target.textContent = "Copied";
  setTimeout(() => (e.target.textContent = "Copy"), 1500);
};

toggleBtn.onclick = () => {
  codebox.classList.toggle("hidden");
  toggleBtn.textContent = codebox.classList.contains("hidden") ? "Show code" : "Hide code";
};

document.getElementById("full").onclick = () => {
  if (document.fullscreenElement) document.exitFullscreen();
  else frame.requestFullscreen();
};