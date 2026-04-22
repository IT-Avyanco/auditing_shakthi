# Avyanco Landing Page — New Page Creation Guide

## Project Overview

**Client:** Avyanco Auditing LLC — Licensed, MOE-approved, bank-approved audit firm, Dubai UAE  
**Repo:** `https://github.com/IT-Avyanco/auditing_landingpages.git` (branch: `main`)  
**Local path (XAMPP macOS):** `/Applications/XAMPP/xamppfiles/htdocs/Avyanco/avyanco.net/landingpages/`

---

## Folder Structure

```
landingpages/
├── general/index.html          ← Generic Dubai auditing page (reference page)
├── dafza/index.html            ← DAFZA free zone page
├── dmcc/index.html             ← DMCC free zone page
├── jafza/index.html            ← JAFZA free zone page
├── [new-slug]/index.html       ← New page goes here (LIVE — publish after approval only)
│
├── assets/
│   ├── css/landing-common.css  ← SHARED minified CSS (single-line, do not rewrite)
│   ├── js/landing-common.js    ← SHARED minified JS (single-line, do not rewrite)
│   └── images/
│       ├── hero-banner.webp
│       ├── logo.png
│       ├── favicon.png
│       ├── whatsapp_icon_80x80.webp
│       └── industry-1.jpg … industry-6.jpg
│
└── development/                ← Unminified source files — ALWAYS EDIT HERE FIRST
    ├── assets/
    │   ├── css/landing-common.css
    │   └── js/landing-common.js
    ├── general/index.html
    ├── dafza/index.html
    ├── dmcc/index.html
    ├── jafza/index.html
    └── [new-slug]/index.html   ← New development file
```

---

## Workflow Rules (MUST FOLLOW)

1. **Create `development/[slug]/index.html` FIRST** — never touch the live folder until approved
2. **Wait for explicit user approval** before publishing to live (`[slug]/index.html`)
3. After approval: copy file to live path → `git add` → `git commit` → `git push origin main`
4. **Never use diff/patch tools on minified CSS** — use Python `str.replace()` for targeted edits

---

## Tech Stack & Constraints

| Constraint | Detail |
|---|---|
| Framework | Pure HTML5 only — no React, Vue, Bootstrap, Tailwind |
| Build tools | None — no npm, no Node.js |
| Font | Poppins via Google Fonts |
| Shared CSS/JS | Already exists — link to them, do not rewrite |
| Image processing | Python `.venv/` with Pillow available |
| Full HTML doc | Required (`<!DOCTYPE html>`, `<html>`, `<head>`, `<body>`) |

---

## Brand Design Tokens

```
Primary Blue:    #2c3f7e   (CSS var: --avy-darkblue)
Header/Footer:   #1b2558   (hardcoded, not a variable)
Accent Red:      #fd4a36   (CSS var: --avy-accent)
Body Text:       #0f172a
Muted Text:      #64748b
Page BG:         #ffffff
Alt Section BG:  #f8faff
```

**Font:** `'Poppins', sans-serif`  
**Icon size standard:** `56×56px` with `object-fit: contain`

---

## CSS Classes Available in Shared CSS

Do not add custom CSS for these — they are already defined in `assets/css/landing-common.css`:

```
Layout:       .container  .wrap  .grid  .grid-2  .grid-3  .grid-4  .section  .section.alt  .slice
Header:       .avy-header  .avy-brand  .avy-actions  .avy-wa  .avy-call
Hero:         .hero  .hero-wrap  .hero-cta-form  .left  .right  .pill  .pill-row  .trust-strip  .trust-logo
Cards:        .card  .card.service  .sicon  .badge  .eyebrow  .muted  .mini  .list  .tick  .table
Industries:   .industry-card  .industry-chip  .inner  .zoom
Team:         .team-carousel  .team-card  .team-face  .team-front  .team-back
              .team-photo  .team-meta  .team-name  .team-role  .team-bio  .team-chip  .team-btn  .team-track
Other:        .avy-footer  .reveal  .reveal-up  .logo-grid
```

---

## Step-by-Step: Create a New Page

### Step 1 — Plan the page

Decide on:
- `[PAGE_SLUG]` — URL folder name (e.g. `ifza`, `mainland`, `vat`, `corporate-tax`)
- Page topic — the free zone or service this page targets
- H1 headline — specific to the topic
- Meta description — unique 150-character description
- 4 topic-specific FAQ questions

### Step 2 — Create the development file

Path: `development/[PAGE_SLUG]/index.html`

Copy the full template below and replace all `[PLACEHOLDERS]`.

### Step 3 — Verify locally

Open in XAMPP: `http://localhost/Avyanco/avyanco.net/landingpages/development/[PAGE_SLUG]/`

Check:
- [ ] Hero image loads
- [ ] Zoho form embeds in hero and lead section
- [ ] TrustIndex testimonials load in `.logo-grid`
- [ ] All 8 service cards visible
- [ ] Industry cards show background images
- [ ] Team carousel scrolls
- [ ] WhatsApp button shows `whatsapp_icon_80x80.webp`
- [ ] Reveal animations trigger on scroll
- [ ] Mobile responsive

### Step 4 — Get user approval

Show the development URL and wait for explicit "approve" or "publish live".

### Step 5 — Publish to live

```bash
cp development/[PAGE_SLUG]/index.html [PAGE_SLUG]/index.html
git add [PAGE_SLUG]/index.html development/[PAGE_SLUG]/index.html
git commit -m "Add [PAGE_SLUG] landing page - [brief description]"
git push origin main
```

---

## Full HTML Template

Replace every `[PLACEHOLDER]` before saving.

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Google Tag Manager -->
  <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
  new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
  j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
  'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
  })(window,document,'script','dataLayer','GTM-N2DXS5NK');</script>
  <!-- End Google Tag Manager -->

  <meta charset="UTF-8">
  <meta name="theme-color" content="#2c3f7e">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700;800&display=swap" rel="stylesheet">
  <link rel="preload" as="image" href="../assets/images/hero-banner.webp" fetchpriority="high">

  <meta name="description" content="[UNIQUE META DESCRIPTION — max 155 characters]">
  <meta name="keywords" content="auditors, auditing, Dubai, [FREE ZONE], compliance, financial audit, VAT">
  <meta name="robots" content="index, follow">
  <meta name="language" content="English">
  <meta name="revisit-after" content="30 days">
  <meta name="author" content="Avyanco Auditing LLC">

  <meta property="og:type" content="website">
  <meta property="og:title" content="[PAGE TITLE] | Avyanco Auditing LLC">
  <meta property="og:description" content="[SAME AS META DESCRIPTION]">
  <meta property="og:url" content="https://campaign.avyanco.net/[PAGE_SLUG]/">
  <link rel="canonical" href="https://campaign.avyanco.net/[PAGE_SLUG]/">
  <meta property="og:image" content="../assets/images/logo.png">
  <meta property="og:site_name" content="Avyanco Auditing LLC">

  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[PAGE TITLE] | Avyanco Auditing LLC">
  <meta name="twitter:description" content="[SAME AS META DESCRIPTION]">
  <meta name="twitter:image" content="../assets/images/logo.png">

  <link rel="icon" type="image/x-icon" href="../assets/images/favicon.png">
  <link rel="apple-touch-icon" href="../assets/images/favicon.png">

  <title>[PAGE TITLE] | Avyanco Auditing LLC</title>

  <!-- Critical CSS reset — copy exactly, do not modify -->
  <style>*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Poppins',sans-serif;line-height:1.65;color:#0f172a;background:#ffffff;overflow-x:hidden}img{max-width:100%;height:auto;display:block}html{scroll-padding-top:70px}</style>
</head>
<body>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N2DXS5NK"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>

<!-- GA Event Tracking -->
<script>
(function() {
  window.trackCTAEvent = function(eventName, eventLabel, eventValue) {
    if (typeof window.gtag !== 'undefined') {
      gtag('event', eventName, {
        'event_category': 'engagement',
        'event_label': eventLabel,
        'value': eventValue || 1
      });
    }
  };
  setTimeout(function() {
    var waBtn = document.querySelector('.avy-wa');
    var callBtn = document.querySelector('.avy-call');
    if (waBtn) waBtn.addEventListener('click', function() { trackCTAEvent('contact_cta','header_whatsapp',1); });
    if (callBtn) callBtn.addEventListener('click', function() { trackCTAEvent('contact_cta','header_call',1); });

    document.querySelectorAll('a[href="#lead"]').forEach(function(link) {
      link.addEventListener('click', function() { trackCTAEvent('cta_click', this.textContent.trim()||'CTA', 1); });
    });
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
      if (!link.classList.contains('avy-call')) link.addEventListener('click', function() { trackCTAEvent('contact_cta','phone_link',1); });
    });
    document.querySelectorAll('a[href^="mailto:"]').forEach(function(link) {
      link.addEventListener('click', function() { trackCTAEvent('contact_cta','email_link',1); });
    });
    document.querySelectorAll('a[href^="https://wa.me"]').forEach(function(link) {
      if (!link.classList.contains('avy-wa')) link.addEventListener('click', function() { trackCTAEvent('contact_cta','whatsapp_link',1); });
    });

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(m) {
        m.addedNodes.forEach(function(node) {
          if (node.nodeType===1 && node.tagName==='IFRAME') trackCTAEvent('form_view','consultation_form',1);
        });
      });
    });
    var fc = document.querySelector('[id^="zf_div_"]');
    if (fc) observer.observe(fc, {childList:true});

    window.addEventListener('message', function(e) {
      if (e.data && typeof e.data==='string' && e.data.indexOf('zf_responseHandler')>-1)
        trackCTAEvent('form_submit','consultation_form',1);
    });
  }, 500);
})();
</script>

<!-- ================= HEADER ================= -->
<header class="avy-header" role="navigation" aria-label="Main header">
  <div class="wrap">
    <div class="avy-brand">
      <img src="../assets/images/logo.png" alt="Avyanco Auditing LLC Logo">
    </div>
    <div class="avy-actions">
      <a class="avy-wa" href="https://wa.me/97142405000" aria-label="Chat on WhatsApp">
        <img src="../assets/images/whatsapp_icon_80x80.webp" alt="WhatsApp" width="50" height="50"/>
      </a>
      <a class="avy-call" href="tel:+971503989000" aria-label="Call Avyanco">+971 50 398 9000</a>
    </div>
  </div>
</header>

<!-- ================= HERO ================= -->
<section class="hero" role="banner" aria-label="Avyanco Auditing LLC">
  <div class="container hero-wrap">
    <div class="left reveal-up">
      <span class="badge">Avyanco Auditing LLC</span>
      <h1>[H1 HEADLINE — e.g. "IFZA Approved Auditors in Dubai"]</h1>
      <p class="lead">[SUBHEADLINE — e.g. "Registered | MOE Approved | IFZA Approved Auditors"]</p>
      <div class="pill-row" aria-label="Trust signals">
        <span class="pill">🏆 Trusted by 5000+ Businesses</span>
        <span class="pill">✅ [FREE ZONE] Approved Auditors</span>
        <span class="pill">🏦 Registered with UAE Banks</span>
      </div>
      <div class="trust-strip" style="margin-top:20px">
        <img src="https://avyanco.net/wp-content/uploads/2025/11/Partner-logo.png" alt="Partner Logos" class="trust-logo" loading="lazy">
      </div>
    </div>
    <div class="right hero-cta-form reveal">
      <h2 style="margin:12px 0">Get A Free Consultation!</h2>
      <!-- Zoho form — hero instance. Use unique ID. -->
      <div id="zf_div_[ZOHO_ID_HERO]"></div>
    </div>
  </div>
</section>

<div class="slice"></div>

<!-- ================= WHY CHOOSE US ================= -->
<section class="section alt" id="why" aria-label="Why choose Avyanco">
  <div class="container">
    <div class="section-header center reveal">
      <span class="eyebrow">Why Choose Us</span>
      <h2>Why Businesses Trust Avyanco Auditing LLC</h2>
    </div>
    <div class="grid grid-4" style="margin-top:16px">

      <div class="card service reveal">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Free-Zone-Bank-Approved.png" alt="Free Zone & Bank Approved" width="56" height="56"></div>
        <div><b>Free Zone &amp; Bank Approved</b><p class="muted mini">Approved and trusted by leading UAE banks and major free zones</p></div>
      </div>

      <div class="card service reveal">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Senior-CA-Led-Team.png" alt="Senior CA-Led Team" width="56" height="56"></div>
        <div><b>Senior CA-Led Team</b><p class="muted mini">Led by Chartered Accountants with deep UAE industry expertise ensuring precise reporting and regulatory accuracy.</p></div>
      </div>

      <div class="card service reveal">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Timely-Completion.png" alt="Timely Completion" width="56" height="56"></div>
        <div><b>Timely Completion</b><p class="muted mini">Guaranteed on-time delivery with full compliance so you can stay focused on growing your business.</p></div>
      </div>

      <div class="card service reveal">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Transparent-Pricing.png" alt="Transparent Pricing" width="56" height="56"></div>
        <div><b>Transparent Pricing</b><p class="muted mini">Honest pricing with no surprises — clear scope, fair fees, and unmatched value in Dubai.</p></div>
      </div>

    </div>
  </div>
</section>

<div class="slice"></div>

<!-- ================= CLIENT TESTIMONIALS ================= -->
<section id="clients" class="reveal">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Client Testimonials</span>
      <h2>Client Partners Who Trust Our Expertise</h2>
      <p class="lead">Join 200+ businesses that rely on Avyanco for audit, VAT and compliance across UAE free zones &amp; mainland.</p>
    </div>
    <!-- TrustIndex: script MUST be inside .logo-grid as a real <script> tag -->
    <div class="logo-grid">
      <script async defer src="https://cdn.trustindex.io/loader.js?cca651858e075384c95618e0b5f"></script>
    </div>
  </div>
</section>

<div class="slice"></div>

<!-- ================= SERVICES ================= -->
<section class="section" id="services" aria-label="Audit services">
  <div class="container">
    <div class="section-header center reveal">
      <span class="eyebrow">Services</span>
      <h2>Our Audit Services in Dubai</h2>
    </div>
    <div class="grid grid-4" style="margin-top:16px">

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Statutory-audit.png" alt="Statutory Audit" width="56" height="56"></div>
        <div><b>Statutory Audit</b><p class="muted mini"><b>Purpose:</b> Ensures legal compliance with UAE regulations.<br><b>Ideal For:</b> Mainland &amp; Free Zone Companies</p></div>
      </a>

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Internal-audit.png" alt="Internal Audit" width="56" height="56"></div>
        <div><b>Internal Audit</b><p class="muted mini"><b>Purpose:</b> Strengthens internal controls and improves operational efficiency.<br><b>Ideal For:</b> Growing and mid-sized businesses</p></div>
      </a>

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/External-audit.png" alt="External Audit" width="56" height="56"></div>
        <div><b>External Audit</b><p class="muted mini"><b>Purpose:</b> Independent assurance to stakeholders through transparent reporting.<br><b>Ideal For:</b> Investors, partners &amp; banks</p></div>
      </a>

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Vat-audit.png" alt="VAT Audit" width="56" height="56"></div>
        <div><b>VAT Audit</b><p class="muted mini"><b>Purpose:</b> Verifies VAT filings and FTA compliance.<br><b>Ideal For:</b> Businesses registered under UAE VAT</p></div>
      </a>

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Liqu.-audit.png" alt="Liquidation Audit" width="56" height="56"></div>
        <div><b>Liquidation Audit</b><p class="muted mini"><b>Purpose:</b> Mandatory audit to finalize accounts for company closure.<br><b>Ideal For:</b> Companies undergoing liquidation</p></div>
      </a>

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Finan-audit.png" alt="Financial Audit" width="56" height="56"></div>
        <div><b>Financial Audit</b><p class="muted mini"><b>Purpose:</b> Assesses financial statements for accuracy.<br><b>Ideal For:</b> Any UAE-based business</p></div>
      </a>

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Forensic-audit.png" alt="Forensic Audit" width="56" height="56"></div>
        <div><b>Forensic Audit</b><p class="muted mini"><b>Purpose:</b> Detects fraud, irregularities, or mismanagement.<br><b>Ideal For:</b> Companies under investigation</p></div>
      </a>

      <a href="#lead" class="card service reveal" style="text-decoration:none">
        <div class="sicon"><img src="https://avyanco.net/wp-content/uploads/2025/11/Management-audit.png" alt="Management Audit" width="56" height="56"></div>
        <div><b>Management Audit</b><p class="muted mini"><b>Purpose:</b> Reviews efficiency &amp; policy adherence.<br><b>Ideal For:</b> Established organizations</p></div>
      </a>

    </div>
  </div>
</section>

<div class="slice"></div>

<!-- ================= WHAT IS AN AUDIT & BENEFITS ================= -->
<section class="section alt" aria-label="What is an audit and benefits">
  <div class="container grid grid-2">

    <div class="card reveal">
      <h3>What Is an Audit and Why Is It Important?</h3>
      <p>An audit is an independent review of a company's financial statements to verify their accuracy, compliance, and transparency. It provides valuable insights into your business's financial position, helps identify discrepancies, and strengthens internal controls.</p>
      <h4 style="margin-top:16px">Key Reasons Why an Audit Is Important:</h4>
      <ul class="list">
        <li><span class="tick">✓</span> Mandatory Compliance – Required under UAE Commercial Companies Law and by most Free Zone Authorities</li>
        <li><span class="tick">✓</span> License &amp; Loan Requirements – Essential for license renewal, bank loan approvals, and investor reporting</li>
        <li><span class="tick">✓</span> Business Continuity – Crucial during liquidation, mergers, or financial restructuring</li>
      </ul>
    </div>

    <div class="card reveal">
      <h3>🕒 Benefits of Timely Audit</h3>
      <table class="table" aria-label="Benefits of timely audit">
        <thead><tr><th>Benefit</th><th>Impact on Your Business</th></tr></thead>
        <tbody>
          <tr><td>Avoid Penalties</td><td>Stay compliant with UAE laws and avoid fines or license suspension</td></tr>
          <tr><td>Improve Financial Transparency</td><td>Build trust and credibility with investors, banks, and authorities</td></tr>
          <tr><td>Better Decision Making</td><td>Gain accurate financial insights to guide strategic planning</td></tr>
          <tr><td>Support Growth &amp; Funding</td><td>Strengthen your position for bank financing and investor opportunities</td></tr>
          <tr><td>Smooth Renewals</td><td>Simplify free zone and mainland license renewal processes</td></tr>
        </tbody>
      </table>
    </div>

  </div>
</section>

<div class="slice"></div>

<!-- ================= INDUSTRIES ================= -->
<section class="section" id="industries" aria-label="Industries we serve">
  <div class="container">
    <div class="section-header center reveal">
      <span class="eyebrow">Industries</span>
      <h2>Industries We Serve</h2>
    </div>
    <div class="grid grid-3" style="margin-top:14px">

      <a class="industry-card reveal" aria-label="Real Estate and Construction" style="--bg:url('../assets/images/industry-1.jpg')">
        <span class="zoom" aria-hidden="true"></span>
        <span class="industry-chip">Real Estate</span>
        <div class="inner"><b>Real Estate &amp; Construction</b><p>Project-based controls, lender reporting, and compliance oversight.</p></div>
      </a>

      <a class="industry-card reveal" aria-label="Trading and Manufacturing" style="--bg:url('../assets/images/industry-2.jpg')">
        <span class="zoom" aria-hidden="true"></span>
        <span class="industry-chip">Trading</span>
        <div class="inner"><b>Trading &amp; Manufacturing</b><p>Inventory management, COGS, and cross-border regulatory compliance.</p></div>
      </a>

      <a class="industry-card reveal" aria-label="Logistics and Transport" style="--bg:url('../assets/images/industry-3.jpg')">
        <span class="zoom" aria-hidden="true"></span>
        <span class="industry-chip">Logistics</span>
        <div class="inner"><b>Logistics &amp; Transport</b><p>Revenue recognition, contract management, and VAT compliance.</p></div>
      </a>

      <a class="industry-card reveal" aria-label="IT and Consultancy" style="--bg:url('../assets/images/industry-4.jpg')">
        <span class="zoom" aria-hidden="true"></span>
        <span class="industry-chip">IT</span>
        <div class="inner"><b>IT &amp; Consultancy</b><p>Service revenue recognition, IP considerations, and financial controls.</p></div>
      </a>

      <a class="industry-card reveal" aria-label="Hospitality and Retail" style="--bg:url('../assets/images/industry-5.jpg')">
        <span class="zoom" aria-hidden="true"></span>
        <span class="industry-chip">Retail</span>
        <div class="inner"><b>Hospitality &amp; Retail</b><p>POS controls, multi-location reporting, and operational transparency.</p></div>
      </a>

      <a class="industry-card reveal" aria-label="Healthcare and Services" style="--bg:url('../assets/images/industry-6.jpg')">
        <span class="zoom" aria-hidden="true"></span>
        <span class="industry-chip">Healthcare</span>
        <div class="inner"><b>Healthcare &amp; Services</b><p>Regulatory compliance, payroll accuracy, and data governance.</p></div>
      </a>

    </div>
  </div>
</section>

<div class="slice"></div>

<!-- ================= TEAM CAROUSEL ================= -->
<section id="experts" class="reveal">
  <div class="container">
    <div class="section-header">
      <span class="eyebrow">Our Experts</span>
      <h2>Let's Meet Our Team of Professionals</h2>
      <p>A senior CA-led team of FTA-qualified auditors and accountants—ready to solve complex audit and compliance challenges.</p>
    </div>
    <div class="team-carousel">
      <div class="team-nav" aria-hidden="false">
        <button class="team-btn prev" type="button" aria-label="Previous" onclick="document.getElementById('teamTrack').scrollBy({left:-320,behavior:'smooth'})">
          <svg viewBox="0 0 24 24"><path d="M15.41 16.59 10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/></svg>
        </button>
        <button class="team-btn next" type="button" aria-label="Next" onclick="document.getElementById('teamTrack').scrollBy({left:320,behavior:'smooth'})">
          <svg viewBox="0 0 24 24"><path d="M8.59 16.59 13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/></svg>
        </button>
      </div>
      <div id="teamTrack" class="team-track" role="region" aria-label="Avyanco Experts Carousel">

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/sr.-corporate-advisor-at-avyanco-busi.png" alt="Himanshu Kanani">
              <div class="team-meta">
                <div class="team-name">Himanshu Kanani</div>
                <div class="team-role">Manager – Audit &amp; Advisory Services</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Himanshu Kanani</h4>
              <p>Leading with insight, delivering with integrity. Oversees assurance and advisory engagements ensuring strategic direction and excellence across client portfolios.</p>
              <span class="team-chip">DMCC • IFZA • DAFZA • JAFZA</span>
            </div>
          </div>
        </article>

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/Shoib-Tax-Expert-in-Dubai.jpg" alt="Shoaib Shaikh">
              <div class="team-meta">
                <div class="team-name">Shoaib Shaikh</div>
                <div class="team-role">Senior Consultant</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Shoaib Shaikh</h4>
              <p>Detail-driven, solution-focused. Ensures seamless accounting and VAT compliance tailored to each client's business environment.</p>
              <span class="team-chip">Accounting &amp; VAT Compliance</span>
            </div>
          </div>
        </article>

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/Jai-Kishan-Corporate-Tax-Consultant-in-Dubai.jpg" alt="Jaikishan Kishnani">
              <div class="team-meta">
                <div class="team-name">Jaikishan Kishnani</div>
                <div class="team-role">Senior Consultant</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Jaikishan Kishnani</h4>
              <p>Turning compliance into confidence. Simplifies VAT and accounting complexities, transforming regulations into business opportunities.</p>
              <span class="team-chip">Accounting &amp; VAT Advisory</span>
            </div>
          </div>
        </article>

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/Mihir.jpg" alt="Mihir Ganjawala">
              <div class="team-meta">
                <div class="team-name">Mihir Ganjawala</div>
                <div class="team-role">Senior Consultant</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Mihir Ganjawala</h4>
              <p>Where strategy meets precision. Bridges audit accuracy, tax insight, and accounting expertise to deliver holistic financial solutions.</p>
              <span class="team-chip">Audit, Tax &amp; Accounting Advisory</span>
            </div>
          </div>
        </article>

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/Sabura.jpg" alt="Sabura Mazhar">
              <div class="team-meta">
                <div class="team-name">Sabura Mazhar</div>
                <div class="team-role">Audit Associate</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Sabura Mazhar</h4>
              <p>Delivering assurance with accuracy. Ensures audit quality and transparency through meticulous review and documentation.</p>
              <span class="team-chip">Assurance &amp; Compliance</span>
            </div>
          </div>
        </article>

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/Abel.jpg" alt="Abel Thomas">
              <div class="team-meta">
                <div class="team-name">Abel Thomas</div>
                <div class="team-role">Audit Associate</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Abel Thomas</h4>
              <p>Building trust through detail. Applies analytical rigor to deliver dependable assurance outcomes.</p>
              <span class="team-chip">Assurance &amp; Risk Services</span>
            </div>
          </div>
        </article>

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/Financial-Advisor-2.jpg" alt="Melroy Biju">
              <div class="team-meta">
                <div class="team-name">Melroy Biju</div>
                <div class="team-role">Finance Executive</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Melroy Biju</h4>
              <p>Reliable. Resourceful. Results-oriented. Ensures smooth financial processes and supports internal controls and reconciliations with accuracy.</p>
              <span class="team-chip">Accounting Operations</span>
            </div>
          </div>
        </article>

        <article class="team-card">
          <div class="team-face team-front">
            <div style="width:100%">
              <img class="team-photo" src="https://avyanco.net/wp-content/uploads/2025/11/CA-Anshul-Agarwala-Tax-Expert-in-Dubai.jpg" alt="Anshul Agarwala">
              <div class="team-meta">
                <div class="team-name">Anshul Agarwala</div>
                <div class="team-role">Senior Consultant</div>
              </div>
            </div>
          </div>
          <div class="team-face team-back">
            <div class="team-bio">
              <h4>Anshul Agarwala</h4>
              <p>Designing tax strategies for tomorrow. Crafts robust corporate tax frameworks aligned with UAE regulations and global best practices.</p>
              <span class="team-chip">Corporate Tax Advisory</span>
            </div>
          </div>
        </article>

      </div>
    </div>
  </div>
</section>

<div class="slice"></div>

<!-- ================= CTA + LEAD FORM ================= -->
<section class="section" id="lead" aria-label="Free consultation">
  <div class="container grid grid-2">

    <div class="card reveal">
      <h2>🚀 Get Your Free Audit Consultation Today</h2>
      <p>Our experts will guide you from document review to final submission—fast, compliant, and confidential.</p>
      <ul class="list">
        <li><span class="tick">✓</span> Phone: <a href="tel:+971503989000">+971 50 398 9000</a></li>
        <li><span class="tick">✓</span> Email: <a href="mailto:info@avyanco.com">info@avyanco.com</a></li>
        <li><span class="tick">✓</span> WhatsApp: <a href="https://wa.me/97142405000">Chat Now</a></li>
      </ul>
      <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px">
        <span class="badge">⏱️ Instant Response</span>
        <span class="badge">🔒 Confidential</span>
      </div>
    </div>

    <div class="card reveal">
      <h3 style="margin-top:0">📩 Get A Free Quote – Instant Response</h3>
      <!-- Zoho form — lead section. MUST use a different ID from hero form above. -->
      <div id="zf_div_[ZOHO_ID_LEAD]"></div>
    </div>

  </div>
</section>

<div class="slice"></div>

<!-- ================= FAQ ================= -->
<section class="section alt" id="faq-grid" aria-label="FAQ">
  <div class="container">
    <div class="section-header center reveal">
      <span class="eyebrow">FAQ</span>
      <h2>Frequently Asked Questions ❓</h2>
    </div>
    <div class="grid">

      <!-- Standard FAQs (keep on every page) -->
      <details class="card reveal">
        <summary>Are Avyanco audits accepted by banks and free zones?</summary>
        <div class="muted">Yes—our audit reports are recognized by major UAE banks and free zones including IFZA, DAFZA, DMCC, and JAFZA.</div>
      </details>
      <details class="card reveal">
        <summary>How long does an audit take?</summary>
        <div class="muted">Most engagements complete within 5–10 business days depending on document readiness and company size.</div>
      </details>
      <details class="card reveal">
        <summary>Do you provide liquidation audits?</summary>
        <div class="muted">Yes. We handle end-to-end liquidation audits with coordination from free zone or mainland authorities.</div>
      </details>
      <details class="card reveal">
        <summary>Are you MOA and bank-approved auditors?</summary>
        <div class="muted">Yes. Avyanco Auditing LLC is a licensed, MOA-approved, and bank-approved audit firm in Dubai.</div>
      </details>
      <details class="card reveal">
        <summary>What documents are required for a financial audit?</summary>
        <div class="muted">Typically, you'll need financial statements, bank statements, invoices, ledgers, and relevant supporting documents.</div>
      </details>

      <!-- Topic-specific FAQs (customize 4 per page) -->
      <details class="card reveal">
        <summary>[TOPIC-SPECIFIC QUESTION 1]</summary>
        <div class="muted">[Answer]</div>
      </details>
      <details class="card reveal">
        <summary>[TOPIC-SPECIFIC QUESTION 2]</summary>
        <div class="muted">[Answer]</div>
      </details>
      <details class="card reveal">
        <summary>[TOPIC-SPECIFIC QUESTION 3]</summary>
        <div class="muted">[Answer]</div>
      </details>
      <details class="card reveal">
        <summary>[TOPIC-SPECIFIC QUESTION 4]</summary>
        <div class="muted">[Answer]</div>
      </details>

    </div>
  </div>
</section>

<!-- ================= FOOTER ================= -->
<footer class="avy-footer" role="contentinfo">
  <div class="container grid grid-3">

    <div>
      <img src="../assets/images/logo.png" alt="Avyanco Auditing LLC" style="height:40px;width:auto;margin-bottom:12px;filter:brightness(0) invert(1)">
      <p style="font-size:0.85rem">Avyanco Auditing LLC — Trusted, licensed, and approved auditors serving UAE businesses since 2015.</p>
    </div>

    <div>
      <h4 style="margin-bottom:12px;color:#fff">Quick Links</h4>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:0.85rem">
        <li><a href="#why" style="color:#cbd5e1;text-decoration:none">Why Choose Us</a></li>
        <li><a href="#services" style="color:#cbd5e1;text-decoration:none">Our Services</a></li>
        <li><a href="#industries" style="color:#cbd5e1;text-decoration:none">Industries</a></li>
        <li><a href="#lead" style="color:#cbd5e1;text-decoration:none">Get a Quote</a></li>
        <li><a href="#faq-grid" style="color:#cbd5e1;text-decoration:none">FAQ</a></li>
      </ul>
    </div>

    <div>
      <h4 style="margin-bottom:12px;color:#fff">Contact</h4>
      <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:0.85rem;color:#cbd5e1">
        <li>📍 Dubai, UAE</li>
        <li>📞 <a href="tel:+971503989000" style="color:#cbd5e1;text-decoration:none">+971 50 398 9000</a></li>
        <li>✉️ <a href="mailto:info@avyanco.com" style="color:#cbd5e1;text-decoration:none">info@avyanco.com</a></li>
        <li>💬 <a href="https://wa.me/97142405000" style="color:#cbd5e1;text-decoration:none">WhatsApp Us</a></li>
      </ul>
    </div>

  </div>
  <div style="border-top:1px solid #2c3f7e;margin-top:32px;padding-top:16px;text-align:center;font-size:0.8rem;color:#94a3b8">
    © 2025 Avyanco Auditing LLC. All rights reserved.
  </div>
</footer>

<!-- ================= SHARED ASSETS ================= -->
<!-- These MUST be at the end of body, in this order -->
<link rel="stylesheet" href="../assets/css/landing-common.css">
<script src="../assets/js/landing-common.js" defer></script>

</body>
</html>
```

---

## Placeholder Reference Table

| Placeholder | What to fill | Example |
|---|---|---|
| `[PAGE_SLUG]` | URL folder name | `ifza` |
| `[PAGE TITLE]` | Browser tab / OG title | `IFZA Auditors Dubai` |
| `[UNIQUE META DESCRIPTION]` | 155-char unique description | `IFZA approved auditors in Dubai...` |
| `[FREE ZONE]` | Free zone name | `IFZA` |
| `[H1 HEADLINE]` | Main hero heading | `IFZA Approved Auditors in Dubai` |
| `[SUBHEADLINE]` | Hero lead text | `Registered \| MOE Approved \| IFZA Approved` |
| `[ZOHO_ID_HERO]` | Zoho form div ID — hero | `NiwSgUJoAzGPXaUIg7TZkWkIJrNir1KHJWYW1DaNEwE` |
| `[ZOHO_ID_LEAD]` | Zoho form div ID — lead section | `NiwSgUJoAzGPXaUIg7TZkWkIJrNir1KHJWYW1DaNEwE11` |
| `[TOPIC-SPECIFIC QUESTION 1-4]` | FAQ questions for the page | `Does IFZA require annual audits?` |

> **Important:** The two Zoho form div IDs must be different. If they are the same, only one form will render. Check existing pages for the ID pattern used.

---

## Technical Gotchas

### Industry card background images
The `--bg` CSS variable is resolved **relative to the CSS file** location (`assets/css/`), so the path from that file to images is `../images/`. However, in the HTML `style` attribute, use the path relative to the HTML file:
```html
style="--bg:url('../assets/images/industry-1.jpg')"
```

### Minified CSS edits
`assets/css/landing-common.css` is a **single minified line**. Never use diff/patch tools — they will fail. Use Python:
```python
with open('assets/css/landing-common.css', 'r') as f:
    css = f.read()
css = css.replace('OLD_VALUE', 'NEW_VALUE')
with open('assets/css/landing-common.css', 'w') as f:
    f.write(css)
```

### TrustIndex testimonials
Must be a real `<script>` tag **inside** the `.logo-grid` div. A `data-src` attribute will not work:
```html
<!-- CORRECT -->
<div class="logo-grid">
  <script async defer src="https://cdn.trustindex.io/loader.js?cca651858e075384c95618e0b5f"></script>
</div>

<!-- WRONG — do not use data attributes -->
<div class="logo-grid" data-trustindex-src="..."></div>
```

### Reveal animations
Add `.reveal` or `.reveal-up` class to any element. The `IntersectionObserver` in `landing-common.js` handles the rest automatically — no additional JS needed.

### Team card flip
Handled by `landing-common.js` via a click event listener. No additional JS needed — just use the correct class structure.

### Shared JS functions
`landing-common.js` provides:
- `initZohoEmbed()` — targets all `[id^="zf_div_"]` elements
- Scroll class toggle on `.avy-header`
- `IntersectionObserver` for `.reveal` and `.reveal-up`
- TrustIndex lazy loader on `.logo-grid`
- Team card click-to-flip handler

---

## Team Member Photo URLs

All hosted on `https://avyanco.net/wp-content/uploads/2025/11/`

| Name | Role | Filename |
|---|---|---|
| Himanshu Kanani | Manager – Audit & Advisory | `sr.-corporate-advisor-at-avyanco-busi.png` |
| Shoaib Shaikh | Senior Consultant | `Shoib-Tax-Expert-in-Dubai.jpg` |
| Jaikishan Kishnani | Senior Consultant | `Jai-Kishan-Corporate-Tax-Consultant-in-Dubai.jpg` |
| Mihir Ganjawala | Senior Consultant | `Mihir.jpg` |
| Sabura Mazhar | Audit Associate | `Sabura.jpg` |
| Abel Thomas | Audit Associate | `Abel.jpg` |
| Melroy Biju | Finance Executive | `Financial-Advisor-2.jpg` |
| Anshul Agarwala | Senior Consultant | `CA-Anshul-Agarwala-Tax-Expert-in-Dubai.jpg` |

---

## Service Icon Image URLs

All hosted on `https://avyanco.net/wp-content/uploads/2025/11/`

| Service | Filename |
|---|---|
| Statutory Audit | `Statutory-audit.png` |
| Internal Audit | `Internal-audit.png` |
| External Audit | `External-audit.png` |
| VAT Audit | `Vat-audit.png` |
| Liquidation Audit | `Liqu.-audit.png` |
| Financial Audit | `Finan-audit.png` |
| Forensic Audit | `Forensic-audit.png` |
| Management Audit | `Management-audit.png` |

## Why Choose Us Icon Image URLs

All hosted on `https://avyanco.net/wp-content/uploads/2025/11/`

| Card | Filename |
|---|---|
| Free Zone & Bank Approved | `Free-Zone-Bank-Approved.png` |
| Senior CA-Led Team | `Senior-CA-Led-Team.png` |
| Timely Completion | `Timely-Completion.png` |
| Transparent Pricing | `Transparent-Pricing.png` |

---

## Pre-Launch Checklist

- [ ] All `[PLACEHOLDERS]` replaced — none remaining in the file
- [ ] `<title>` and `<meta name="description">` are unique to this page
- [ ] Canonical URL matches the page slug
- [ ] Hero form and lead form have **different** Zoho div IDs
- [ ] TrustIndex `<script>` is inside `.logo-grid` as a real script tag
- [ ] Industry card `--bg` URLs resolve correctly
- [ ] WhatsApp icon uses `whatsapp_icon_80x80.webp` at `width="50" height="50"`
- [ ] All icons use `width="56" height="56"`
- [ ] Page tested locally at `http://localhost/.../development/[slug]/`
- [ ] Reveal animations work on scroll
- [ ] Team carousel scrolls on prev/next buttons
- [ ] Team cards flip on click
- [ ] Mobile layout looks correct
- [ ] User has explicitly approved the development version
- [ ] Live file published and committed to `main`
