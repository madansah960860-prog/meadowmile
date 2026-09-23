/**
 * The nine non-policy pages for Meadowmile Walk & Travel.
 *
 * Composition notes: the home page opens on a full-bleed landscape banner with a
 * trail-sign headline, the categories run as a horizontal row of signposts, and
 * the product page leads with a "weight and load" line because for walking kit
 * those two numbers decide everything.
 */

import { business, terms, shippingMethods, shippingSummary, returnSummary } from '../data/business.js';
import { categories, products, featuredSkus } from '../data/products.js';
import { breadcrumb, btn, card, cardGrid, esc, money, newsletter, productImage, sign, waymarks } from './site.js';

const B = business;
const T = terms;
const featured = featuredSkus.map((sku) => products.find((p) => p.sku === sku));

/* ------------------------------------------------------------------- home */

export function home() {
  return {
    file: 'index.html',
    path: '/index.html',
    current: '/index.html',
    title: `${B.brandName} — walking, travel and outdoor comfort`,
    description: `Poles, packs, rain shells and a stool for when the bench is taken — every one weighed and printed. Free US shipping over ${T.freeShippingOver} and ${T.returnWindow} returns.`,
    body: `
<section class="mm-hero">
  ${productImage('hero.webp', 'A walking path running through open countryside.', {
    sizes: '100vw',
    eager: true,
    className: 'mm-hero__img',
  })}
  <div class="mm-hero__scrim"></div>
  <div class="wrap mm-hero__inner">
    <p class="mm-eyebrow">Walking, travel &amp; outdoor comfort</p>
    <h1 class="mm-sign mm-sign--hero"><span>For the mile you actually walk.</span></h1>
    <p class="lede">Not the summit. The lane, the lakeside path, the two hours between the car park
    and lunch. Twelve things for that, each one weighed and the number printed.</p>
    <p class="mm-hero__actions">
      ${btn('Shop all 12', '/shop.html', { variant: 'mm-btn--sand' })}
      ${btn('Why we weigh things', '/about.html', { variant: 'mm-btn--ghost' })}
    </p>
  </div>
</section>

<section class="section">
  <div class="wrap">
    ${sign('Four signposts')}
    <p class="lede">Grouped by the part of the day they belong to.</p>
    <ul class="mm-cats">
      ${categories
        .map(
          (c) => `<li><a class="mm-cat" href="/shop.html?category=${c.id}">
        ${productImage(c.image, c.alt, { sizes: '(max-width: 760px) 92vw, 23vw' })}
        <span class="mm-cat__body">
          <span class="mm-cat__name">${esc(c.name)}</span>
          <span class="mm-cat__blurb">${esc(c.blurb)}</span>
        </span></a></li>`,
        )
        .join('')}
    </ul>
  </div>
</section>

<section class="section section--sand">
  <div class="wrap">
    ${sign('Where most people start')}
    <p class="lede">Four that get asked about more than the rest.</p>
    ${cardGrid(featured)}
    <p class="mm-more">${btn('See the whole shop', '/shop.html', { variant: 'mm-btn--ghost' })}</p>
  </div>
</section>

<section class="section section--forest">
  <div class="wrap">
    ${sign('Four waymarks')}
    <p class="lede lede--light">Every one of these is repeated, word for word, in our policies.</p>
    ${waymarks()}
  </div>
</section>

${newsletter()}
`,
  };
}

/* ------------------------------------------------------------------- shop */

export function shop() {
  return {
    file: 'shop.html',
    path: '/shop.html',
    current: '/shop.html',
    title: 'Shop all products',
    description: `Every pole, pack, shell and accessory Meadowmile sells, with weights and load ratings. Free US standard shipping over ${T.freeShippingOver} and ${T.returnWindow} returns.`,
    body: `
${breadcrumb([{ href: '/index.html', label: 'Home' }, { label: 'Shop' }])}

<section class="section">
  <div class="wrap">
    <h1>Everything we sell</h1>
    <p class="lede">Twelve things for walking and travelling. Every price below is the price you pay;
    shipping is added at the cart and nothing else is.</p>

    <div class="mm-tools">
      <div class="mm-tools__group">
        <span class="mm-tools__label" id="filter-label">Signpost</span>
        <div class="mm-chips" role="group" aria-labelledby="filter-label">
          <button class="mm-chip" type="button" data-filter="all" aria-pressed="true">All products</button>
          ${categories
            .map(
              (c) =>
                `<button class="mm-chip" type="button" data-filter="${c.id}" aria-pressed="false">${esc(c.name)}</button>`,
            )
            .join('')}
        </div>
      </div>
      <div class="mm-tools__group">
        <label class="mm-tools__label" for="sort">Sort by</label>
        <select id="sort" data-sort>
          <option value="featured">Our order</option>
          <option value="price-asc">Price: low to high</option>
          <option value="price-desc">Price: high to low</option>
          <option value="name">Name A–Z</option>
        </select>
      </div>
    </div>

    <p class="mm-count" role="status" data-count>Showing ${products.length} of ${products.length} products. All in stock.</p>

    <h2 class="visually-hidden">Products</h2>
    <ul class="mm-grid" data-grid>
      ${products
        .map((p, i) =>
          card(p, { eager: i < 3 }).replace(
            '<li class="mm-card">',
            `<li class="mm-card" data-category="${p.category}" data-price="${p.price}" data-name="${esc(p.name)}" data-order="${i}">`,
          ),
        )
        .join('\n')}
    </ul>
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- product */

export function productPage(product) {
  const cat = categories.find((c) => c.id === product.category);
  const related = products
    .filter((p) => p.category === product.category && p.sku !== product.sku)
    .slice(0, 3);

  const s = product.specs;
  const weight = s['Weight'] || s['Set weight'] || '—';
  const second =
    s['Load rating'] || s['Capacity'] || s['Packed size'] || s['Height range'] || s['Canopy diameter'] || '—';
  const secondLabel = s['Load rating']
    ? 'Load rating'
    : s['Capacity']
      ? 'Capacity'
      : s['Packed size']
        ? 'Packed size'
        : s['Height range']
          ? 'Height range'
          : s['Canopy diameter']
            ? 'Canopy'
            : 'Detail';

  const specRows = Object.entries(product.specs)
    .map(([k, v]) => `<tr><th scope="row">${esc(k)}</th><td>${esc(v)}</td></tr>`)
    .join('');

  return {
    file: `products/${product.slug}.html`,
    path: `/products/${product.slug}.html`,
    current: '/shop.html',
    title: product.name,
    description: `${product.summary} ${money(product.price)}. ${T.returnWindow} returns and free US standard shipping over ${T.freeShippingOver}.`,
    ogImage: `/assets/images/${product.image}`,
    jsonLd: {
      '@context': 'https://schema.org',
      '@type': 'Product',
      name: product.name,
      sku: product.sku,
      description: product.summary,
      image: `${B.siteUrl}/assets/images/${product.image}`,
      brand: { '@type': 'Brand', name: B.brandName },
      offers: {
        '@type': 'Offer',
        url: `${B.siteUrl}/products/${product.slug}.html`,
        priceCurrency: 'USD',
        price: product.price.toFixed(2),
        availability: 'https://schema.org/InStock',
        itemCondition: 'https://schema.org/NewCondition',
        seller: { '@type': 'Organization', name: B.legalName },
      },
    },
    body: `
${breadcrumb([
  { href: '/index.html', label: 'Home' },
  { href: '/shop.html', label: 'Shop' },
  { href: `/shop.html?category=${cat.id}`, label: cat.name },
  { label: product.name },
])}

<section class="section">
  <div class="wrap mm-product">
    <div class="mm-product__media">
      ${productImage(product.image, product.alt, { sizes: '(max-width: 880px) 92vw, 52vw', eager: true })}
    </div>

    <div class="mm-product__info">
      <p class="mm-card__cat">${esc(cat.name)}</p>
      <h1>${esc(product.name)}</h1>
      <p class="mm-product__price">${money(product.price)}</p>
      <p class="mm-product__sku">SKU ${esc(product.sku)} · <strong class="mm-instock">In stock</strong></p>

      <dl class="mm-keyfigures">
        <div><dt>Weight</dt><dd>${esc(weight)}</dd></div>
        <div><dt>${esc(secondLabel)}</dt><dd>${esc(second)}</dd></div>
      </dl>

      <p>${esc(product.description)}</p>

      <div class="mm-product__buy">
        <div class="mm-qty">
          <label for="qty">Quantity</label>
          <select id="qty" data-qty>
            ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => `<option value="${n}">${n}</option>`).join('')}
          </select>
        </div>
        ${btn(`Add to cart — ${money(product.price)}`, null, {
          variant: 'mm-btn--solid',
          attrs: `data-add="${product.sku}" data-use-qty`,
        })}
      </div>
      <p class="mm-added" role="status" data-added></p>

      <div class="mm-note">
        <p><strong>Shipping:</strong> ${esc(shippingSummary)}</p>
        <p><strong>Returns:</strong> ${esc(returnSummary)}
           <a href="/policies/refund-returns.html">Read the full policy</a>.</p>
        <p>Sales tax is calculated at checkout from your delivery address. There are no handling fees
           or surcharges.</p>
      </div>

      ${
        product.note
          ? `<div class="mm-note mm-note--flag">
        <p><strong>Please read before ordering:</strong> ${esc(product.note)}</p>
      </div>`
          : ''
      }
    </div>
  </div>
</section>

<section class="section section--sand">
  <div class="wrap mm-cols">
    <div>
      ${sign('What it does')}
      <ul>${product.features.map((f) => `<li>${esc(f)}</li>`).join('')}</ul>
      ${sign('In the box')}
      <ul>${product.inBox.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>
    </div>
    <div>
      ${sign('Every number')}
      <div class="table-scroll">
        <table class="mm-specs">
          <caption class="visually-hidden">Specifications for the ${esc(product.name)}</caption>
          <tbody>${specRows}</tbody>
        </table>
      </div>
      ${sign('Customer reviews')}
      <p>No customer reviews yet. Meadowmile is a new shop and we will not publish a review until a
      real customer writes one. We do not buy, incentivise or write reviews.</p>
    </div>
  </div>
</section>

${
  related.length
    ? `<section class="section">
  <div class="wrap">
    ${sign(`More from ${cat.name}`)}
    ${cardGrid(related)}
  </div>
</section>`
    : ''
}
`,
  };
}

/* ------------------------------------------------------------------- cart */

export function cart() {
  return {
    file: 'cart.html',
    path: '/cart.html',
    current: '/cart.html',
    title: 'Your cart',
    description: `Review your Meadowmile order. Standard shipping is ${T.standardShipping}, free over ${T.freeShippingOver}, and returns are open for ${T.returnWindow}.`,
    body: `
<section class="section">
  <div class="wrap">
    <h1>Your cart</h1>

    <!-- The empty state is the DEFAULT rendered state, and the cart layout below is what
         JavaScript reveals. The other way round costs a large layout shift: both blocks
         hidden at parse time means the footer paints high on the page and is then pushed
         down the moment the script runs. It also degrades honestly — the cart lives in
         localStorage, so without JavaScript there is genuinely nothing in it. -->
    <div data-cart-empty>
      <div class="mm-panel">
        <h2>There is nothing in your cart yet</h2>
        <p>Have a look at the twelve things we sell — or call ${esc(B.phone)} during ${esc(B.hours)}
        and we will take the order for you.</p>
        ${btn('Go to the shop', '/shop.html', { variant: 'mm-btn--solid' })}
      </div>
    </div>

    <div class="mm-cartlayout" data-cart-layout hidden>
      <div>
        <ul class="mm-cartlist" data-cart-list></ul>

        <fieldset class="mm-fieldset">
          <legend>Shipping method</legend>
          ${shippingMethods
            .map(
              (m, i) => `<label class="mm-radio">
            <input type="radio" name="shipping" value="${m.id}"${i === 0 ? ' checked' : ''} data-shipping>
            <span>
              <span class="mm-radio__label">${esc(m.label)} — <span data-ship-price="${m.id}">${esc(m.priceLabel)}</span></span>
              <span class="mm-radio__note">Arrives in ${esc(m.estimate)} after it ships. ${esc(m.note)}</span>
            </span>
          </label>`,
            )
            .join('')}
          <p class="meta-line">We ship your order within ${esc(T.processing)} of receiving it. Delivery
          estimates are the carrier&rsquo;s transit time after that.</p>
        </fieldset>
      </div>

      <aside class="mm-summary" aria-label="Order summary">
        <h2 class="mm-h3">Order summary</h2>
        <div class="mm-sumrow"><span>Subtotal</span><strong data-subtotal>$0.00</strong></div>
        <div class="mm-sumrow"><span>Shipping<br><span class="meta-line" data-ship-label>Standard shipping</span></span><strong data-shipping-cost>$0.00</strong></div>
        <div class="mm-sumrow"><span>Sales tax</span><span class="meta-line">Calculated at checkout from your delivery address</span></div>
        <div class="mm-sumrow mm-sumrow--total"><span>Total before tax</span><strong data-total>$0.00</strong></div>
        <p class="meta-line" data-freeship></p>

        ${btn('Go to checkout', '/checkout.html', { variant: 'mm-btn--solid mm-btn--block' })}
        ${btn('Keep shopping', '/shop.html', { variant: 'mm-btn--ghost mm-btn--block' })}

        <p class="meta-line">Returns are open for ${esc(T.returnWindow)} from delivery —
          <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>. See also the
          <a href="/policies/shipping.html">Shipping Policy</a>,
          <a href="/policies/terms.html">Terms of Service</a>,
          <a href="/policies/privacy.html">Privacy Policy</a> and
          <a href="/contact.html">how to contact us</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* --------------------------------------------------------------- checkout */

const STATES = ['AL','AK','AZ','AR','CA','CO','CT','DE','DC','FL','GA','HI','ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI','MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC','ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT','VT','VA','WA','WV','WI','WY'];

export function checkout() {
  return {
    file: 'checkout.html',
    path: '/checkout.html',
    current: '/checkout.html',
    title: 'Checkout',
    description: 'Complete your Meadowmile order. Item prices, shipping and the tax position are all shown before payment.',
    body: `
<section class="section">
  <div class="wrap">
    <h1>Checkout</h1>
    <p class="lede">Every charge is listed below before you pay. There are no handling fees, service
    fees or surcharges.</p>

    <!-- The empty state is the DEFAULT rendered state, and the cart layout below is what
         JavaScript reveals. The other way round costs a large layout shift: both blocks
         hidden at parse time means the footer paints high on the page and is then pushed
         down the moment the script runs. It also degrades honestly — the cart lives in
         localStorage, so without JavaScript there is genuinely nothing in it. -->
    <div data-cart-empty>
      <div class="mm-panel">
        <h2>Your cart is empty</h2>
        <p>Add something to your cart first and the checkout will open.</p>
        ${btn('Go to the shop', '/shop.html', { variant: 'mm-btn--solid' })}
      </div>
    </div>

    <div class="mm-cartlayout" data-cart-layout hidden>
      <form data-checkout novalidate>
        <fieldset class="mm-fieldset">
          <legend>Contact</legend>
          <div class="mm-field">
            <label for="email">Email address</label>
            <span class="hint" id="email-hint">We use this only to send your order confirmation and shipping updates.</span>
            <input id="email" name="email" type="email" autocomplete="email" aria-describedby="email-hint" required>
          </div>
          <div class="mm-field">
            <label for="phone">Phone number (optional)</label>
            <span class="hint" id="phone-hint">Only used if the carrier cannot find your address.</span>
            <input id="phone" name="phone" type="tel" autocomplete="tel" aria-describedby="phone-hint">
          </div>
          <p class="meta-line"><strong>Notice at collection:</strong> we collect your name, address,
          email and optional phone number to fulfil this order, and your payment details go straight to
          our payment processor. We do not sell or share personal information. See the
          <a href="/policies/privacy.html">Privacy Policy</a>.</p>
        </fieldset>

        <fieldset class="mm-fieldset">
          <legend>Shipping address</legend>
          <p class="meta-line">We ship within the United States only.</p>
          <div class="mm-cols2">
            <div class="mm-field">
              <label for="firstName">First name</label>
              <input id="firstName" name="firstName" autocomplete="given-name" required>
            </div>
            <div class="mm-field">
              <label for="lastName">Last name</label>
              <input id="lastName" name="lastName" autocomplete="family-name" required>
            </div>
          </div>
          <div class="mm-field">
            <label for="address1">Street address</label>
            <input id="address1" name="address1" autocomplete="address-line1" required>
          </div>
          <div class="mm-field">
            <label for="address2">Apartment, suite or unit (optional)</label>
            <input id="address2" name="address2" autocomplete="address-line2">
          </div>
          <div class="mm-cols3">
            <div class="mm-field">
              <label for="city">City or town</label>
              <input id="city" name="city" autocomplete="address-level2" required>
            </div>
            <div class="mm-field">
              <label for="state">State</label>
              <select id="state" name="state" autocomplete="address-level1" required>
                <option value="">Choose a state</option>
                ${STATES.map((s) => `<option value="${s}">${s}</option>`).join('')}
              </select>
            </div>
            <div class="mm-field">
              <label for="zip">ZIP code</label>
              <input id="zip" name="zip" inputmode="numeric" autocomplete="postal-code" required>
            </div>
          </div>
          <div class="mm-field">
            <label for="notes">Delivery notes (optional)</label>
            <span class="hint" id="notes-hint">For example: leave in the porch, out of the rain.</span>
            <textarea id="notes" name="notes" rows="3" aria-describedby="notes-hint"></textarea>
          </div>
        </fieldset>

        <fieldset class="mm-fieldset">
          <legend>Shipping method</legend>
          ${shippingMethods
            .map(
              (m, i) => `<label class="mm-radio">
            <input type="radio" name="shipping" value="${m.id}"${i === 0 ? ' checked' : ''} data-shipping>
            <span>
              <span class="mm-radio__label">${esc(m.label)} — <span data-ship-price="${m.id}">${esc(m.priceLabel)}</span></span>
              <span class="mm-radio__note">We ship within ${esc(T.processing)}; the carrier then takes ${esc(m.estimate)}.</span>
            </span>
          </label>`,
            )
            .join('')}
        </fieldset>

        ${btn('Review my order', null, { variant: 'mm-btn--solid mm-btn--block', type: 'submit' })}

        <div class="mm-review" data-review hidden>
          <h2 class="mm-h3">Order review</h2>
          <p data-review-address></p>
          <p data-review-shipping></p>

          <!-- ==================================================================
               PAYMENT INTEGRATION POINT

               Mount the payment processor here — Stripe Payment Element, PayPal
               Buttons, or a Shopify Buy Button. It must:

                 1. Receive the server-recalculated total. Never trust the amount
                    computed in this browser.
                 2. Add sales tax for the delivery address before charging. The
                    figure shown is deliberately labelled "total before tax" until
                    that calculation exists.
                 3. Create the order only after the processor confirms the payment,
                    then redirect to a real confirmation page.
                 4. Run over HTTPS with a valid certificate — Google Merchant Center
                    requires a secured checkout.

               Until a processor is connected, this build must never show a success
               or confirmation screen. Claiming an order was placed when no payment
               was taken is a Google Ads misrepresentation violation and an FTC
               deception issue.
               ================================================================== -->

          <div class="mm-note mm-note--white">
            <p><strong>No payment processor is connected to this site yet.</strong> Nothing has been
            charged and no order has been placed. To buy any of these items today, call
            ${esc(B.phone)} during ${esc(B.hours)} or email
            <a href="mailto:${B.email}">${B.email}</a>.</p>
          </div>
        </div>
      </form>

      <aside class="mm-summary" aria-label="Order summary">
        <h2 class="mm-h3">Your order</h2>
        <ul class="mm-minilist" data-cart-list></ul>
        <div class="mm-sumrow"><span>Subtotal</span><strong data-subtotal>$0.00</strong></div>
        <div class="mm-sumrow"><span>Shipping<br><span class="meta-line" data-ship-label>Standard shipping</span></span><strong data-shipping-cost>$0.00</strong></div>
        <div class="mm-sumrow"><span>Sales tax</span><span class="meta-line">Added at the payment step from your delivery address</span></div>
        <div class="mm-sumrow mm-sumrow--total"><span>Total before tax</span><strong data-total>$0.00</strong></div>
        <p class="meta-line">By placing an order you accept our <a href="/policies/terms.html">Terms of
        Service</a>. See the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>
        (${esc(T.returnWindow)} from delivery), the <a href="/policies/shipping.html">Shipping Policy</a>
        and the <a href="/policies/privacy.html">Privacy Policy</a>. Questions before you order?
        <a href="/contact.html">Contact us</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* ------------------------------------------------------------------ about */

export function about() {
  return {
    file: 'about.html',
    path: '/about.html',
    current: '/about.html',
    title: 'About us',
    description: `${B.legalName} is a small walking and travel shop in ${B.address.city}, ${B.address.state}. We weigh everything and print the number.`,
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>About Meadowmile</h1>
    <p class="lede">We are a small walking and travel shop in ${esc(B.address.city)},
    ${esc(B.address.state)}. We sell twelve things. We would rather do that well than sell four
    hundred badly.</p>

    ${sign('What we sell')}
    <p>Poles with flip locks, a cane that folds into a bag, a stool at chair height, a pack that
    weighs fourteen ounces empty, a shell that packs into its own pocket, and the small things that
    make a journey easier. Four signposts: On Foot, Carrying, Weather, and On the Way.</p>
    <p><strong>None of this is medical equipment and none of it is sold as such.</strong> The folding
    cane is a walking accessory with a stated height range and a stated load rating. We do not claim
    it prevents anything, we do not claim it treats anything, and if you use a cane on medical advice
    then that advice, not this website, should decide which cane you use.</p>

    ${sign('Why we weigh things')}
    <p>It started with a daypack. One of us was buying one for a father who had started finding the
    old one heavy before anything went in it. Eleven listings. Capacity in litres on all of them.
    Weight on none.</p>
    <p>It turned out to be 2 lb 6 oz empty — most of a litre of water before a single thing went in.
    So the rule here is simple: <strong>weigh it, and print the number.</strong> Our pack is 14 oz.
    The poles are 9 oz each. The rain shell is 9 oz. The stool is 1 lb 9 oz, which is the reason it
    is worth carrying.</p>
    <p>Where a thing takes your weight rather than the other way round — the cane, the poles, the
    stool — we print the load rating too, because a number you can check against yourself is worth
    more than a reassurance.</p>

    ${sign('How we write about products')}
    <ul>
      <li>Weight and load rating sit at the top of every product page, above the description.</li>
      <li>We describe what a thing is and what it is rated to. We make no claims about balance,
      stability, falls, joints or health. Those are not our claims to make.</li>
      <li>We do not use &ldquo;best&rdquo;, &ldquo;number one&rdquo; or &ldquo;award-winning&rdquo;.
      We have not won anything and neither have the poles.</li>
      <li>There are no star ratings on this site. We are new, nobody has reviewed us yet, and
      inventing reviews is both dishonest and illegal under the Federal Trade Commission&rsquo;s rule
      on consumer reviews.</li>
      <li>The price on the page is the price charged. Shipping is added at the cart, sales tax at
      checkout, and nothing else is added anywhere.</li>
    </ul>

    ${sign('How we handle orders')}
    <p>We ship your order within ${esc(T.processing)} of receiving it, by ${esc(T.carriers)}, within
    the United States. Standard shipping is ${esc(T.standardShipping)} and free over
    ${esc(T.freeShippingOver)}. You have ${esc(T.returnWindow)} from delivery to send anything back
    unused — and &ldquo;unused&rdquo; here means indoors only, which the
    <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a> spells out, because kit
    that has been out on a wet path cannot be sold as new.</p>

    ${sign('Ordering without a computer')}
    <p>Some people would simply rather talk to somebody. Call ${esc(B.phone)} during ${esc(B.hours)}
    and we will take the order over the phone, read the prices back to you and post a paper receipt
    with the parcel if you would like one.</p>

    ${sign('Where to find us')}
    <p>${esc(B.legalName)}<br>
    ${esc(B.addressOneLine)}<br>
    <a href="mailto:${B.email}">${B.email}</a> · <a href="${B.phoneHref}">${B.phone}</a><br>
    ${esc(B.hours)}</p>
    <p class="meta-line">This is a mail-order shop and the address above is our office and returns
    address. It is not a shop you can walk into, so please do not travel to it expecting to browse.</p>

    <p class="mm-more">${btn('See what we sell', '/shop.html', { variant: 'mm-btn--solid' })}</p>
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- contact */

export function contact() {
  return {
    file: 'contact.html',
    path: '/contact.html',
    current: '/contact.html',
    title: 'Contact us',
    description: `Email ${B.email}, call ${B.phone} (${B.hours}), or write to ${B.addressOneLine}. We answer email within one business day.`,
    body: `
<section class="section">
  <div class="wrap">
    <h1>Contact us</h1>
    <p class="lede">A real person reads every message. ${esc(B.responseTime)}</p>

    <div class="mm-cartlayout">
      <form data-contact novalidate>
        <fieldset class="mm-fieldset">
          <legend>Send us a message</legend>

          <div class="mm-field">
            <label for="name">Your name</label>
            <input id="name" name="name" autocomplete="name" required>
          </div>

          <div class="mm-field">
            <label for="cemail">Your email address</label>
            <span class="hint" id="cemail-hint">We reply to this address and use it for nothing else.</span>
            <input id="cemail" name="email" type="email" autocomplete="email" aria-describedby="cemail-hint" required>
          </div>

          <div class="mm-field">
            <label for="topic">What is it about?</label>
            <select id="topic" name="topic">
              <option>A question before I order</option>
              <option>Which size or height do I need?</option>
              <option>An existing order</option>
              <option>A return or refund</option>
              <option>Something arrived damaged</option>
              <option>Accessibility of this website</option>
              <option>Privacy request</option>
              <option>Something else</option>
            </select>
          </div>

          <div class="mm-field">
            <label for="message">Your message</label>
            <span class="hint" id="message-hint">If it is about an order, the order number helps — but it is not essential.</span>
            <textarea id="message" name="message" rows="6" aria-describedby="message-hint" required></textarea>
          </div>

          ${btn('Send message', null, { variant: 'mm-btn--solid', type: 'submit' })}
          <div class="mm-note mm-note--white" data-contact-note hidden>
            <p><strong>This form is not connected to a mail server yet</strong>, so nothing was sent and
            nothing was stored. Please email <a href="mailto:${B.email}">${B.email}</a> or call
            <a href="${B.phoneHref}">${B.phone}</a> instead — we would still very much like to hear from
            you.</p>
          </div>
        </fieldset>
      </form>

      <aside class="mm-panel" aria-label="Other ways to reach us">
        <h2 class="mm-h3">Other ways to reach us</h2>

        <h3>Email</h3>
        <p><a href="mailto:${B.email}">${B.email}</a><br>
        <span class="meta-line">${esc(B.responseTime)}</span></p>

        <h3>Phone</h3>
        <p><a href="${B.phoneHref}">${B.phone}</a><br>
        <span class="meta-line">${esc(B.hours)}</span><br>
        <span class="meta-line">Outside those hours, leave a message and we will call back the next
        business day.</span></p>

        <h3>Post</h3>
        <address>
          ${esc(B.legalName)}<br>
          ${esc(B.address.line1)}<br>
          ${esc(B.address.city)}, ${B.address.state} ${B.address.zip}<br>
          ${esc(B.address.country)}
        </address>
        <p class="meta-line">This is also the returns address. Please email us for a return number
        before sending anything back — see the
        <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.</p>

        <h3>Sizing and height</h3>
        <p class="meta-line">Tell us your height and we will tell you where in the range to set the
        poles or the cane. We will not tell you which walking aid to use — that is a question for
        whoever gave you the advice to use one.</p>

        <h3>Privacy requests</h3>
        <p class="meta-line">To access, correct or delete your information, email ${B.email} with
        &ldquo;Privacy request&rdquo; in the subject, or call the number above. You do not need an
        account. See the <a href="/policies/privacy.html">Privacy Policy</a>.</p>

        <h3>Accessibility</h3>
        <p class="meta-line">If any part of this site is hard to use, tell us and we will fix it and
        reply within five business days. See the
        <a href="/policies/accessibility.html">Accessibility Statement</a>.</p>
      </aside>
    </div>
  </div>
</section>
`,
  };
}

/* -------------------------------------------------------------------- faq */

const FAQ = [
  {
    group: 'Orders',
    items: [
      ['Do I need an account to buy something?', 'No. There is no account system on this site at all. You enter a delivery address at checkout and that is it. Nothing is kept behind a login.'],
      ['Can I order over the phone instead?', `Yes. Call ${B.phone} during ${B.hours} and we will take the order, read the prices back to you and confirm the total before anything is charged. We can post a paper receipt with the parcel if you would like one.`],
      ['How do I change or cancel an order?', `Email ${B.email} or call ${B.phone} as soon as you can. If the parcel has not been handed to the carrier we will change or cancel it and refund you in full. If it has already gone, treat it as a return — see the <a href="/policies/refund-returns.html">Refund &amp; Return Policy</a>.`],
      ['Is everything on the site actually in stock?', 'Yes. We only list what we can ship. Every product page says &ldquo;In stock&rdquo; because that is the only state we list. If something sells out it comes off the site until it is back.'],
    ],
  },
  {
    group: 'Weights, heights and ratings',
    items: [
      ['Is the folding cane a medical device?', 'No, and we do not sell it as one. It is a walking accessory with a stated height range of 33–37 in and a stated load rating of 250 lb. We make no claim that it prevents or treats anything. If you use a cane on medical advice, please take that advice on which cane to use.'],
      ['How do I choose the pole or cane height?', 'As a starting point, set the top of the grip to about wrist height when you stand with your arms at your sides, then adjust from there on the first walk. Call us with your height and we will give you a number to start from.'],
      ['What do the load ratings mean?', 'They are the manufacturer’s maximum. The cane is rated to 250 lb, the stool to 260 lb and the poles to the same as the cane. Those are limits rather than targets, and they assume the item is correctly adjusted and locked.'],
      ['Why is the weight the first thing on every page?', 'Because it is the figure that decides whether a thing gets used, and almost nobody prints it. Our daypack is 14 oz empty; a typical one is over two pounds before anything goes in.'],
    ],
  },
  {
    group: 'Shipping',
    items: [
      ['How quickly do you ship?', `We ship your order within ${T.processing} of receiving it. That is a commitment, not an average. After it ships, standard delivery takes ${T.standardDelivery} and expedited takes ${T.expeditedDelivery} — those are the carrier&rsquo;s transit times.`],
      ['What does shipping cost?', `Standard shipping is ${T.standardShipping}, and it is free on orders over ${T.freeShippingOver}. Expedited shipping is ${T.expeditedPrice} on any order. There are no handling fees and no surcharges. Sales tax is calculated at checkout from your delivery address.`],
      ['Where do you ship to?', `The United States only, by ${T.carriers}. We do not ship internationally or to APO/FPO addresses. Everything fits a PO Box except the trekking poles and the folding stool. Full detail is in the <a href="/policies/shipping.html">Shipping Policy</a>.`],
      ['What if my order is going to be late?', `If we find we cannot ship within ${T.processing} we contact you before that deadline, give you a definite new shipping date, and offer you the choice of waiting or cancelling for a full refund. If we cannot give a firm date, or the delay is more than 30 days, we cancel and refund unless you tell us otherwise. This is required by the Federal Trade Commission&rsquo;s Mail, Internet, or Telephone Order Merchandise Rule and we follow it.`],
    ],
  },
  {
    group: 'Returns',
    items: [
      ['How long do I have to return something?', `${T.returnWindow} from the day it is delivered, unused and in its original packaging. Email ${B.email} for a return number before you send anything back.`],
      ['Can I try things on?', 'Indoors, yes — and please do. Put the vest on over your coat, load the pack on the carpet, set the poles to height and lean on them on a hard floor. What we cannot take back is kit that has been outside on a wet path, because we cannot sell it as new.'],
      ['Who pays the return shipping?', 'If you have changed your mind, you do. If the item arrived damaged, faulty, or is not what you ordered, we do — we send a prepaid label and you are not out of pocket.'],
      ['When do I get my money back?', `We inspect returns within ${T.inspectionTime} of arrival and refund to your original payment method within ${T.refundTime} of that. Your bank may then take a few days to show it. If you paid by cash equivalent we refund within seven working days, as the FTC rule requires.`],
    ],
  },
  {
    group: 'Payments',
    items: [
      ['What can I pay with?', 'Once our payment processor is connected, major credit and debit cards. Card details go straight to the processor over an encrypted connection — they never touch our servers and we never see or store a card number.'],
      ['Is the checkout working right now?', `Not yet. This site is complete but no payment processor has been connected, so the checkout stops at the order review and tells you so plainly. We will not show a fake confirmation. Until it is live, order by phone on ${B.phone}.`],
      ['Will I be charged anything extra?', 'No. The price on the product page is the price charged. Shipping is shown in the cart before you go to checkout, and sales tax is calculated at the payment step from your delivery address. There is nothing else.'],
    ],
  },
  {
    group: 'Accounts, privacy and accessibility',
    items: [
      ['What do you do with my details?', 'We use your name, address and email to fulfil the order and to contact you about it. We do not sell or share personal information. Order records are kept for seven years for tax purposes; newsletter addresses are kept until you unsubscribe. Full detail, including your California rights, is in the <a href="/policies/privacy.html">Privacy Policy</a>.'],
      ['How do I unsubscribe from the newsletter?', `Use the unsubscribe link in any message, or email ${B.email} and ask. We act on it within ten business days and we never require anything beyond your email address.`],
      ['Is this site built for people who find small type hard?', 'That is the point of it. Body text is 18px with a 1.65 line height, contrast meets WCAG 2.1 AA, every button is at least 44 pixels tall with a printed word on it, and the whole site works from the keyboard with a visible focus outline. Nothing moves on its own.'],
      ['Something on the site is still hard to use. What now?', `Tell us. Email ${B.email} with &ldquo;Accessibility&rdquo; in the subject or call ${B.phone}. We reply within five business days and we will take the order over the phone in the meantime. See the <a href="/policies/accessibility.html">Accessibility Statement</a>.`],
    ],
  },
];

export function faq() {
  const body = FAQ.map(
    (g, gi) => `${sign(g.group)}
${g.items
  .map(
    ([q, a], i) => `<div class="mm-acc">
  <h3><button class="mm-acc__btn" type="button" aria-expanded="${gi === 0 && i === 0}" aria-controls="acc-${gi}-${i}" id="accbtn-${gi}-${i}">
    <span>${q}</span><span class="mm-acc__sign" aria-hidden="true">${gi === 0 && i === 0 ? '−' : '+'}</span>
  </button></h3>
  <div class="mm-acc__panel" id="acc-${gi}-${i}" role="region" aria-labelledby="accbtn-${gi}-${i}"${gi === 0 && i === 0 ? '' : ' hidden'}>
    <p>${a}</p>
  </div>
</div>`,
  )
  .join('')}`,
  ).join('\n');

  return {
    file: 'faq.html',
    path: '/faq.html',
    current: '/faq.html',
    title: 'Frequently asked questions',
    description: `Answers on weights, heights and load ratings, orders, shipping (${T.processing} to ship), returns (${T.returnWindow}), payments and accessibility at Meadowmile.`,
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>Frequently asked questions</h1>
    <p class="lede">If your question is not here, email <a href="mailto:${B.email}">${B.email}</a> or
    call <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)}.</p>
    ${body}
  </div>
</section>
`,
  };
}

/* ---------------------------------------------------------------- credits */

export function credits(creditRows) {
  const rows = creditRows
    .map(
      (c) => `<tr>
  <th scope="row" class="mm-mono">${esc(c.file)}</th>
  <td>${c.source ? `<a href="${esc(c.source)}" rel="noopener">${esc(c.title)}</a>` : esc(c.title)}</td>
  <td>${esc(c.creator)}</td>
  <td>${esc(c.license)}</td>
</tr>`,
    )
    .join('');

  return {
    file: 'credits.html',
    path: '/credits.html',
    current: '',
    title: 'Photo credits',
    description: 'Credits and licence details for every photograph used on Meadowmile Walk & Travel, with a link to each original source.',
    body: `
<section class="section">
  <div class="wrap--narrow">
    <h1>Photo credits</h1>
    <p class="lede">Every image on this site is stored on our own server — we do not load pictures from
    anyone else&rsquo;s. The photographs below are used under Creative Commons licences, which ask that
    the photographer is credited. This page is that credit.</p>

    <div class="mm-note">
      <p><strong>These are illustrative photographs, not our own product shots.</strong> They show the
      kind of item described, not the exact unit we will ship. If the precise finish matters to you,
      call <a href="${B.phoneHref}">${B.phone}</a> during ${esc(B.hours)} and we will describe it.</p>
    </div>

    <div class="table-scroll">
      <table>
        <caption class="visually-hidden">Photograph credits and licences</caption>
        <thead><tr><th scope="col">File</th><th scope="col">Photograph</th><th scope="col">By</th><th scope="col">Licence</th></tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>

    ${sign('About the licences')}
    <p><strong>CC BY</strong> allows reuse, including commercially, provided the creator is credited.
    <strong>CC BY-SA</strong> adds that adaptations must be shared under the same licence; the crops and
    re-encodings on this site are adaptations and are offered under CC BY-SA 4.0 accordingly.
    <strong>CC0</strong> and <strong>Public domain</strong> carry no conditions, and we credit them
    anyway.</p>
    <p>Images were sourced through <a href="https://commons.wikimedia.org/" rel="noopener">Wikimedia
    Commons</a> and <a href="https://openverse.org/" rel="noopener">Openverse</a>, filtered to licences
    that permit commercial use. Each was downloaded, fitted to a 4:3 frame, resized to at most 1200
    pixels wide and re-encoded as WebP.</p>

    ${sign('Questions about an image')}
    <p>If you are the photographer of anything here and would like the credit corrected or the image
    removed, email <a href="mailto:${B.email}">${B.email}</a> and we will act the same working day.</p>

    <p class="mm-more">${btn('Back to the shop', '/shop.html', { variant: 'mm-btn--ghost' })}</p>
  </div>
</section>
`,
  };
}

/* -------------------------------------------------------------------- 404 */

export function notFound() {
  return {
    file: '404.html',
    path: '/404.html',
    current: '',
    title: 'Page not found',
    description: 'That page does not exist on Meadowmile Walk & Travel. Here are the places you might have been looking for.',
    body: `
<section class="section mm-404">
  <div class="wrap--narrow">
    <h1>We could not find that page</h1>
    <p class="lede">The address may have been mistyped, or the page may have moved. Nothing is broken
    on your end.</p>
    <ul class="mm-404__links">
      <li>${btn('Home', '/index.html', { variant: 'mm-btn--solid' })}</li>
      <li>${btn('Shop', '/shop.html', { variant: 'mm-btn--ghost' })}</li>
      <li>${btn('FAQ', '/faq.html', { variant: 'mm-btn--ghost' })}</li>
      <li>${btn('Contact', '/contact.html', { variant: 'mm-btn--ghost' })}</li>
    </ul>
    <p>If you followed a link from somewhere on this site, please tell us where it was — email
    <a href="mailto:${B.email}">${B.email}</a> or call <a href="${B.phoneHref}">${B.phone}</a> during
    ${esc(B.hours)} — and we will fix it.</p>
  </div>
</section>
`,
  };
}
