const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const DATA_DIR = path.join(__dirname, "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");
app.use(express.json({ limit: "50kb" }));

function readLeads() { try { return JSON.parse(fs.readFileSync(LEADS_FILE, "utf8")); } catch { return []; } }
function saveLeads(l) { fs.mkdirSync(DATA_DIR, { recursive: true }); fs.writeFileSync(LEADS_FILE, JSON.stringify(l, null, 2)); }
const clean = (v, n = 500) => String(v || "").slice(0, n).trim();

// ================= API =================
app.get("/api/config", (req, res) => res.json({ whatsapp: process.env.WHATSAPP_NUMBER || "94770000000" }));

app.post("/api/contact", (req, res) => {
  const b = req.body || {};
  const lead = {
    id: Date.now(), time: new Date().toISOString(),
    type: clean(b.type, 20) || "contact", name: clean(b.Name), mobile: clean(b.Mobile),
    company: clean(b.Institute), interest: clean(b.Interest), message: clean(b.Message, 1500), total: clean(b.total, 20),
  };
  if (!lead.mobile) return res.status(400).json({ ok: false, error: "Mobile number required" });
  const list = readLeads(); list.push(lead); saveLeads(list);
  res.json({ ok: true });
});

// open: /api/leads?key=YOUR_ADMIN_KEY
app.get("/api/leads", (req, res) => {
  if (!process.env.ADMIN_KEY || req.query.key !== process.env.ADMIN_KEY) return res.status(401).json({ error: "Unauthorized" });
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
<title>LYNKO Web Design (Pvt) Ltd | Website Design &amp; Development Sri Lanka</title>
<meta name="description" content="LYNKO Web Design (Pvt) Ltd builds fast, modern websites, web systems and online stores for Sri Lankan businesses.">
<script>
(function(){try{var t=localStorage.getItem("lynko-theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","light")}})();
</script>
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
</head>
<body>

<header>
  <div class="container nav">
    <a href="#top" class="logo"><i>L</i> LYNKO</a>
    <nav class="menu">
      <a href="#services">Services</a>
      <a href="#work">Our Work</a>
      <a href="#live">Live System</a>
      <a href="#pricing">Pricing</a>
      <a href="#bill">Get Bill</a>
      <a href="#contact">Contact</a>
    </nav>
    <div class="nav-right">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark / light mode" title="Dark / Light">🌙</button>
      <a href="#bill" class="btn btn-primary btn-sm">Get a Quote</a>
      <button class="burger" aria-label="Menu">☰</button>
    </div>
  </div>
</header>

<!-- HERO -->
<section class="hero" id="top">
  <div class="container hero-grid">
    <div>
      <span class="live-pill"><span class="dot"></span> We are online · Colombo <b id="lkTime">--:--</b></span>
      <h1>We build websites that <span class="grad-text">grow your business</span></h1>
      <p class="lead">LYNKO Web Design (Pvt) Ltd designs and develops fast, beautiful websites, online stores and custom web systems for Sri Lankan businesses.</p>
      <div class="hero-actions">
        <a href="#pricing" class="btn btn-primary">See Packages →</a>
        <a href="#bill" class="btn btn-ghost">Calculate My Bill</a>
      </div>
    </div>
    <div class="float">
      <svg viewBox="0 0 480 380" role="img" aria-label="Website design illustration">
        <defs><linearGradient id="hg" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#6d5efc"/><stop offset="1" stop-color="#00d4c8"/></linearGradient></defs>
        <rect x="20" y="30" width="360" height="250" rx="20" fill="var(--surface)" stroke="var(--line)"/>
        <rect x="20" y="30" width="360" height="38" rx="20" fill="var(--surface2)"/>
        <circle cx="44" cy="49" r="5" fill="#ff5f57"/><circle cx="62" cy="49" r="5" fill="#febc2e"/><circle cx="80" cy="49" r="5" fill="#28c840"/>
        <rect x="44" y="90" width="170" height="16" rx="8" fill="url(#hg)"/>
        <rect x="44" y="118" width="250" height="10" rx="5" fill="var(--line)"/><rect x="44" y="136" width="200" height="10" rx="5" fill="var(--line)"/>
        <rect x="44" y="164" width="90" height="30" rx="15" fill="url(#hg)"/>
        <rect x="44" y="214" width="96" height="50" rx="10" fill="var(--surface2)"/><rect x="152" y="214" width="96" height="50" rx="10" fill="var(--surface2)"/><rect x="260" y="214" width="96" height="50" rx="10" fill="var(--surface2)"/>
        <circle cx="320" cy="130" r="42" fill="url(#hg)" opacity=".9"/>
        <rect x="290" y="250" width="170" height="110" rx="16" fill="var(--surface)" stroke="var(--line)"/>
        <rect x="306" y="270" width="80" height="10" rx="5" fill="var(--line)"/>
        <g fill="url(#hg)"><rect x="308" y="318" width="16" height="28" rx="3"/><rect x="332" y="304" width="16" height="42" rx="3"/><rect x="356" y="310" width="16" height="36" rx="3"/><rect x="380" y="292" width="16" height="54" rx="3"/><rect x="404" y="300" width="16" height="46" rx="3"/></g>
      </svg>
    </div>
  </div>
</section>

<!-- STATS -->
<div class="stats"><div class="container stats-grid">
  <div><b data-count="150" data-suffix="+">0</b><span>Projects delivered (sample)</span></div>
  <div><b data-count="120" data-suffix="+">0</b><span>Happy clients (sample)</span></div>
  <div><b data-count="5" data-suffix="+">0</b><span>Years experience (sample)</span></div>
  <div><b data-count="99" data-suffix="%">0</b><span>Client satisfaction (sample)</span></div>
</div></div>

<!-- SERVICES -->
<section id="services">
  <div class="container center">
    <span class="tag">What we do</span>
    <h2>Everything you need to be online</h2>
    <p class="lead">From a simple business site to a full web system, we handle design, development, hosting and support.</p>
    <div class="grid g3">
      <div class="card reveal"><div class="ico">🎨</div><h3>Website Design</h3><p>Modern, mobile-first designs that match your brand and turn visitors into customers.</p></div>
      <div class="card reveal"><div class="ico">💻</div><h3>Web Development</h3><p>Fast, secure, SEO-ready websites built with clean, maintainable code.</p></div>
      <div class="card reveal"><div class="ico">🛒</div><h3>E-Commerce Stores</h3><p>Online shops with product management, cart, orders and local payment gateways.</p></div>
      <div class="card reveal"><div class="ico">⚙️</div><h3>Custom Web Systems</h3><p>Booking, POS, LMS, inventory and management systems tailored to your workflow.</p></div>
      <div class="card reveal"><div class="ico">🔍</div><h3>SEO &amp; Marketing</h3><p>On-page SEO, Google Business setup and analytics so customers can find you.</p></div>
      <div class="card reveal"><div class="ico">🛟</div><h3>Hosting &amp; Support</h3><p>Domain, hosting, SSL, backups and monthly maintenance with quick support.</p></div>
    </div>
  </div>
</section>

<!-- OUR WORK: scrolling cards -->
<section id="work" style="background:var(--surface2)">
  <div class="container center">
    <span class="tag">Our work</span>
    <h2>Recent projects</h2>
    <p class="lead">Hover to pause. Swap the sample screenshots with your real project images in <b>script.js</b> (PROJECTS list).</p>
  </div>
  <div class="scroller"><div class="track" id="track1"></div></div>
  <div class="scroller rev" style="margin-top:22px"><div class="track" id="track2"></div></div>
</section>

<!-- LIVE SYSTEM -->
<section id="live">
  <div class="container">
    <div class="center">
      <span class="tag">Live system</span>
      <h2>See a real-time system in action</h2>
      <p class="lead">A live demo of the kind of dashboard we build. Orders, revenue and visitors update in real time (simulated data).</p>
    </div>
    <div class="live-wrap">
      <div class="browser reveal">
        <div class="browser-bar"><i></i><i></i><i></i><span>🔒 demo.lynko.lk/dashboard</span><span class="live-badge" style="flex:none;background:rgba(22,163,74,.12);border:0"><span class="dot"></span>LIVE</span></div>
        <div class="dash">
          <div class="kpis">
            <div class="kpi"><small>Orders today</small><b id="kOrders">0</b></div>
            <div class="kpi"><small>Revenue (LKR)</small><b id="kRev">0</b></div>
            <div class="kpi"><small>Visitors now</small><b id="kVis">0</b></div>
          </div>
          <div class="bars" id="bars"></div>
          <ul class="feed" id="feed"></ul>
        </div>
      </div>
      <div class="side-list">
        <div class="card reveal"><h3>🔔 Instant notifications</h3><p>Get alerts by SMS, email or WhatsApp the moment an order or booking arrives.</p></div>
        <div class="card reveal"><h3>📊 Real-time reports</h3><p>Sales, stock and customer reports update live. No manual spreadsheets.</p></div>
        <div class="card reveal"><h3>🔐 Secure admin panel</h3><p>Role-based logins so your team sees only what they should.</p></div>
        <div class="card reveal"><h3>📱 Works everywhere</h3><p>Fully responsive on phones, tablets and desktops.</p></div>
      </div>
    </div>
  </div>
</section>

<!-- PROCESS -->
<section style="background:var(--surface2)">
  <div class="container center">
    <span class="tag">How we work</span>
    <h2>From idea to launch in 4 steps</h2>
    <div class="grid g4 steps">
      <div class="card step reveal"><h3>Discover</h3><p>We learn your business, goals and customers.</p></div>
      <div class="card step reveal"><h3>Design</h3><p>You approve a custom design before we code.</p></div>
      <div class="card step reveal"><h3>Develop</h3><p>We build, test and optimise for speed and SEO.</p></div>
      <div class="card step reveal"><h3>Launch</h3><p>Go live with training and ongoing support.</p></div>
    </div>
  </div>
</section>

<!-- PRICING -->
<section id="pricing">
  <div class="container">
    <div class="center">
      <span class="tag">Pricing</span>
      <h2>Simple, transparent packages</h2>
      <p class="lead">Sample prices. Edit the PACKAGES list in script.js to set your real packages and rates.</p>
    </div>
    <div class="pk-grid" id="pkGrid"></div>
  </div>
</section>

<!-- BILL -->
<section id="bill" style="background:var(--surface2)">
  <div class="container">
    <div class="center">
      <span class="tag">Instant bill</span>
      <h2>Build your quote &amp; get your bill</h2>
      <p class="lead">Choose a package and add-ons. The invoice updates live. Print it, save as PDF or send it to us on WhatsApp.</p>
    </div>
    <div class="bill-wrap">
      <div class="panel reveal">
        <h3 style="margin-bottom:16px">1. Your details</h3>
        <div class="row2">
          <div class="field"><label>Client / company name</label><input id="bName" placeholder="e.g. ABC Traders"></div>
          <div class="field"><label>Mobile number</label><input id="bMobile" type="tel" placeholder="07X XXX XXXX"></div>
        </div>
        <h3 style="margin:10px 0 12px">2. Package</h3>
        <div class="field"><select id="bPackage"></select></div>
        <h3 style="margin:10px 0 4px">3. Add-ons</h3>
        <div id="bAddons"></div>
        <div class="row2" style="margin-top:16px">
          <div class="field"><label>Discount (%)</label><input id="bDisc" type="number" min="0" max="100" value="0"></div>
          <div class="field"><label>VAT</label><select id="bVat"><option value="0">No VAT</option><option value="18">VAT 18%</option></select></div>
        </div>
      </div>

      <div class="invoice reveal" id="invoice">
        <div class="inv-head">
          <div><h3>INVOICE / QUOTE</h3><small id="invNo">LYN-000000</small></div>
          <div style="text-align:right"><b>LYNKO Web Design (Pvt) Ltd</b><br><small>Colombo, Sri Lanka<br>+94 77 000 0000</small></div>
        </div>
        <div style="display:flex;justify-content:space-between;margin-bottom:14px;font-size:.9rem">
          <div><small style="color:#666">BILL TO</small><br><b id="invClient">-</b><br><span id="invMobile"></span></div>
          <div style="text-align:right"><small style="color:#666">DATE</small><br><b id="invDate"></b></div>
        </div>
        <table><thead><tr><th>Item</th><th class="r">Qty</th><th class="r">Amount (LKR)</th></tr></thead><tbody id="invRows"></tbody></table>
        <div class="totals">
          <div><span>Subtotal</span><span id="tSub">0</span></div>
          <div><span>Discount</span><span id="tDisc">0</span></div>
          <div><span id="tVatLabel">VAT</span><span id="tVat">0</span></div>
          <div class="grand"><span>TOTAL</span><span id="tTotal">LKR 0</span></div>
          <div><span>Advance (50%)</span><span id="tAdv">0</span></div>
        </div>
        <p class="inv-note">This is a quotation. 50% advance to start work, balance on delivery. Valid for 14 days.</p>
        <div class="inv-actions">
          <button class="btn btn-primary btn-sm" id="btnPrint">🖨 Print / Save PDF</button>
          <button class="btn btn-wa btn-sm" id="btnWa">Send on WhatsApp</button>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- FAQ -->
<section id="faq">
  <div class="container">
    <div class="center"><span class="tag">FAQ</span><h2>Questions we often get</h2></div>
    <div class="faq">
      <div class="faq-item"><button class="faq-q">How long does a website take? <span>+</span></button><div class="faq-a">A starter website usually takes 5 to 7 working days once we have your content. Larger systems take longer.</div></div>
      <div class="faq-item"><button class="faq-q">Do you provide domain and hosting? <span>+</span></button><div class="faq-a">Yes. Packages include a domain and hosting for the first year, with easy renewal.</div></div>
      <div class="faq-item"><button class="faq-q">Can I update the website myself? <span>+</span></button><div class="faq-a">Business and E-Commerce packages come with an admin panel and training.</div></div>
      <div class="faq-item"><button class="faq-q">What payment methods do you accept? <span>+</span></button><div class="faq-a">Bank deposit, online card payment and cash. 50% advance, balance on delivery.</div></div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact" style="background:var(--surface2)">
  <div class="container">
    <div class="center"><span class="tag">Contact</span><h2>Let's build your website</h2><p class="lead">Tell us about your project and we'll reply on WhatsApp.</p></div>
    <div class="contact-wrap">
      <div class="panel reveal">
        <form id="contactForm">
          <div class="row2">
            <div class="field"><label>Your name *</label><input name="Name" required></div>
            <div class="field"><label>Mobile *</label><input name="Mobile" type="tel" required></div>
          </div>
          <div class="row2">
            <div class="field"><label>Company</label><input name="Institute"></div>
            <div class="field"><label>Interested in</label><select name="Interest"><option>Package 1</option><option>Package 2</option><option>Package 3</option><option>Custom system</option></select></div>
          </div>
          <div class="field"><label>Message</label><textarea name="Message" rows="4"></textarea></div>
          <button class="btn btn-primary" type="submit">Send message →</button>
        </form>
      </div>
      <div class="panel reveal">
        <h3>Talk to us</h3>
        <ul class="info">
          <li><span>📞</span><div><b>Phone</b><br>+94 11 000 0000</div></li>
          <li><span>💬</span><div><b>WhatsApp</b><br>+94 77 000 0000</div></li>
          <li><span>✉️</span><div><b>Email</b><br>hello@lynko.lk</div></li>
          <li><span>📍</span><div><b>Office</b><br>Colombo, Sri Lanka</div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container foot-grid">
    <div><a class="logo" href="#top"><i>L</i> LYNKO</a><p style="margin-top:12px;color:var(--muted);font-size:.92rem">LYNKO Web Design (Pvt) Ltd. Websites and web systems for Sri Lankan businesses.</p></div>
    <div><h4>Services</h4><ul><li><a href="#services">Web Design</a></li><li><a href="#services">Development</a></li><li><a href="#services">E-Commerce</a></li><li><a href="#services">SEO</a></li></ul></div>
    <div><h4>Company</h4><ul><li><a href="#work">Our Work</a></li><li><a href="#pricing">Pricing</a></li><li><a href="#bill">Get Bill</a></li><li><a href="#faq">FAQ</a></li></ul></div>
    <div><h4>Contact</h4><ul><li>Colombo, Sri Lanka</li><li>+94 77 000 0000</li><li>hello@lynko.lk</li></ul></div>
  </div>
  <div class="container copy">© 2026 LYNKO Web Design (Pvt) Ltd. All rights reserved.</div>
</footer>

<a class="wa-float" id="waFloat" href="https://wa.me/94770000000" target="_blank" aria-label="WhatsApp">💬</a>
<div class="toast" id="toast"></div>
</body>
</html>
`;

// ===================== style.css =====================
SITE["style.css"] = `:root{
  --bg:#f5f7fb;--surface:#ffffff;--surface2:#eef1f8;--ink:#0b1020;--muted:#5b6479;--line:#e1e6f0;
  --brand:#6d5efc;--brand2:#00d4c8;--grad:linear-gradient(135deg,#6d5efc,#00d4c8);
  --ok:#16a34a;--warn:#f59e0b;--radius:20px;--shadow:0 12px 34px rgba(20,30,70,.10);
}
[data-theme="dark"]{
  --bg:#070a16;--surface:#0f1424;--surface2:#151b31;--ink:#eef1ff;--muted:#9aa4c2;--line:#222a47;
  --shadow:0 12px 34px rgba(0,0,0,.45);
}
*{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth}
body{font-family:'Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.6;transition:background .3s,color .3s}
img,svg{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{width:min(1200px,92%);margin:auto}
section{padding:88px 0}
h1,h2,h3{line-height:1.12;letter-spacing:-.02em}
h1{font-size:clamp(2.3rem,5.4vw,4.2rem);font-weight:800}
h2{font-size:clamp(1.8rem,3.6vw,2.7rem);font-weight:800;margin-bottom:12px}
h3{font-size:1.15rem;font-weight:700;margin-bottom:6px}
.lead{color:var(--muted);font-size:1.08rem;max-width:660px}
.center{text-align:center}.center .lead{margin:auto}
.grad-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.tag{display:inline-block;padding:6px 14px;border-radius:999px;background:var(--surface2);border:1px solid var(--line);font-size:.8rem;font-weight:600;color:var(--brand);margin-bottom:14px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:999px;font:600 1rem inherit;font-family:inherit;border:2px solid transparent;cursor:pointer;transition:.25s}
.btn-primary{background:var(--grad);color:#fff;box-shadow:0 10px 26px rgba(109,94,252,.35)}
.btn-primary:hover{transform:translateY(-2px)}
.btn-ghost{border-color:var(--line);background:var(--surface);color:var(--ink)}
.btn-ghost:hover{border-color:var(--brand);color:var(--brand)}
.btn-wa{background:#22c55e;color:#fff}
.btn-sm{padding:9px 18px;font-size:.9rem}

/* header */
header{position:sticky;top:0;z-index:50;background:color-mix(in srgb,var(--bg) 85%,transparent);backdrop-filter:blur(14px);border-bottom:1px solid var(--line)}
.nav{display:flex;align-items:center;justify-content:space-between;height:72px;gap:16px}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.35rem}
.logo i{width:38px;height:38px;border-radius:11px;background:var(--grad);display:grid;place-items:center;color:#fff;font-style:normal}
.menu{display:flex;gap:24px;align-items:center;font-weight:500}
.menu a:hover{color:var(--brand)}
.nav-right{display:flex;gap:10px;align-items:center}
.theme-toggle{width:46px;height:46px;border-radius:50%;border:1px solid var(--line);background:var(--surface);color:var(--ink);cursor:pointer;font-size:1.2rem;display:grid;place-items:center;transition:.25s}
.theme-toggle:hover{border-color:var(--brand);transform:rotate(18deg)}
.burger{display:none;background:none;border:0;font-size:1.8rem;cursor:pointer;color:var(--ink)}

/* hero */
.hero{position:relative;overflow:hidden;padding:84px 0 70px}
.hero::before{content:"";position:absolute;width:620px;height:620px;border-radius:50%;right:-180px;top:-220px;background:radial-gradient(circle,rgba(109,94,252,.35),transparent 70%)}
.hero::after{content:"";position:absolute;width:480px;height:480px;border-radius:50%;left:-160px;bottom:-240px;background:radial-gradient(circle,rgba(0,212,200,.25),transparent 70%)}
.hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
.hero .lead{margin:18px 0 28px}
.live-pill{display:inline-flex;gap:8px;align-items:center;background:var(--surface);border:1px solid var(--line);padding:7px 14px;border-radius:999px;font-size:.82rem;font-weight:600;margin-bottom:18px;box-shadow:var(--shadow)}
.dot{width:9px;height:9px;border-radius:50%;background:var(--ok);box-shadow:0 0 0 0 rgba(22,163,74,.6);animation:ping 1.6s infinite}
@keyframes ping{70%{box-shadow:0 0 0 10px rgba(22,163,74,0)}100%{box-shadow:0 0 0 0 rgba(22,163,74,0)}}
.float{animation:float 5s ease-in-out infinite}
@keyframes float{50%{transform:translateY(-14px)}}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap}

/* stats */
.stats{padding:0}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:30px;box-shadow:var(--shadow);text-align:center;margin-top:-20px;position:relative;z-index:3}
.stats b{display:block;font-size:2.2rem;font-weight:800}
.stats span{color:var(--muted);font-size:.92rem}

/* cards */
.grid{display:grid;gap:22px;margin-top:44px}
.g3{grid-template-columns:repeat(3,1fr)}.g4{grid-template-columns:repeat(4,1fr)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);transition:.3s}
.card:hover{transform:translateY(-6px);border-color:var(--brand)}
.ico{width:54px;height:54px;border-radius:15px;background:var(--surface2);display:grid;place-items:center;font-size:1.5rem;margin-bottom:16px}
.card p{color:var(--muted);font-size:.95rem}

/* scrolling image cards */
.scroller{overflow:hidden;margin-top:44px;mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.track{display:flex;gap:22px;width:max-content;animation:scroll 40s linear infinite}
.scroller.rev .track{animation-direction:reverse;animation-duration:48s}
.scroller:hover .track{animation-play-state:paused}
@keyframes scroll{to{transform:translateX(-50%)}}
.pcard{width:340px;flex:none;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);transition:.3s}
.pcard:hover{transform:translateY(-6px) scale(1.02);border-color:var(--brand)}
.pcard .shot{aspect-ratio:16/10;background:var(--surface2);overflow:hidden}
.pcard .shot img,.pcard .shot svg{width:100%;height:100%;object-fit:cover}
.pcard .meta{padding:16px 18px;display:flex;justify-content:space-between;align-items:center;gap:10px}
.pcard small{color:var(--muted)}
.live-badge{display:inline-flex;gap:6px;align-items:center;font-size:.72rem;font-weight:700;color:var(--ok);background:rgba(22,163,74,.12);padding:4px 10px;border-radius:999px;white-space:nowrap}
.live-badge .dot{width:7px;height:7px}

/* live system */
.live-wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;margin-top:44px;align-items:stretch}
.browser{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);box-shadow:var(--shadow);overflow:hidden}
.browser-bar{display:flex;gap:7px;align-items:center;padding:12px 16px;background:var(--surface2);border-bottom:1px solid var(--line)}
.browser-bar i{width:11px;height:11px;border-radius:50%;background:#ff5f57}.browser-bar i:nth-child(2){background:#febc2e}.browser-bar i:nth-child(3){background:#28c840}
.browser-bar span{margin-left:10px;background:var(--bg);border:1px solid var(--line);border-radius:999px;padding:3px 14px;font-size:.78rem;color:var(--muted);flex:1}
.dash{padding:22px}
.kpis{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.kpi{background:var(--surface2);border-radius:14px;padding:14px}
.kpi small{color:var(--muted);font-size:.78rem}
.kpi b{display:block;font-size:1.4rem}
.bars{display:flex;gap:7px;align-items:flex-end;height:110px;margin:20px 0 14px}
.bars i{flex:1;background:var(--grad);border-radius:6px 6px 0 0;transition:height .8s}
.feed{list-style:none;max-height:150px;overflow:hidden}
.feed li{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px dashed var(--line);font-size:.9rem;animation:slide .5s}
@keyframes slide{from{opacity:0;transform:translateY(-10px)}}
.feed b{color:var(--ok)}
.side-list{display:grid;gap:14px}
.side-list .card{padding:20px}

/* pricing */
.pk-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px;align-items:stretch}
.pk{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:26px;padding:34px;box-shadow:var(--shadow);display:flex;flex-direction:column;transition:.3s}
.pk.featured{border:2px solid var(--brand);transform:translateY(-10px)}
.pk .ribbon{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--grad);color:#fff;font-size:.78rem;font-weight:700;padding:5px 16px;border-radius:999px}
.pk .price{font-size:2.5rem;font-weight:800;margin:10px 0 2px}
.pk .price small{font-size:.95rem;color:var(--muted);font-weight:500}
.pk ul{list-style:none;margin:20px 0 26px;flex:1}
.pk li{padding:7px 0 7px 30px;position:relative;font-size:.95rem}
.pk li::before{content:"✓";position:absolute;left:0;top:8px;width:20px;height:20px;border-radius:50%;background:var(--grad);color:#fff;font-size:.72rem;display:grid;place-items:center}
.pk .btn{justify-content:center;width:100%}

/* bill */
.bill-wrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:44px;align-items:start}
.panel{background:var(--surface);border:1px solid var(--line);border-radius:26px;padding:30px;box-shadow:var(--shadow)}
.field{margin-bottom:14px}
.field label{display:block;font-weight:600;font-size:.88rem;margin-bottom:6px}
.field input,.field select,.field textarea{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:var(--bg);color:var(--ink);font:inherit}
.field input:focus,.field select:focus,.field textarea:focus{outline:2px solid var(--brand);border-color:transparent}
.row2{display:grid;grid-template-columns:1fr 1fr;gap:14px}
.addon{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:10px 0;border-bottom:1px dashed var(--line);font-size:.93rem}
.addon label{display:flex;gap:10px;align-items:center;cursor:pointer;flex:1}
.addon input[type=checkbox]{accent-color:var(--brand);width:17px;height:17px}
.addon input[type=number]{width:62px;padding:5px 8px;border-radius:8px;border:1px solid var(--line);background:var(--bg);color:var(--ink)}
.invoice{background:#fff;color:#111;border-radius:20px;padding:30px;border:1px solid var(--line);box-shadow:var(--shadow)}
.inv-head{display:flex;justify-content:space-between;gap:12px;border-bottom:2px solid #111;padding-bottom:14px;margin-bottom:14px}
.inv-head h3{font-size:1.5rem;margin:0}
.invoice table{width:100%;border-collapse:collapse;font-size:.9rem}
.invoice th{text-align:left;font-size:.75rem;text-transform:uppercase;color:#666;padding:8px 0;border-bottom:1px solid #ddd}
.invoice td{padding:8px 0;border-bottom:1px solid #eee;vertical-align:top}
.invoice td.r,.invoice th.r{text-align:right}
.totals{margin-top:14px;margin-left:auto;width:min(300px,100%)}
.totals div{display:flex;justify-content:space-between;padding:4px 0}
.totals .grand{border-top:2px solid #111;margin-top:6px;padding-top:8px;font-size:1.25rem;font-weight:800}
.inv-note{margin-top:16px;font-size:.78rem;color:#666}
.inv-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}

/* process / faq / cta */
.steps{counter-reset:s}
.step{position:relative;padding-top:58px}
.step::before{counter-increment:s;content:counter(s);position:absolute;top:0;left:28px;width:40px;height:40px;border-radius:50%;background:var(--grad);color:#fff;display:grid;place-items:center;font-weight:700}
.faq{max-width:820px;margin:40px auto 0}
.faq-item{background:var(--surface);border:1px solid var(--line);border-radius:14px;margin-bottom:12px;overflow:hidden}
.faq-q{width:100%;text-align:left;padding:18px 22px;background:none;border:0;color:var(--ink);font:600 1rem inherit;font-family:inherit;cursor:pointer;display:flex;justify-content:space-between}
.faq-q span{transition:.3s}
.faq-a{max-height:0;overflow:hidden;transition:.35s;padding:0 22px;color:var(--muted)}
.faq-item.open .faq-a{max-height:220px;padding:0 22px 18px}
.faq-item.open .faq-q span{transform:rotate(45deg)}
.contact-wrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;margin-top:44px}
.info li{list-style:none;display:flex;gap:14px;padding:14px 0;border-bottom:1px solid var(--line)}

footer{background:var(--surface);border-top:1px solid var(--line);padding:54px 0 22px}
.foot-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr 1fr;gap:30px}
footer h4{margin-bottom:12px}
footer li{list-style:none;margin-bottom:8px;font-size:.92rem;color:var(--muted)}
footer a:hover{color:var(--brand)}
.copy{border-top:1px solid var(--line);margin-top:34px;padding-top:18px;text-align:center;color:var(--muted);font-size:.85rem}
.wa-float{position:fixed;right:20px;bottom:20px;width:58px;height:58px;border-radius:50%;background:#22c55e;color:#fff;display:grid;place-items:center;font-size:1.6rem;box-shadow:0 10px 25px rgba(34,197,94,.5);z-index:60}
.reveal{opacity:0;transform:translateY(30px);transition:.8s}
.reveal.show{opacity:1;transform:none}
.toast{position:fixed;left:50%;bottom:28px;transform:translateX(-50%) translateY(40px);background:var(--ink);color:var(--bg);padding:12px 22px;border-radius:999px;opacity:0;transition:.4s;z-index:90;font-weight:600}
.toast.show{opacity:1;transform:translateX(-50%)}

@media(max-width:960px){
  .hero-grid,.live-wrap,.bill-wrap,.contact-wrap{grid-template-columns:1fr}
  .g3,.g4,.pk-grid{grid-template-columns:1fr 1fr}
  .stats-grid{grid-template-columns:1fr 1fr}
  .pk.featured{transform:none}
  .foot-grid{grid-template-columns:1fr 1fr}
  .burger{display:block}
  .menu{position:absolute;top:72px;left:0;right:0;background:var(--bg);flex-direction:column;padding:20px;gap:16px;border-bottom:1px solid var(--line);display:none}
  .menu.open{display:flex}
  section{padding:62px 0}
}
@media(max-width:600px){.g3,.g4,.pk-grid,.row2,.kpis,.foot-grid{grid-template-columns:1fr}.pcard{width:270px}.nav-right .btn{display:none}}

@media print{
  body *{visibility:hidden}
  #invoice,#invoice *{visibility:visible}
  #invoice{position:absolute;left:0;top:0;width:100%;box-shadow:none;border:0}
  .inv-actions{display:none!important}
}
`;

// ===================== script.js =====================
SITE["script.js"] = `// ================= EDIT THESE: your packages, add-ons and projects =================
var BRAND = { whatsapp: "94770000000" }; // real number comes from .env (WHATSAPP_NUMBER)

var PACKAGES = [
  { id: "p1", name: "Package 1 · Starter", price: 45000, tag: "", note: "Best for small businesses",
    features: ["Up to 5 pages", "Mobile responsive design", "Contact form + WhatsApp button", "Basic SEO setup", "Free SSL certificate", "Domain + hosting (1 year)", "2 design revisions", "7 days delivery", "30 days free support"] },
  { id: "p2", name: "Package 2 · Business", price: 95000, tag: "Most popular", note: "For growing companies",
    features: ["Up to 10 pages", "Admin panel (edit content yourself)", "Blog / news section", "Advanced SEO + Google Analytics", "Google Maps + social integration", "Domain + hosting (1 year)", "3 design revisions", "14 days delivery", "90 days free support"] },
  { id: "p3", name: "Package 3 · E-Commerce", price: 185000, tag: "", note: "Sell online",
    features: ["Full online store", "Up to 50 products", "Cart, checkout and order management", "Payment gateway (PayHere)", "Customer accounts", "Domain + hosting (1 year)", "Training session", "21 days delivery", "180 days free support"] }
];

var ADDONS = [
  { id: "page", name: "Extra page", price: 3500, qty: true },
  { id: "logo", name: "Logo design", price: 12000 },
  { id: "copy", name: "Content writing", price: 8000 },
  { id: "photo", name: "Product / business photography", price: 15000 },
  { id: "seo", name: "SEO boost (3 months)", price: 30000 },
  { id: "maint", name: "Monthly maintenance (per month)", price: 6000, qty: true },
  { id: "host", name: "Domain + hosting renewal (per year)", price: 15000, qty: true }
];

// Replace "img" with a real screenshot path, e.g. "assets/img/shop1.jpg". Leave empty for an auto-generated mockup.
var PROJECTS = [
  { title: "Fresh Mart Online Store", cat: "E-Commerce", url: "#", img: "" },
  { title: "Sunrise Tuition Centre", cat: "Education", url: "#", img: "" },
  { title: "Ocean View Villas", cat: "Hotel & Travel", url: "#", img: "" },
  { title: "Prime Auto Parts", cat: "Business Website", url: "#", img: "" },
  { title: "DentCare Clinic", cat: "Healthcare", url: "#", img: "" },
  { title: "BuildRight Constructions", cat: "Corporate", url: "#", img: "" },
  { title: "Spice Garden Restaurant", cat: "Restaurant", url: "#", img: "" },
  { title: "FitZone Gym", cat: "Fitness", url: "#", img: "" }
];

// ================= helpers =================
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var fmt = function (n) { return Math.round(n).toLocaleString("en-US"); };
function toast(msg) { var t = $("#toast"); t.textContent = msg; t.classList.add("show"); setTimeout(function () { t.classList.remove("show"); }, 2600); }

document.addEventListener("DOMContentLoaded", function () {

  // ---- theme toggle (dark / light) ----
  var root = document.documentElement, tbtn = $("#themeToggle");
  function paintToggle() { tbtn.textContent = root.getAttribute("data-theme") === "dark" ? "☀️" : "🌙"; }
  paintToggle();
  tbtn.addEventListener("click", function () {
    var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try { localStorage.setItem("lynko-theme", next); } catch (e) {}
    paintToggle();
  });

  // ---- mobile menu ----
  var burger = $(".burger"), menu = $(".menu");
  burger.addEventListener("click", function () { menu.classList.toggle("open"); });
  $$(".menu a").forEach(function (a) { a.addEventListener("click", function () { menu.classList.remove("open"); }); });

  // ---- live Colombo clock ----
  function clock() { $("#lkTime").textContent = new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Colombo", hour: "2-digit", minute: "2-digit" }); }
  clock(); setInterval(clock, 20000);

  // ---- reveal + counters ----
  var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }); }, { threshold: .12 });
  function observeReveals() { $$(".reveal").forEach(function (el) { io.observe(el); }); }
  var cio = new IntersectionObserver(function (es) {
    es.forEach(function (e) {
      if (!e.isIntersecting) return;
      var el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "", n = 0, step = Math.max(1, Math.ceil(end / 60));
      var t = setInterval(function () { n = Math.min(end, n + step); el.textContent = n.toLocaleString() + suf; if (n >= end) clearInterval(t); }, 25);
      cio.unobserve(el);
    });
  }, { threshold: .5 });
  $$("[data-count]").forEach(function (el) { cio.observe(el); });

  // ---- project mockups (auto SVG when no image) ----
  var PALETTES = [["#6d5efc", "#00d4c8"], ["#ff6b6b", "#feca57"], ["#10b981", "#3b82f6"], ["#f97316", "#ec4899"], ["#0ea5e9", "#8b5cf6"], ["#14b8a6", "#84cc16"], ["#ef4444", "#f59e0b"], ["#6366f1", "#06b6d4"]];
  function mock(i) {
    var p = PALETTES[i % PALETTES.length], id = "m" + i;
    return '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice"><defs><linearGradient id="' + id + '" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="' + p[0] + '"/><stop offset="1" stop-color="' + p[1] + '"/></linearGradient></defs>' +
      '<rect width="320" height="200" fill="#f4f6fb"/><rect width="320" height="22" fill="#fff"/><rect x="10" y="8" width="40" height="6" rx="3" fill="' + p[0] + '"/>' +
      '<rect x="190" y="8" width="24" height="6" rx="3" fill="#cbd2e3"/><rect x="222" y="8" width="24" height="6" rx="3" fill="#cbd2e3"/><rect x="254" y="8" width="24" height="6" rx="3" fill="#cbd2e3"/>' +
      '<rect y="22" width="320" height="86" fill="url(#' + id + ')"/><rect x="22" y="44" width="130" height="12" rx="6" fill="#fff"/><rect x="22" y="64" width="96" height="7" rx="3.5" fill="#ffffffaa"/><rect x="22" y="80" width="54" height="16" rx="8" fill="#fff"/>' +
      '<circle cx="250" cy="66" r="30" fill="#ffffff55"/>' +
      '<rect x="18" y="122" width="88" height="62" rx="9" fill="#fff"/><rect x="116" y="122" width="88" height="62" rx="9" fill="#fff"/><rect x="214" y="122" width="88" height="62" rx="9" fill="#fff"/>' +
      '<rect x="26" y="130" width="72" height="26" rx="5" fill="' + p[1] + '44"/><rect x="124" y="130" width="72" height="26" rx="5" fill="' + p[0] + '44"/><rect x="222" y="130" width="72" height="26" rx="5" fill="' + p[1] + '44"/>' +
      '<rect x="26" y="164" width="50" height="6" rx="3" fill="#cbd2e3"/><rect x="124" y="164" width="50" height="6" rx="3" fill="#cbd2e3"/><rect x="222" y="164" width="50" height="6" rx="3" fill="#cbd2e3"/></svg>';
  }
  function cardHTML(p, i) {
    var shot = p.img ? '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy">' : mock(i);
    return '<a class="pcard" href="' + (p.url || "#") + '"' + (p.url && p.url !== "#" ? ' target="_blank" rel="noopener"' : "") + '><div class="shot">' + shot + '</div><div class="meta"><div><b>' + p.title + '</b><br><small>' + p.cat + '</small></div><span class="live-badge"><span class="dot"></span>LIVE</span></div></a>';
  }
  function fillTrack(id, list, offset) {
    var html = list.map(function (p, i) { return cardHTML(p, i + offset); }).join("");
    $(id).innerHTML = html + html; // doubled for a seamless loop
  }
  fillTrack("#track1", PROJECTS, 0);
  fillTrack("#track2", PROJECTS.slice().reverse(), 3);

  // ---- live system demo (simulated) ----
  var bars = $("#bars"), feed = $("#feed"), orders = 128, rev = 412500, vis = 37;
  var bv = []; for (var b = 0; b < 14; b++) { bv.push(20 + Math.random() * 70); bars.insertAdjacentHTML("beforeend", "<i></i>"); }
  function drawBars() { $$("i", bars).forEach(function (el, i) { el.style.height = bv[i] + "%"; }); }
  var names = ["Nimal P.", "Sanduni W.", "Kasun D.", "Ayesha F.", "Ravindu S.", "Tharushi M.", "Dilan K.", "Isuru H."];
  var items = ["Order #", "Booking #", "Invoice #", "Payment #"];
  function paintKpi() { $("#kOrders").textContent = orders; $("#kRev").textContent = fmt(rev); $("#kVis").textContent = vis; }
  function tick() {
    var amt = 1500 + Math.floor(Math.random() * 18000);
    orders++; rev += amt; vis = Math.max(12, vis + Math.floor(Math.random() * 7) - 3);
    bv.shift(); bv.push(25 + Math.random() * 70); drawBars(); paintKpi();
    var li = document.createElement("li");
    li.innerHTML = "<span>" + items[Math.floor(Math.random() * items.length)] + (1000 + orders) + " · " + names[Math.floor(Math.random() * names.length)] + "</span><b>+ LKR " + fmt(amt) + "</b>";
    feed.insertBefore(li, feed.firstChild);
    while (feed.children.length > 5) feed.removeChild(feed.lastChild);
  }
  drawBars(); paintKpi(); for (var k = 0; k < 4; k++) tick();
  setInterval(tick, 2600);

  // ---- packages ----
  $("#pkGrid").innerHTML = PACKAGES.map(function (p, i) {
    return '<div class="pk reveal' + (i === 1 ? " featured" : "") + '">' + (p.tag ? '<span class="ribbon">' + p.tag + "</span>" : "") +
      "<h3>" + p.name + "</h3><small style='color:var(--muted)'>" + p.note + '</small><div class="price">LKR ' + fmt(p.price) + "<small> / one-time</small></div><ul>" +
      p.features.map(function (f) { return "<li>" + f + "</li>"; }).join("") + '</ul><a href="#bill" class="btn ' + (i === 1 ? "btn-primary" : "btn-ghost") + '" data-pick="' + p.id + '">Choose ' + p.name.split(" · ")[0] + "</a></div>";
  }).join("");
  $$("[data-pick]").forEach(function (a) { a.addEventListener("click", function () { $("#bPackage").value = a.dataset.pick; renderBill(); }); });

  // ---- bill / invoice ----
  var sel = $("#bPackage");
  sel.innerHTML = PACKAGES.map(function (p) { return '<option value="' + p.id + '">' + p.name + " — LKR " + fmt(p.price) + "</option>"; }).join("");
  $("#bAddons").innerHTML = ADDONS.map(function (a) {
    return '<div class="addon"><label><input type="checkbox" data-add="' + a.id + '"> ' + a.name + "</label><span>LKR " + fmt(a.price) + "</span>" + (a.qty ? '<input type="number" min="1" value="1" data-qty="' + a.id + '">' : "") + "</div>";
  }).join("");

  var invNo = "LYN-" + new Date().toISOString().slice(2, 10).replace(/-/g, "") + "-" + Math.floor(100 + Math.random() * 900);
  $("#invNo").textContent = invNo;
  $("#invDate").textContent = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
  var current = { total: 0, text: "" };

  function renderBill() {
    var pk = PACKAGES.filter(function (p) { return p.id === sel.value; })[0], rows = [[pk.name, 1, pk.price]], sub = pk.price;
    ADDONS.forEach(function (a) {
      if ($('[data-add="' + a.id + '"]').checked) {
        var q = a.qty ? Math.max(1, +($('[data-qty="' + a.id + '"]').value) || 1) : 1;
        rows.push([a.name, q, a.price * q]); sub += a.price * q;
      }
    });
    var dp = Math.min(100, Math.max(0, +$("#bDisc").value || 0)), disc = sub * dp / 100, afterDisc = sub - disc;
    var vp = +$("#bVat").value, vat = afterDisc * vp / 100, total = afterDisc + vat;
    $("#invRows").innerHTML = rows.map(function (r) { return "<tr><td>" + r[0] + '</td><td class="r">' + r[1] + '</td><td class="r">' + fmt(r[2]) + "</td></tr>"; }).join("");
    $("#tSub").textContent = fmt(sub); $("#tDisc").textContent = "- " + fmt(disc) + (dp ? " (" + dp + "%)" : "");
    $("#tVatLabel").textContent = vp ? "VAT " + vp + "%" : "VAT"; $("#tVat").textContent = fmt(vat);
    $("#tTotal").textContent = "LKR " + fmt(total); $("#tAdv").textContent = fmt(total / 2);
    $("#invClient").textContent = $("#bName").value || "-"; $("#invMobile").textContent = $("#bMobile").value || "";
    current.total = total;
    current.text = "Hello LYNKO, I would like this quotation (" + invNo + ")%0A" + rows.map(function (r) { return encodeURIComponent(r[0] + " x" + r[1] + " = LKR " + fmt(r[2])); }).join("%0A") +
      "%0ATOTAL: LKR " + fmt(total) + "%0AName: " + encodeURIComponent($("#bName").value || "-") + "%0AMobile: " + encodeURIComponent($("#bMobile").value || "-");
    current.plain = rows.map(function (r) { return r[0] + " x" + r[1] + " = LKR " + fmt(r[2]); }).join("; ") + "; TOTAL LKR " + fmt(total) + " (" + invNo + ")";
  }
  $("#bill").addEventListener("input", renderBill);
  $("#bill").addEventListener("change", renderBill);
  renderBill();

  $("#btnPrint").addEventListener("click", function () { renderBill(); window.print(); });
  $("#btnWa").addEventListener("click", function () {
    renderBill();
    fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "bill", Name: $("#bName").value, Mobile: $("#bMobile").value || "not given", Message: current.plain, total: String(Math.round(current.total)) }) }).catch(function () {});
    window.open("https://wa.me/" + BRAND.whatsapp + "?text=" + current.text, "_blank");
  });

  // ---- faq ----
  $$(".faq-q").forEach(function (b) { b.addEventListener("click", function () { b.parentElement.classList.toggle("open"); }); });

  // ---- contact form: save lead + WhatsApp ----
  $("#contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    var f = e.target, d = new FormData(f), body = {}, msg = "New website enquiry%0A";
    d.forEach(function (v, k) { body[k] = v; msg += encodeURIComponent(k) + ": " + encodeURIComponent(v) + "%0A"; });
    body.type = "contact";
    fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).catch(function () {}).then(function () {
      toast("Thanks! Opening WhatsApp...");
      f.reset();
      window.open("https://wa.me/" + BRAND.whatsapp + "?text=" + msg, "_blank");
    });
  });

  // ---- WhatsApp number from server (.env) ----
  fetch("/api/config").then(function (r) { return r.json(); }).then(function (c) {
    if (c && c.whatsapp) { BRAND.whatsapp = c.whatsapp; $("#waFloat").href = "https://wa.me/" + c.whatsapp; }
  }).catch(function () {});

  observeReveals();
});
`;

app.get(["/", "/index.html"], (req, res) => res.type("html").send(SITE["index.html"]));
app.get("/style.css", (req, res) => res.type("css").send(SITE["style.css"]));
app.get("/script.js", (req, res) => res.type("js").send(SITE["script.js"]));

// optional: put real project screenshots in an "assets" folder, e.g. assets/img/shop1.jpg
app.use("/assets", express.static(path.join(__dirname, "assets")));
app.use((req, res) => res.status(404).send("<h1>404 - Page not found</h1><a href='/'>Go home</a>"));

module.exports = app;
