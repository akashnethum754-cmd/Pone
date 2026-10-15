const http = require("http");
const fs = require("fs");
const path = require("path");
const crypto = require("crypto");

const SITE = {};
SITE["index.html"] = `<!DOCTYPE html>
<html lang="si">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LYNKO Web Design (Pvt) Ltd | ශ්‍රී ලංකාවේ වෙබ් අඩවි නිර්මාණය</title>
<meta name="description" content="LYNKO Web Design (Pvt) Ltd ශ්‍රී ලංකාවේ ව්‍යාපාර සඳහා වේගවත්, නවීන වෙබ් අඩවි, Online Store සහ Web System නිර්මාණය කරයි.">
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans+Sinhala:wght@400;600;800&family=Inter:wght@400;600;800&display=swap" rel="stylesheet">
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
      <a href="#services">සේවාවන්</a>
      <a href="#work">අපේ වැඩ</a>
      <a href="#live">Live System</a>
      <a href="#pricing">මිල ගණන්</a>
      <a href="#bill">බිල්පත</a>
      <a href="#contact">සම්බන්ධ වන්න</a>
    </nav>
    <div class="nav-right">
      <button class="theme-toggle" id="themeToggle" aria-label="Toggle dark / light mode" title="Dark / Light">🌙</button>
      <a href="#bill" class="btn btn-primary btn-sm">මිල ගණන් ලබාගන්න</a>
      <button class="burger" aria-label="Menu">☰</button>
    </div>
  </div>
</header>

<section class="hero" id="top">
  <div class="container hero-grid">
    <div>
      <span class="live-pill"><span class="dot"></span> අපි Online · Colombo <b id="lkTime">--:--</b></span>
      <h1>ඔබේ ව්‍යාපාරය <span class="grad-text">වර්ධනය කරන</span> වෙබ් අඩවි අපි හදමු</h1>
      <p class="lead">LYNKO Web Design (Pvt) Ltd ආයතනය ශ්‍රී ලංකාවේ ව්‍යාපාර සඳහා වේගවත්, ලස්සන, පාරිභෝගිකයන් ආකර්ෂණය කරන වෙබ් අඩවි, Online Store සහ කළමනාකරණ පද්ධති නිර්මාණය කරයි.</p>
      <div class="hero-actions">
        <a href="#pricing" class="btn btn-primary">මිල ගණන් බලන්න →</a>
        <a href="#bill" class="btn btn-ghost">මගේ බිල හදන්න</a>
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

<div class="stats"><div class="container stats-grid">
  <div><b data-count="150" data-suffix="+">0</b><span>නිමකළ ව්‍යාපෘති</span></div>
  <div><b data-count="120" data-suffix="+">0</b><span>සතුටුදායක ගනුදෙනුකරුවන්</span></div>
  <div><b data-count="5" data-suffix="+">0</b><span>වසරක පළපුරුද්ද</span></div>
  <div><b data-count="99" data-suffix="%">0</b><span>ගනුදෙනුකරුවන්ගේ තෘප්තිය</span></div>
</div></div>

<section id="services">
  <div class="container center">
    <span class="tag">අපි කරන දේ</span>
    <h2>Online යන්න අවශ්‍ය සියල්ල</h2>
    <p class="lead">සරල ව්‍යාපාරික වෙබ් අඩවියක සිට සම්පූර්ණ Web System එකක් දක්වා සියල්ල අපි බලාගන්නම්.</p>
    <div class="grid g3">
      <div class="card reveal"><div class="ico">🎨</div><h3>වෙබ් අඩවි නිර්මාණය</h3><p>ඔබේ Brand එකට ගැලපෙන, ජංගම දුරකථනයට හරියටම ගැලපෙන නවීන නිර්මාණ.</p></div>
      <div class="card reveal"><div class="ico">💻</div><h3>Web Development</h3><p>වේගවත්, ආරක්ෂිත, SEO සඳහා සූදානම් වෙබ් අඩවි පිරිසිදු කේතයෙන්.</p></div>
      <div class="card reveal"><div class="ico">🛒</div><h3>Online Store</h3><p>භාණ්ඩ කළමනාකරණය, Cart, ඇණවුම් සහ දේශීය ගෙවීම් ක්‍රම සහිත වෙළඳසැල්.</p></div>
      <div class="card reveal"><div class="ico">⚙️</div><h3>විශේෂ Web System</h3><p>Booking, POS, LMS, Stock කළමනාකරණය වැනි ඔබේ වැඩට ගැලපෙන පද්ධති.</p></div>
      <div class="card reveal"><div class="ico">🔍</div><h3>SEO සහ ප්‍රවර්ධනය</h3><p>Google හි ඉහළට එන්න On-Page SEO, Google Business සහ Analytics සැකසීම.</p></div>
      <div class="card reveal"><div class="ico">🛟</div><h3>Hosting සහ සහාය</h3><p>Domain, Hosting, SSL, Backup සහ මාසික නඩත්තුව ඉක්මන් සහාය සමග.</p></div>
    </div>
  </div>
</section>

<section id="work" style="background:var(--surface2)">
  <div class="container center">
    <span class="tag">අපේ වැඩ</span>
    <h2>අපි 최근 නිමකළ ව්‍යාපෘති</h2>
    <p class="lead">Mouse එක තැබූ විට නවත්වනවා. සැබෑ පින්තූර දැන් ඇතුළත් කර ඇත.</p>
  </div>
  <div class="scroller"><div class="track" id="track1"></div></div>
  <div class="scroller rev" style="margin-top:22px"><div class="track" id="track2"></div></div>
</section>

<section id="live">
  <div class="container">
    <div class="center">
      <span class="tag">Live System</span>
      <h2>සජීවීව වැඩ කරන පද්ධතියක් බලන්න</h2>
      <p class="lead">අපි හදන Dashboard වර්ගයේ පද්ධතියක සජීවී Demo එකක්. ඇණවුම්, ආදායම සජීවීව වෙනස් වේ.</p>
    </div>
    <div class="live-wrap">
      <div class="browser reveal">
        <div class="browser-bar"><i></i><i></i><i></i><span>🔒 demo.lynko.lk/dashboard</span><span class="live-badge" style="flex:none;background:rgba(22,163,74,.12);border:0"><span class="dot"></span>LIVE</span></div>
        <div class="dash">
          <div class="kpis">
            <div class="kpi"><small>අද ඇණවුම්</small><b id="kOrders">0</b></div>
            <div class="kpi"><small>ආදායම (LKR)</small><b id="kRev">0</b></div>
            <div class="kpi"><small>දැන් සිටින අය</small><b id="kVis">0</b></div>
          </div>
          <div class="bars" id="bars"></div>
          <ul class="feed" id="feed"></ul>
        </div>
      </div>
      <div class="side-list">
        <div class="card reveal"><h3>🔔 ක්ෂණික දැනුම්දීම්</h3><p>ඇණවුමක් ආපු ගමන් SMS, Email හෝ WhatsApp වලින් දැනුම්දීමක් ලැබේ.</p></div>
        <div class="card reveal"><h3>📊 සජීවී වාර්තා</h3><p>විකුණුම්, Stock, ගනුදෙනුකරුවන්ගේ වාර්තා සජීවීව යාවත්කාලීන වේ.</p></div>
        <div class="card reveal"><h3>🔐 ආරක්ෂිත Admin Panel එක</h3><p>Role මත පදනම් වූ Login, ඔබේ කණ්ඩායමට අවශ්‍ය දේ පමණක් පෙනේ.</p></div>
        <div class="card reveal"><h3>📱 සෑම තැනකම වැඩ කරයි</h3><p>Phone, Tablet, Computer සියල්ලේම ලස්සනට වැඩ කරයි.</p></div>
      </div>
    </div>
  </div>
</section>

<section style="background:var(--surface2)">
  <div class="container center">
    <span class="tag">අපි වැඩ කරන විදිහ</span>
    <h2>අදහසේ සිට Live වන තෙක් පියවර 4න්</h2>
    <div class="grid g4 steps">
      <div class="card step reveal"><h3>අදහස</h3><p>ඔබේ ව්‍යාපාරය, ඉලක්ක සහ ගනුදෙනුකරුවන් ගැන අපි ඉගෙන ගන්නවා.</p></div>
      <div class="card step reveal"><h3>නිර්මාණය</h3><p>කේත ලිවීමට පෙර ඔබ Design එක අනුමත කරනවා.</p></div>
      <div class="card step reveal"><h3>සැකසීම</h3><p>අපි හදලා, පරීක්ෂා කරලා, වේගය සහ SEO හදලා දෙනවා.</p></div>
      <div class="card step reveal"><h3>Live කිරීම</h3><p>Live කරලා පුහුණුව සහ දිගටම සහාය ලබා දෙනවා.</p></div>
    </div>
  </div>
</section>

<section id="pricing">
  <div class="container">
    <div class="center">
      <span class="tag">මිල ගණන්</span>
      <h2>සරල, පැහැදිලි පැකේජ</h2>
      <p class="lead">ඔබේ ව්‍යාපාරයට ගැලපෙන පැකේජය තෝරන්න. සියලුම මිල ගණන් වලට බදු ඇතුළත් නැත.</p>
    </div>
    <div class="pk-grid" id="pkGrid"></div>
  </div>
</section>

<section id="bill" style="background:var(--surface2)">
  <div class="container">
    <div class="center">
      <span class="tag">ක්ෂණික බිල්පත</span>
      <h2>ඔබේ මිල ගණන් හදලා බිල්පත ලබාගන්න</h2>
      <p class="lead">පැකේජය සහ Add-ons තෝරන්න. බිල්පත සජීවීව හැදෙනවා. Print කරන්න, PDF කරන්න හෝ WhatsApp කරන්න.</p>
    </div>
    <div class="bill-wrap">
      <div class="panel reveal">
        <h3 style="margin-bottom:16px">1. ඔබේ විස්තර</h3>
        <div class="row2">
          <div class="field"><label>ආයතනය / නම</label><input id="bName" placeholder="උදා: ABC Traders"></div>
          <div class="field"><label>ජංගම දුරකථන අංකය</label><input id="bMobile" type="tel" placeholder="07X XXX XXXX"></div>
        </div>
        <h3 style="margin:10px 0 12px">2. පැකේජය</h3>
        <div class="field"><select id="bPackage"></select></div>
        <h3 style="margin:10px 0 4px">3. අමතර සේවාවන්</h3>
        <div id="bAddons"></div>
        <div class="row2" style="margin-top:16px">
          <div class="field"><label>වට්ටම (%)</label><input id="bDisc" type="number" min="0" max="100" value="0"></div>
          <div class="field"><label>VAT</label><select id="bVat"><option value="0">VAT නැත</option><option value="18">VAT 18%</option></select></div>
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
          <div><span>එකතුව</span><span id="tSub">0</span></div>
          <div><span>වට්ටම</span><span id="tDisc">0</span></div>
          <div><span id="tVatLabel">VAT</span><span id="tVat">0</span></div>
          <div class="grand"><span>මුළු එකතුව</span><span id="tTotal">LKR 0</span></div>
          <div><span>අත්තිකාරම් (50%)</span><span id="tAdv">0</span></div>
        </div>
        <p class="inv-note">මෙය මිල ගණන් ඇස්තමේන්තුවකි. වැඩ ආරම්භ කිරීමට 50% අත්තිකාරම්, ඉතිරිය වැඩ නිම වූ පසු. දින 14ක් වලංගුයි.</p>
        <div class="inv-actions">
          <button class="btn btn-primary btn-sm" id="btnPrint">🖨 Print / PDF</button>
          <button class="btn btn-wa btn-sm" id="btnWa">WhatsApp යවන්න</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="faq">
  <div class="container">
    <div class="center"><span class="tag">නිතර අසන ප්‍රශ්න</span><h2>ඔබ නිතර අහන ප්‍රශ්න</h2></div>
    <div class="faq">
      <div class="faq-item"><button class="faq-q">වෙබ් අඩවියක් හදන්න කොච්චර කල් යනවද? <span>+</span></button><div class="faq-a">සරල වෙබ් අඩවියක් content ලැබුණු පසු වැඩ කරන දින 5 සිට 7 දක්වා කාලයකින් නිම කරනවා. ලොකු System වලට වැඩි කාලයක් යනවා.</div></div>
      <div class="faq-item"><button class="faq-q">Domain සහ Hosting දෙනවද? <span>+</span></button><div class="faq-a">ඔව්. පැකේජ වල පළමු වසර සඳහා Domain සහ Hosting ඇතුළත්. පහසුවෙන් අලුත් කරන්න පුළුවන්.</div></div>
      <div class="faq-item"><button class="faq-q">මටම වෙබ් අඩවිය Update කරන්න පුළුවන්ද? <span>+</span></button><div class="faq-a">Business සහ E-Commerce පැකේජ සමග Admin Panel එකක් සහ පුහුණුවක් ලැබෙනවා.</div></div>
      <div class="faq-item"><button class="faq-q">ගෙවීම් කරන්නේ කොහොමද? <span>+</span></button><div class="faq-a">බැංකු තැන්පතුව, Card මගින් සහ මුදල්. 50% අත්තිකාරම්, ඉතිරිය භාරදීමේදී.</div></div>
    </div>
  </div>
</section>

<section id="contact" style="background:var(--surface2)">
  <div class="container">
    <div class="center"><span class="tag">සම්බන්ධ වන්න</span><h2>ඔබේ වෙබ් අඩවිය අපි හදමු</h2><p class="lead">ඔබේ ව්‍යාපෘතිය ගැන කියන්න, අපි WhatsApp එකෙන් පිළිතුරු දෙන්නම්.</p></div>
    <div class="contact-wrap">
      <div class="panel reveal">
        <form id="contactForm">
          <div class="row2">
            <div class="field"><label>ඔබේ නම *</label><input name="Name" required></div>
            <div class="field"><label>දුරකථන *</label><input name="Mobile" type="tel" required></div>
          </div>
          <div class="row2">
            <div class="field"><label>ආයතනය</label><input name="Institute"></div>
            <div class="field"><label>උනන්දුවක් ඇත්තේ</label><select name="Interest"><option>පැකේජය 1</option><option>පැකේජය 2</option><option>පැකේජය 3</option><option>විශේෂ පද්ධතියක්</option></select></div>
          </div>
          <div class="field"><label>පණිවිඩය</label><textarea name="Message" rows="4"></textarea></div>
          <button class="btn btn-primary" type="submit">පණිවිඩය යවන්න →</button>
        </form>
      </div>
      <div class="panel reveal">
        <h3>අපිත් එක්ක කතා කරන්න</h3>
        <ul class="info">
          <li><span>📞</span><div><b>දුරකථන</b><br>+94 11 000 0000</div></li>
          <li><span>💬</span><div><b>WhatsApp</b><br>+94 77 000 0000</div></li>
          <li><span>✉️</span><div><b>Email</b><br>hello@lynko.lk</div></li>
          <li><span>📍</span><div><b>කාර්යාලය</b><br>Colombo, Sri Lanka</div></li>
        </ul>
      </div>
    </div>
  </div>
</section>

<footer>
  <div class="container foot-grid">
    <div><a class="logo" href="#top"><i>L</i> LYNKO</a><p style="margin-top:12px;color:var(--muted);font-size:.92rem">LYNKO Web Design (Pvt) Ltd. ශ්‍රී ලංකාවේ ව්‍යාපාර සඳහා වෙබ් අඩවි සහ Web System.</p></div>
    <div><h4>සේවාවන්</h4><ul><li><a href="#services">වෙබ් නිර්මාණය</a></li><li><a href="#services">Development</a></li><li><a href="#services">E-Commerce</a></li><li><a href="#services">SEO</a></li></ul></div>
    <div><h4>ආයතනය</h4><ul><li><a href="#work">අපේ වැඩ</a></li><li><a href="#pricing">මිල ගණන්</a></li><li><a href="#bill">බිල්පත</a></li><li><a href="#faq">ප්‍රශ්න</a></li></ul></div>
    <div><h4>සම්බන්ධ වන්න</h4><ul><li>Colombo, Sri Lanka</li><li>+94 77 000 0000</li><li>hello@lynko.lk</li></ul></div>
  </div>
  <div class="container copy">© 2026 LYNKO Web Design (Pvt) Ltd. සියලුම හිමිකම් ආරක්ෂිතයි.</div>
</footer>
<a class="wa-float" id="waFloat" href="https://wa.me/94770000000" target="_blank" aria-label="WhatsApp">💬</a>
<div class="toast" id="toast"></div>
</body>
</html>
`;
SITE["style.css"] = \`:root{
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
body{font-family:'Noto Sans Sinhala','Inter',system-ui,-apple-system,Segoe UI,Roboto,sans-serif;background:var(--bg);color:var(--ink);line-height:1.7;transition:background.3s,color.3s}
img,svg{max-width:100%;display:block}
a{color:inherit;text-decoration:none}
.container{width:min(1200px,92%);margin:auto}
section{padding:88px 0}
h1,h2,h3{line-height:1.25;letter-spacing:-.02em}
h1{font-size:clamp(2.2rem,5.4vw,4rem);font-weight:800}
h2{font-size:clamp(1.8rem,3.6vw,2.7rem);font-weight:800;margin-bottom:12px}
h3{font-size:1.15rem;font-weight:700;margin-bottom:6px}
.lead{color:var(--muted);font-size:1.08rem;max-width:660px}
.center{text-align:center}.center.lead{margin:auto}
.grad-text{background:var(--grad);-webkit-background-clip:text;background-clip:text;color:transparent}
.tag{display:inline-block;padding:6px 14px;border-radius:999px;background:var(--surface2);border:1px solid var(--line);font-size:.8rem;font-weight:600;color:var(--brand);margin-bottom:14px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 26px;border-radius:999px;font:600 1rem inherit;font-family:inherit;border:2px solid transparent;cursor:pointer;transition:.25s}
.btn-primary{background:var(--grad);color:#fff;box-shadow:0 10px 26px rgba(109,94,252,.35)}
.btn-primary:hover{transform:translateY(-2px)}
.btn-ghost{border-color:var(--line);background:var(--surface);color:var(--ink)}
.btn-ghost:hover{border-color:var(--brand);color:var(--brand)}
.btn-wa{background:#22c55e;color:#fff}
.btn-sm{padding:9px 18px;font-size:.9rem}
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
.hero{position:relative;overflow:hidden;padding:84px 0 70px}
.hero::before{content:"";position:absolute;width:620px;height:620px;border-radius:50%;right:-180px;top:-220px;background:radial-gradient(circle,rgba(109,94,252,.35),transparent 70%)}
.hero::after{content:"";position:absolute;width:480px;height:480px;border-radius:50%;left:-160px;bottom:-240px;background:radial-gradient(circle,rgba(0,212,200,.25),transparent 70%)}
.hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.05fr.95fr;gap:40px;align-items:center}
.hero.lead{margin:18px 0 28px}
.live-pill{display:inline-flex;gap:8px;align-items:center;background:var(--surface);border:1px solid var(--line);padding:7px 14px;border-radius:999px;font-size:.82rem;font-weight:600;margin-bottom:18px;box-shadow:var(--shadow)}
.dot{width:9px;height:9px;border-radius:50%;background:var(--ok);box-shadow:0 0 0 0 rgba(22,163,74,.6);animation:ping 1.6s infinite}
@keyframes ping{70%{box-shadow:0 0 0 10px rgba(22,163,74,0)}100%{box-shadow:0 0 0 0 rgba(22,163,74,0)}}
.float{animation:float 5s ease-in-out infinite}
@keyframes float{50%{transform:translateY(-14px)}}
.hero-actions{display:flex;gap:12px;flex-wrap:wrap}
.stats{padding:0}
.stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:30px;box-shadow:var(--shadow);text-align:center;margin-top:-20px;position:relative;z-index:3}
.stats b{display:block;font-size:2.2rem;font-weight:800}
.stats span{color:var(--muted);font-size:.92rem}
.grid{display:grid;gap:22px;margin-top:44px}
.g3{grid-template-columns:repeat(3,1fr)}.g4{grid-template-columns:repeat(4,1fr)}
.card{background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);padding:28px;box-shadow:var(--shadow);transition:.3s}
.card:hover{transform:translateY(-6px);border-color:var(--brand)}
.ico{width:54px;height:54px;border-radius:15px;background:var(--surface2);display:grid;place-items:center;font-size:1.5rem;margin-bottom:16px}
.card p{color:var(--muted);font-size:.95rem}
.scroller{overflow:hidden;margin-top:44px;mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent);-webkit-mask-image:linear-gradient(90deg,transparent,#000 8%,#000 92%,transparent)}
.track{display:flex;gap:22px;width:max-content;animation:scroll 40s linear infinite}
.scroller.rev.track{animation-direction:reverse;animation-duration:48s}
.scroller:hover.track{animation-play-state:paused}
@keyframes scroll{to{transform:translateX(-50%)}}
.pcard{width:340px;flex:none;background:var(--surface);border:1px solid var(--line);border-radius:var(--radius);overflow:hidden;box-shadow:var(--shadow);transition:.3s}
.pcard:hover{transform:translateY(-6px) scale(1.02);border-color:var(--brand)}
.pcard.shot{aspect-ratio:16/10;background:var(--surface2);overflow:hidden}
.pcard.shot img,.pcard.shot svg{width:100%;height:100%;object-fit:cover}
.pcard.meta{padding:16px 18px;display:flex;justify-content:space-between;align-items:center;gap:10px}
.pcard small{color:var(--muted)}
.live-badge{display:inline-flex;gap:6px;align-items:center;font-size:.72rem;font-weight:700;color:var(--ok);background:rgba(22,163,74,.12);padding:4px 10px;border-radius:999px;white-space:nowrap}
.live-badge.dot{width:7px;height:7px}
.live-wrap{display:grid;grid-template-columns:1.1fr.9fr;gap:30px;margin-top:44px;align-items:stretch}
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
.bars i{flex:1;background:var(--grad);border-radius:6px 6px 0 0;transition:height.8s}
.feed{list-style:none;max-height:150px;overflow:hidden}
.feed li{display:flex;justify-content:space-between;padding:9px 0;border-bottom:1px dashed var(--line);font-size:.9rem;animation:slide.5s}
@keyframes slide{from{opacity:0;transform:translateY(-10px)}}
.feed b{color:var(--ok)}
.side-list{display:grid;gap:14px}
.side-list.card{padding:20px}
.pk-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px;margin-top:44px;align-items:stretch}
.pk{position:relative;background:var(--surface);border:1px solid var(--line);border-radius:26px;padding:34px;box-shadow:var(--shadow);display:flex;flex-direction:column;transition:.3s}
.pk.featured{border:2px solid var(--brand);transform:translateY(-10px)}
.pk.ribbon{position:absolute;top:-14px;left:50%;transform:translateX(-50%);background:var(--grad);color:#fff;font-size:.78rem;font-weight:700;padding:5px 16px;border-radius:999px}
.pk.price{font-size:2.5rem;font-weight:800;margin:10px 0 2px}
.pk.price small{font-size:.95rem;color:var(--muted);font-weight:500}
.pk ul{list-style:none;margin:20px 0 26px;flex:1}
.pk li{padding:7px 0 7px 30px;position:relative;font-size:.95rem}
.pk li::before{content:"✓";position:absolute;left:0;top:8px;width:20px;height:20px;border-radius:50%;background:var(--grad);color:#fff;font-size:.72rem;display:grid;place-items:center}
.pk.btn{justify-content:center;width:100%}
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
.totals.grand{border-top:2px solid #111;margin-top:6px;padding-top:8px;font-size:1.25rem;font-weight:800}
.inv-note{margin-top:16px;font-size:.78rem;color:#666}
.inv-actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:18px}
.steps{counter-reset:s}
.step{position:relative;padding-top:58px}
.step::before{counter-increment:s;content:counter(s);position:absolute;top:0;left:28px;width:40px;height:40px;border-radius:50%;background:var(--grad);color:#fff;display:grid;place-items:center;font-weight:700}
.faq{max-width:820px;margin:40px auto 0}
.faq-item{background:var(--surface);border:1px solid var(--line);border-radius:14px;margin-bottom:12px;overflow:hidden}
.faq-q{width:100%;text-align:left;padding:18px 22px;background:none;border:0;color:var(--ink);font:600 1rem inherit;font-family:inherit;cursor:pointer;display:flex;justify-content:space-between}
.faq-q span{transition:.3s}
.faq-a{max-height:0;overflow:hidden;transition:.35s;padding:0 22px;color:var(--muted)}
.faq-item.open.faq-a{max-height:220px;padding:0 22px 18px}
.faq-item.open.faq-q span{transform:rotate(45deg)}
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
@media(max-width:600px){.g3,.g4,.pk-grid,.row2,.kpis,.foot-grid{grid-template-columns:1fr}.pcard{width:270px}.nav-right.btn{display:none}}
@media print{
body *{visibility:hidden}
#invoice,#invoice *{visibility:visible}
#invoice{position:absolute;left:0;top:0;width:100%;box-shadow:none;border:0}
.inv-actions{display:none!important}
}
`;
SITE["script.js"] = `
var BRAND = { whatsapp: "94770000000" };
var PACKAGES = [
{ id: "p1", name: "පැකේජය 1 - ආරම්භක", price: 45000, tag: "", note: "කුඩා ව්‍යාපාර සඳහා හොඳම",
features: ["පිටු 5 දක්වා", "ජංගම දුරකථනයට ගැලපෙන නිර්මාණය", "Contact Form + WhatsApp බොත්තම", "මූලික SEO සැකසුම", "නොමිලේ SSL සහතිකය", "Domain + Hosting (වසර 1)", "Design සංශෝධන 2", "දින 7න් භාරදීම", "දින 30 නොමිලේ සහාය"] },
{ id: "p2", name: "පැකේජය 2 - ව්‍යාපාරික", price: 95000, tag: "ජනප්‍රියම", note: "වර්ධනය වන ආයතන සඳහා",
features: ["පිටු 10 දක්වා", "Admin Panel (ඔබටම Update කරන්න)", "Blog / පුවත් අංශය", "SEO + Google Analytics", "Google Maps + Social සම්බන්ධ කිරීම", "Domain + Hosting (වසර 1)", "Design සංශෝධන 3", "දින 14න් භාරදීම", "දින 90 නොමිලේ සහාය"] },
{ id: "p3", name: "පැකේජය 3 - E-Commerce", price: 185000, tag: "", note: "Online විකුණන්න",
features: ["සම්පූර්ණ Online වෙළඳසැල", "භාණ්ඩ 50 දක්වා", "Cart, Checkout සහ ඇණවුම් කළමනාකරණය", "PayHere ගෙවීම්", "ගනුදෙනුකරුවන්ගේ ගිණුම්", "Domain + Hosting (වසර 1)", "පුහුණු සැසිය", "දින 21න් භාරදීම", "දින 180 නොමිලේ සහාය"] }
];
var ADDONS = [
{ id: "page", name: "අමතර පිටුව", price: 3500, qty: true },
{ id: "logo", name: "Logo නිර්මාණය", price: 12000 },
{ id: "copy", name: "අන්තර්ගතය ලිවීම", price: 8000 },
{ id: "photo", name: "ඡායාරූපකරණය", price: 15000 },
{ id: "seo", name: "SEO වර්ධනය (මාස 3)", price: 30000 },
{ id: "maint", name: "මාසික නඩත්තුව (මසකට)", price: 6000, qty: true },
{ id: "host", name: "Domain + Hosting අලුත් කිරීම", price: 15000, qty: true }
];
var PROJECTS = [
{ title: "Fresh Mart Online Store", cat: "E-Commerce", url: "#", img: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?w=800&q=80&auto=format&fit=crop" },
{ title: "Sunrise Tuition Centre", cat: "Education", url: "#", img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80&auto=format&fit=crop" },
{ title: "Ocean View Villas", cat: "Hotel & Travel", url: "#", img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80&auto=format&fit=crop" },
{ title: "Prime Auto Parts", cat: "Business Website", url: "#", img: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80&auto=format&fit=crop" },
{ title: "DentCare Clinic", cat: "Healthcare", url: "#", img: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80&auto=format&fit=crop" },
{ title: "BuildRight Constructions", cat: "Corporate", url: "#", img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop" },
{ title: "Spice Garden Restaurant", cat: "Restaurant", url: "#", img: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80&auto=format&fit=crop" },
{ title: "FitZone Gym", cat: "Fitness", url: "#", img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80&auto=format&fit=crop" }
];
var $ = function (s, r) { return (r || document).querySelector(s); };
var $$ = function (s, r) { return Array.prototype.slice.call((r || document).querySelectorAll(s)); };
var fmt = function (n) { return Math.round(n).toLocaleString("en-US"); };
function toast(msg) { var t = $("#toast"); t.textContent = msg; t.classList.add("show"); setTimeout(function () { t.classList.remove("show"); }, 2600); }
document.addEventListener("DOMContentLoaded", function () {
var root = document.documentElement, tbtn = $("#themeToggle");
function paintToggle() { tbtn.textContent = root.getAttribute("data-theme") === "dark"? "☀️" : "🌙"; }
paintToggle();
tbtn.addEventListener("click", function () {
var next = root.getAttribute("data-theme") === "dark"? "light" : "dark";
root.setAttribute("data-theme", next);
try { localStorage.setItem("lynko-theme", next); } catch (e) {}
paintToggle();
});
var burger = $(".burger"), menu = $(".menu");
burger.addEventListener("click", function () { menu.classList.toggle("open"); });
$$(".menu a").forEach(function (a) { a.addEventListener("click", function () { menu.classList.remove("open"); }); });
function clock() { $("#lkTime").textContent = new Date().toLocaleTimeString("en-GB", { timeZone: "Asia/Colombo", hour: "2-digit", minute: "2-digit" }); }
clock(); setInterval(clock, 20000);
var io = new IntersectionObserver(function (es) { es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("show"); io.unobserve(e.target); } }); }, { threshold:.12 });
function observeReveals() { $$(".reveal").forEach(function (el) { io.observe(el); }); }
var cio = new IntersectionObserver(function (es) {
es.forEach(function (e) {
if (!e.isIntersecting) return;
var el = e.target, end = +el.dataset.count, suf = el.dataset.suffix || "", n = 0, step = Math.max(1, Math.ceil(end / 60));
var t = setInterval(function () { n = Math.min(end, n + step); el.textContent = n.toLocaleString() + suf; if (n >= end) clearInterval(t); }, 25);
cio.unobserve(el);
});
}, { threshold:.5 });
$$("[data-count]").forEach(function (el) { cio.observe(el); });
function cardHTML(p) {
var shot = p.img? '<img src="' + p.img + '" alt="' + p.title + '" loading="lazy">' : '';
return '<a class="pcard" href="' + (p.url || "#") + '"><div class="shot">' + shot + '</div><div class="meta"><div><b>' + p.title + '</b><br><small>' + p.cat + '</small></div><span class="live-badge"><span class="dot"></span>LIVE</span></div></a>';
}
function fillTrack(id, list) {
var html = list.map(function (p) { return cardHTML(p); }).join("");
$(id).innerHTML = html + html;
}
fillTrack("#track1", PROJECTS);
fillTrack("#track2", PROJECTS.slice().reverse());
var bars = $("#bars"), feed = $("#feed"), orders = 128, rev = 412500, vis = 37;
var bv = []; for (var b = 0; b < 14; b++) { bv.push(20 + Math.random() * 70); bars.insertAdjacentHTML("beforeend", "<i></i>"); }
function drawBars() { $$("i", bars).forEach(function (el, i) { el.style.height = bv[i] + "%"; }); }
var names = ["නිමල් පී.", "සඳුනි ඩබ්.", "කසුන් ඩී.", "ආයිෂා එෆ්.", "රවින්දු එස්.", "තරුෂි එම්.", "දිලාන් කේ.", "ඉසුරු එච්."];
var items = ["ඇණවුම #", "වෙන්කිරීම #", "බිල්පත #", "ගෙවීම #"];
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
$("#pkGrid").innerHTML = PACKAGES.map(function (p, i) {
return '<div class="pk reveal' + (i === 1? " featured" : "") + '">' + (p.tag? '<span class="ribbon">' + p.tag + "</span>" : "") +
"<h3>" + p.name + "</h3><small style='color:var(--muted)'>" + p.note + '</small><div class="price">LKR ' + fmt(p.price) + "<small> / එක වර</small></div><ul>" +
p.features.map(function (f) { return "<li>" + f + "</li>"; }).join("") + '</ul><a href="#bill" class="btn ' + (i === 1? "btn-primary" : "btn-ghost") + '" data-pick="' + p.id + '">තෝරන්න ' + p.name.split(" - ")[0] + "</a></div>";
}).join("");
$$("[data-pick]").forEach(function (a) { a.addEventListener("click", function () { $("#bPackage").value = a.dataset.pick; renderBill(); }); });
var sel = $("#bPackage");
sel.innerHTML = PACKAGES.map(function (p) { return '<option value="' + p.id + '">' + p.name + " — LKR " + fmt(p.price) + "</option>"; }).join("");
$("#bAddons").innerHTML = ADDONS.map(function (a) {
return '<div class="addon"><label><input type="checkbox" data-add="' + a.id + '"> ' + a.name + "</label><span>LKR " + fmt(a.price) + "</span>" + (a.qty? '<input type="number" min="1" value="1" data-qty="' + a.id + '">' : "") + "</div>";
}).join("");
var invNo = "LYN-" + new Date().toISOString().slice(2, 10).replace(/-/g, "") + "-" + Math.floor(100 + Math.random() * 900);
$("#invNo").textContent = invNo;
$("#invDate").textContent = new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "short", year: "numeric" });
var current = { total: 0, text: "", rows: [], pkg: "" };
function renderBill() {
var pk = PACKAGES.filter(function (p) { return p.id === sel.value; })[0], rows = [[pk.name, 1, pk.price]], sub = pk.price;
ADDONS.forEach(function (a) {
if ($('[data-add="' + a.id + '"]').checked) {
var q = a.qty? Math.max(1, +($('[data-qty="' + a.id + '"]').value) || 1) : 1;
rows.push([a.name, q, a.price * q]); sub += a.price * q;
}
});
var dp = Math.min(100, Math.max(0, +$("#bDisc").value || 0)), disc = sub * dp / 100, afterDisc = sub - disc;
var vp = +$("#bVat").value, vat = afterDisc * vp / 100, total = afterDisc + vat;
$("#invRows").innerHTML = rows.map(function (r) { return "<tr><td>" + r[0] + '</td><td class="r">' + r[1] + '</td><td class="r">' + fmt(r[2]) + "</td></tr>"; }).join("");
$("#tSub").textContent = fmt(sub); $("#tDisc").textContent = "- " + fmt(disc) + (dp? " (" + dp + "%)" : "");
$("#tVatLabel").textContent = vp? "VAT " + vp + "%" : "VAT"; $("#tVat").textContent = fmt(vat);
$("#tTotal").textContent = "LKR " + fmt(total); $("#tAdv").textContent = fmt(total / 2);
$("#invClient").textContent = $("#bName").value || "-"; $("#invMobile").textContent = $("#bMobile").value || "";
current.total = total; current.rows = rows; current.pkg = pk.name;
current.text = "Hello LYNKO, මට මේ මිල ගණන් අවශ්‍යයි (" + invNo + ")%0A" + rows.map(function (r) { return encodeURIComponent(r[0] + " x" + r[1] + " = LKR " + fmt(r[2])); }).join("%0A") +
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
$$(".faq-q").forEach(function (b) { b.addEventListener("click", function () { b.parentElement.classList.toggle("open"); }); });
$("#contactForm").addEventListener("submit", function (e) {
e.preventDefault();
var f = e.target, d = new FormData(f), body = {}, msg = "නව වෙබ් අඩවි විමසීමක්%0A";
d.forEach(function (v, k) { body[k] = v; msg += encodeURIComponent(k) + ": " + encodeURIComponent(v) + "%0A"; });
body.type = "contact";
fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) }).catch(function () {}).then(function () {
toast("ස්තූතියි! WhatsApp විවෘත වෙනවා...");
f.reset();
window.open("https://wa.me/" + BRAND.whatsapp + "?text=" + msg, "_blank");
});
});
fetch("/api/config").then(function (r) { return r.json(); }).then(function (c) {
if (c && c.whatsapp) { BRAND.whatsapp = c.whatsapp; $("#waFloat").href = "https://wa.me/" + c.whatsapp; }
}).catch(function () {});
(function () {
var sid = "";
try { sid = sessionStorage.getItem("lynko-sid") || ""; } catch (e) {}
var isNew =!sid;
if (!sid) { sid = Math.random().toString(36).slice(2) + Date.now().toString(36); try { sessionStorage.setItem("lynko-sid", sid); } catch (e) {} }
function ping(type) {
try { fetch("/api/track", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ sid: sid, type: type, path: location.pathname || "/", ref: document.referrer || "" }), keepalive: true }).catch(function () {}); } catch (e) {}
}
ping(isNew? "view" : "ping");
setInterval(function () { if (!document.hidden) ping("ping"); }, 60000);
})();
observeReveals();
});
`;

// ================= HELPERS (ඉතිරි backend code එක එහෙමමයි) =================
const COLOMBO = 5.5 * 3600000;
const DAY = 86400000;
const dayKey = (ts) => new Date(ts + COLOMBO).toISOString().slice(0, 10);
const startOfDay = (ts) => Math.floor((ts + COLOMBO) / DAY) * DAY - COLOMBO;
const uid = () => crypto.randomUUID();
const clean = (v, n = 500) => String(v == null? "" : v).slice(0, n).trim();
const STATUSES = ["new", "contacted", "in_progress", "paid", "completed", "cancelled"];
const env = (k, d = "") => process.env[k] || d;

function matches(doc, f) {
for (const k in f) {
const c = f[k];
if (c && typeof c === "object") {
if ("$gte" in c &&!(doc[k] >= c.$gte)) return false;
if ("$lt" in c &&!(doc[k] < c.$lt)) return false;
} else if (doc[k]!== c) return false;
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
async insert(c, d) { const a = (db[c] = db[c] || []); a.push(d); if (c === "visits" && a.length > 20000) a.splice(0, a.length - 20000); save(); },
async list(c, { filter = {}, sort, limit = 5000 } = {}) {
let r = (db[c] || []).filter((d) => matches(d, filter));
if (sort) { const [[k, dir]] = Object.entries(sort); r = r.slice().sort((a, b) => (a[k] > b[k]? 1 : a[k] < b[k]? -1 : 0) * dir); }
return r.slice(0, limit).map((x) => ({...x }));
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
await db.collection("visits").createIndex({ at: 1 }, { expireAfterSeconds: 90 * 86400 });
return {
kind: "mongodb",
async insert(c, d) { await db.collection(c).insertOne({...d }); },
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
if (!uri) { console.log("[db] MONGODB_URI not set: using local file storage."); return; }
try { store = await mongoStore(uri); dbInfo = { kind: "mongodb", error: "" }; console.log("[db] Connected to MongoDB."); }
catch (e) { dbInfo = { kind: "file", error: e.message }; console.error("[db] MongoDB FAILED, using file:", e.message); }
}
const secret = () => env("SESSION_SECRET") || crypto.createHash("sha256").update("lynko:" + env("ADMIN_PASSWORD")).digest("hex");
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString("base64url");
function sign(payload) { const b = b64(payload); return b + "." + crypto.createHmac("sha256", secret()).update(b).digest("base64url"); }
function verify(tok) {
if (!tok ||!env("ADMIN_PASSWORD")) return null;
const [b, s] = String(tok).split("."); if (!b ||!s) return null;
const e = crypto.createHmac("sha256", secret()).update(b).digest("base64url");
if (e.length!== s.length ||!crypto.timingSafeEqual(Buffer.from(e), Buffer.from(s))) return null;
try { const p = JSON.parse(Buffer.from(b, "base64url").toString()); return p.exp > Date.now()? p : null; } catch { return null; }
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
const hits = new Map();
function limited(key, max, windowMs) {
const now = Date.now(); const a = (hits.get(key) || []).filter((t) => now - t < windowMs);
if (a.length >= max) { hits.set(key, a); return true; } a.push(now); hits.set(key, a); return false;
}
setInterval(() => { const now = Date.now(); for (const [k, a] of hits) { const f = a.filter((t) => now - t < 3600000); f.length? hits.set(k, f) : hits.delete(k); } }, 600000).unref();
const ipOf = (req) => String(req.headers["x-forwarded-for"] || req.socket.remoteAddress || "").split(",")[0].trim();
const sseClients = new Set();
function broadcast(event, data) {
const msg = \`event: \${event}\ndata: \${JSON.stringify(data)}\n\n\`;
for (const res of sseClients) { try { res.write(msg); } catch {} }
}
const live = new Map();
function liveList() {
const cut = Date.now() - 5 * 60000;
for (const [k, v] of live) if (v.ts < cut) live.delete(k);
return [...live.values()];
}
setInterval(() => { if (sseClients.size) broadcast("live", { count: liveList().length }); }, 10000).unref();
setInterval(() => { for (const res of sseClients) { try { res.write(": hb\n\n"); } catch {} } }, 25000).unref();
const MIME = { ".html": "text/html; charset=utf-8", ".css": "text/css; charset=utf-8", ".js": "text/javascript; charset=utf-8", ".json": "application/json", ".svg": "image/svg+xml", ".png": "image/png", ".jpg": "image/jpeg", ".jpeg": "image/jpeg", ".webp": "image/webp", ".gif": "image/gif", ".ico": "image/x-icon", ".mp4": "video/mp4", ".webm": "video/webm", ".woff2": "font/woff2" };
function send(res, code, body, headers = {}) {
const isObj = body && typeof body === "object" &&!Buffer.isBuffer(body);
res.writeHead(code, { "X-Content-Type-Options": "nosniff",...(isObj? { "Content-Type": "application/json" } : {}),...headers });
res.end(isObj? JSON.stringify(body) : body);
}
function readBody(req, max = 100000) {
return new Promise((resolve) => {
let size = 0; const chunks = [];
req.on("data", (c) => { size += c.length; if (size > max) { req.destroy(); resolve(null); } else chunks.push(c); });
req.on("end", () => { try { resolve(chunks.length? JSON.parse(Buffer.concat(chunks).toString()) : {}); } catch { resolve(null); } });
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
try { const h = new URL(ref).hostname.replace(/^www./, ""); return h === String(host).replace(/^www./, "").split(":")[0]? "Direct" : h; } catch { return "Direct"; }
}
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
const active = (o) => o.status!== "cancelled";
const pack = (from, to) => {
const v = visits.filter((x) => x.ts >= from && x.ts < to);
const o = orders.filter((x) => x.ts >= from && x.ts < to);
const l = leads.filter((x) => x.ts >= from && x.ts < to);
return { visits: v.length, unique: new Set(v.map((x) => x.sid)).size, orders: o.length, leads: l.length, pipeline: o.filter(active).reduce((s, x) => s + (x.total || 0), 0), revenue: o.filter(confirmed).reduce((s, x) => s + (x.total || 0), 0), v, o, l };
};
const cur = pack(start, now + 1), prev = pack(prevStart, start);
const series = [];
for (let i = 0; i < days; i++) { const t = start + i * DAY, k = dayKey(t + 1); series.push({ date: k, visits: 0, orders: 0, revenue: 0, pipeline: 0 }); }
const idx = Object.fromEntries(series.map((s, i) => [s.date, i]));
cur.v.forEach((x) => { const i = idx[dayKey(x.ts)]; if (i!= null) series[i].visits++; });
cur.o.forEach((x) => { const i = idx[dayKey(x.ts)]; if (i == null) return; series[i].orders++; if (active(x)) series[i].pipeline += x.total || 0; if (confirmed(x)) series[i].revenue += x.total || 0; });
const count = (arr, f) => { const m = {}; arr.forEach((x) => { const k = f(x) || "Unknown"; m[k] = (m[k] || 0) + 1; }); return Object.entries(m).map(([name, count]) => ({ name, count })).sort((a, b) => b.count - a.count); };
const byStatus = Object.fromEntries(STATUSES.map((s) => [s, 0]));
cur.o.forEach((x) => { byStatus[x.status] = (byStatus[x.status] || 0) + 1; });
const pk = {};
cur.o.filter(active).forEach((x) => { const n = x.package || "Custom"; pk[n] = pk[n] || { name: n, count: 0, value: 0 }; pk[n].count++; pk[n].value += x.total || 0; });
const liveNow = liveList();
const recent = (await store.list("orders", { sort: { ts: -1 }, limit: 8 }));
const strip = ({ v, o, l,...rest }) => rest;
return { days, db: dbInfo.kind, dbError: dbInfo.error, totals: strip(cur), prev: strip(prev), conversion: cur.unique? +(cur.orders / cur.unique * 100).toFixed(1) : 0, series, status: byStatus, packages: Object.values(pk).sort((a, b) => b.value - a.value), devices: count(cur.v, (x) => x.device), sources: count(cur.v, (x) => x.source).slice(0, 6), live: { count: liveNow.length, pages: count(liveNow, (x) => x.path).slice(0, 5), devices: count(liveNow, (x) => x.device) }, recent };
}
const csvCell = (v) => { let s = String(v == null? "" : v); if (/^[=+-@\t\r]/.test(s)) s = "'" + s; return '"' + s.replace(/"/g, '""') + '"'; };
async function handle(req, res) {
const url = new URL(req.url, "http://x");
const p = decodeURIComponent(url.pathname).replace(/\/+$/, "") || "/";
const m = req.method;
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
if (e ||!st.isFile()) return send(res, 404, "Not found");
res.writeHead(200, { "Content-Type": MIME[path.extname(f).toLowerCase()] || "application/octet-stream", "Cache-Control": "public, max-age=3600" });
fs.createReadStream(f).pipe(res);
});
}
if (m === "POST" && p === "/api/track") {
const b = await readBody(req, 4000);
const dev = deviceOf(req.headers["user-agent"]);
if (!b || dev === "bot" || limited("t:" + ipOf(req), 120, 60000)) return send(res, 204, "");
const sid = clean(b.sid, 64); if (!sid) return send(res, 204, "");
const page = clean(b.path, 80) || "/";
live.set(sid, { ts: Date.now(), path: page, device: dev });
if (b.type === "view") {
const ts = Date.now(), source = sourceOf(b.ref, req.headers.host);
await store.insert("visits", { id: uid(), ts, at: new Date(ts), sid, path: page, device: dev, source });
broadcast("visit", { device: dev, source, path: page, ts, live: liveList().length });
}
return send(res, 204, "");
}
if (m === "POST" && p === "/api/contact") {
if (limited("c:" + ipOf(req), 12, 600000)) return send(res, 429, { ok: false, error: "Too many requests" });
const b = await readBody(req); if (!b) return send(res, 400, { ok: false, error: "Bad request" });
const mobile = clean(b.Mobile, 30); if (!mobile) return send(res, 400, { ok: false, error: "Mobile number required" });
const ts = Date.now();
if (b.type === "bill") {
const items = (Array.isArray(b.items)? b.items : []).slice(0, 30).map((i) => ({ name: clean(i.name, 80), qty: Math.max(1, +i.qty || 1), amount: Math.max(0, +i.amount || 0) }));
const order = { id: uid(), ts, at: new Date(ts), status: "new", invoice: clean(b.invoice, 30) || "LYN-" + ts, name: clean(b.Name, 100), mobile, company: clean(b.Institute, 100), package: clean(b.package, 80), items, message: clean(b.Message, 1500), total: Math.max(0, Math.round(+b.total || 0)) };
await store.insert("orders", order); broadcast("order", order); return send(res, 200, { ok: true });
}
const lead = { id: uid(), ts, at: new Date(ts), status: "new", name: clean(b.Name, 100), mobile, company: clean(b.Institute, 100), interest: clean(b.Interest, 80), message: clean(b.Message, 1500) };
await store.insert("leads", lead); broadcast("lead", lead); return send(res, 200, { ok: true });
}
if (p === "/admin" || p.startsWith("/admin/")) {
if (m === "GET" && p === "/admin") return send(res, 200, SITE["admin.html"], { "Content-Type": MIME[".html"],...adminHeaders });
if (!env("ADMIN_PASSWORD")) return send(res, 503, { error: "Admin disabled: set ADMIN_PASSWORD" }, adminHeaders);
if (m === "POST" && p === "/admin/api/login") {
const ip = ipOf(req); if (limited("l:" + ip, 6, 15 * 60000)) return send(res, 429, { error: "Too many attempts. Try again in 15 minutes." }, adminHeaders);
const b = await readBody(req, 2000); if (!b) return send(res, 400, { error: "Bad request" }, adminHeaders);
const okUser = safeEq(b.user || "", env("ADMIN_USER", "admin")); const okPass = safeEq(b.password || "", env("ADMIN_PASSWORD"));
if (!(okUser && okPass)) return send(res, 401, { error: "Wrong username or password" }, adminHeaders);
const tok = sign({ u: "admin", exp: Date.now() + 12 * 3600000 });
return send(res, 200, { ok: true }, {...adminHeaders, "Set-Cookie": \`lynko_admin=\${tok}; HttpOnly; SameSite=Strict; Path=/; Max-Age=43200\${isHttps(req)? "; Secure" : ""}\` });
}
if (m === "POST" && p === "/admin/api/logout") return send(res, 200, { ok: true }, {...adminHeaders, "Set-Cookie": "lynko_admin=; HttpOnly; SameSite=Strict; Path=/; Max-Age=0" });
if (!isAdmin(req)) return send(res, 401, { error: "Not logged in" }, adminHeaders);
if (m === "GET" && p === "/admin/api/me") return send(res, 200, { ok: true, db: dbInfo.kind, dbError: dbInfo.error }, adminHeaders);
if (m === "GET" && p === "/admin/api/stats") return send(res, 200, await stats(url.searchParams.get("days")), adminHeaders);
if (m === "GET" && p === "/admin/api/stream") {
res.writeHead(200, { "Content-Type": "text/event-stream", "Cache-Control": "no-cache, no-transform", Connection: "keep-alive", "X-Accel-Buffering": "no",...adminHeaders });
res.write(\`event: live\ndata: \${JSON.stringify({ count: liveList().length })}\n\n\`);
sseClients.add(res); req.on("close", () => sseClients.delete(res)); return;
}
const col = p.startsWith("/admin/api/orders")? "orders" : p.startsWith("/admin/api/leads")? "leads" : null;
if (col) {
const rest = p.split("/").slice(4);
if (m === "GET" &&!rest.length) { const list = await store.list(col, { sort: { ts: -1 }, limit: 2000 }); return send(res, 200, list, adminHeaders); }
if (rest.length === 1 && (m === "PATCH" || m === "DELETE")) {
const ctype = String(req.headers["content-type"] || "");
if (m === "PATCH") {
if (!ctype.includes("application/json")) return send(res, 415, { error: "JSON only" }, adminHeaders);
const b = await readBody(req, 4000); if (!b ||!STATUSES.includes(b.status)) return send(res, 400, { error: "Invalid status" }, adminHeaders);
const ok = await store.update(col, rest[0], { status: b.status }); return send(res, ok? 200 : 404, { ok }, adminHeaders);
}
const ok = await store.remove(col, rest[0]); return send(res, ok? 200 : 404, { ok }, adminHeaders);
}
}
if (m === "GET" && (p === "/admin/api/export/orders.csv" || p === "/admin/api/export/leads.csv")) {
const isOrders = p.includes("orders"); const list = await store.list(isOrders? "orders" : "leads", { sort: { ts: -1 }, limit: 20000 });
const head = isOrders? ["Date", "Invoice", "Name", "Mobile", "Package", "Items", "Total (LKR)", "Status"] : ["Date", "Name", "Mobile", "Company", "Interest", "Message", "Status"];
const rows = list.map((o) => { const d = new Date(o.ts + COLOMBO).toISOString().replace("T", " ").slice(0, 16); return isOrders? [d, o.invoice, o.name, o.mobile, o.package, (o.items || []).map((i) => \`\${i.name} x\${i.qty}\`).join("; "), o.total, o.status] : [d, o.name, o.mobile, o.company, o.interest, o.message, o.status]; });
const csv = "﻿" + [head,...rows].map((r) => r.map(csvCell).join(",")).join("\r\n");
return send(res, 200, csv, { "Content-Type": "text/csv; charset=utf-8", "Content-Disposition": \`attachment; filename="\${isOrders? "orders" : "leads"}-\${dayKey(Date.now())}.csv"\`,...adminHeaders });
}
return send(res, 404, { error: "Not found" }, adminHeaders);
}
return send(res, 404, "<h1>404 - Page not found</h1><a href='/'>Go home</a>", { "Content-Type": MIME[".html"] });
}
function createServer() {
return http.createServer((req, res) => {
handle(req, res).catch((e) => { console.error("Request error:", e); if (!res.headersSent) send(res, 500, { error: "Server error" }); else res.end(); });
});
}
async function start(port) {
await connectDb();
const server = createServer();
server.listen(port, "0.0.0.0", () => console.log("LYNKO running on port " + port + (env("ADMIN_PASSWORD")? " (admin: /admin)" : " (admin disabled: set ADMIN_PASSWORD)")));
return server;
}
module.exports = { start, createServer, connectDb };
