/**
 * SINGLE SOURCE OF TRUTH — Meadowmile Walk & Travel
 *
 * SAMPLE DATA — replace with real, verifiable business details before launching
 * or running ads. See ../../BUSINESS_INFO.md for the full list and launch blockers.
 *
 * All 26 generated pages interpolate from this file. Nothing here is retyped:
 * change a value, re-run `node _generator/build.mjs`, and the whole site updates.
 */

export const business = {
  brandName: 'Meadowmile Walk & Travel',
  shortName: 'Meadowmile',
  legalName: 'Meadowmile Outfitters LLC',
  tagline: 'For the mile you actually walk',
  descriptor: 'Walking, travel and outdoor comfort',

  address: {
    line1: '452 Cedar Ridge Parkway, Suite 7',
    city: 'Boise',
    state: 'ID',
    zip: '83702',
    country: 'United States',
  },
  addressOneLine: '452 Cedar Ridge Parkway, Suite 7, Boise, ID 83702',

  email: 'support@meadowmile.com',
  phone: '(208) 555-0126',
  phoneHref: 'tel:+12085550126',
  hours: 'Mon–Fri, 11:00 AM–7:00 PM ET',
  responseTime: 'We answer email within one business day.',

  effectiveDate: 'September 12, 2026',
  governingState: 'Idaho',
  governingVenue: 'Ada County, Idaho',
  siteUrl: 'https://www.meadowmile.com',
};

export const terms = {
  returnWindow: '30 days',
  returnWindowDays: 30,
  freeShippingOver: '$70',
  standardShipping: '$7.50',
  processing: '2–3 business days',
  standardDelivery: '5–8 business days',
  expeditedPrice: '$17.95',
  expeditedDelivery: '2–4 business days',
  carriers: 'USPS and UPS',
  inspectionTime: '2 business days',
  refundTime: '5–10 business days',
  currencySymbol: '$',
};

export const shippingMethods = [
  {
    id: 'standard',
    label: 'Standard shipping',
    price: 7.5,
    priceLabel: terms.standardShipping,
    estimate: terms.standardDelivery,
    note: `Free on orders over ${terms.freeShippingOver}.`,
  },
  {
    id: 'expedited',
    label: 'Expedited shipping',
    price: 17.95,
    priceLabel: terms.expeditedPrice,
    estimate: terms.expeditedDelivery,
    note: 'Flat rate on every order.',
  },
];

export const freeShippingThreshold = 70;

export const shippingSummary =
  `We ship your order within ${terms.processing} of receiving it. ` +
  `Standard shipping is ${terms.standardShipping}, free on orders over ${terms.freeShippingOver}, ` +
  `and arrives in ${terms.standardDelivery} after it ships.`;

export const returnSummary =
  `Return anything unused in its original packaging within ${terms.returnWindow} of delivery. ` +
  `We refund to your original payment method within ${terms.refundTime} of inspecting the return.`;

export const policyDetail = {
  excludedDestinations: [
    'Outside the United States.',
    'To APO, FPO or DPO military addresses.',
    'To US territories including Puerto Rico, Guam and the US Virgin Islands.',
    'Everything we sell fits a PO Box except the trekking poles and the folding stool, which need a street address.',
  ],
  nonReturnable: [
    {
      title: 'Anything worn or used outdoors',
      detail:
        'the reflective vest, the rain jacket and the daypack included. Try them on indoors, walk around the house, load the pack on the carpet — all fine. Once something has been out on a wet path we cannot sell it as new.',
    },
    {
      title: 'The cane and the poles once the tips have touched the ground outside',
      detail:
        'because the rubber ferrule marks immediately. Adjust the height indoors and lean on it on a hard floor first; that does not affect your return.',
    },
    {
      title: 'The water bottle once it has been filled',
      detail:
        'for hygiene reasons. Check the lid action and the grip dry.',
    },
  ],
  cartKey: 'meadowmile-cart',
  cookieKey: 'meadowmile-cookie',
};
