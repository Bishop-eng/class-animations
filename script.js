const gallery = document.getElementById("gallery");
const modal = document.getElementById("modal");
const frame = document.getElementById("frame");
const codeEl = document.getElementById("code");
const tabsEl = document.getElementById("tabs");
const codebox = document.getElementById("codebox");
const toggleBtn = document.getElementById("toggleCode");
let token = 0;

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
  card.onclick = () => openStudent(s);
  gallery.appendChild(card);
});

function openStudent(s) {
  document.getElementById("mName").textContent = s.name;
  document.getElementById("mMatric").textContent = "Matric No: " + s.matric;
  const photo = document.getElementById("mPhoto");
  photo.src = "photos/" + s.photo;
  photo.onerror = () => photo.removeAttribute("src");

  tabsEl.innerHTML = "";
  const count = (s.titles && s.titles.length) || 6;
  for (let n = 1; n <= count; n++) {
    const b = document.createElement("button");
    b.textContent = (s.titles && s.titles[n - 1]) || "Animation " + n;
    b.onclick = () => {
      [...tabsEl.children].forEach(c => c.classList.remove("active"));
      b.classList.add("active");
      loadAnimation(s, n);
    };
    tabsEl.appendChild(b);
  }
  codebox.classList.add("hidden");
  toggleBtn.textContent = "Show code";
  tabsEl.firstChild.click();
  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
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

document.getElementById("close").onclick = closeModal;
document.onkeydown = (e) => { if (e.key === "Escape" && !document.fullscreenElement) closeModal(); };

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