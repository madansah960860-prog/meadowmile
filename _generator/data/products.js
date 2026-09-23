/**
 * Product catalogue — Meadowmile Walk & Travel.
 *
 * The price here is the price charged. Copy describes height range, weight,
 * capacity and materials. Nothing here is a mobility aid or a medical device and
 * nothing is described as one: a folding cane is a walking accessory with a
 * stated height range and load rating, and that is all we claim. No fall-
 * prevention language anywhere. See POLICY_RESEARCH.md rules B13, B14, B15.
 */

export const categories = [
  {
    id: 'on-foot',
    name: 'On Foot',
    blurb: 'Poles, canes and a stool for when the bench is taken.',
    image: 'cat-foot.webp',
    alt: 'A walking path through open countryside.',
  },
  {
    id: 'carrying',
    name: 'Carrying',
    blurb: 'Packs and organisers weighed empty, so you know what you start with.',
    image: 'cat-carry.webp',
    alt: 'A small daypack resting on a rock.',
  },
  {
    id: 'weather',
    name: 'Weather',
    blurb: 'Rain, sun and the half hour where it is both.',
    image: 'cat-weather.webp',
    alt: 'An umbrella against a cloudy sky.',
  },
  {
    id: 'on-the-way',
    name: 'On the Way',
    blurb: 'Pillows, bottles, counters and a notebook for the journey itself.',
    image: 'cat-way.webp',
    alt: 'A travel neck pillow and a water bottle on a table.',
  },
];

export const products = [
  {
    sku: 'MWT-501',
    slug: 'ridgeline-folding-walking-cane',
    name: 'Ridgeline Folding Walking Cane',
    price: 42.0,
    category: 'on-foot',
    image: 'mwt-501.webp',
    alt: 'A folding walking cane with a curved handle, part folded.',
    summary: 'Folds into four and drops into a bag; adjusts from 33 to 37 inches.',
    description:
      'An aluminium cane that folds into four sections on an internal elastic, so it goes into a ' +
      'daypack rather than being carried. The height adjusts through eight positions from 33 to 37 ' +
      'inches with a push-button collar, and the handle is a moulded offset grip rather than a ' +
      'crook. A wrist strap and a fabric sleeve are included.',
    features: [
      'Folds into four sections on internal elastic',
      'Adjusts 33–37 in in eight positions',
      'Offset moulded grip, 4.5 in long',
      'Slip-resistant rubber ferrule, replaceable',
      'Rated to 250 lb (113 kg)',
      'Wrist strap and storage sleeve included',
    ],
    specs: {
      'Height range': '33–37 in (84–94 cm), 8 positions',
      'Folded length': '13 in (33 cm)',
      'Weight': '11 oz (312 g)',
      'Load rating': '250 lb (113 kg)',
      'Shaft': 'Anodised aluminium, 19 mm',
      'Ferrule': '19 mm rubber, replaceable',
      'Materials': 'Aluminium shaft, TPE grip, nylon strap',
    },
    inBox: ['Folding cane', 'Wrist strap', 'Fabric storage sleeve', 'Guide in 16 pt type'],
    note:
      'This is a walking accessory, not a certified medical or mobility device, and it is not sold ' +
      'as one. Check the height range and the 250 lb load rating against your needs before ordering, ' +
      'and if you use a cane on medical advice, take that advice on which cane to use.',
  },
  {
    sku: 'MWT-502',
    slug: 'cloudrest-travel-neck-pillow',
    name: 'Cloudrest Travel Neck Pillow',
    price: 28.0,
    category: 'on-the-way',
    image: 'mwt-502.webp',
    alt: 'A memory foam travel neck pillow with a removable cover.',
    summary: 'Memory foam with a flat back, so it does not push your head forward in a seat.',
    description:
      'Most neck pillows are a fat ring that shoves your head off the headrest. This one is cut ' +
      'flat across the back and thicker at the sides, so it supports sideways without pushing ' +
      'forward. The cover unzips for the machine, and it compresses into its own pouch to about a ' +
      'third of its size.',
    features: [
      'Flat back — does not push your head forward',
      'Memory foam, thicker at the sides',
      'Removable cover, machine washable',
      'Compresses into its own pouch',
      'Toggle at the front to stop it opening',
      'Clips to a bag handle',
    ],
    specs: {
      'Size': '11 × 10 × 4 in (28 × 25 × 10 cm)',
      'Packed size': '7 × 5 in (18 × 13 cm) in the pouch',
      'Weight': '11 oz (312 g)',
      'Fill': 'Memory foam, 3.5 lb density',
      'Cover': 'Brushed polyester, machine washable cold',
      'Pouch': 'Ripstop nylon with a carabiner',
    },
    inBox: ['Neck pillow', 'Removable cover (fitted)', 'Compression pouch with carabiner'],
  },
  {
    sku: 'MWT-503',
    slug: 'sunshade-uv-walking-umbrella',
    name: 'Sunshade UV Walking Umbrella',
    price: 34.0,
    category: 'weather',
    image: 'mwt-503.webp',
    alt: 'A walking umbrella with a long handle and a wide canopy.',
    summary: 'A 41-inch canopy on a long shaft, so it can be leaned on lightly as you walk.',
    description:
      'A full-length umbrella rather than a folding one: a single straight shaft with a hooked ' +
      'wooden handle, which means it can take a light lean and hooks over an arm when it is not ' +
      'raining. The canopy is 41 inches across with a silver UV coating, and the frame is ' +
      'fibreglass so it flexes rather than inverting in a gust.',
    features: [
      '41 in canopy — covers your shoulders, not just your head',
      'Single straight shaft with a hooked wooden handle',
      'Fibreglass ribs flex instead of inverting',
      'Silver UV coating, UPF 50+',
      'Automatic open',
      'Weighs 15 oz',
    ],
    specs: {
      'Canopy diameter': '41 in (104 cm)',
      'Length closed': '35 in (89 cm)',
      'Weight': '15 oz (425 g)',
      'Frame': '8 fibreglass ribs',
      'Canopy': '190T pongee with a silver UV coating, UPF 50+',
      'Handle': 'Hooked beech',
      'Opening': 'Automatic',
    },
    inBox: ['Umbrella', 'Fabric sleeve'],
  },
  {
    sku: 'MWT-504',
    slug: 'big-display-step-counter',
    name: 'Big-Display Step Counter',
    price: 26.0,
    category: 'on-the-way',
    image: 'mwt-504.webp',
    alt: 'A simple step counter with a large numeric display.',
    summary: 'Counts steps and nothing else, on a display with half-inch digits.',
    description:
      'No app, no pairing, no charging. It clips to a belt or drops in a pocket, counts steps, and ' +
      'shows the number in half-inch digits on a backlit screen. One button resets the day; a ' +
      'second shows the last seven days. The battery is a standard coin cell that lasts about a ' +
      'year and you change it yourself with the tool supplied.',
    features: [
      'Counts steps — no app, no pairing, no charging',
      '0.5 in digits on a backlit display',
      'Two buttons: reset and 7-day history',
      'Belt clip and a safety lanyard',
      'About 12 months on one coin cell; you change it yourself',
      'Resets automatically at midnight',
    ],
    specs: {
      'Display digits': '0.5 in (13 mm)',
      'Count range': 'Up to 99,999 steps',
      'History': '7 days',
      'Size': '2.4 × 1.6 × 0.5 in (61 × 41 × 13 mm)',
      'Weight': '1.1 oz (31 g)',
      'Battery': 'CR2032 coin cell (included), about 12 months',
      'Tool': 'Battery opener included',
    },
    inBox: ['Step counter', 'Belt clip', 'Safety lanyard', 'CR2032 battery', 'Battery tool'],
  },
  {
    sku: 'MWT-505',
    slug: 'trailfeather-16l-daypack',
    name: 'Trailfeather 16 L Daypack',
    price: 58.0,
    category: 'carrying',
    image: 'mwt-505.webp',
    alt: 'A small daypack with padded shoulder straps and side pockets.',
    summary: 'Sixteen litres at 14 oz empty, with a front pocket you can reach without taking it off.',
    description:
      'Sized for a day rather than a week: 16 litres, one main compartment, two stretch side ' +
      'pockets and a front zip pocket set low enough to reach with the pack still on. It weighs ' +
      '14 ounces empty, which is roughly a third of a conventional daypack, and the shoulder straps ' +
      'are 2 inches wide with 8 mm foam.',
    features: [
      '16 L capacity, 14 oz empty',
      'Front zip pocket reachable without removing the pack',
      'Two stretch side pockets, each takes a 24 oz bottle',
      '2 in shoulder straps with 8 mm foam',
      'Removable sternum strap and waist belt',
      'Water-resistant ripstop; seams taped',
    ],
    specs: {
      'Capacity': '16 L',
      'Weight': '14 oz (397 g) empty',
      'Dimensions': '18 × 11 × 7 in (46 × 28 × 18 cm)',
      'Strap width': '2 in (51 mm), 8 mm foam',
      'Fabric': '210D ripstop nylon, water-resistant, taped seams',
      'Pockets': '1 main, 1 front zip, 2 stretch side',
    },
    inBox: ['Daypack', 'Removable sternum strap', 'Removable waist belt', 'Care card'],
  },
  {
    sku: 'MWT-506',
    slug: 'brightpath-reflective-vest',
    name: 'Brightpath Reflective Vest',
    price: 19.0,
    category: 'weather',
    image: 'mwt-506.webp',
    alt: 'A high-visibility reflective vest on a hanger.',
    summary: 'Goes on over a coat, adjusts at both sides, and weighs three ounces.',
    description:
      'A mesh tabard with reflective banding front and back, cut generously so it goes over a ' +
      'winter coat without a struggle. Hook-and-loop tabs at both sides adjust through about six ' +
      'inches of width, and it fastens at the front rather than over the head. It folds to the ' +
      'size of a paperback.',
    features: [
      'Goes over a winter coat; adjusts through about 6 in',
      'Front fastening — nothing to pull over your head',
      'Reflective banding front and back',
      'Open mesh — does not add warmth',
      'Weighs 3 oz; folds to paperback size',
      'Machine washable cold',
    ],
    specs: {
      'Sizes': 'One size, adjusts to fit chest 34–52 in',
      'Weight': '3 oz (85 g)',
      'Fabric': 'Polyester mesh with reflective PVC banding',
      'Banding width': '2 in (51 mm)',
      'Fastening': 'Front hook-and-loop, side adjusters',
      'Care': 'Machine wash cold, hang dry',
    },
    inBox: ['Reflective vest', 'Care card'],
  },
  {
    sku: 'MWT-507',
    slug: 'meadowmile-adjustable-trekking-poles-pair',
    name: 'Meadowmile Adjustable Trekking Poles, Pair',
    price: 64.0,
    category: 'on-foot',
    image: 'mwt-507.webp',
    alt: 'A pair of adjustable trekking poles with cork grips.',
    summary: 'A pair at 9 oz each, adjusting 26 to 53 inches with flip locks rather than twists.',
    description:
      'Flip locks, not twist locks — you can set the height with cold hands and see at a glance ' +
      'whether they are closed. The grips are cork, which does not get slippery when your hands ' +
      'warm up, and there is a 4-inch foam extension below each one for holding lower on a slope. ' +
      'Rubber tips are fitted; carbide tips and snow baskets are in the box.',
    features: [
      'Flip locks — settable with cold hands, visibly closed',
      'Adjust 26–53 in',
      'Cork grips with a 4 in foam extension below',
      '9 oz each',
      'Rubber tips fitted; carbide tips and baskets included',
      'Padded wrist straps, adjustable',
    ],
    specs: {
      'Length range': '26–53 in (66–135 cm)',
      'Collapsed length': '26 in (66 cm)',
      'Weight': '9 oz (255 g) each, 18 oz the pair',
      'Shaft': '7075 aluminium, three sections',
      'Grip': 'Natural cork with an EVA extension',
      'Tips': 'Rubber fitted; carbide tips and snow baskets supplied',
    },
    inBox: ['Two poles', 'Two carbide tips', 'Two snow baskets', 'Carry strap', 'Guide in 16 pt type'],
  },
  {
    sku: 'MWT-508',
    slug: 'packflat-travel-organiser-cubes-set-of-4',
    name: 'Packflat Travel Organiser Cubes, Set of 4',
    price: 32.0,
    category: 'carrying',
    image: 'mwt-508.webp',
    alt: 'A set of zipped fabric packing cubes in four sizes.',
    summary: 'Four cubes with mesh tops, so you can see what is in one without opening it.',
    description:
      'Four sizes that fill a carry-on between them, each with a mesh panel on top so the contents ' +
      'are visible through the zip, and a fabric handle on the end for lifting one out of a packed ' +
      'bag. The zips have 1-inch pull tabs rather than the usual metal tag, which matters when you ' +
      'are opening one on your lap.',
    features: [
      'Four sizes: small, medium, large and a slim shoe cube',
      'Mesh tops — see the contents without unzipping',
      'Fabric handle on the end of every cube',
      '1 in zip pull tabs',
      'Together they fill a standard carry-on',
      'Machine washable on a gentle cycle',
    ],
    specs: {
      'Small': '11 × 7 × 3 in',
      'Medium': '14 × 10 × 3 in',
      'Large': '17 × 13 × 4 in',
      'Shoe cube': '14 × 7 × 5 in',
      'Set weight': '13 oz (369 g)',
      'Fabric': '300D polyester with polyester mesh',
      'Care': 'Machine wash gentle, hang dry',
    },
    inBox: ['Four organiser cubes', 'Care card'],
  },
  {
    sku: 'MWT-509',
    slug: 'stillwater-24oz-easy-grip-bottle',
    name: 'Stillwater 24 oz Easy-Grip Bottle',
    price: 23.0,
    category: 'on-the-way',
    image: 'mwt-509.webp',
    alt: 'An insulated water bottle with a textured grip band.',
    summary: 'A flip lid you open with a thumb, and a waist you can actually hold.',
    description:
      'Double-walled stainless with a narrowed middle section so it sits in the hand rather than ' +
      'needing to be gripped around, and a silicone band there for the same reason. The lid flips ' +
      'up on a thumb lever — no twisting off a cap and holding it — and locks shut for a bag. It ' +
      'keeps cold about 24 hours and hot about 12.',
    features: [
      'Narrowed waist with a silicone grip band',
      'Thumb-lever flip lid; locks shut for a bag',
      'Double-walled stainless — no condensation',
      'Cold about 24 hours, hot about 12',
      'Fits a standard cup holder and both side pockets of our daypack',
      'Wide enough to take ice and to clean by hand',
    ],
    specs: {
      'Capacity': '24 fl oz (710 ml)',
      'Height': '9.5 in (24 cm)',
      'Base diameter': '2.9 in (74 mm)',
      'Waist diameter': '2.5 in (64 mm)',
      'Weight': '13 oz (369 g) empty',
      'Materials': '18/8 stainless steel, silicone band, BPA-free lid',
      'Care': 'Hand wash; lid is dishwasher safe',
    },
    inBox: ['Bottle', 'Flip lid', 'Cleaning brush'],
  },
  {
    sku: 'MWT-510',
    slug: 'foldseat-portable-walking-stool',
    name: 'Foldseat Portable Walking Stool',
    price: 49.0,
    category: 'on-foot',
    image: 'mwt-510.webp',
    alt: 'A folding three-legged stool with a fabric seat and a shoulder strap.',
    summary: 'A tripod stool at 1 lb 9 oz, for when the bench is taken and the view is not.',
    description:
      'Three aluminium legs and a fabric seat that opens in one movement and closes the same way. ' +
      'The seat sits at 20 inches — a normal chair height, not the 13 inches most camping stools ' +
      'use — and it carries on a shoulder strap so it is not in your hand. Rated to 260 pounds.',
    features: [
      'Seat at 20 in — a normal chair height',
      'Opens and closes in one movement',
      '1 lb 9 oz; carries on a shoulder strap',
      'Rated to 260 lb (118 kg)',
      'Wide non-slip feet for soft ground',
      'Folds to 17 in long',
    ],
    specs: {
      'Seat height': '20 in (51 cm)',
      'Seat size': '13 in (33 cm) across',
      'Folded length': '17 in (43 cm)',
      'Weight': '1 lb 9 oz (709 g)',
      'Load rating': '260 lb (118 kg)',
      'Materials': 'Anodised aluminium legs, 600D polyester seat',
    },
    inBox: ['Folding stool', 'Shoulder strap', 'Storage sleeve'],
  },
  {
    sku: 'MWT-511',
    slug: 'wayfinder-large-print-travel-journal',
    name: 'Wayfinder Large-Print Travel Journal',
    price: 18.0,
    category: 'on-the-way',
    image: 'mwt-511.webp',
    alt: 'An open notebook with wide ruled lines and a pen.',
    summary: 'Wide ruling at 10 mm, a lie-flat binding and paper that takes a fountain pen.',
    description:
      'Most notebooks rule at 6 or 7 millimetres, which is a small hand whether you have one or ' +
      'not. This one rules at 10 with a printed date line at the top of each page. The binding is ' +
      'sewn so it lies flat on a table or a knee, and the paper is 100 gsm, which takes a fountain ' +
      'pen without ghosting.',
    features: [
      '10 mm ruling — noticeably wider than a standard notebook',
      'Sewn binding; lies flat on a knee',
      '100 gsm paper, no ghosting with a fountain pen',
      'Printed date line at the top of every page',
      'Ribbon marker and an elastic closure',
      'Pocket inside the back cover',
    ],
    specs: {
      'Pages': '192 (96 leaves)',
      'Ruling': '10 mm',
      'Page size': '5.7 × 8.3 in (A5)',
      'Paper': '100 gsm, cream',
      'Binding': 'Sewn, lies flat',
      'Weight': '11 oz (312 g)',
      'Cover': 'Board with a linen wrap',
    },
    inBox: ['Journal', 'Elastic closure and ribbon marker (fitted)'],
  },
  {
    sku: 'MWT-512',
    slug: 'allweather-packable-rain-jacket',
    name: 'Allweather Packable Rain Jacket',
    price: 78.0,
    category: 'weather',
    image: 'mwt-512.webp',
    alt: 'A lightweight rain jacket with a hood, packed beside its pouch.',
    summary: 'Packs into its own pocket at 9 oz, with a hood that turns with your head.',
    description:
      'A 2.5-layer shell that packs into its own chest pocket and weighs nine ounces. The hood has ' +
      'a wired brim and a rear toggle, so it turns when you turn instead of leaving you looking at ' +
      'the lining. Cuffs and hem adjust, the zip has a storm flap behind it, and the pit zips open ' +
      'for walking uphill.',
    features: [
      'Packs into its own chest pocket; 9 oz',
      'Wired hood brim with a rear adjuster — the hood turns with you',
      'Two-way pit zips',
      'Storm flap behind the main zip',
      'Adjustable cuffs and hem',
      'Waterproof to 10,000 mm; taped seams',
    ],
    specs: {
      'Weight': '9 oz (255 g)',
      'Packed size': '8 × 5 in (20 × 13 cm)',
      'Sizes': 'S–XXL',
      'Fabric': '2.5-layer polyester, 10,000 mm waterproof, 5,000 g breathability',
      'Seams': 'Fully taped',
      'Pockets': 'Two hand, one chest (doubles as the stuff pocket)',
      'Care': 'Machine wash warm, tumble dry low to reactivate the finish',
    },
    inBox: ['Rain jacket', 'Care card with re-proofing instructions'],
  },
];

export const featuredSkus = ['MWT-507', 'MWT-505', 'MWT-512', 'MWT-510'];
