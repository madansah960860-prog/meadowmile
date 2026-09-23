/**
 * Page shell and components for Meadowmile Walk & Travel.
 *
 * Design language, and why each choice is here:
 *   header  — one solid forest bar with a trail-marker glyph left of the wordmark.
 *   hero    — a wide landscape banner: a full-bleed photograph with a forest scrim
 *             and the headline set inside a trail-sign shape (a rectangle with a
 *             pointed right end, cut with clip-path).
 *   card    — wide 16:10 photo above a sand-tinted body, with a signpost chevron
 *             before the name and the price right-aligned above a hairline.
 *   footer  — stacked and centred under a ridge silhouette, with a sand contact
 *             band at the bottom. Every other store's footer is columnar.
 *   button  — 8px radius with a leading chevron.
 */

import { business, terms } from '../data/business.js';
import { categories } from '../data/products.js';

export const esc = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

export const money = (n) => `${terms.currencySymbol}${Number(n).toFixed(2)}`;

const NAV = [
  { href: '/index.html', label: 'Home' },
  { href: '/shop.html', label: 'Shop' },
  { href: '/about.html', label: 'About' },
  { href: '/faq.html', label: 'FAQ' },
  { href: '/contact.html', label: 'Contact' },
];

export const POLICY_LINKS = [
  { href: '/policies/shipping.html', label: 'Shipping Policy' },
  { href: '/policies/refund-returns.html', label: 'Refund &amp; Return Policy' },
  { href: '/policies/privacy.html', label: 'Privacy Policy' },
  { href: '/policies/terms.html', label: 'Terms of Service' },
  { href: '/policies/accessibility.html', label: 'Accessibility Statement' },
];

/** A leading chevron, used on every button. */
const chevron = `<svg class="mm-chev" viewBox="0 0 12 16" aria-hidden="true" focusable="false"><path d="M2 2l7 6-7 6" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function btn(label, href, { variant = '', type = '', attrs = '' } = {}) {
  const cls = `mm-btn${variant ? ' ' + variant : ''}`;
  if (href) return `<a class="${cls}" href="${href}"${attrs ? ' ' + attrs : ''}>${chevron}${label}</a>`;
  return `<button class="${cls}" type="${type || 'button'}"${attrs ? ' ' + attrs : ''}>${chevron}${label}</button>`;
}

function head({ title, description, path, ogImage = '/assets/images/hero.webp' }) {
  const fullTitle = title.includes(business.shortName)
    ? title
    : `${title} — ${business.brandName}`;
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(fullTitle)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${business.siteUrl}${path}">
<meta property="og:type" content="website">
<meta property="og:site_name" content="${esc(business.brandName)}">
<meta property="og:title" content="${esc(fullTitle)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${business.siteUrl}${path}">
<meta property="og:image" content="${business.siteUrl}${ogImage}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(fullTitle)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="theme-color" content="#24523B">
<link rel="icon" type="image/svg+xml" href="/favicon.svg">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="preload" as="style"
  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Merriweather+Sans:wght@400;600;700&display=swap"
  onload="this.onload=null;this.rel='stylesheet'">
<noscript><link rel="stylesheet"
  href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&family=Merriweather+Sans:wght@400;600;700&display=swap"></noscript>
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<a class="skip-link" href="#main">Skip to main content</a>`;
}

function header(current) {
  const item = (n) =>
    `<li><a class="mm-nav__link${current === n.href ? ' is-current' : ''}"${
      current === n.href ? ' aria-current="page"' : ''
    } href="${n.href}">${n.label}</a></li>`;

  return `<header class="mm-head">
  <div class="wrap mm-head__inner">
    <a class="mm-logo" href="/index.html">
      <svg class="mm-marker" viewBox="0 0 34 40" aria-hidden="true" focusable="false">
        <path d="M17 1l14 9v20l-14 9-14-9V10z" fill="#E6D9BD" stroke="#17352C" stroke-width="2.5"/>
        <path d="M9 26l7-9 4 5 5-7" stroke="#24523B" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span class="mm-logo__text">Meadowmile<span>Walk &amp; Travel</span></span>
    </a>

    <button class="mm-menu" type="button" aria-expanded="false" aria-controls="sitenav">
      <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false"><path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none"/></svg>
      <span class="mm-menu__label">Menu</span>
    </button>

    <nav class="mm-nav" id="sitenav" aria-label="Main">
      <ul class="mm-nav__list">${NAV.map(item).join('')}
        <li><a class="mm-nav__cart" href="/cart.html">Cart
          <span data-cart-count aria-live="polite">0</span></a></li>
      </ul>
    </nav>
  </div>
  <div class="mm-head__rule" aria-hidden="true"></div>
</header>`;
}

/** The ridge silhouette that tops the footer. */
function ridge() {
  return `<svg class="mm-footer__ridge" viewBox="0 0 1200 90" preserveAspectRatio="none" aria-hidden="true" focusable="false">
<path d="M0 90V58l150-34 130 28 160-44 150 40 140-30 170 36 150-26 150 22v40z" fill="#24523B"/>
<path d="M0 90V72l170-26 140 22 150-30 160 28 130-22 160 26 140-18 150 18v20z" fill="#17352C"/>
</svg>`;
}

function footer() {
  const shopLinks = categories
    .map((c) => `<li><a href="/shop.html?category=${c.id}">${esc(c.name)}</a></li>`)
    .join('');

  return `<footer class="mm-footer">
  ${ridge()}
  <div class="wrap mm-footer__top">
    <p class="mm-footer__name">${esc(business.brandName)}</p>
    <p class="mm-footer__tag">${esc(business.tagline)}</p>
  </div>

  <div class="wrap mm-footer__links">
    <div>
      <h2>Shop</h2>
      <ul>
        <li><a href="/shop.html">All products</a></li>
        ${shopLinks}
        <li><a href="/cart.html">Your cart</a></li>
      </ul>
    </div>
    <div>
      <h2>Help</h2>
      <ul>
        <li><a href="/contact.html">Contact us</a></li>
        <li><a href="/faq.html">Frequently asked questions</a></li>
        <li><a href="/about.html">About Meadowmile</a></li>
        <li><a href="/policies/shipping.html">Shipping Policy</a></li>
        <li><a href="/policies/refund-returns.html">Refund &amp; Return Policy</a></li>
      </ul>
    </div>
    <div>
      <h2>Legal</h2>
      <ul>
        ${POLICY_LINKS.map((p) => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
        <li><a href="/policies/privacy.html#do-not-sell">Do Not Sell or Share My Personal Information</a></li>
        <li><a href="/credits.html">Photo credits</a></li>
      </ul>
    </div>
  </div>

  <div class="mm-footer__band">
    <div class="wrap">
      <address>
        <strong>${esc(business.legalName)}</strong> ·
        ${esc(business.address.line1)}, ${esc(business.address.city)}, ${business.address.state} ${business.address.zip} ·
        <a href="mailto:${business.email}">${business.email}</a> ·
        <a href="${business.phoneHref}">${business.phone}</a> ·
        ${esc(business.hours)}
      </address>
      <p>© 2026 ${esc(business.legalName)}. Prices in US dollars. We ship within the United States only.
         Policies effective ${esc(business.effectiveDate)}.
         Product photographs are used under Creative Commons licences —
         <a href="/credits.html">see the photo credits</a>.</p>
    </div>
  </div>
</footer>`;
}

function cookieNotice() {
  return `<div class="mm-cookie" role="region" aria-label="Cookie notice" data-cookie hidden>
  <p>We use a small number of cookies to keep your cart and to count visits. We do not use advertising
     cookies and we do not sell or share personal information. Read the
     <a href="/policies/privacy.html">Privacy Policy</a>.</p>
  <button class="mm-btn mm-btn--small" type="button" data-cookie-dismiss>Got it</button>
</div>`;
}

export function page({ title, description, path, body, current = '', ogImage, jsonLd }) {
  return `${head({ title, description, path, ogImage })}
${header(current)}
<main id="main">
${body}
</main>
${footer()}
${cookieNotice()}
${jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''}
<script src="/assets/js/main.js" defer></script>
</body>
</html>
`;
}

export function breadcrumb(trail) {
  const items = trail
    .map((t, i) =>
      i === trail.length - 1
        ? `<li aria-current="page">${esc(t.label)}</li>`
        : `<li><a href="${t.href}">${esc(t.label)}</a></li>`,
    )
    .join('');
  return `<div class="wrap"><nav class="mm-crumb" aria-label="Breadcrumb"><ol>${items}</ol></nav></div>`;
}

/* --------------------------------------------------------------- components */

export function productImage(file, alt, { sizes, eager = false, className = '' } = {}) {
  const base = file.replace(/\.webp$/, '');
  return `<img${className ? ` class="${className}"` : ''}
  src="/assets/images/${base}.webp"
  srcset="/assets/images/${base}-600.webp 600w, /assets/images/${base}.webp 1200w"
  sizes="${sizes}"
  alt="${esc(alt)}" width="1200" height="900"
  loading="${eager ? 'eager' : 'lazy'}" decoding="async"${eager ? ' fetchpriority="high"' : ''}>`;
}

/** Wide 16:10 photo, sand body, signpost chevron before the name. */
export function card(product, { eager = false } = {}) {
  const cat = categories.find((c) => c.id === product.category);
  return `<li class="mm-card">
  <a class="mm-card__media" href="/products/${product.slug}.html" tabindex="-1" aria-hidden="true">
    ${productImage(product.image, product.alt, {
      sizes: '(max-width: 640px) 92vw, (max-width: 1040px) 46vw, 340px',
      eager,
    })}
  </a>
  <div class="mm-card__body">
    <p class="mm-card__cat">${esc(cat.name)}</p>
    <h3 class="mm-card__name">
      <svg class="mm-chev mm-chev--card" viewBox="0 0 12 16" aria-hidden="true" focusable="false"><path d="M2 2l7 6-7 6" stroke="currentColor" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round"/></svg>
      <a href="/products/${product.slug}.html">${esc(product.name)}</a>
    </h3>
    <p class="mm-card__summary">${esc(product.summary)}</p>
    <p class="mm-card__meta">
      <span class="mm-card__stock">In stock</span>
      <span class="mm-card__price">${money(product.price)}</span>
    </p>
    ${btn(`Add to cart<span class="visually-hidden">: ${esc(product.name)}</span>`, null, {
      variant: 'mm-btn--solid mm-btn--block',
      attrs: `data-add="${product.sku}"`,
    })}
  </div>
</li>`;
}

export function cardGrid(products, { eagerCount = 0 } = {}) {
  return `<ul class="mm-grid">${products
    .map((p, i) => card(p, { eager: i < eagerCount }))
    .join('\n')}</ul>`;
}

/** A trail-sign heading: a pointed plank with the text on it. */
export function sign(text, { level = 2 } = {}) {
  return `<h${level} class="mm-sign"><span>${esc(text)}</span></h${level}>`;
}

/** The four honest reasons, repeated verbatim from the policies. */
export function waymarks() {
  const items = [
    [`Shipped in ${terms.processing}`, `Standard shipping is ${terms.standardShipping} and free over ${terms.freeShippingOver}. It arrives in ${terms.standardDelivery} after it ships.`],
    [`${terms.returnWindow} to return it`, `Unused and in its packaging, send it back within ${terms.returnWindow} of delivery. Refunds land in ${terms.refundTime} after we inspect it.`],
    ['A phone number that works', `${business.phone}, ${business.hours}. If you would rather order by phone than online, that is fine with us.`],
    ['Every weight is printed', 'A pack you cannot carry empty is no use loaded. Every item states its weight, and the poles, cane and stool state their load rating.'],
  ];
  return `<ul class="mm-waymarks">${items
    .map(([t, b]) => `<li><h3>${esc(t)}</h3><p>${esc(b)}</p></li>`)
    .join('')}</ul>`;
}

/**
 * Newsletter signup. CAN-SPAM shapes it: the consent text names the sender, the
 * content, the frequency and the unsubscribe route before anything is typed; email
 * is the only field; nothing is pre-ticked. No mailing provider is connected, and
 * the form says so rather than pretending a subscription happened.
 */
export function newsletter() {
  return `<section class="mm-news" aria-labelledby="news-h">
  <div class="wrap mm-news__inner">
    <div>
      <h2 id="news-h">The Meadowmile letter</h2>
      <p>One email a month: what has come in, one short walk worth doing wherever the season has
         got to, and nothing else.</p>
    </div>
    <form class="mm-news__form" data-newsletter novalidate>
      <div class="mm-field">
        <label for="news-email">Your email address</label>
        <input id="news-email" name="email" type="email" autocomplete="email"
               aria-describedby="news-consent" required>
      </div>
      ${btn('Sign up', null, { variant: 'mm-btn--sand', type: 'submit' })}
      <p class="mm-consent">
        <label>
          <input type="checkbox" name="consent" data-consent>
          <span id="news-consent">Yes, ${esc(business.legalName)} may email me its monthly newsletter
          about products and shop news. I can unsubscribe from the link in any message or by emailing
          ${business.email}, and my address will not be sold or shared. See the
          <a href="/policies/privacy.html">Privacy Policy</a>.</span>
        </label>
      </p>
      <p class="mm-formnote" data-newsletter-note role="status"></p>
    </form>
  </div>
</section>`;
}
