const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const DATA_DIR = path.join(__dirname, "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

app.use(express.json({ limit: "50kb" }));

// ================= LEADS HELPERS =================
function readLeads() {
  try {
    return JSON.parse(fs.readFileSync(LEADS_FILE, "utf8"));
  } catch {
    return [];
  }
}
function saveLeads(list) {
  fs.mkdirSync(DATA_DIR, { recursive: true });
  fs.writeFileSync(LEADS_FILE, JSON.stringify(list, null, 2));
}
const clean = (v) => String(v || "").slice(0, 500).trim();

// ================= API =================
app.get("/api/config", (req, res) => {
  res.json({ whatsapp: process.env.WHATSAPP_NUMBER || "94770000000" });
});

app.post("/api/contact", (req, res) => {
  const b = req.body || {};
  const lead = {
    id: Date.now(),
    time: new Date().toISOString(),
    type: clean(b.type) || "contact",
    institute: clean(b.Institute),
    name: clean(b.Name),
    mobile: clean(b.Mobile),
    interest: clean(b.Interest),
    message: clean(b.Message),
    total: clean(b.total),
  };
  if (!lead.mobile) return res.status(400).json({ ok: false, error: "Mobile number required" });
  const list = readLeads();
  list.push(lead);
  saveLeads(list);
  res.json({ ok: true });
});

// open: /api/leads?key=YOUR_ADMIN_KEY
app.get("/api/leads", (req, res) => {
  if (!process.env.ADMIN_KEY || req.query.key !== process.env.ADMIN_KEY) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  res.json(readLeads().reverse());
});

// ================= WEBSITE (embedded) =================
const SITE = {};

// ===================== index.html =====================
SITE["index.html"] = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>ClassNova | Tuition Class Management & Smart Attendance System</title>
<meta name="description" content="Class & fee management software, smart card attendance, POS and parent SMS alerts for tuition institutes in Sri Lanka.">
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>
<div class="topbar"><div class="container"><div class="links"><a href="https://wa.me/94770000000" target="_blank">💬 WhatsApp</a><a href="tel:+94770000000">📞 +94 77 000 0000</a></div><a href="contact.html">Talk to us →</a></div></div>

<header>
  <div class="container nav">
    <a href="index.html" class="logo"><i>N</i> ClassNova</a>
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="products.html">Products</a>
      <a href="index.html#pricing">Pricing</a>
      <a href="index.html#faq">Help</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html" class="btn btn-primary">Request Demo</a>
    </nav>
    <button class="burger" aria-label="Menu">☰</button>
  </div>
</header>

<!-- HERO -->
<section class="hero">
  <video class="hero-video" autoplay muted loop playsinline><source src="assets/video/hero.mp4" type="video/mp4"></video>
  <div class="container hero-grid">
    <div>
      <span class="tag">Smart Education &amp; Tuition Solution</span>
      <h1>The all-in-one system built for <span style="color:var(--primary)">tuition classes</span></h1>
      <p class="lead">Automate student attendance, instant parent SMS alerts and fee collection with smart cards, a handheld POS and a cloud dashboard — all in one place.</p>
      <a href="contact.html" class="btn btn-primary">Book a Free Demo →</a>
      <a href="#pricing" class="btn btn-ghost">See Packages</a>
      <div class="hero-badges"><span>💳 NFC Smart Cards</span><span>📱 Instant SMS</span><span>☁️ 100% Cloud Synced</span></div>
    </div>

    <!-- hero illustration (SVG – replace with your own photo if you like) -->
    <div class="float">
      <svg viewBox="0 0 460 420" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Smart card and dashboard illustration">
        <defs>
          <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6b1a"/><stop offset="1" stop-color="#ff9a4d"/></linearGradient>
          <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#f59e0b"/><stop offset="1" stop-color="#fb7185"/></linearGradient>
        </defs>
        <rect x="30" y="40" width="330" height="230" rx="22" fill="#fff" stroke="#e2e8f0"/>
        <rect x="30" y="40" width="330" height="40" rx="22" fill="#0f172a"/>
        <circle cx="54" cy="60" r="5" fill="#fb7185"/><circle cx="72" cy="60" r="5" fill="#fbbf24"/><circle cx="90" cy="60" r="5" fill="#34d399"/>
        <rect x="52" y="100" width="90" height="60" rx="12" fill="#fff1e8"/><text x="64" y="128" font-size="12" fill="#64748b">Students</text><text x="64" y="150" font-size="20" font-weight="700" fill="#ff6b1a">1,248</text>
        <rect x="152" y="100" width="90" height="60" rx="12" fill="#fef3c7"/><text x="164" y="128" font-size="12" fill="#64748b">Present</text><text x="164" y="150" font-size="20" font-weight="700" fill="#d97706">96%</text>
        <rect x="252" y="100" width="90" height="60" rx="12" fill="#d1fae5"/><text x="264" y="128" font-size="12" fill="#64748b">Fees</text><text x="264" y="150" font-size="20" font-weight="700" fill="#059669">Rs 480k</text>
        <g fill="url(#g1)"><rect x="60" y="215" width="22" height="35" rx="4"/><rect x="95" y="195" width="22" height="55" rx="4"/><rect x="130" y="205" width="22" height="45" rx="4"/><rect x="165" y="180" width="22" height="70" rx="4"/><rect x="200" y="200" width="22" height="50" rx="4"/><rect x="235" y="170" width="22" height="80" rx="4"/><rect x="270" y="190" width="22" height="60" rx="4"/><rect x="305" y="175" width="22" height="75" rx="4"/></g>
        <g transform="rotate(-12 300 320)">
          <rect x="200" y="260" width="220" height="136" rx="16" fill="url(#g2)"/>
          <rect x="220" y="290" width="40" height="30" rx="6" fill="#fde68a" opacity=".9"/>
          <text x="220" y="352" font-size="15" font-weight="700" fill="#fff">STUDENT SMART CARD</text>
          <text x="220" y="374" font-size="11" fill="#fff" opacity=".9">ID 0001 · NFC</text>
          <path d="M380 292q14 14 0 28M390 285q22 21 0 42" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
        </g>
      </svg>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="stats">
  <div class="container stats-grid">
    <div><b data-count="1200" data-suffix="+">0</b><span>Institutes (sample figure)</span></div>
    <div><b data-count="500000" data-suffix="+">0</b><span>Students managed</span></div>
    <div><b data-count="25" data-suffix="">0</b><span>Districts covered</span></div>
    <div><b data-count="99" data-suffix="%">0</b><span>Customer satisfaction</span></div>
  </div>
</div>

<div class="marquee"><div>
  <span>✔ Smart Card Attendance</span><span>✔ Parent SMS Alerts</span><span>✔ Fee Management</span><span>✔ Thermal Receipts</span><span>✔ Mobile App</span><span>✔ Cloud Backup</span><span>✔ 24/7 Support</span>
  <span>✔ Smart Card Attendance</span><span>✔ Parent SMS Alerts</span><span>✔ Fee Management</span><span>✔ Thermal Receipts</span><span>✔ Mobile App</span><span>✔ Cloud Backup</span><span>✔ 24/7 Support</span>
</div></div>

<!-- FEATURES -->
<section>
  <div class="container center">
    <span class="tag">Why ClassNova</span>
    <h2>Everything your institute needs, on day one</h2>
    <p class="lead">Stop chasing paper registers and fee books. Run your whole class from a tap and a dashboard.</p>
    <div class="grid g3">
      <div class="card reveal"><div class="ico">🔒</div><h3>Secure System</h3><p>Encrypted data and role-based access keep student and payment records protected.</p></div>
      <div class="card reveal"><div class="ico">⚡</div><h3>Lightning Fast</h3><p>Card taps register instantly and update the dashboard in real time.</p></div>
      <div class="card reveal"><div class="ico">🛡️</div><h3>Reliable &amp; Stable</h3><p>Built for uptime so classes never wait on the system.</p></div>
      <div class="card reveal"><div class="ico">🙂</div><h3>Easy to Use</h3><p>A friendly interface for teachers, staff, parents and students.</p></div>
      <div class="card reveal"><div class="ico">💳</div><h3>Smart Card Tech</h3><p>Contactless NFC/RFID cards for fast, accurate attendance scanning.</p></div>
      <div class="card reveal"><div class="ico">☁️</div><h3>Cloud Backup</h3><p>Automatic backups so your data is always safe and accessible.</p></div>
    </div>
  </div>
</section>

<!-- PRODUCT: CFMS -->
<section style="background:#fff">
  <div class="container split">
    <div class="reveal">
      <span class="tag">Class &amp; Fee Management</span>
      <h2>Smart card attendance, instant parent alerts</h2>
      <p class="lead">Every tap marks attendance, updates fees and notifies the parent — no manual entry.</p>
      <ul class="checks">
        <li>Student registration &amp; profiles</li>
        <li>Attendance by card tap or QR</li>
        <li>Fee tracking with printed receipts</li>
        <li>Reports &amp; analytics dashboard</li>
      </ul>
      <a href="products.html" class="btn btn-primary">Explore Products</a>
    </div>
    <div class="split-art reveal">
      <svg viewBox="0 0 400 300"><rect x="20" y="20" width="360" height="260" rx="20" fill="#fff"/>
        <rect x="40" y="44" width="150" height="14" rx="7" fill="#ffd2b3"/>
        <g font-size="13" fill="#334155"><text x="40" y="100">Kasun P.</text><text x="40" y="136">Nimali S.</text><text x="40" y="172">Ravindu D.</text><text x="40" y="208">Sanduni W.</text></g>
        <g font-size="12" font-weight="700"><rect x="190" y="84" width="70" height="22" rx="11" fill="#d1fae5"/><text x="203" y="99" fill="#059669">Present</text>
        <rect x="190" y="120" width="70" height="22" rx="11" fill="#d1fae5"/><text x="203" y="135" fill="#059669">Present</text>
        <rect x="190" y="156" width="70" height="22" rx="11" fill="#fee2e2"/><text x="208" y="171" fill="#dc2626">Absent</text>
        <rect x="190" y="192" width="70" height="22" rx="11" fill="#d1fae5"/><text x="203" y="207" fill="#059669">Present</text></g>
        <g font-size="12" fill="#64748b"><text x="290" y="99">Paid</text><text x="290" y="135">Paid</text><text x="290" y="171">Due</text><text x="290" y="207">Paid</text></g>
        <rect x="40" y="236" width="320" height="26" rx="13" fill="#ff6b1a"/><text x="148" y="254" font-size="12" fill="#fff" font-weight="700">SMS sent to parents ✔</text>
      </svg>
    </div>
  </div>
</section>

<!-- HOW IT WORKS -->
<section>
  <div class="container center">
    <span class="tag">How it works</span>
    <h2>Up and running in 3 steps</h2>
    <div class="grid g3 steps">
      <div class="card step reveal"><h3>We install</h3><p>Software, readers and printer set up at your institute by our team.</p></div>
      <div class="card step reveal"><h3>You register</h3><p>Add students, issue smart cards and import your class schedule.</p></div>
      <div class="card step reveal"><h3>Tap &amp; go</h3><p>Students tap in, parents get SMS, fees and reports update live.</p></div>
    </div>
  </div>
</section>

<!-- VIDEO -->
<section style="background:#fff">
  <div class="container center">
    <span class="tag">Live demo</span>
    <h2>See it working in a real class</h2>
    <p class="lead">Add your own demo video to <b>assets/video/demo.mp4</b> and it plays here.</p>
    <div class="video-box" style="margin-top:36px">
      <button class="play" data-video="assets/video/demo.mp4" aria-label="Play demo video">▶</button>
      <span class="video-note">Demo video placeholder</span>
    </div>
  </div>
</section>

<!-- PRICING -->
<section id="pricing">
  <div class="container">
    <div class="center">
      <span class="tag">Packages</span>
      <h2>A complete institute package</h2>
      <p class="lead">Sample prices below — edit them in index.html and script.js to match your own.</p>
    </div>
    <div class="price-wrap">
      <div class="price-card reveal">
        <h3 style="font-size:1.5rem">Complete Institute Package</h3>
        <p style="opacity:.85">Software, mobile app, smart cards and all hardware.</p>
        <div class="big" style="margin-top:14px">LKR 99,000</div>
        <s>Actual value LKR 300,000+</s>
        <ul class="checks">
          <li>Lifetime software license</li>
          <li>500 smart student ID cards</li>
          <li>Receipt printer + paper rolls</li>
          <li>2 smart card readers</li>
          <li>Mobile app access</li>
          <li>Training guide &amp; free installation</li>
        </ul>
        <a href="contact.html" class="btn" style="background:#fff;color:var(--primary)">Register Now</a>
      </div>

      <div class="calc reveal" id="calc">
        <h3>Custom price calculator</h3>
        <label><span><input type="checkbox" data-price="5000"> Mobile app</span><b>LKR 5,000</b></label>
        <label><span><input type="checkbox" data-price="50000" checked> Class &amp; fee software</span><b>LKR 50,000</b></label>
        <label><span><input type="checkbox" data-price="16500"> 58mm thermal printer</span><b>LKR 16,500</b></label>
        <label><span><input type="checkbox" data-price="12000"> Desktop card reader</span><b>LKR 12,000</b></label>
        <label><span>Smart ID cards (LKR 300 each)</span><input type="number" min="0" value="0" data-price="300"></label>
        <div class="total">Total: <span id="calcTotal">LKR 0</span></div>
        <form data-wa="order" style="margin-top:20px">
          <div class="field"><label>Institute name</label><input name="Institute" required></div>
          <div class="field"><label>Mobile number</label><input name="Mobile" required></div>
          <button class="btn btn-wa" type="submit">Order via WhatsApp</button>
        </form>
      </div>
    </div>
  </div>
</section>

<!-- TESTIMONIALS -->
<section style="background:#fff">
  <div class="container center">
    <span class="tag">Testimonials</span>
    <h2>What institutes say</h2>
    <p class="lead">Sample quotes — replace with your real customer feedback.</p>
    <div class="slider">
      <div class="slide"><q>Attendance used to take 15 minutes every class. Now it's done before the lesson starts.</q><b>— Teacher, Colombo</b></div>
      <div class="slide"><q>Parents love the instant SMS. Fee collection has become so much smoother.</q><b>— Institute Owner, Kandy</b></div>
      <div class="slide"><q>Setup and training were quick, and support always answers the phone.</q><b>— Admin Manager, Galle</b></div>
    </div>
    <div class="dots"></div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="container">
    <div class="center"><span class="tag">Help guide</span><h2>Frequently asked questions</h2></div>
    <div class="faq">
      <div class="faq-item"><button class="faq-q">Do I need internet to use it? <span>+</span></button><div class="faq-a">The cloud dashboard and SMS need internet. Your team can keep scanning cards and sync when the connection returns.</div></div>
      <div class="faq-item"><button class="faq-q">Can I use my existing smart cards? <span>+</span></button><div class="faq-a">Most standard NFC/RFID cards work. We'll confirm compatibility during your demo.</div></div>
      <div class="faq-item"><button class="faq-q">Is training included? <span>+</span></button><div class="faq-a">Yes — installation, staff training and a printed guide come with the package.</div></div>
      <div class="faq-item"><button class="faq-q">Can multiple branches use one account? <span>+</span></button><div class="faq-a">Yes. Manage several locations from one dashboard with separate staff logins.</div></div>
    </div>
  </div>
</section>

<!-- CTA -->
<div class="container">
  <div class="cta reveal">
    <h2>Ready to digitise your tuition class?</h2>
    <p>One system for fees, smart-card attendance, instant receipts and parent updates — installed and taught to your staff.</p>
    <a href="contact.html" class="btn btn-primary">Request a Demo</a>
    <a href="#" class="btn btn-wa" id="waLink" onclick="window.open('https://wa.me/94770000000','_blank');return false;">WhatsApp Us</a>
  </div>
</div>

<footer>
  <div class="container foot-grid">
    <div><a class="logo" style="color:#fff"><i>N</i> ClassNova</a><p style="margin-top:14px;font-size:.92rem">Smart card &amp; tuition class management solutions for Sri Lankan institutes.</p></div>
    <div><h4>Products</h4><ul><li><a href="products.html">Class &amp; Fee Management</a></li><li><a href="products.html">Smart Cards</a></li><li><a href="products.html">Android POS</a></li><li><a href="products.html">Mobile App</a></li></ul></div>
    <div><h4>Company</h4><ul><li><a href="index.html#pricing">Pricing</a></li><li><a href="index.html#faq">Help</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h4>Contact</h4><ul><li>Colombo, Sri Lanka</li><li>+94 77 000 0000</li><li>hello@yourdomain.lk</li></ul></div>
  </div>
  <div class="container copy">© 2026 ClassNova. All rights reserved.</div>
</footer>

<a class="wa-float" href="https://wa.me/94770000000" target="_blank" aria-label="WhatsApp">💬</a>

<div class="modal"><div class="modal-in"><button class="modal-x" aria-label="Close">×</button><video controls playsinline></video></div></div>
</body>
</html>
`;

// ===================== products.html =====================
SITE["products.html"] = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Products | ClassNova</title>
<meta name="description" content="Smart cards, handheld POS, card readers, thermal printers and the class management software.">
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>
<div class="topbar"><div class="container"><div class="links"><a href="https://wa.me/94770000000" target="_blank">💬 WhatsApp</a><a href="tel:+94770000000">📞 +94 77 000 0000</a></div><a href="contact.html">Talk to us →</a></div></div>

<header>
  <div class="container nav">
    <a href="index.html" class="logo"><i>N</i> ClassNova</a>
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="products.html">Products</a>
      <a href="index.html#pricing">Pricing</a>
      <a href="index.html#faq">Help</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html" class="btn btn-primary">Request Demo</a>
    </nav>
    <button class="burger" aria-label="Menu">☰</button>
  </div>
</header>

<section class="page-hero">
  <div class="container">
    <span class="tag">Products &amp; Offers</span>
    <h1 style="font-size:clamp(2rem,4vw,3rem)">Software and hardware that work together</h1>
    <p class="lead" style="margin:14px auto 0">Fee management, attendance devices, handheld POS and a parent mobile app.</p>
  </div>
</section>

<!-- Smart card -->
<section id="smart-card">
  <div class="container split">
    <div class="split-art reveal">
      <svg viewBox="0 0 360 240"><defs><linearGradient id="c1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#ff6b1a"/><stop offset="1" stop-color="#ffb27a"/></linearGradient></defs>
        <rect x="30" y="30" width="300" height="180" rx="20" fill="url(#c1)"/>
        <rect x="55" y="70" width="48" height="36" rx="7" fill="#fde68a"/>
        <text x="55" y="160" fill="#fff" font-size="20" font-weight="700">STUDENT ID CARD</text>
        <text x="55" y="184" fill="#ffe3d1" font-size="12">Name · Class · Reg No.</text>
        <path d="M280 70q18 18 0 36M292 62q28 26 0 52" stroke="#fff" stroke-width="3" fill="none" stroke-linecap="round"/>
      </svg>
    </div>
    <div class="reveal">
      <span class="tag">Smart Card</span>
      <h2>Custom RFID student ID cards</h2>
      <p class="lead">Durable, printable cards with your institute's design. One tap marks attendance.</p>
      <ul class="checks"><li>Full-colour custom print</li><li>Fast contactless read</li><li>Works with desktop &amp; mobile readers</li></ul>
      <a href="contact.html" class="btn btn-primary">Get a Quote</a>
    </div>
  </div>
</section>

<!-- POS -->
<section id="pos" style="background:#fff">
  <div class="container split rev">
    <div class="reveal">
      <span class="tag">Smart POS</span>
      <h2>All-in-one Android POS device</h2>
      <p class="lead">Mark attendance with a card tap, scan QR codes, collect fees and print thermal receipts — anywhere.</p>
      <ul class="checks"><li>Card tap &amp; QR scanning</li><li>Built-in thermal printer</li><li>Real-time sync with the dashboard</li><li>SMS alerts to parents</li></ul>
      <button class="btn btn-ghost" data-video="assets/video/pos.mp4">▶ Watch POS video</button>
    </div>
    <div class="split-art reveal">
      <svg viewBox="0 0 300 340"><rect x="80" y="10" width="140" height="300" rx="22" fill="#0f172a"/>
        <rect x="92" y="34" width="116" height="150" rx="10" fill="#ff6b1a"/>
        <text x="106" y="70" fill="#fff" font-size="13" font-weight="700">Fee Received</text>
        <text x="106" y="100" fill="#fde68a" font-size="22" font-weight="800">Rs 2,500</text>
        <text x="106" y="128" fill="#ffd2b3" font-size="11">Kasun P. · Maths</text>
        <rect x="106" y="146" width="88" height="22" rx="11" fill="#10b981"/><text x="124" y="161" fill="#fff" font-size="11" font-weight="700">PAID ✔</text>
        <rect x="100" y="196" width="100" height="70" rx="8" fill="#1e293b"/>
        <g fill="#334155"><circle cx="118" cy="283" r="7"/><circle cx="150" cy="283" r="7"/><circle cx="182" cy="283" r="7"/></g>
        <rect x="104" y="296" width="92" height="8" rx="4" fill="#f59e0b"/>
      </svg>
    </div>
  </div>
</section>

<!-- Other hardware -->
<section>
  <div class="container center">
    <span class="tag">Hardware</span>
    <h2>Readers, printers &amp; more</h2>
    <div class="grid g3">
      <div class="card reveal"><div class="ico">🖨️</div><h3>Thermal Printers</h3><p>58mm and 80mm high-speed receipt printers with paper rolls.</p></div>
      <div class="card reveal"><div class="ico">📟</div><h3>Card Readers</h3><p>Desktop and mobile (Type-C / Micro) RFID readers.</p></div>
      <div class="card reveal"><div class="ico">🧱</div><h3>Wall Attendance Unit</h3><p>Wall-mounted RFID unit for automatic entry attendance.</p></div>
      <div class="card reveal"><div class="ico">🌐</div><h3>Individual Site</h3><p>Dedicated cloud LMS and student portal for your institute.</p></div>
      <div class="card reveal"><div class="ico">🎓</div><h3>Course System</h3><p>Manage courses, timetables and class materials online.</p></div>
      <div class="card reveal"><div class="ico">📱</div><h3>Parent Mobile App</h3><p>Live attendance and fee history, bundled with every package.</p></div>
    </div>
  </div>
</section>

<div class="container">
  <div class="cta reveal">
    <h2>Need a custom combination?</h2>
    <p>Tell us what your institute needs and we'll prepare a quote.</p>
    <a href="index.html#pricing" class="btn btn-primary">Open Price Calculator</a>
    <a href="contact.html" class="btn btn-ghost" style="color:#fff;border-color:#fff">Contact Us</a>
  </div>
</div>

<footer>
  <div class="container foot-grid">
    <div><a class="logo" style="color:#fff"><i>N</i> ClassNova</a><p style="margin-top:14px;font-size:.92rem">Smart card &amp; tuition class management solutions for Sri Lankan institutes.</p></div>
    <div><h4>Products</h4><ul><li><a href="products.html">Class &amp; Fee Management</a></li><li><a href="products.html">Smart Cards</a></li><li><a href="products.html">Android POS</a></li><li><a href="products.html">Mobile App</a></li></ul></div>
    <div><h4>Company</h4><ul><li><a href="index.html#pricing">Pricing</a></li><li><a href="index.html#faq">Help</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h4>Contact</h4><ul><li>Colombo, Sri Lanka</li><li>+94 77 000 0000</li><li>hello@yourdomain.lk</li></ul></div>
  </div>
  <div class="container copy">© 2026 ClassNova. All rights reserved.</div>
</footer>

<a class="wa-float" href="https://wa.me/94770000000" target="_blank" aria-label="WhatsApp">💬</a>
<div class="modal"><div class="modal-in"><button class="modal-x" aria-label="Close">×</button><video controls playsinline></video></div></div>
</body>
</html>
`;

// ===================== contact.html =====================
SITE["contact.html"] = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Contact | ClassNova</title>
<meta name="description" content="Talk to ClassNova: request a demo or get a quote for tuition class management software.">
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>
<div class="topbar"><div class="container"><div class="links"><a href="https://wa.me/94770000000" target="_blank">💬 WhatsApp</a><a href="tel:+94770000000">📞 +94 77 000 0000</a></div><a href="contact.html">Talk to us →</a></div></div>

<header>
  <div class="container nav">
    <a href="index.html" class="logo"><i>N</i> ClassNova</a>
    <nav class="menu">
      <a href="index.html">Home</a>
      <a href="products.html">Products</a>
      <a href="index.html#pricing">Pricing</a>
      <a href="index.html#faq">Help</a>
      <a href="contact.html">Contact</a>
      <a href="contact.html" class="btn btn-primary">Talk to us</a>
    </nav>
    <button class="burger" aria-label="Menu">☰</button>
  </div>
</header>

<!-- HERO -->
<section class="talk-hero">
  <video class="hero-video" autoplay muted loop playsinline><source src="assets/video/contact.mp4" type="video/mp4"></video>
  <div class="container">
    <span class="tag" style="background:rgba(255,255,255,.12);color:#ffd2b3">Contact us</span>
    <h1>Let's Talk Today</h1>
    <p>Tell us about your institute and we'll show you how smart cards, fee tracking and parent alerts can work for you.</p>
  </div>
</section>

<!-- INTRO + OFFICES -->
<section>
  <div class="container center">
    <h2>Tuition Software Experts</h2>
    <p class="lead">Get in touch with ClassNova today. Our team will arrange a free demo, answer your questions and prepare a custom quote.</p>
    <div class="office-grid" style="text-align:left">
      <div class="office reveal"><div class="flag">🇱🇰</div><h3>Sri Lanka (Head Office)</h3><p>📞 +94 11 000 0000</p><p>💬 +94 77 000 0000</p><p>✉️ hello@yourdomain.lk</p><p>📍 No. 1, Main Street, Colombo</p><a class="dir" href="https://maps.google.com/?q=Colombo" target="_blank">Get Directions →</a></div>
      <div class="office reveal"><div class="flag">🏫</div><h3>Kandy Branch</h3><p>📞 +94 81 000 0000</p><p>✉️ kandy@yourdomain.lk</p><p>📍 Kandy, Sri Lanka</p><a class="dir" href="https://maps.google.com/?q=Kandy" target="_blank">Get Directions →</a></div>
      <div class="office reveal"><div class="flag">🏢</div><h3>Galle Branch</h3><p>📞 +94 91 000 0000</p><p>✉️ galle@yourdomain.lk</p><p>📍 Galle, Sri Lanka</p><a class="dir" href="https://maps.google.com/?q=Galle" target="_blank">Get Directions →</a></div>
    </div>
  </div>
</section>

<!-- INQUIRY -->
<section style="background:#fff">
  <div class="container inquiry">
    <div class="card reveal">
      <span class="tag">Make an inquiry</span>
      <h2 style="font-size:1.8rem">Send us a message</h2>
      <form data-wa="contact" style="margin-top:18px">
        <div class="field"><label>Your name *</label><input name="Name" required></div>
        <div class="row">
          <div class="field"><label>Contact number *</label><input name="Mobile" type="tel" required></div>
          <div class="field"><label>E-mail</label><input name="Email" type="email"></div>
        </div>
        <div class="row">
          <div class="field"><label>Institute name *</label><input name="Institute" required></div>
          <div class="field"><label>Interested in</label>
            <select name="Interest"><option>Full package</option><option>Smart cards</option><option>Android POS</option><option>Software only</option></select></div>
        </div>
        <div class="field"><label>Message</label><textarea name="Message" rows="4"></textarea></div>
        <button class="btn btn-primary" type="submit">Send inquiry →</button>
      </form>
    </div>
    <div class="art-panel reveal">
      <h2 style="color:#fff">Why talk to us?</h2>
      <ul>
        <li>✔ Free live demo for your institute</li>
        <li>✔ Custom quote within 24 hours</li>
        <li>✔ Free installation &amp; staff training</li>
        <li>✔ 24/7 support after setup</li>
      </ul>
      <svg viewBox="0 0 300 160" style="margin-top:26px"><rect x="10" y="20" width="280" height="120" rx="18" fill="rgba(255,255,255,.08)"/><circle cx="70" cy="80" r="30" fill="#ff6b1a"/><text x="70" y="86" text-anchor="middle" font-size="20" fill="#fff" font-weight="800">1</text><rect x="120" y="62" width="140" height="12" rx="6" fill="#ffd2b3"/><rect x="120" y="86" width="100" height="12" rx="6" fill="rgba(255,255,255,.35)"/></svg>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="container">
    <div class="center"><span class="tag">FAQ</span><h2>Common questions</h2></div>
    <div class="faq">
      <div class="faq-item"><button class="faq-q">How quickly will I get a response? <span>+</span></button><div class="faq-a">We reply to most inquiries within a few hours during working time, and always within one working day.</div></div>
      <div class="faq-item"><button class="faq-q">Can you visit my institute for a demo? <span>+</span></button><div class="faq-a">Yes. We can demo online or visit institutes island-wide.</div></div>
      <div class="faq-item"><button class="faq-q">Do you give a custom quote? <span>+</span></button><div class="faq-a">Yes. Tell us what you need (software, cards, POS, readers) and we'll prepare a quote.</div></div>
      <div class="faq-item"><button class="faq-q">Is support included after setup? <span>+</span></button><div class="faq-a">Yes. Training and 24/7 support come with every package.</div></div>
      <div class="faq-item"><button class="faq-q">Can I use my existing student cards? <span>+</span></button><div class="faq-a">Most standard NFC/RFID cards work. We confirm compatibility during the demo.</div></div>
    </div>
  </div>
</section>

<!-- TRUST -->
<div class="container">
  <div class="trust reveal">
    <div class="badge">Trusted<br>Partner</div>
    <div>
      <h2 style="font-size:1.7rem">Your growth partner in tuition technology</h2>
      <p class="lead" style="margin-bottom:18px">Replace this text with your real credentials, years of experience and awards.</p>
      <a href="#" class="btn btn-primary" onclick="window.scrollTo({top:0,behavior:'smooth'});return false;">Talk to Us</a>
    </div>
  </div>
</div>

<footer>
  <div class="container foot-grid">
    <div><a class="logo" style="color:#fff"><i>N</i> ClassNova</a><p style="margin-top:14px;font-size:.92rem">Smart card &amp; tuition class management solutions for Sri Lankan institutes.</p>
      <div class="social"><a href="#">f</a><a href="#">in</a><a href="#">ig</a></div></div>
    <div><h4>Products</h4><ul><li><a href="products.html">Class &amp; Fee Management</a></li><li><a href="products.html">Smart Cards</a></li><li><a href="products.html">Android POS</a></li><li><a href="products.html">Mobile App</a></li></ul></div>
    <div><h4>Company</h4><ul><li><a href="index.html#pricing">Pricing</a></li><li><a href="index.html#faq">Help</a></li><li><a href="contact.html">Contact</a></li></ul></div>
    <div><h4>Contact</h4><ul><li>Colombo, Sri Lanka</li><li>+94 77 000 0000</li><li>hello@yourdomain.lk</li></ul>
      <a href="contact.html" class="btn btn-primary" style="margin-top:10px">LET'S TALK</a></div>
  </div>
  <div class="container"><div class="clocks"><div class="clock">Sri Lanka<b id="clk-lk">--:--</b></div><div class="clock">UK<b id="clk-uk">--:--</b></div><div class="clock">UAE<b id="clk-ae">--:--</b></div></div></div>
  <div class="container copy">© 2026 ClassNova. All rights reserved.</div>
</footer>

<a class="wa-float" href="https://wa.me/94770000000" target="_blank" aria-label="WhatsApp">💬</a>
<script>
(function(){
  var z={"clk-lk":"Asia/Colombo","clk-uk":"Europe/London","clk-ae":"Asia/Dubai"};
  function tick(){for(var id in z){var e=document.getElementById(id);if(e)e.textContent=new Date().toLocaleTimeString("en-GB",{timeZone:z[id],hour:"2-digit",minute:"2-digit"});}}
  tick();setInterval(tick,30000);
})();
</script>
</body>
</html>
`;

// ===================== style.css =====================
SITE["style.css"] = `:root{
  --primary:#ff6b1a;--primary-d:#e0560a;--accent:#ffb703;--ink:#0a1128;--muted:#64748b;
  --bg:#f6f7fb;--card:#ffffff;--line:#e2e8f0;--ok:#10b981;--radius:18px;
  --shadow:0 10px 30px rgba(15,23,42,.08);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:var(--ink);background:var(--bg);line-height:1.6}
img,svg,video{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{width:min(1180px,92%);margin:auto}
section{padding:84px 0}
h1,h2,h3{line-height:1.15;letter-spacing:-.02em}
h1{font-size:clamp(2.2rem,5vw,3.8rem);font-weight:800}
h2{font-size:clamp(1.7rem,3.4vw,2.5rem);font-weight:800;margin-bottom:12px}
h3{font-size:1.2rem;font-weight:700;margin-bottom:6px}
p.lead{color:var(--muted);font-size:1.08rem;max-width:640px}
.center{text-align:center}.center p.lead{margin:auto}
.tag{display:inline-block;background:#fff1e8;color:var(--primary);font-weight:600;font-size:.8rem;padding:6px 14px;border-radius:999px;margin-bottom:14px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:999px;font-weight:600;border:2px solid transparent;cursor:pointer;transition:.25s;font-size:1rem;font-family:inherit}
.btn-primary{background:var(--primary);color:#fff;box-shadow:0 8px 20px rgba(255,107,26,.3)}
.btn-primary:hover{background:var(--primary-d);transform:translateY(-2px)}
.btn-ghost{border-color:var(--primary);color:var(--primary);background:transparent}
.btn-ghost:hover{background:var(--primary);color:#fff}
.btn-wa{background:#22c55e;color:#fff}.btn-wa:hover{background:#16a34a;transform:translateY(-2px)}

/* header */
header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.88);backdrop-filter:blur(12px);border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;justify-content:space-between;height:72px}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.35rem}
.logo i{width:36px;height:36px;border-radius:10px;background:linear-gradient(135deg,var(--primary),#ff9a4d);display:grid;place-items:center;color:#fff;font-style:normal;font-size:1.1rem}
.menu{display:flex;gap:26px;align-items:center;font-weight:500}
.menu a:hover,.menu a.active{color:var(--primary)}
.burger{display:none;background:none;border:0;font-size:1.8rem;cursor:pointer}

/* hero */
.hero{background:radial-gradient(1000px 500px at 85% -10%,#ffe3d1,transparent),radial-gradient(800px 400px at -10% 110%,#fef3c7,transparent);padding:80px 0 60px}
.hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
.hero p.lead{margin:18px 0 28px}
.hero-badges{display:flex;gap:10px;flex-wrap:wrap;margin-top:26px}
.hero-badges span{background:#fff;border:1px solid var(--line);padding:7px 14px;border-radius:999px;font-size:.85rem;font-weight:600;box-shadow:var(--shadow)}
.float{animation:float 5s ease-in-out infinite}
@keyframes float{50%{transform:translateY(-14px)}}

/* stats */
.stats{background:var(--ink);color:#fff;padding:46px 0}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;text-align:center}
.stats b{display:block;font-size:2.4rem;color:var(--accent)}
.stats span{color:#cbd5e1;font-size:.95rem}

/* cards */
.grid{display:grid;gap:22px;margin-top:44px}
.g3{grid-template-columns:repeat(3,1fr)}.g2{grid-template-columns:repeat(2,1fr)}.g4{grid-template-columns:repeat(4,1fr)}
.card{background:var(--card);border:1px solid var(--line);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);transition:.3s}
.card:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(255,107,26,.15)}
.ico{width:52px;height:52px;border-radius:14px;background:#fff1e8;display:grid;place-items:center;font-size:1.5rem;margin-bottom:16px}
.card p{color:var(--muted);font-size:.96rem}

/* steps */
.steps{counter-reset:s}
.step{position:relative;padding-top:56px}
.step::before{counter-increment:s;content:counter(s);position:absolute;top:0;left:28px;width:40px;height:40px;border-radius:50%;background:var(--primary);color:#fff;display:grid;place-items:center;font-weight:700}

/* product split */
.split{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
.split.rev .split-art{order:-1}
.split-art{background:linear-gradient(135deg,#fff1e8,#fef3c7);border-radius:28px;padding:34px;box-shadow:var(--shadow)}
.checks{list-style:none;margin:20px 0 26px}
.checks li{padding:7px 0 7px 32px;position:relative}
.checks li::before{content:"✓";position:absolute;left:0;top:7px;width:22px;height:22px;border-radius:50%;background:var(--ok);color:#fff;font-size:.8rem;display:grid;place-items:center}

/* video */
.video-box{position:relative;border-radius:26px;overflow:hidden;background:linear-gradient(135deg,#0a1128,#ff6b1a);aspect-ratio:16/9;box-shadow:var(--shadow);display:grid;place-items:center;color:#fff}
.video-box video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.play{width:84px;height:84px;border-radius:50%;background:#fff;color:var(--primary);display:grid;place-items:center;font-size:2rem;cursor:pointer;border:0;box-shadow:0 0 0 12px rgba(255,255,255,.2);animation:pulse 2s infinite;z-index:2}
@keyframes pulse{50%{box-shadow:0 0 0 22px rgba(255,255,255,0)}}
.video-note{position:absolute;bottom:14px;left:18px;font-size:.8rem;opacity:.8;z-index:2}

/* marquee */
.marquee{overflow:hidden;white-space:nowrap;background:#fff;border-block:1px solid var(--line);padding:18px 0}
.marquee div{display:inline-flex;gap:50px;animation:scroll 28s linear infinite;font-weight:700;color:var(--muted)}
@keyframes scroll{to{transform:translateX(-50%)}}

/* pricing */
.price-wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;margin-top:44px}
.price-card{background:linear-gradient(160deg,var(--primary),#ff8a3d);color:#fff;border-radius:28px;padding:40px;box-shadow:0 24px 50px rgba(255,107,26,.35)}
.price-card .big{font-size:3rem;font-weight:800}
.price-card s{opacity:.7}
.price-card .checks li::before{background:var(--accent);color:#000}
.calc{background:#fff;border:1px solid var(--line);border-radius:28px;padding:34px;box-shadow:var(--shadow)}
.calc label{display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px dashed var(--line);font-size:.95rem;gap:10px}
.calc input[type=number]{width:70px;padding:6px;border:1px solid var(--line);border-radius:8px;font-family:inherit}
.total{margin-top:18px;font-size:1.5rem;font-weight:800;color:var(--primary)}

/* testimonials */
.slider{position:relative;max-width:760px;margin:44px auto 0;min-height:200px}
.slide{display:none;text-align:center;background:#fff;border-radius:var(--radius);padding:36px;box-shadow:var(--shadow);border:1px solid var(--line)}
.slide.on{display:block;animation:fade .6s}
@keyframes fade{from{opacity:0;transform:translateY(10px)}}
.slide q{font-size:1.15rem;display:block;margin-bottom:16px}
.slide b{color:var(--primary)}
.dots{display:flex;gap:8px;justify-content:center;margin-top:18px}
.dots i{width:10px;height:10px;border-radius:50%;background:var(--line);cursor:pointer}
.dots i.on{background:var(--primary)}

/* faq */
.faq{max-width:820px;margin:40px auto 0}
.faq-item{background:#fff;border:1px solid var(--line);border-radius:14px;margin-bottom:12px;overflow:hidden}
.faq-q{width:100%;text-align:left;padding:18px 22px;background:none;border:0;font:600 1rem inherit;font-family:inherit;cursor:pointer;display:flex;justify-content:space-between}
.faq-a{max-height:0;overflow:hidden;transition:.35s;padding:0 22px;color:var(--muted)}
.faq-item.open .faq-a{max-height:200px;padding:0 22px 18px}
.faq-item.open .faq-q span{transform:rotate(45deg)}
.faq-q span{transition:.3s}

/* cta */
.cta{background:linear-gradient(135deg,var(--ink),#1b2a5c);color:#fff;border-radius:32px;padding:64px 30px;text-align:center}
.cta p{color:#cbd5e1;margin:12px auto 28px;max-width:560px}

/* forms */
form .row{display:grid;grid-template-columns:1fr 1fr;gap:16px}
.field{margin-bottom:16px}
.field label{display:block;font-weight:600;font-size:.9rem;margin-bottom:6px}
.field input,.field textarea,.field select{width:100%;padding:13px 15px;border-radius:12px;border:1px solid var(--line);font:inherit;background:#fff}
.field input:focus,.field textarea:focus,.field select:focus{outline:2px solid var(--primary);border-color:transparent}
.info-list{list-style:none}
.info-list li{display:flex;gap:14px;padding:16px 0;border-bottom:1px solid var(--line)}
.map-ph{background:repeating-linear-gradient(45deg,#ffe3d1,#ffe3d1 14px,#fff1e8 14px,#fff1e8 28px);border-radius:var(--radius);height:260px;display:grid;place-items:center;color:var(--primary);font-weight:700;margin-top:24px}

/* page hero */
.page-hero{background:linear-gradient(135deg,#fff1e8,#fef3c7);padding:70px 0;text-align:center}

/* footer */
footer{background:var(--ink);color:#cbd5e1;padding:60px 0 24px;margin-top:60px}
.foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:30px}
footer h4{color:#fff;margin-bottom:14px}
footer li{list-style:none;margin-bottom:8px;font-size:.92rem}
footer a:hover{color:var(--accent)}
.copy{border-top:1px solid #1e293b;margin-top:40px;padding-top:20px;text-align:center;font-size:.85rem}

/* floating wa */
.wa-float{position:fixed;right:20px;bottom:20px;width:58px;height:58px;border-radius:50%;background:#22c55e;color:#fff;display:grid;place-items:center;font-size:1.6rem;box-shadow:0 10px 25px rgba(34,197,94,.5);z-index:60}

/* reveal */
.reveal{opacity:0;transform:translateY(30px);transition:.8s}
.reveal.show{opacity:1;transform:none}

/* modal */
.modal{position:fixed;inset:0;background:rgba(0,0,0,.75);display:none;place-items:center;z-index:100;padding:20px}
.modal.open{display:grid}
.modal-in{background:#fff;border-radius:20px;padding:20px;width:min(860px,100%)}
.modal-in video{width:100%;border-radius:12px;background:#000}
.modal-x{float:right;border:0;background:none;font-size:1.6rem;cursor:pointer}

@media(max-width:900px){
  .hero-grid,.split,.price-wrap,.g2{grid-template-columns:1fr}
  .g3,.g4,.stats-grid{grid-template-columns:repeat(2,1fr)}
  .split.rev .split-art{order:0}
  .foot-grid{grid-template-columns:1fr 1fr}
  .burger{display:block}
  .menu{position:absolute;top:72px;left:0;right:0;background:#fff;flex-direction:column;padding:20px;gap:16px;border-bottom:1px solid var(--line);display:none}
  .menu.open{display:flex}
  section{padding:60px 0}
}
@media(max-width:560px){.g3,.g4,.stats-grid,form .row,.foot-grid{grid-template-columns:1fr}}

/* ===== Web-Lankan-style theme additions ===== */
.topbar{background:var(--ink);color:#cbd5e1;font-size:.85rem}
.topbar .container{display:flex;justify-content:space-between;align-items:center;gap:14px;padding:8px 0;flex-wrap:wrap}
.topbar a{display:inline-flex;gap:6px;align-items:center}
.topbar a:hover{color:var(--accent)}
.topbar .links{display:flex;gap:22px}

.hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#0a1128 0%,#1b2a5c 100%);color:#fff}
.hero h1{color:#fff}
.hero p.lead{color:#cbd5e1}
.hero .tag{background:rgba(255,255,255,.12);color:#ffd2b3}
.hero .btn-ghost{color:#fff;border-color:#fff}
.hero .btn-ghost:hover{background:#fff;color:var(--ink)}
.hero::before,.hero::after{content:"";position:absolute;border-radius:50%;pointer-events:none}
.hero::before{width:520px;height:520px;right:-140px;top:-180px;background:radial-gradient(circle,rgba(255,107,26,.55),transparent 70%)}
.hero::after{width:380px;height:380px;left:-120px;bottom:-200px;border:60px solid rgba(255,255,255,.06)}
.hero .container{position:relative;z-index:2}
.hero-video{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;opacity:.25;z-index:1}

.talk-hero{position:relative;overflow:hidden;background:linear-gradient(135deg,#0a1128,#1b2a5c);color:#fff;text-align:center;padding:110px 0 90px}
.talk-hero h1{font-size:clamp(2.6rem,7vw,5rem)}
.talk-hero p{color:#cbd5e1;max-width:620px;margin:16px auto 0}
.talk-hero::before{content:"";position:absolute;width:560px;height:560px;border-radius:50%;right:-160px;top:-200px;background:radial-gradient(circle,rgba(255,107,26,.6),transparent 70%)}
.talk-hero::after{content:"";position:absolute;width:420px;height:420px;border-radius:50%;left:-140px;bottom:-220px;border:64px solid rgba(255,255,255,.06)}
.talk-hero .container{position:relative;z-index:2}

.office-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:40px}
.office{background:#fff;border:1px solid var(--line);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);border-top:5px solid var(--primary)}
.office .flag{font-size:2rem;margin-bottom:8px}
.office p{color:var(--muted);font-size:.95rem;margin:4px 0}
.office a.dir{display:inline-block;margin-top:12px;color:var(--primary);font-weight:600}

.inquiry{display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:start}
.art-panel{background:linear-gradient(135deg,var(--ink),#1b2a5c);border-radius:28px;padding:40px;color:#fff;min-height:100%}
.art-panel ul{list-style:none;margin-top:18px}
.art-panel li{padding:10px 0;border-bottom:1px solid rgba(255,255,255,.12)}

.trust{display:grid;grid-template-columns:auto 1fr;gap:34px;align-items:center;background:#fff;border:1px solid var(--line);border-radius:28px;padding:38px;box-shadow:var(--shadow)}
.badge{width:130px;height:130px;border-radius:50%;background:linear-gradient(135deg,var(--primary),var(--accent));display:grid;place-items:center;text-align:center;color:#fff;font-weight:800;font-size:.95rem;line-height:1.2;padding:14px}

.clocks{display:flex;gap:26px;flex-wrap:wrap;justify-content:center;margin-top:26px}
.clock{background:rgba(255,255,255,.06);border-radius:14px;padding:10px 20px;text-align:center}
.clock b{display:block;color:var(--accent);font-size:1.3rem}
.social{display:flex;gap:12px;margin-top:14px}
.social a{width:38px;height:38px;border-radius:50%;background:#1b2a5c;display:grid;place-items:center;font-weight:700;color:#fff}
.social a:hover{background:var(--primary)}

@media(max-width:900px){.office-grid,.inquiry,.trust{grid-template-columns:1fr}.trust{text-align:center}.badge{margin:auto}.topbar .container{justify-content:center}}
`;

// ===================== script.js =====================
SITE["script.js"] = `// ====== SETTINGS: change these to your own details ======
const BRAND = { whatsapp: "94770000000" }; // fallback only; real number is set in .env (WHATSAPP_NUMBER)

document.addEventListener("DOMContentLoaded", () => {
  // mobile menu
  const burger = document.querySelector(".burger"), menu = document.querySelector(".menu");
  if (burger) burger.addEventListener("click", () => menu.classList.toggle("open"));

  // active link
  const here = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".menu a").forEach(a => {
    if (a.getAttribute("href") === here) a.classList.add("active");
  });

  // reveal on scroll
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); }
  }), { threshold: .15 });
  document.querySelectorAll(".reveal").forEach(el => io.observe(el));

  // counters
  const cio = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    const el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "";
    let n = 0; const step = Math.max(1, Math.ceil(end / 80));
    const t = setInterval(() => {
      n = Math.min(end, n + step);
      el.textContent = n.toLocaleString() + suf;
      if (n >= end) clearInterval(t);
    }, 20);
    cio.unobserve(el);
  }), { threshold: .5 });
  document.querySelectorAll("[data-count]").forEach(el => cio.observe(el));

  // testimonials slider
  const slides = document.querySelectorAll(".slide"), dots = document.querySelector(".dots");
  if (slides.length) {
    let i = 0;
    slides.forEach((_, k) => { const d = document.createElement("i"); d.onclick = () => go(k); dots.appendChild(d); });
    const go = k => {
      i = k;
      slides.forEach((s, x) => s.classList.toggle("on", x === i));
      [...dots.children].forEach((d, x) => d.classList.toggle("on", x === i));
    };
    go(0); setInterval(() => go((i + 1) % slides.length), 5500);
  }

  // faq
  document.querySelectorAll(".faq-q").forEach(b =>
    b.addEventListener("click", () => b.parentElement.classList.toggle("open")));

  // price calculator
  const calc = document.getElementById("calc");
  if (calc) {
    const out = document.getElementById("calcTotal");
    const update = () => {
      let sum = 0;
      calc.querySelectorAll("[data-price]").forEach(el => {
        if (el.type === "checkbox") { if (el.checked) sum += +el.dataset.price; }
        else sum += (+el.value || 0) * +el.dataset.price;
      });
      out.textContent = "LKR " + sum.toLocaleString();
      calc.dataset.total = sum;
    };
    calc.addEventListener("input", update); update();
  }

  // video modal (put your mp4 in assets/video/ and set data-video on the button)
  const modal = document.querySelector(".modal");
  document.querySelectorAll("[data-video]").forEach(btn => btn.addEventListener("click", () => {
    const v = modal.querySelector("video"); v.src = btn.dataset.video;
    modal.classList.add("open"); v.play().catch(() => {});
  }));
  if (modal) {
    const close = () => { modal.classList.remove("open"); modal.querySelector("video").pause(); };
    modal.addEventListener("click", e => { if (e.target === modal) close(); });
    modal.querySelector(".modal-x").addEventListener("click", close);
  }

  // WhatsApp number comes from the server (.env WHATSAPP_NUMBER)
  fetch("/api/config").then(r => r.json()).then(c => {
    if (c && c.whatsapp) {
      BRAND.whatsapp = c.whatsapp;
      document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
        a.href = "https://wa.me/" + c.whatsapp;
        a.removeAttribute("onclick");
        a.target = "_blank";
      });
    }
  }).catch(() => {});

  // forms -> save lead on the server, then open WhatsApp
  document.querySelectorAll("form[data-wa]").forEach(f => f.addEventListener("submit", e => {
    e.preventDefault();
    const d = new FormData(f);
    const body = Object.fromEntries(d.entries());
    body.type = f.dataset.wa;
    const c = document.getElementById("calc");
    if (c && f.dataset.wa === "order") body.total = String(c.dataset.total || "");

    let msg = "New enquiry%0A";
    d.forEach((v, k) => msg += \`\${encodeURIComponent(k)}: \${encodeURIComponent(v)}%0A\`);
    if (body.total) msg += \`Estimated total: LKR \${body.total}\`;

    const btn = f.querySelector("button[type=submit]");
    const label = btn ? btn.textContent : "";
    if (btn) { btn.disabled = true; btn.textContent = "Sending..."; }

    fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }).catch(() => {}).finally(() => {
      if (btn) { btn.disabled = false; btn.textContent = label; }
      f.reset();
      window.open(\`https://wa.me/\${BRAND.whatsapp}?text=\${msg}\`, "_blank");
    });
  }));
});
`;

const PAGES = {
  "/": "index.html",
  "/index.html": "index.html",
  "/products.html": "products.html",
  "/contact.html": "contact.html",
};
for (const [route, file] of Object.entries(PAGES)) {
  app.get(route, (req, res) => res.type("html").send(SITE[file]));
}
app.get("/style.css", (req, res) => res.type("css").send(SITE["style.css"]));
app.get("/script.js", (req, res) => res.type("js").send(SITE["script.js"]));

// optional: put your own videos/photos in an "assets" folder next to this file
// e.g. assets/video/demo.mp4 and assets/video/pos.mp4
app.use("/assets", express.static(path.join(__dirname, "assets")));

app.use((req, res) => {
  res.status(404).send("<h1>404 - Page not found</h1><a href='/'>Go home</a>");
});

module.exports = app;
