export const brand = {
  name: 'Kosas',
  logoSrc: '/kosas-logo.svg',
  logoSrcLight: '/kosas-logo-white.svg',
  freeShippingThreshold: 50,
  tagline: 'Makeup for skincare freaks',
};

function imgs(list, label) {
  return list.map((src, i) => ({
    src,
    alt: `${label} Revealer Foundation`,
    showBadge: i === 0,
  }));
}

const verylightneutral110Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/110.jpg?v=1654128417',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Very Light Neutral 110',
);
const lightneutral140Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/140.jpg?v=1654128417',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Light Neutral 140',
);
const lightmediumneutral200Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/200.jpg?v=1654129776',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Light Medium Neutral 200',
);
const mediumneutral220Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/220.jpg?v=1654129776',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Medium Neutral 220',
);
const mediumtanneutral280Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/280.jpg?v=1654129776',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Medium Tan Neutral 280',
);
const mediumdeepneutral320Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/320.jpg?v=1654129776',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Medium Deep Neutral 320',
);
const deepneutral380Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/380.jpg?v=1654129776',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Deep Neutral 380',
);
const richdeepneutral440Images = imgs(
  [
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/440.jpg?v=1654129776',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_revealedcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_improvescopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas_spfcopy.jpg?v=1658876118',
    'https://cdn.shopify.com/s/files/1/0131/5409/1065/products/RevealerFoundation_pdp_Kosas.jpg?v=1658876118',
  ],
  'Rich Deep Neutral 440',
);

export const product = {
  title: 'Revealer Skin-Improving Foundation SPF 25',
  subtitle: 'Clean SPF foundation · Medium coverage, natural finish',
  badge: 'Bestseller',
  rating: 5,
  reviewCount: 4200,
  description:
    'A clean, skin-improving foundation with SPF 25 that gives medium coverage and a natural finish—while hydrating and helping improve the look of bare skin over time.',
  serving: 'Buildable medium coverage with skincare benefits and clean SPF 25.',
  images: verylightneutral110Images,
  colors: [
    { id: 'verylightneutral110', label: 'Very Light Neutral 110', hex: '#F3E4D4', images: verylightneutral110Images },
    { id: 'lightneutral140', label: 'Light Neutral 140', hex: '#E8C9A8', images: lightneutral140Images },
    { id: 'lightmediumneutral200', label: 'Light Medium Neutral 200', hex: '#D4A882', images: lightmediumneutral200Images },
    { id: 'mediumneutral220', label: 'Medium Neutral 220', hex: '#C48E68', images: mediumneutral220Images },
    { id: 'mediumtanneutral280', label: 'Medium Tan Neutral 280', hex: '#A8724E', images: mediumtanneutral280Images },
    { id: 'mediumdeepneutral320', label: 'Medium Deep Neutral 320', hex: '#8B5A3C', images: mediumdeepneutral320Images },
    { id: 'deepneutral380', label: 'Deep Neutral 380', hex: '#6B3F2A', images: deepneutral380Images },
    { id: 'richdeepneutral440', label: 'Rich Deep Neutral 440', hex: '#3F2418', images: richdeepneutral440Images },
  ],
  sizes: [
    { id: 'os', label: '1 oz', price: 45.0 },
  ],
  frequencies: [],
  benefits: [
    'Clean SPF 25 protection',
    'Medium coverage, natural finish',
    'Hydrating, skin-improving formula',
    'Clinically tested results',
    'Inclusive shade range',
  ],
  ingredients: 'Clean makeup-skincare hybrid formula with SPF 25. See kosas.com for full ingredient list.',
  howToUse: 'Apply with fingers, brush, or sponge. Build where needed. Wear alone or over skincare.',
};

export const shippingOptions = [
  { value: 'Ground - $5.99', title: 'Ground', subtitle: '5-7 business days', price: '$5.99' },
  { value: 'Express - $12.99', title: 'Express', subtitle: '2-3 business days', price: '$12.99' },
  { value: 'Overnight - $24.99', title: 'Overnight', subtitle: 'Next business day', price: '$24.99' },
];

export const pickupLocations = [
  { name: 'Los Angeles Hub', address: '8600 Melrose Ave, West Hollywood, CA 90069', dist: '0.3 mi' },
  { name: 'NYC Pickup', address: '200 Broadway, New York, NY 10007', dist: '0.5 mi' },
  { name: 'Seattle Locker', address: '500 Pine St, Seattle, WA 98101', dist: '0.7 mi' },
];

export const timeSlots = [
  '9am-10am',
  '10am-11am',
  '11am-12pm',
  '1pm-2pm',
  '2pm-3pm',
];


export const usStates = [
  { code: 'AL', name: 'Alabama' },
  { code: 'AK', name: 'Alaska' },
  { code: 'AZ', name: 'Arizona' },
  { code: 'AR', name: 'Arkansas' },
  { code: 'CA', name: 'California' },
  { code: 'CO', name: 'Colorado' },
  { code: 'CT', name: 'Connecticut' },
  { code: 'DE', name: 'Delaware' },
  { code: 'FL', name: 'Florida' },
  { code: 'GA', name: 'Georgia' },
  { code: 'HI', name: 'Hawaii' },
  { code: 'ID', name: 'Idaho' },
  { code: 'IL', name: 'Illinois' },
  { code: 'IN', name: 'Indiana' },
  { code: 'IA', name: 'Iowa' },
  { code: 'KS', name: 'Kansas' },
  { code: 'KY', name: 'Kentucky' },
  { code: 'LA', name: 'Louisiana' },
  { code: 'ME', name: 'Maine' },
  { code: 'MD', name: 'Maryland' },
  { code: 'MA', name: 'Massachusetts' },
  { code: 'MI', name: 'Michigan' },
  { code: 'MN', name: 'Minnesota' },
  { code: 'MS', name: 'Mississippi' },
  { code: 'MO', name: 'Missouri' },
  { code: 'MT', name: 'Montana' },
  { code: 'NE', name: 'Nebraska' },
  { code: 'NV', name: 'Nevada' },
  { code: 'NH', name: 'New Hampshire' },
  { code: 'NJ', name: 'New Jersey' },
  { code: 'NM', name: 'New Mexico' },
  { code: 'NY', name: 'New York' },
  { code: 'NC', name: 'North Carolina' },
  { code: 'ND', name: 'North Dakota' },
  { code: 'OH', name: 'Ohio' },
  { code: 'OK', name: 'Oklahoma' },
  { code: 'OR', name: 'Oregon' },
  { code: 'PA', name: 'Pennsylvania' },
  { code: 'RI', name: 'Rhode Island' },
  { code: 'SC', name: 'South Carolina' },
  { code: 'SD', name: 'South Dakota' },
  { code: 'TN', name: 'Tennessee' },
  { code: 'TX', name: 'Texas' },
  { code: 'UT', name: 'Utah' },
  { code: 'VT', name: 'Vermont' },
  { code: 'VA', name: 'Virginia' },
  { code: 'WA', name: 'Washington' },
  { code: 'WV', name: 'West Virginia' },
  { code: 'WI', name: 'Wisconsin' },
  { code: 'WY', name: 'Wyoming' },
  { code: 'DC', name: 'District of Columbia' },
];
