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

const shade130Images = imgs(
  [
    '/images/revealer/shade-130.jpg',
    '/images/revealer/shade-130-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade130-smudge.jpg',
    '/images/revealer/pdp_revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Kosas_FaceChart_01_Light_100-130.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Light_284457a9-2b2c-41d9-bdcf-bf5a856b979e.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Light Neutral Warm 130",
);
const shade170Images = imgs(
  [
    '/images/revealer/shade-170.jpg',
    '/images/revealer/shade-170-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade170-smudge.jpg',
    '/images/revealer/pdp_revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Kosas_FaceChart_01_Light_170-190.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Light_284457a9-2b2c-41d9-bdcf-bf5a856b979e.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Light+ Neutral Warm 170",
);
const shade190Images = imgs(
  [
    '/images/revealer/shade-190.jpg',
    '/images/revealer/shade-190-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade190-smudge.jpg',
    '/images/revealer/pdp_revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Kosas_FaceChart_01_Light_170-190.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Medium_ae91fade-ce6f-48e3-a39a-d701cd110455.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Light Medium Neutral Warm 190",
);
const shade230Images = imgs(
  [
    '/images/revealer/shade-230.jpg',
    '/images/revealer/shade-230-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade230-smudge.jpg',
    '/images/revealer/pdp_revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Kosas_FaceChart_02_Med_220-240.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Medium_ae91fade-ce6f-48e3-a39a-d701cd110455.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Medium Neutral Warm 230",
);
const shade240Images = imgs(
  [
    '/images/revealer/shade-240.jpg',
    '/images/revealer/shade-240-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade240-smudge.jpg',
    '/images/revealer/pdp_revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Kosas_FaceChart_02_Med_220-240.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Medium_ae91fade-ce6f-48e3-a39a-d701cd110455.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Medium Warm 240",
);
const shade250Images = imgs(
  [
    '/images/revealer/shade-250.jpg',
    '/images/revealer/shade-250-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade250-smudge.jpg',
    '/images/revealer/pdp_revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Kosas_FaceChart_02_Med_220-240.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Medium_ae91fade-ce6f-48e3-a39a-d701cd110455.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Medium Tan Warm 250",
);
const shade300Images = imgs(
  [
    '/images/revealer/shade-300.jpg',
    '/images/revealer/shade-300-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade300-smudge.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_MediumDeep_9e55b3f4-da27-4028-a653-669bbac4d0bd.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Medium Deep Warm 300",
);
const shade330Images = imgs(
  [
    '/images/revealer/shade-330.jpg',
    '/images/revealer/shade-330-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade330-smudge.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_MediumDeep_9e55b3f4-da27-4028-a653-669bbac4d0bd.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Medium Deep Neutral Warm 330",
);
const shade340Images = imgs(
  [
    '/images/revealer/shade-340.jpg',
    '/images/revealer/shade-340-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade340-smudge.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_MediumDeep_9e55b3f4-da27-4028-a653-669bbac4d0bd.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Medium Deep Neutral Warm 340",
);
const shade350Images = imgs(
  [
    '/images/revealer/shade-350.jpg',
    '/images/revealer/shade-350-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade350-smudge.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_MediumDeep_9e55b3f4-da27-4028-a653-669bbac4d0bd.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Medium Deep Warm 350",
);
const shade370Images = imgs(
  [
    '/images/revealer/shade-370.jpg',
    '/images/revealer/shade-370-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade370-smudge.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Deep_76b5852e-be6f-4eb9-ad82-f88a8b9142f9.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Deep Warm 370",
);
const shade390Images = imgs(
  [
    '/images/revealer/shade-390.jpg',
    '/images/revealer/shade-390-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade390-smudge.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Deep_76b5852e-be6f-4eb9-ad82-f88a8b9142f9.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Deep Neutral Warm 390",
);
const shade410Images = imgs(
  [
    '/images/revealer/shade-410.jpg',
    '/images/revealer/shade-410-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade410-smudge.jpg',
    '/images/revealer/pdp_02_Dreamskin_pdp_Holiday_Kosas_2022_04_Deep_76b5852e-be6f-4eb9-ad82-f88a8b9142f9.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_revealedcopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_clinicalscopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_improvescopy.jpg',
    '/images/revealer/pdp_RevealerFoundation_pdp_Kosas_spfcopy.jpg',
  ],
  "Deep Neutral Warm 410",
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
  images: shade240Images,
  colors: [
    {
      id: 'shade240',
      label: "Medium Warm 240",
      hex: '#986848',
      images: shade240Images,
    },
    {
      id: 'shade130',
      label: "Light Neutral Warm 130",
      hex: '#E8CDB0',
      images: shade130Images,
    },
    {
      id: 'shade170',
      label: "Light+ Neutral Warm 170",
      hex: '#CFA67E',
      images: shade170Images,
    },
    {
      id: 'shade190',
      label: "Light Medium Neutral Warm 190",
      hex: '#C0946C',
      images: shade190Images,
    },
    {
      id: 'shade230',
      label: "Medium Neutral Warm 230",
      hex: '#A0704E',
      images: shade230Images,
    },
    {
      id: 'shade250',
      label: "Medium Tan Warm 250",
      hex: '#8F6042',
      images: shade250Images,
    },
    {
      id: 'shade300',
      label: "Medium Deep Warm 300",
      hex: '#664430',
      images: shade300Images,
    },
    {
      id: 'shade330',
      label: "Medium Deep Neutral Warm 330",
      hex: '#4E3628',
      images: shade330Images,
    },
    {
      id: 'shade340',
      label: "Medium Deep Neutral Warm 340",
      hex: '#483226',
      images: shade340Images,
    },
    {
      id: 'shade350',
      label: "Medium Deep Warm 350",
      hex: '#422E22',
      images: shade350Images,
    },
    {
      id: 'shade370',
      label: "Deep Warm 370",
      hex: '#36261C',
      images: shade370Images,
    },
    {
      id: 'shade390',
      label: "Deep Neutral Warm 390",
      hex: '#2A1E18',
      images: shade390Images,
    },
    {
      id: 'shade410',
      label: "Deep Neutral Warm 410",
      hex: '#221814',
      images: shade410Images,
    },
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
