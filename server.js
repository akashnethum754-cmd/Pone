const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

// ================= EMBEDDED WEBSITE + ADMIN =================
const SITE = {};
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
  var current = { total: 0, text: "", rows: [], pkg: "" };

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
    current.total = total; current.rows = rows; current.pkg = pk.name;
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
    fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ type: "bill", invoice: invNo, package: current.pkg, items: current.rows.map(function (r) { return { name: r[0], qty: r[1], amount: r[2] }; }), Name: $("#bName").value, Mobile: $("#bMobile").value || "not given", Message: current.plain, total: Math.round(current.total) }) }).catch(function () {});
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


  // ---- anonymous visit tracking for the admin dashboard ----
  (function () {
    var sid = "";
    try { sid = sessionStorage.getItem("lynko-sid") || ""; } catch (e) {}
    var isNew = !sid;
    if (!sid) { sid = Math.random().toString(36).slice(2) + Date.now().toString(36); try { sessionStorage.setItem("lynko-sid", sid); } catch (e) {} }
    function ping(type) {
      try { fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sid: sid, type: type, path: location.pathname || "/", ref: document.referrer || "" }), keepalive: true }).catch(function () {}); } catch (e) {}
    }
    ping(isNew ? "view" : "ping");
    setInterval(function () { if (!document.hidden) ping("ping"); }, 60000);
  })();

  observeReveals();
});
`;
SITE["admin.html"] = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="robots" content="noindex, nofollow">
<title>LYNKO Admin</title>
<script>
(function(){try{var t=localStorage.getItem("lynko-theme");if(!t)t=matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light";document.documentElement.setAttribute("data-theme",t)}catch(e){document.documentElement.setAttribute("data-theme","dark")}})();
</script>
<style>
:root{--bg:#f3f5fb;--surface:#fff;--surface2:#eef1f8;--ink:#0b1020;--muted:#667089;--line:#e2e7f1;--brand:#6d5efc;--brand2:#00d4c8;--grad:linear-gradient(135deg,#6d5efc,#00d4c8);--ok:#16a34a;--warn:#f59e0b;--bad:#ef4444;--shadow:0 8px 26px rgba(20,30,70,.08)}
[data-theme="dark"]{--bg:#080b17;--surface:#10152a;--surface2:#171d37;--ink:#eef1ff;--muted:#98a2c3;--line:#232b4a;--shadow:0 8px 26px rgba(0,0,0,.4)}
*{box-sizing:border-box;margin:0;padding:0}
body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.5;min-height:100vh}
button,input,select{font:inherit;color:inherit}
.hidden{display:none!important}
.logo{display:flex;align-items:center;gap:10px;font-weight:800;font-size:1.25rem}
.logo i{width:36px;height:36px;border-radius:10px;background:var(--grad);display:grid;place-items:center;color:#fff;font-style:normal}
a.btn{text-decoration:none}
.btn{color:var(--ink);display:inline-flex;align-items:center;gap:8px;padding:10px 18px;border-radius:12px;border:1px solid var(--line);background:var(--surface);cursor:pointer;font-weight:600;transition:.2s}
.btn:hover{border-color:var(--brand);color:var(--brand)}
.btn-primary{background:var(--grad);color:#fff;border:0;box-shadow:0 8px 20px rgba(109,94,252,.35)}
.btn-primary:hover{color:#fff;transform:translateY(-1px)}
.btn-sm{padding:7px 12px;font-size:.85rem;border-radius:10px}
.btn-danger:hover{border-color:var(--bad);color:var(--bad)}

/* login */
#login{min-height:100vh;display:grid;place-items:center;padding:20px;background:radial-gradient(700px 400px at 80% -10%,rgba(109,94,252,.28),transparent),radial-gradient(600px 400px at -10% 110%,rgba(0,212,200,.2),transparent)}
.login-card{width:min(400px,100%);background:var(--surface);border:1px solid var(--line);border-radius:24px;padding:34px;box-shadow:var(--shadow)}
.login-card h1{font-size:1.5rem;margin:18px 0 4px}
.login-card p{color:var(--muted);font-size:.92rem;margin-bottom:20px}
.field{margin-bottom:14px}
.field label{display:block;font-weight:600;font-size:.85rem;margin-bottom:6px}
.field input{width:100%;padding:12px 14px;border-radius:12px;border:1px solid var(--line);background:var(--bg)}
.field input:focus{outline:2px solid var(--brand);border-color:transparent}
.err{color:var(--bad);font-size:.88rem;min-height:20px;margin-bottom:8px}

/* layout */
#app{display:grid;grid-template-columns:230px 1fr;min-height:100vh}
aside{background:var(--surface);border-right:1px solid var(--line);padding:22px 16px;position:sticky;top:0;height:100vh;display:flex;flex-direction:column;gap:6px}
aside .logo{padding:0 8px 18px}
.nav-btn{display:flex;align-items:center;gap:12px;padding:11px 14px;border-radius:12px;border:0;background:none;cursor:pointer;font-weight:600;color:var(--muted);text-align:left;width:100%}
.nav-btn:hover{background:var(--surface2);color:var(--ink)}
.nav-btn.on{background:var(--grad);color:#fff}
.nav-btn .count{margin-left:auto;background:rgba(127,127,127,.2);border-radius:999px;padding:1px 9px;font-size:.75rem}
.nav-btn.on .count{background:rgba(255,255,255,.25)}
.side-foot{margin-top:auto;font-size:.78rem;color:var(--muted);padding:0 8px}
main{padding:24px 28px 60px;min-width:0}
.topbar{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:22px}
.topbar h2{font-size:1.5rem}
.top-right{display:flex;gap:10px;align-items:center;flex-wrap:wrap}
select.sel{padding:9px 12px;border-radius:12px;border:1px solid var(--line);background:var(--surface);cursor:pointer}
.live-pill{display:inline-flex;gap:8px;align-items:center;background:var(--surface);border:1px solid var(--line);padding:8px 14px;border-radius:999px;font-weight:600;font-size:.88rem}
.dot{width:9px;height:9px;border-radius:50%;background:var(--ok);animation:ping 1.6s infinite}
.dot.off{background:var(--bad);animation:none}
@keyframes ping{0%{box-shadow:0 0 0 0 rgba(22,163,74,.6)}70%{box-shadow:0 0 0 9px rgba(22,163,74,0)}100%{box-shadow:0 0 0 0 rgba(22,163,74,0)}}
.icon-btn{width:40px;height:40px;border-radius:12px;border:1px solid var(--line);background:var(--surface);cursor:pointer;font-size:1.1rem}
.banner{background:rgba(245,158,11,.14);border:1px solid var(--warn);color:var(--ink);padding:12px 16px;border-radius:14px;margin-bottom:18px;font-size:.9rem}

/* cards */
.grid{display:grid;gap:16px}
.kpis{grid-template-columns:repeat(4,1fr);margin-bottom:16px}
.card{background:var(--surface);border:1px solid var(--line);border-radius:20px;padding:20px;box-shadow:var(--shadow);min-width:0}
.card h3{font-size:.95rem;margin-bottom:4px}
.card .sub{color:var(--muted);font-size:.8rem}
.kpi small{color:var(--muted);font-weight:600;font-size:.8rem;text-transform:uppercase;letter-spacing:.04em}
.kpi b{display:block;font-size:1.9rem;margin:6px 0 2px;letter-spacing:-.02em}
.delta{font-size:.8rem;font-weight:700}
.delta.up{color:var(--ok)}.delta.down{color:var(--bad)}.delta.flat{color:var(--muted)}
.kpi .ic{float:right;width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:var(--surface2);font-size:1.2rem}
.row2{grid-template-columns:2fr 1fr;margin-bottom:16px}
.row3{grid-template-columns:1fr 1fr 1fr;margin-bottom:16px}
.chart{position:relative;margin-top:14px}
.chart svg{width:100%;height:auto;display:block;overflow:visible}
.tip{position:absolute;pointer-events:none;background:var(--ink);color:var(--bg);padding:8px 12px;border-radius:10px;font-size:.78rem;white-space:nowrap;transform:translate(-50%,-110%);opacity:0;transition:opacity .12s;z-index:5;line-height:1.5}
.axis{fill:var(--muted);font-size:11px}
.gridline{stroke:var(--line);stroke-dasharray:3 4}
.legend{display:flex;flex-direction:column;gap:9px;margin-top:12px;font-size:.88rem}
.legend div{display:flex;align-items:center;gap:9px}
.legend i{width:10px;height:10px;border-radius:50%;flex:none}
.legend b{margin-left:auto}
.donut-wrap{display:flex;justify-content:center;margin-top:10px}
.bar-row{margin:12px 0}
.bar-row .top{display:flex;justify-content:space-between;font-size:.87rem;margin-bottom:5px}
.bar{height:8px;background:var(--surface2);border-radius:99px;overflow:hidden}
.bar i{display:block;height:100%;background:var(--grad);border-radius:99px;transition:width .6s}
.feed{list-style:none;margin-top:10px;max-height:330px;overflow:auto}
.feed li{display:flex;gap:11px;padding:10px 0;border-bottom:1px dashed var(--line);font-size:.87rem;animation:slide .4s}
@keyframes slide{from{opacity:0;transform:translateY(-8px)}}
.feed .ico{width:32px;height:32px;border-radius:10px;background:var(--surface2);display:grid;place-items:center;flex:none}
.feed small{color:var(--muted);display:block}
.empty{color:var(--muted);text-align:center;padding:26px 0;font-size:.9rem}

/* tables */
.toolbar{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:14px;align-items:center}
.toolbar input{flex:1;min-width:200px;padding:10px 14px;border-radius:12px;border:1px solid var(--line);background:var(--surface)}
.table-wrap{overflow:auto;border-radius:20px;border:1px solid var(--line);background:var(--surface);box-shadow:var(--shadow)}
table{width:100%;border-collapse:collapse;font-size:.9rem;min-width:760px}
th{text-align:left;font-size:.74rem;text-transform:uppercase;letter-spacing:.05em;color:var(--muted);padding:14px 16px;border-bottom:1px solid var(--line);background:var(--surface2);position:sticky;top:0}
td{padding:13px 16px;border-bottom:1px solid var(--line);vertical-align:middle}
tr:last-child td{border-bottom:0}
tbody tr{cursor:pointer;transition:background .15s}
tbody tr:hover{background:var(--surface2)}
td small{color:var(--muted);display:block}
.badge{display:inline-block;padding:4px 11px;border-radius:999px;font-size:.75rem;font-weight:700}
.st-new{background:rgba(109,94,252,.15);color:#7c6dff}.st-contacted{background:rgba(14,165,233,.15);color:#0ea5e9}
.st-in_progress{background:rgba(245,158,11,.16);color:#d98a07}.st-paid{background:rgba(22,163,74,.16);color:#16a34a}
.st-completed{background:rgba(20,184,166,.16);color:#0d9488}.st-cancelled{background:rgba(239,68,68,.15);color:#ef4444}
.status-sel{padding:6px 10px;border-radius:10px;border:1px solid var(--line);background:var(--surface);cursor:pointer;font-size:.82rem}

/* modal */
.modal{position:fixed;inset:0;background:rgba(5,8,20,.6);backdrop-filter:blur(4px);display:none;place-items:center;z-index:100;padding:20px}
.modal.open{display:grid}
.modal-in{width:min(560px,100%);max-height:90vh;overflow:auto;background:var(--surface);border:1px solid var(--line);border-radius:24px;padding:28px;box-shadow:var(--shadow)}
.modal-in h3{font-size:1.25rem}
.detail{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:18px 0}
.detail small{color:var(--muted);display:block;font-size:.75rem;text-transform:uppercase;letter-spacing:.04em}
.items{width:100%;min-width:0;font-size:.88rem;margin:10px 0}
.items td{padding:8px 0;cursor:default}
.items tr:hover{background:none}
.modal-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
.toast{position:fixed;right:20px;bottom:20px;background:var(--ink);color:var(--bg);padding:14px 20px;border-radius:16px;font-weight:600;z-index:200;box-shadow:var(--shadow);transform:translateY(30px);opacity:0;transition:.35s;max-width:340px}
.toast.show{transform:none;opacity:1}

@media(max-width:1100px){.kpis{grid-template-columns:1fr 1fr}.row2,.row3{grid-template-columns:1fr}}
@media(max-width:820px){
  #app{grid-template-columns:1fr}
  aside{position:static;height:auto;flex-direction:row;overflow:auto;padding:12px;border-right:0;border-bottom:1px solid var(--line);align-items:center}
  aside .logo{padding:0 10px 0 4px}.side-foot{display:none}
  .nav-btn{width:auto;white-space:nowrap;padding:9px 14px}
  main{padding:18px 14px 60px}
}
@media(max-width:520px){.kpis{grid-template-columns:1fr}.detail{grid-template-columns:1fr}}
</style>
</head>
<body>

<!-- LOGIN -->
<div id="login">
  <form class="login-card" id="loginForm" autocomplete="on">
    <div class="logo"><i>L</i> LYNKO Admin</div>
    <h1>Welcome back</h1>
    <p>Sign in to manage orders and view live analytics.</p>
    <div class="field"><label for="u">Username</label><input id="u" name="username" autocomplete="username" required></div>
    <div class="field"><label for="pw">Password</label><input id="pw" name="password" type="password" autocomplete="current-password" required></div>
    <div class="err" id="loginErr"></div>
    <button class="btn btn-primary" style="width:100%;justify-content:center" type="submit">Sign in</button>
  </form>
</div>

<!-- APP -->
<div id="app" class="hidden">
  <aside>
    <div class="logo"><i>L</i> LYNKO</div>
    <button class="nav-btn on" data-view="overview">📊 Overview</button>
    <button class="nav-btn" data-view="orders">🧾 Orders <span class="count" id="cOrders">0</span></button>
    <button class="nav-btn" data-view="leads">✉️ Messages <span class="count" id="cLeads">0</span></button>
    <div class="side-foot"><div id="dbState"></div><div style="margin-top:4px">All times: Colombo</div></div>
  </aside>

  <main>
    <div class="topbar">
      <h2 id="title">Overview</h2>
      <div class="top-right">
        <span class="live-pill"><span class="dot" id="liveDot"></span><span><b id="liveCount">0</b> live now</span></span>
        <select class="sel" id="range"><option value="7">Last 7 days</option><option value="30">Last 30 days</option><option value="90">Last 90 days</option><option value="1">Today</option></select>
        <button class="icon-btn" id="theme" title="Dark / Light">🌙</button>
        <button class="btn btn-sm" id="logout">Logout</button>
      </div>
    </div>
    <div id="dbBanner" class="banner hidden"></div>

    <!-- OVERVIEW -->
    <section id="v-overview">
      <div class="grid kpis" id="kpis"></div>
      <div class="grid row2">
        <div class="card"><h3>Website traffic</h3><div class="sub">Visits per day</div><div class="chart" id="chTraffic"></div></div>
        <div class="card"><h3>Order status</h3><div class="sub">Orders in this period</div><div id="donut"></div></div>
      </div>
      <div class="grid row2">
        <div class="card"><h3>Revenue &amp; orders</h3><div class="sub">Confirmed revenue (paid + completed) per day, LKR</div><div class="chart" id="chRevenue"></div></div>
        <div class="card"><h3>⚡ Live activity</h3><div class="sub">Orders, messages and visits as they happen</div><ul class="feed" id="feed"></ul></div>
      </div>
      <div class="grid row3">
        <div class="card"><h3>Packages</h3><div class="sub">Order value by package</div><div id="pkgs"></div></div>
        <div class="card"><h3>Devices</h3><div class="sub">Visitors by device</div><div id="devices"></div></div>
        <div class="card"><h3>Traffic sources</h3><div class="sub">Where visitors come from</div><div id="sources"></div></div>
      </div>
    </section>

    <!-- ORDERS -->
    <section id="v-orders" class="hidden">
      <div class="toolbar">
        <input id="oSearch" placeholder="Search name, mobile, invoice, package...">
        <select class="sel" id="oStatus"><option value="">All statuses</option></select>
        <a class="btn btn-sm" href="/admin/api/export/orders.csv">⬇ Export CSV</a>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Invoice</th><th>Customer</th><th>Package</th><th>Total</th><th>Status</th><th>Date</th></tr></thead>
        <tbody id="oBody"></tbody>
      </table></div>
    </section>

    <!-- LEADS -->
    <section id="v-leads" class="hidden">
      <div class="toolbar">
        <input id="lSearch" placeholder="Search name, mobile, message...">
        <select class="sel" id="lStatus"><option value="">All statuses</option></select>
        <a class="btn btn-sm" href="/admin/api/export/leads.csv">⬇ Export CSV</a>
      </div>
      <div class="table-wrap"><table>
        <thead><tr><th>Customer</th><th>Interested in</th><th>Message</th><th>Status</th><th>Date</th></tr></thead>
        <tbody id="lBody"></tbody>
      </table></div>
    </section>
  </main>
</div>

<div class="modal" id="modal"><div class="modal-in" id="modalBody"></div></div>
<div class="toast" id="toast"></div>

<script>
var $=function(s,r){return(r||document).querySelector(s)},$$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
var STATUSES=["new","contacted","in_progress","paid","completed","cancelled"];
var LABEL={new:"New",contacted:"Contacted",in_progress:"In progress",paid:"Paid",completed:"Completed",cancelled:"Cancelled"};
var COLOR={new:"#7c6dff",contacted:"#0ea5e9",in_progress:"#f59e0b",paid:"#16a34a",completed:"#14b8a6",cancelled:"#ef4444"};
var state={orders:[],leads:[],stats:null,view:"overview",es:null,feed:[]};

function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
function fmt(n){return Math.round(n||0).toLocaleString("en-US")}
function short(n){n=n||0;return n>=1e6?(n/1e6).toFixed(1)+"M":n>=1e3?(n/1e3).toFixed(n>=1e4?0:1)+"k":String(Math.round(n))}
function when(ts){var d=new Date(ts+19800000);return d.toISOString().slice(0,10)+" "+d.toISOString().slice(11,16)}
function ago(ts){var s=(Date.now()-ts)/1000;return s<60?"just now":s<3600?Math.floor(s/60)+"m ago":s<86400?Math.floor(s/3600)+"h ago":Math.floor(s/86400)+"d ago"}
function toast(m){var t=$("#toast");t.textContent=m;t.classList.add("show");clearTimeout(toast.t);toast.t=setTimeout(function(){t.classList.remove("show")},3200)}
function badge(s){return '<span class="badge st-'+esc(s)+'">'+esc(LABEL[s]||s)+'</span>'}
function waLink(m){var d=String(m||"").replace(/\\D/g,"");if(d.charAt(0)==="0")d="94"+d.slice(1);return "https://wa.me/"+d}

function api(path,opt){
  opt=opt||{};opt.credentials="same-origin";
  if(opt.body&&typeof opt.body!=="string"){opt.body=JSON.stringify(opt.body);opt.headers={"Content-Type":"application/json"}}
  return fetch(path,opt).then(function(r){
    if(r.status===401&&path.indexOf("login")<0){showLogin();throw new Error("auth")}
    return r.json().then(function(j){if(!r.ok)throw new Error(j.error||"Error");return j})
  });
}

/* ---------- theme ---------- */
var root=document.documentElement;
function paintTheme(){$("#theme").textContent=root.getAttribute("data-theme")==="dark"?"☀️":"🌙";if(state.stats)render()}
$("#theme").onclick=function(){var n=root.getAttribute("data-theme")==="dark"?"light":"dark";root.setAttribute("data-theme",n);try{localStorage.setItem("lynko-theme",n)}catch(e){}paintTheme()};

/* ---------- auth ---------- */
function showLogin(){if(state.es){state.es.close();state.es=null}$("#app").classList.add("hidden");$("#login").classList.remove("hidden");$("#pw").value=""}
$("#loginForm").onsubmit=function(e){
  e.preventDefault();$("#loginErr").textContent="";
  api("/admin/api/login",{method:"POST",body:{user:$("#u").value,password:$("#pw").value}}).then(boot).catch(function(er){$("#loginErr").textContent=er.message})
};
$("#logout").onclick=function(){api("/admin/api/logout",{method:"POST"}).catch(function(){}).then(showLogin)};

/* ---------- views ---------- */
var TITLES={overview:"Overview",orders:"Orders",leads:"Messages"};
$$(".nav-btn").forEach(function(b){b.onclick=function(){go(b.dataset.view)}});
function go(v){state.view=v;$$(".nav-btn").forEach(function(b){b.classList.toggle("on",b.dataset.view===v)});["overview","orders","leads"].forEach(function(x){$("#v-"+x).classList.toggle("hidden",x!==v)});$("#title").textContent=TITLES[v];$("#range").classList.toggle("hidden",v!=="overview")}

/* ---------- data ---------- */
function loadStats(){return api("/admin/api/stats?days="+$("#range").value).then(function(s){state.stats=s;render()})}
function loadOrders(){return api("/admin/api/orders").then(function(o){state.orders=o;renderOrders();$("#cOrders").textContent=o.length})}
function loadLeads(){return api("/admin/api/leads").then(function(l){state.leads=l;renderLeads();$("#cLeads").textContent=l.length})}
function loadAll(){return Promise.all([loadStats(),loadOrders(),loadLeads()])}
$("#range").onchange=loadStats;

/* ---------- KPI + charts ---------- */
function delta(cur,prev){
  if(!prev&&!cur)return '<span class="delta flat">— no change</span>';
  if(!prev)return '<span class="delta up">▲ new</span>';
  var p=(cur-prev)/prev*100;
  return '<span class="delta '+(p>0.5?"up":p<-0.5?"down":"flat")+'">'+(p>0?"▲":p<0?"▼":"•")+" "+Math.abs(p).toFixed(0)+'% vs previous</span>'
}
function render(){
  var s=state.stats;if(!s)return;
  var t=s.totals,p=s.prev;
  $("#kpis").innerHTML=[
    ["Visits",fmt(t.visits),delta(t.visits,p.visits),"👀",t.unique+" unique visitors"],
    ["Orders",fmt(t.orders),delta(t.orders,p.orders),"🧾",s.conversion+"% conversion"],
    ["Pipeline value","LKR "+short(t.pipeline),delta(t.pipeline,p.pipeline),"💼","all active orders"],
    ["Confirmed revenue","LKR "+short(t.revenue),delta(t.revenue,p.revenue),"💰","paid + completed"]
  ].map(function(k){return '<div class="card kpi"><span class="ic">'+k[3]+'</span><small>'+k[0]+'</small><b>'+k[1]+'</b>'+k[2]+'<div class="sub" style="margin-top:4px">'+k[4]+'</div></div>'}).join("");
  $("#liveCount").textContent=s.live.count;
  chart("#chTraffic",s.series.map(function(d){return{x:d.date,v:d.visits,tip:fmt(d.visits)+" visits"}}),{type:"area",color:"#6d5efc"});
  chart("#chRevenue",s.series.map(function(d){return{x:d.date,v:d.revenue,tip:"LKR "+fmt(d.revenue)+"<br>"+d.orders+" orders"}}),{type:"bar",color:"#00bfb2",money:true});
  donut(s.status);
  var maxV=Math.max.apply(null,s.packages.map(function(x){return x.value}).concat([1]));
  $("#pkgs").innerHTML=s.packages.length?s.packages.map(function(x){return '<div class="bar-row"><div class="top"><span>'+esc(x.name)+' <small style="color:var(--muted)">× '+x.count+'</small></span><b>LKR '+short(x.value)+'</b></div><div class="bar"><i style="width:'+(x.value/maxV*100)+'%"></i></div></div>'}).join(""):'<div class="empty">No orders yet</div>';
  list("#devices",s.devices);list("#sources",s.sources);
  if(!state.feed.length&&s.recent.length)state.feed=s.recent.slice().reverse().map(function(o){return{ico:"🧾",html:"<b>"+esc(o.name||"Customer")+"</b> ordered "+esc(o.package||"a package")+" · LKR "+fmt(o.total),ts:o.ts}});
  drawFeed();
  var d=$("#dbState");d.innerHTML="DB: <b>"+(s.db==="mongodb"?"MongoDB ✓":"Local file")+"</b>";
  var bn=$("#dbBanner");
  if(s.db!=="mongodb"){bn.classList.remove("hidden");bn.innerHTML="⚠️ <b>MongoDB is not connected.</b> Data is stored in a temporary local file and can be lost on redeploy. "+(s.dbError?"Error: "+esc(s.dbError):"Set <code>MONGODB_URI</code> in your environment variables.")}else bn.classList.add("hidden");
}
function list(sel,arr){
  var tot=arr.reduce(function(a,b){return a+b.count},0)||1;
  $(sel).innerHTML=arr.length?arr.map(function(x){return '<div class="bar-row"><div class="top"><span>'+esc(x.name)+'</span><b>'+x.count+' <small style="color:var(--muted)">('+Math.round(x.count/tot*100)+'%)</small></b></div><div class="bar"><i style="width:'+(x.count/tot*100)+'%"></i></div></div>'}).join(""):'<div class="empty">No data yet</div>';
}
function donut(st){
  var tot=0,k;for(k in st)tot+=st[k];
  var r=62,c=2*Math.PI*r,off=0,seg="";
  if(!tot){seg='<circle cx="80" cy="80" r="'+r+'" fill="none" stroke="var(--line)" stroke-width="20"/>'}
  else STATUSES.forEach(function(s){var v=st[s]||0;if(!v)return;var len=v/tot*c;seg+='<circle cx="80" cy="80" r="'+r+'" fill="none" stroke="'+COLOR[s]+'" stroke-width="20" stroke-dasharray="'+len+' '+(c-len)+'" stroke-dashoffset="'+(-off)+'" transform="rotate(-90 80 80)"/>';off+=len});
  $("#donut").innerHTML='<div class="donut-wrap"><svg width="160" height="160" viewBox="0 0 160 160">'+seg+'<text x="80" y="78" text-anchor="middle" font-size="26" font-weight="800" fill="var(--ink)">'+tot+'</text><text x="80" y="98" text-anchor="middle" font-size="11" fill="var(--muted)">orders</text></svg></div><div class="legend">'+STATUSES.map(function(s){return '<div><i style="background:'+COLOR[s]+'"></i>'+LABEL[s]+'<b>'+(st[s]||0)+'</b></div>'}).join("")+'</div>';
}
function chart(sel,data,o){
  var el=$(sel),W=720,H=250,pl=46,pr=10,pt=14,pb=30,iw=W-pl-pr,ih=H-pt-pb;
  var max=Math.max.apply(null,data.map(function(d){return d.v}));if(max<=0)max=4;
  var step=Math.pow(10,Math.floor(Math.log10(max)));var nice=Math.ceil(max/step)*step;if(nice/step<2)nice=step*2;max=nice;
  var n=data.length,bw=iw/n,X=function(i){return pl+(o.type==="bar"?bw*i+bw/2:(n===1?iw/2:iw*i/(n-1)))},Y=function(v){return pt+ih-v/max*ih};
  var g="";for(var i=0;i<=4;i++){var v=max*i/4,y=Y(v);g+='<line class="gridline" x1="'+pl+'" x2="'+(W-pr)+'" y1="'+y+'" y2="'+y+'"/><text class="axis" x="'+(pl-8)+'" y="'+(y+4)+'" text-anchor="end">'+short(v)+'</text>'}
  var every=Math.ceil(n/8),lab="";data.forEach(function(d,i){if(i%every===0||i===n-1)lab+='<text class="axis" x="'+X(i)+'" y="'+(H-8)+'" text-anchor="middle">'+d.x.slice(5)+'</text>'});
  var body="";
  if(o.type==="bar"){data.forEach(function(d,i){var h=d.v/max*ih,w=Math.max(4,bw*0.62);body+='<rect x="'+(X(i)-w/2)+'" y="'+(pt+ih-h)+'" width="'+w+'" height="'+Math.max(h,d.v?2:0)+'" rx="5" fill="'+o.color+'" opacity=".9"/>'})}
  else{var pts=data.map(function(d,i){return X(i)+","+Y(d.v)}).join(" ");body='<defs><linearGradient id="ag'+sel.slice(1)+'" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="'+o.color+'" stop-opacity=".4"/><stop offset="1" stop-color="'+o.color+'" stop-opacity="0"/></linearGradient></defs><polygon points="'+X(0)+","+(pt+ih)+" "+pts+" "+X(n-1)+","+(pt+ih)+'" fill="url(#ag'+sel.slice(1)+')"/><polyline points="'+pts+'" fill="none" stroke="'+o.color+'" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>'+(n<=31?data.map(function(d,i){return '<circle cx="'+X(i)+'" cy="'+Y(d.v)+'" r="3.5" fill="var(--surface)" stroke="'+o.color+'" stroke-width="2"/>'}).join(""):"")}
  el.innerHTML='<svg viewBox="0 0 '+W+' '+H+'">'+g+lab+body+'</svg><div class="tip"></div>';
  var svg=$("svg",el),tip=$(".tip",el);
  el.onmousemove=function(e){var r=svg.getBoundingClientRect(),x=(e.clientX-r.left)/r.width*W,i=o.type==="bar"?Math.floor((x-pl)/bw):Math.round((x-pl)/iw*(n-1));if(i<0||i>=n){tip.style.opacity=0;return}
    var d=data[i];tip.innerHTML="<b>"+d.x+"</b><br>"+d.tip;tip.style.left=(X(i)/W*r.width)+"px";tip.style.top=(Y(d.v)/H*r.height)+"px";tip.style.opacity=1};
  el.onmouseleave=function(){tip.style.opacity=0};
}

/* ---------- live feed ---------- */
function pushFeed(ico,html){state.feed.push({ico:ico,html:html,ts:Date.now()});if(state.feed.length>40)state.feed.shift();drawFeed()}
function drawFeed(){var f=state.feed.slice().reverse().slice(0,14);$("#feed").innerHTML=f.length?f.map(function(x){return '<li><span class="ico">'+x.ico+'</span><div>'+x.html+'<small>'+ago(x.ts)+'</small></div></li>'}).join(""):'<div class="empty">Waiting for activity...</div>'}
setInterval(function(){if(state.view==="overview")drawFeed()},30000);

function connectStream(){
  if(state.es)state.es.close();
  var es=new EventSource("/admin/api/stream");state.es=es;
  es.onopen=function(){$("#liveDot").classList.remove("off")};
  es.onerror=function(){$("#liveDot").classList.add("off")};
  es.addEventListener("live",function(e){$("#liveCount").textContent=JSON.parse(e.data).count});
  es.addEventListener("visit",function(e){var d=JSON.parse(e.data);$("#liveCount").textContent=d.live;pushFeed(d.device==="Mobile"?"📱":d.device==="Tablet"?"📲":"🖥️","New visitor · "+esc(d.device)+" · from <b>"+esc(d.source)+"</b>");if(state.stats){state.stats.totals.visits++;}});
  es.addEventListener("order",function(e){var o=JSON.parse(e.data);toast("🧾 New order: LKR "+fmt(o.total)+" from "+(o.name||o.mobile));pushFeed("🧾","<b>New order</b> · "+esc(o.name||o.mobile)+" · "+esc(o.package||"")+" · LKR "+fmt(o.total));loadAll()});
  es.addEventListener("lead",function(e){var l=JSON.parse(e.data);toast("✉️ New message from "+(l.name||l.mobile));pushFeed("✉️","<b>New message</b> · "+esc(l.name||l.mobile));loadAll()});
}
setInterval(function(){if(!$("#app").classList.contains("hidden"))loadStats().catch(function(){})},60000);

/* ---------- tables ---------- */
function statusSelect(id,cur,kind){return '<select class="status-sel" data-kind="'+kind+'" data-id="'+esc(id)+'">'+STATUSES.map(function(s){return '<option value="'+s+'"'+(s===cur?" selected":"")+'>'+LABEL[s]+'</option>'}).join("")+'</select>'}
function fillFilter(sel){sel.innerHTML='<option value="">All statuses</option>'+STATUSES.map(function(s){return '<option value="'+s+'">'+LABEL[s]+'</option>'}).join("")}
fillFilter($("#oStatus"));fillFilter($("#lStatus"));
["oSearch","oStatus"].forEach(function(i){$("#"+i).oninput=renderOrders});
["lSearch","lStatus"].forEach(function(i){$("#"+i).oninput=renderLeads});
function renderOrders(){
  var q=$("#oSearch").value.toLowerCase(),st=$("#oStatus").value;
  var rows=state.orders.filter(function(o){return(!st||o.status===st)&&(!q||[o.name,o.mobile,o.invoice,o.package,o.company].join(" ").toLowerCase().indexOf(q)>=0)});
  $("#oBody").innerHTML=rows.length?rows.map(function(o){return '<tr data-id="'+esc(o.id)+'" data-kind="orders"><td><b>'+esc(o.invoice)+'</b></td><td>'+esc(o.name||"-")+'<small>'+esc(o.mobile)+'</small></td><td>'+esc(o.package||"-")+'</td><td><b>LKR '+fmt(o.total)+'</b></td><td>'+statusSelect(o.id,o.status,"orders")+'</td><td>'+when(o.ts)+'<small>'+ago(o.ts)+'</small></td></tr>'}).join(""):'<tr><td colspan="6" class="empty">No orders found</td></tr>';
}
function renderLeads(){
  var q=$("#lSearch").value.toLowerCase(),st=$("#lStatus").value;
  var rows=state.leads.filter(function(o){return(!st||o.status===st)&&(!q||[o.name,o.mobile,o.message,o.company].join(" ").toLowerCase().indexOf(q)>=0)});
  $("#lBody").innerHTML=rows.length?rows.map(function(o){return '<tr data-id="'+esc(o.id)+'" data-kind="leads"><td>'+esc(o.name||"-")+'<small>'+esc(o.mobile)+(o.company?" · "+esc(o.company):"")+'</small></td><td>'+esc(o.interest||"-")+'</td><td style="max-width:300px">'+esc((o.message||"").slice(0,90))+'</td><td>'+statusSelect(o.id,o.status,"leads")+'</td><td>'+when(o.ts)+'<small>'+ago(o.ts)+'</small></td></tr>'}).join(""):'<tr><td colspan="5" class="empty">No messages found</td></tr>';
}
function setStatus(kind,id,status){return api("/admin/api/"+kind+"/"+encodeURIComponent(id),{method:"PATCH",body:{status:status}}).then(function(){toast("Status updated");return loadAll()}).catch(function(e){toast(e.message)})}
document.addEventListener("change",function(e){if(e.target.classList.contains("status-sel")){setStatus(e.target.dataset.kind,e.target.dataset.id,e.target.value)}});
document.addEventListener("click",function(e){
  if(e.target.closest(".status-sel"))return;
  var tr=e.target.closest("tbody tr[data-id]");if(tr)openModal(tr.dataset.kind,tr.dataset.id);
  if(e.target.id==="modal")closeModal();
});
document.addEventListener("keydown",function(e){if(e.key==="Escape")closeModal()});

/* ---------- modal ---------- */
function closeModal(){$("#modal").classList.remove("open")}
function openModal(kind,id){
  var o=state[kind].filter(function(x){return x.id===id})[0];if(!o)return;
  var items="";
  if(kind==="orders"&&o.items&&o.items.length)items='<table class="items">'+o.items.map(function(i){return '<tr><td>'+esc(i.name)+' <small style="display:inline">× '+i.qty+'</small></td><td style="text-align:right">LKR '+fmt(i.amount)+'</td></tr>'}).join("")+'<tr><td><b>Total</b></td><td style="text-align:right"><b>LKR '+fmt(o.total)+'</b></td></tr></table>';
  $("#modalBody").innerHTML='<h3>'+(kind==="orders"?"Order "+esc(o.invoice):"Message")+'</h3><div style="margin-top:6px">'+badge(o.status)+'</div>'+
   '<div class="detail"><div><small>Customer</small>'+esc(o.name||"-")+'</div><div><small>Mobile</small>'+esc(o.mobile)+'</div><div><small>Company</small>'+esc(o.company||"-")+'</div><div><small>Date</small>'+when(o.ts)+'</div>'+(kind==="orders"?'<div><small>Package</small>'+esc(o.package||"-")+'</div><div><small>Total</small><b>LKR '+fmt(o.total)+'</b></div>':'<div><small>Interested in</small>'+esc(o.interest||"-")+'</div>')+'</div>'+items+
   (kind==="leads"&&o.message?'<small style="color:var(--muted)">MESSAGE</small><p style="margin-top:4px;white-space:pre-wrap">'+esc(o.message)+'</p>':"")+
   (kind==="orders"&&o.message?'<details style="margin-top:8px"><summary style="cursor:pointer;color:var(--muted)">Original request</summary><p style="margin-top:6px;font-size:.85rem;white-space:pre-wrap">'+esc(o.message)+'</p></details>':"")+
   '<div class="modal-actions">'+statusSelect(o.id,o.status,kind)+'<a class="btn btn-sm" target="_blank" rel="noopener" href="'+esc(waLink(o.mobile))+'">💬 WhatsApp</a><a class="btn btn-sm" href="tel:'+esc(o.mobile)+'">📞 Call</a><button class="btn btn-sm btn-danger" id="mDel">🗑 Delete</button><button class="btn btn-sm" id="mClose" style="margin-left:auto">Close</button></div>';
  $("#modal").classList.add("open");
  $("#mClose").onclick=closeModal;
  $("#mDel").onclick=function(){if(!confirm("Delete this record permanently?"))return;api("/admin/api/"+kind+"/"+encodeURIComponent(id),{method:"DELETE"}).then(function(){closeModal();toast("Deleted");loadAll()}).catch(function(e){toast(e.message)})};
}

/* ---------- boot ---------- */
function boot(){
  $("#login").classList.add("hidden");$("#app").classList.remove("hidden");paintTheme();go(state.view);
  loadAll().then(connectStream).catch(function(){});
}
paintTheme();
api("/admin/api/me").then(boot).catch(function(){showLogin()});
</script>
</body>
</html>
`;


// ================= HELPERS =================
const COLOMBO = 5.5 * 3600000;
const DAY = 86400000;
const dayKey = (ts) => new Date(ts + COLOMBO).toISOString().slice(0, 10);
const startOfDay = (ts) => Math.floor((ts + COLOMBO) / DAY) * DAY - COLOMBO;
const uid = () => crypto.randomUUID();
const clean = (v, n = 500) => String(v == null ? "" : v).slice(0, n).trim();
const STATUSES = ["new", "contacted", "in_progress", "paid", "completed", "cancelled"];
const env = (k, d = "") => process.env[k] || d;

// ================= DATA STORES (MongoDB, or JSON file fallback) =================
function matches(doc, f) {
  for (const k in f) {
    const c = f[k];
    if (c && typeof c === "object") {
      if ("$gte" in c && !(doc[k] >= c.$gte)) return false;
      if ("$lt" in c && !(doc[k] < c.$lt)) return false;
    } else if (doc[k] !== c) return false;
  }
  return true;
}

function fileStore() {
  const dir = path.join(__dirname, "data");
  const file = path.join(dir, "db.json");
  let db = {};
  try { db = JSON.parse(fs.readFileSync(file, "utf8")); } catch {}
  let timer = null;
  const save = () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      try { fs.mkdirSync(dir, { recursive: true }); fs.writeFileSync(file, JSON.stringify(db)); }
      catch (e) { console.error("File store write failed:", e.message); }
    }, 300);
  };
  return {
    kind: "file",
    async insert(c, d) {
      const a = (db[c] = db[c] || []);
      a.push(d);
      if (c === "visits" && a.length > 20000) a.splice(0, a.length - 20000);
      save();
    },
    async list(c, { filter = {}, sort, limit = 5000 } = {}) {
      let r = (db[c] || []).filter((d) => matches(d, filter));
      if (sort) { const [[k, dir]] = Object.entries(sort); r = r.slice().sort((a, b) => (a[k] > b[k] ? 1 : a[k] < b[k] ? -1 : 0) * dir); }
      return r.slice(0, limit).map((x) => ({ ...x }));
    },
    async update(c, id, p) { const d = (db[c] || []).find((x) => x.id === id); if (!d) return false; Object.assign(d, p); save(); return true; },
    async remove(c, id) { const a = db[c] || []; const i = a.findIndex((x) => x.id === id); if (i < 0) return false; a.splice(i, 1); save(); return true; },
  };
}

async function mongoStore(uri) {
  const { MongoClient } = require("mongodb");
  const client = new MongoClient(uri, { serverSelectionTimeoutMS: 10000 });
  await client.connect();
  const db = client.db(env("MONGODB_DB", "lynko"));
  await db.collection("orders").createIndex({ id: 1 }, { unique: true });
  await db.collection("orders").createIndex({ ts: -1 });
  await db.collection("leads").createIndex({ id: 1 }, { unique: true });
  await db.collection("leads").createIndex({ ts: -1 });
  await db.collection("visits").createIndex({ ts: -1 });
  await db.collection("visits").createIndex({ at: 1 }, { expireAfterSeconds: 90 * 86400 }); // keep 90 days
  return {
    kind: "mongodb",
    async insert(c, d) { await db.collection(c).insertOne({ ...d }); },
    async list(c, { filter = {}, sort, limit = 5000 } = {}) {
      let q = db.collection(c).find(filter, { projection: { _id: 0 } });
      if (sort) q = q.sort(sort);
      return q.limit(limit).toArray();
    },
    async update(c, id, p) { const r = await db.collection(c).updateOne({ id }, { $set: p }); return r.matchedCount > 0; },
    async remove(c, id) { const r = await db.collection(c).deleteOne({ id }); return r.deletedCount > 0; },
  };
}

let store = fileStore();
let dbInfo = { kind: "file", error: "" };

async function connectDb() {
  const uri = env("MONGODB_URI");
  if (!uri) { console.log("[db] MONGODB_URI not set: using local file storage (data/db.json)."); return; }
  try {
    store = await mongoStore(uri);
    dbInfo = { kind: "mongodb", error: "" };
    console.log("[db] Connected to MongoDB.");
  } catch (e) {
    dbInfo = { kind: "file", error: e.message };
    console.error("[db] MongoDB connection FAILED, using local file storage instead:", e.message);
  }
}

// ================= AUTH (signed cookie, no extra libraries) =================
const secret = () => env("SESSION_SECRET") || crypto.createHash("sha256").update("lynko:" + env("ADMIN_PASSWORD")).digest("hex");
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
function sign(payload) {
  const b = b64(payload);
  return b + "." + crypto.createHmac("sha256", secret()).update(b).digest("base64url");
}
function verify(tok) {
  if (!tok || !env("ADMIN_PASSWORD")) return null;
  const [b, s] = String(tok).split(".");
  if (!b || !s) return null;
  const e = crypto.createHmac("sha256", secret()).update(b).digest("base64url");
  if (e.length !== s.length || !crypto.timingSafeEqual(Buffer.from(e), Buffer.from(s))) return null;
  try { const p = JSON.parse(Buffer.from(b, "base64url").toString()); return p.exp > Date.now() ? p : null; } catch { return null; }
}
const safeEq = (a, b) => {
  const x = crypto.createHash("sha256").update(String(a)).digest();
  const y = crypto.createHash("sha256").update(String(b)).digest();
  return crypto.timingSafeEqual(x, y);
};
function cookies(req) {
  const o = {};
  String(req.headers.cookie || "").split(";").forEach((p) => { const i = p.indexOf("="); if (i > 0) o[p.slice(0, i).trim()] = decodeURIComponent(p.slice(i + 1).trim()); });
  return o;
}
const isAdmin = (req) => verify(cookies(req).lynko_admin);
const isHttps = (req) => (req.headers["x-forwarded-proto"] || "").split(",")[0] === "https" || req.socket.encrypted;

// ================= RATE LIMIT =================
const hits = new Map();
function limited(key, max, windowMs) {
  const now = Date.now();
  const a = (hits.get(key) || []).filter((t) => now - t < windowMs);
  if (a.length >= max) { hits.set(key, a); return true; }
  a.push(now); hits.set(key, a);
  return false;
}
setInterval(() => { const now = Date.now(); for (const [k, a] of hits) { const f = a.filter((t) => now - t < 3600000); f.length ? hits.set(k, f) : hits.delete(k); } }, 600000).unref();
const ipOf = (req) => String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();

// ================= LIVE (SSE + visitors) =================
const sseClients = new Set();
function broadcast(event, data) {
  const msg = `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`;
  for (const res of sseClients) { try { res.write(msg); } catch {} }
}
const live = new Map(); // sid -> { ts, path, device }
function liveList() {
  const cut = Date.now() - 5 * 60000;
  for (const [k, v] of live) if (v.ts < cut) live.delete(k);
  return [...live.values()];
}
setInterval(() => { if (sseClients.size) broadcast("live", { count: liveList().length }); }, 10000).unref();
setInterval(() => { for (const res of sseClients) { try { res.write(": hb\n\n"); } catch {} } }, 25000).unref();

// ================= HTTP HELPERS =================
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon", ".mp4": "video/mp4", ".webm": "video/webm", ".woff2": "font/woff2" };
function send(res, code, body, headers = {}) {
  const isObj = body && typeof body === "object" && !Buffer.isBuffer(body);
  res.writeHead(code, { "X-Content-Type-Options": "nosniff", ...(isObj ? { "Content-Type": "application/json" } : {}), ...headers });
  res.end(isObj ? JSON.stringify(body) : body);
}
function readBody(req, max = 100000) {
  return new Promise((resolve) => {
    let size = 0; const chunks = [];
    req.on("data", (c) => { size += c.length; if (size > max) { req.destroy(); resolve(null); } else chunks.push(c); });
    req.on("end", () => { try { resolve(chunks.length ? JSON.parse(Buffer.concat(chunks).toString()) : {}); } catch { resolve(null); } });
    req.on("error", () => resolve(null));
  });
}
const adminHeaders = { "Cache-Control": "no-store", "X-Robots-Tag": "noindex, nofollow", "X-Frame-Options": "DENY" };

function deviceOf(ua) {
  ua = String(ua || "");
  if (/bot|crawl|spider|slurp|preview|facebookexternalhit|headless/i.test(ua)) return "bot";
  if (/ipad|tablet/i.test(ua)) return "Tablet";
  if (/mobi|android|iphone/i.test(ua)) return "Mobile";
  return "Desktop";
}
function sourceOf(ref, host) {
  if (!ref) return "Direct";
  try { const h = new URL(ref).hostname.replace(/^www\./, ""); return h === String(host).replace(/^www\./, "").split(":")[0] ? "Direct" : h; } catch { return "Direct"; }
}

// ================= ANALYTICS =================
async function stats(days) {
  days = Math.min(90, Math.max(1, +days || 7));
  const now = Date.now();
  const start = startOfDay(now) - (days - 1) * DAY;
  const prevStart = start - days * DAY;
  const [visits, orders, leads] = await Promise.all([
    store.list("visits", { filter: { ts: { $gte: prevStart } }, limit: 60000 }),
    store.list("orders", { filter: { ts: { $gte: prevStart } }, limit: 20000 }),
    store.list("leads", { filter: { ts: { $gte: prevStart } }, limit: 20000 }),
  ]);
  const confirmed = (o) => o.status === "paid" || o.status === "completed";
  const active = (o) => o.status !== "cancelled";
  const pack = (from, to) => {
    const v = visits.filter((x) => x.ts >= from && x.ts < to);
    const o = orders.filter((x) => x.ts >= from && x.ts < to);
    const l = leads.filter((x) => x.ts >= from && x.ts < to);
    return {
      visits: v.length, unique: new Set(v.map((x) => x.sid)).size, orders: o.length, leads: l.length,
      pipeline: o.filter(active).reduce((s, x) => s + (x.total || 0), 0),
      revenue: o.filter(confirmed).reduce((s, x) => s + (x.total || 0), 0),
      v, o, l,
    };
  };
  const cur = pack(start, now + 1), prev = pack(prevStart, start);
  const series = [];
  for (let i = 0; i < days; i++) {
    const t = start + i * DAY, k = dayKey(t + 1);
    series.push({ date: k, visits: 0, orders: 0, revenue: 0, pipeline: 0 });
  }
  const idx = Object.fromEntries(series.map((s, i) => [s.date, i]));
  cur.v.forEach((x) => { const i = idx[dayKey(x.ts)]; if (i != null) series[i].visits++; });
  cur.o.forEach((x) => {
    const i = idx[dayKey(x.ts)]; if (i == null) return;
    series[i].orders++;
    if (active(x)) series[i].pipeline += x.total || 0;
    if (confirmed(x)) series[i].revenue += x.total || 0;
  });
  const count = (arr, f) => { const m = {}; arr.forEach((x) => { const k = f(x) || "Unknown"; m[k] = (m[k] || 0) + 1; }); return Object.entries(m).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count); };
  const byStatus = Object.fromEntries(STATUSES.map((s) => [s, 0]));
  cur.o.forEach((x) => { byStatus[x.status] = (byStatus[x.status] || 0) + 1; });
  const pk = {};
  cur.o.filter(active).forEach((x) => { const n = x.package || "Custom"; pk[n] = pk[n] || { name: n, count: 0, value: 0 }; pk[n].count++; pk[n].value += x.total || 0; });
  const liveNow = liveList();
  const recent = (await store.list("orders", { sort: { ts: -1 }, limit: 8 }));
  const strip = ({ v, o, l, ...rest }) => rest;
  return {
    days, db: dbInfo.kind, dbError: dbInfo.error,
    totals: strip(cur), prev: strip(prev),
    conversion: cur.unique ? +(cur.orders / cur.unique * 100).toFixed(1) : 0,
    series, status: byStatus,
    packages: Object.values(pk).sort((a, b) => b.value - a.value),
    devices: count(cur.v, (x) => x.device),
    sources: count(cur.v, (x) => x.source).slice(0, 6),
    live: { count: liveNow.length, pages: count(liveNow, (x) => x.path).slice(0, 5), devices: count(liveNow, (x) => x.device) },
    recent,
  };
}

const csvCell = (v) => { let s = String(v == null ? "" : v); if (/^[=+\-@\t\r]/.test(s)) s = "'" + s; return '"' + s.replace(/"/g, '""') + '"'; };

// ================= REQUEST HANDLER =================
async function handle(req, res) {
  const url = new URL(req.url, "http://x");
  const p = decodeURIComponent(url.pathname).replace(/\/+$/, "") || "/";
  const m = req.method;

  // ---------- public site ----------
  if (m === "GET" && (p === "/" || p === "/index.html")) return send(res, 200, SITE["index.html"], { "Content-Type": MIME[".html"] });
  if (m === "GET" && p === "/style.css") return send(res, 200, SITE["style.css"], { "Content-Type": MIME[".css"] });
  if (m === "GET" && p === "/script.js") return send(res, 200, SITE["script.js"], { "Content-Type": MIME[".js"] });
  if (m === "GET" && p === "/api/config") return send(res, 200, { whatsapp: env("WHATSAPP_NUMBER", "94770000000") });
  if (m === "GET" && p === "/healthz") return send(res, 200, { ok: true, db: dbInfo.kind });

  if (m === "GET" && p.startsWith("/assets/")) {
    const f = path.normalize(path.join(__dirname, p));
    const root = path.join(__dirname, "assets") + path.sep;
    if (!f.startsWith(root)) return send(res, 403, "Forbidden");
    return fs.stat(f, (e, st) => {
      if (e || !st.isFile()) return send(res, 404, "Not found");
      res.writeHead(200, { "Content-Type": MIME[path.extname(f).toLowerCase()] || "application/octet-stream", "Cache-Control": "public, max-age=3600" });
      fs.createReadStream(f).pipe(res);
    });
  }

  // ---------- public API: visit tracking ----------
  if (m === "POST" && p === "/api/track") {
    const b = await readBody(req, 4000);
    const dev = deviceOf(req.headers["user-agent"]);
    if (!b || dev === "bot" || limited("t:" + ipOf(req), 120, 60000)) return send(res, 204, "");
    const sid = clean(b.sid, 64);
    if (!sid) return send(res, 204, "");
    const page = clean(b.path, 80) || "/";
    live.set(sid, { ts: Date.now(), path: page, device: dev });
    if (b.type === "view") {
      const ts = Date.now(), source = sourceOf(b.ref, req.headers.host);
      await store.insert("visits", { id: uid(), ts, at: new Date(ts), sid, path: page, device: dev, source });
      broadcast("visit", { device: dev, source, path: page, ts, live: liveList().length });
    }
    return send(res, 204, "");
  }

  // ---------- public API: contact form + bill/order ----------
  if (m === "POST" && p === "/api/contact") {
    if (limited("c:" + ipOf(req), 12, 600000)) return send(res, 429, { ok: false, error: "Too many requests" });
    const b = await readBody(req);
    if (!b) return send(res, 400, { ok: false, error: "Bad request" });
    const mobile = clean(b.Mobile, 30);
    if (!mobile) return send(res, 400, { ok: false, error: "Mobile number required" });
    const ts = Date.now();
    if (b.type === "bill") {
      const items = (Array.isArray(b.items) ? b.items : []).slice(0, 30).map((i) => ({ name: clean(i.name, 80), qty: Math.max(1, +i.qty || 1), amount: Math.max(0, +i.amount || 0) }));
      const order = {
        id: uid(), ts, at: new Date(ts), status: "new",
        invoice: clean(b.invoice, 30) || "LYN-" + ts, name: clean(b.Name, 100), mobile, company: clean(b.Institute, 100),
        package: clean(b.package, 80), items, message: clean(b.Message, 1500),
        total: Math.max(0, Math.round(+b.total || 0)),
      };
      await store.insert("orders", order);
      broadcast("order", order);
      return send(res, 200, { ok: true });
    }
    const lead = {
      id: uid(), ts, at: new Date(ts), status: "new",
      name: clean(b.Name, 100), mobile, company: clean(b.Institute, 100), interest: clean(b.Interest, 80), message: clean(b.Message, 1500),
    };
    await store.insert("leads", lead);
    broadcast("lead", lead);
    return send(res, 200, { ok: true });
  }

  // ---------- ADMIN (hidden: not linked anywhere on the site) ----------
  if (p === "/admin" || p.startsWith("/admin/")) {
    if (m === "GET" && p === "/admin") return send(res, 200, SITE["admin.html"], { "Content-Type": MIME[".html"], ...adminHeaders });

    if (!env("ADMIN_PASSWORD")) return send(res, 503, { error: "Admin disabled: set ADMIN_PASSWORD in your environment." }, adminHeaders);

    if (m === "POST" && p === "/admin/api/login") {
      const ip = ipOf(req);
      if (limited("l:" + ip, 6, 15 * 60000)) return send(res, 429, { error: "Too many attempts. Try again in 15 minutes." }, adminHeaders);
      const b = await readBody(req, 2000);
      if (!b) return send(res, 400, { error: "Bad request" }, adminHeaders);
      const okUser = safeEq(b.user || "", env("ADMIN_USER", "admin"));
      const okPass = safeEq(b.password || "", env("ADMIN_PASSWORD"));
      if (!(okUser && okPass)) return send(res, 401, { error: "Wrong username or password" }, adminHeaders);
      const tok = sign({ u: "admin", exp: Date.now() + 12 * 3600000 });
      return send(res, 200, { ok: true }, { ...adminHeaders, "Set-Cookie": `lynko_admin=${tok}; HttpOnly; SameSite=Strict; Path=/; Max-Age=43200${isHttps(req) ? "; Secure" : ""}` });
    }
    if (m === "POST" && p === "/admin/api/logout") {
      return send(res, 200, { ok: true }, { ...adminHeaders, "Set-Cookie": "lynko_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0" });
    }

    if (!isAdmin(req)) return send(res, 401, { error: "Not logged in" }, adminHeaders);

    if (m === "GET" && p === "/admin/api/me") return send(res, 200, { ok: true, db: dbInfo.kind, dbError: dbInfo.error }, adminHeaders);
    if (m === "GET" && p === "/admin/api/stats") return send(res, 200, await stats(url.searchParams.get("days")), adminHeaders);

    if (m === "GET" && p === "/admin/api/stream") {
      res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache, no-transform", Connection: "keep-alive", "X-Accel-Buffering": "no", ...adminHeaders });
      res.write(`event: live\ndata: ${JSON.stringify({ count: liveList().length })}\n\n`);
      sseClients.add(res);
      req.on("close", () => sseClients.delete(res));
      return;
    }

    const col = p.startsWith("/admin/api/orders") ? "orders" : p.startsWith("/admin/api/leads") ? "leads" : null;
    if (col) {
      const rest = p.split("/").slice(4); // [] or [id]
      if (m === "GET" && !rest.length) {
        const list = await store.list(col, { sort: { ts: -1 }, limit: 2000 });
        return send(res, 200, list, adminHeaders);
      }
      if (rest.length === 1 && (m === "PATCH" || m === "DELETE")) {
        const ctype = String(req.headers["content-type"] || "");
        if (m === "PATCH") {
          if (!ctype.includes("application/json")) return send(res, 415, { error: "JSON only" }, adminHeaders);
          const b = await readBody(req, 4000);
          if (!b || !STATUSES.includes(b.status)) return send(res, 400, { error: "Invalid status" }, adminHeaders);
          const ok = await store.update(col, rest[0], { status: b.status });
          return send(res, ok ? 200 : 404, { ok }, adminHeaders);
        }
        const ok = await store.remove(col, rest[0]);
        return send(res, ok ? 200 : 404, { ok }, adminHeaders);
      }
    }

    if (m === "GET" && (p === "/admin/api/export/orders.csv" || p === "/admin/api/export/leads.csv")) {
      const isOrders = p.includes("orders");
      const list = await store.list(isOrders ? "orders" : "leads", { sort: { ts: -1 }, limit: 20000 });
      const head = isOrders ? ["Date", "Invoice", "Name", "Mobile", "Package", "Items", "Total (LKR)", "Status"] : ["Date", "Name", "Mobile", "Company", "Interest", "Message", "Status"];
      const rows = list.map((o) => {
        const d = new Date(o.ts + COLOMBO).toISOString().replace("T", " ").slice(0, 16);
        return isOrders
          ? [d, o.invoice, o.name, o.mobile, o.package, (o.items || []).map((i) => `${i.name} x${i.qty}`).join("; "), o.total, o.status]
          : [d, o.name, o.mobile, o.company, o.interest, o.message, o.status];
      });
      const csv = "﻿" + [head, ...rows].map((r) => r.map(csvCell).join(",")).join("\r\n");
      return send(res, 200, csv, { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": `attachment; filename="${isOrders ? "orders" : "leads"}-${dayKey(Date.now())}.csv"`, ...adminHeaders });
    }
    return send(res, 404, { error: "Not found" }, adminHeaders);
  }

  return send(res, 404, "<h1>404 - Page not found</h1><a href='/'>Go home</a>", { "Content-Type": MIME[".html"] });
}

function createServer() {
  return http.createServer((req, res) => {
    handle(req, res).catch((e) => {
      console.error("Request error:", e);
      if (!res.headersSent) send(res, 500, { error: "Server error" });
      else res.end();
    });
  });
}

async function start(port) {
  await connectDb();
  const server = createServer();
  server.listen(port, "0.0.0.0", () => console.log("LYNKO running on port " + port + (env("ADMIN_PASSWORD") ? " (admin: /admin)" : " (admin disabled: set ADMIN_PASSWORD)")));
  return server;
}

module.exports = { start, createServer, connectDb };
