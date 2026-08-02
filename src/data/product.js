export const brand = {
  name: 'Kosas',
  logoSrc: '/kosas-logo.png',
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

const shade240Images = imgs(
  [
    '/images/revealer/shade-240.jpg',
    '/images/revealer/shade-240-extra-revealer-skin-improving-foundation-spf-25-240.jpg',
    '/images/revealer/shade-240-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade240-smudge.jpg',
  ],
  "Medium Warm 240",
);
const shade100Images = imgs(
  [
    '/images/revealer/shade-100.jpg',
    '/images/revealer/shade-100-extra-revealer-skin-improving-foundation-spf-25-100.jpg',
    '/images/revealer/shade-100-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade100-smudge.jpg',
  ],
  "Very Light Neutral 100",
);
const shade110Images = imgs(
  [
    '/images/revealer/shade-110.jpg',
    '/images/revealer/shade-110-extra-revealer-skin-improving-foundation-spf-25-110.jpg',
    '/images/revealer/shade-110-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade110-smudge.jpg',
  ],
  "Very Light Neutral 110",
);
const shade120Images = imgs(
  [
    '/images/revealer/shade-120.jpg',
    '/images/revealer/shade-120-extra-revealer-skin-improving-foundation-spf-25-120.jpg',
    '/images/revealer/shade-120-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade120-smudge.jpg',
  ],
  "Very Light Cool 120",
);
const shade130Images = imgs(
  [
    '/images/revealer/shade-130.jpg',
    '/images/revealer/shade-130-extra-revealer-skin-improving-foundation-spf-25-130.jpg',
    '/images/revealer/shade-130-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade130-smudge.jpg',
  ],
  "Light Neutral Warm 130",
);
const shade140Images = imgs(
  [
    '/images/revealer/shade-140.jpg',
    '/images/revealer/shade-140-extra-revealer-skin-improving-foundation-spf-25-140.jpg',
    '/images/revealer/shade-140-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade140-smudge.jpg',
  ],
  "Light Neutral 140",
);
const shade150Images = imgs(
  [
    '/images/revealer/shade-150.jpg',
    '/images/revealer/shade-150-extra-revealer-skin-improving-foundation-spf-25-150.jpg',
    '/images/revealer/shade-150-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade150-smudge.jpg',
  ],
  "Light Cool 150",
);
const shade160Images = imgs(
  [
    '/images/revealer/shade-160.jpg',
    '/images/revealer/shade-160-extra-revealer-skin-improving-foundation-spf-25-160.jpg',
    '/images/revealer/shade-160-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade160-smudge.jpg',
  ],
  "Light+ Neutral Olive 160",
);
const shade170Images = imgs(
  [
    '/images/revealer/shade-170.jpg',
    '/images/revealer/shade-170-extra-revealer-skin-improving-foundation-spf-25-170.jpg',
    '/images/revealer/shade-170-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade170-smudge.jpg',
  ],
  "Light+ Neutral Warm 170",
);
const shade180Images = imgs(
  [
    '/images/revealer/shade-180.jpg',
    '/images/revealer/shade-180-extra-revealer-skin-improving-foundation-spf-25-180.jpg',
    '/images/revealer/shade-180-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade180-smudge.jpg',
  ],
  "Light+ Cool 180",
);
const shade190Images = imgs(
  [
    '/images/revealer/shade-190.jpg',
    '/images/revealer/shade-190-extra-revealer-skin-improving-foundation-spf-25-190.jpg',
    '/images/revealer/shade-190-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade190-smudge.jpg',
  ],
  "Light Medium Neutral Warm 190",
);
const shade200Images = imgs(
  [
    '/images/revealer/shade-200.jpg',
    '/images/revealer/shade-200-extra-revealer-skin-improving-foundation-spf-25-200.jpg',
    '/images/revealer/shade-200-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade200-smudge.jpg',
  ],
  "Light Medium Neutral 200",
);
const shade210Images = imgs(
  [
    '/images/revealer/shade-210.jpg',
    '/images/revealer/shade-210-extra-revealer-skin-improving-foundation-spf-25-210.jpg',
    '/images/revealer/shade-210-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade210-smudge.jpg',
  ],
  "Light Medium Neutral Olive 210",
);
const shade220Images = imgs(
  [
    '/images/revealer/shade-220.jpg',
    '/images/revealer/shade-220-extra-revealer-skin-improving-foundation-spf-25-220.jpg',
    '/images/revealer/shade-220-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade220-smudge.jpg',
  ],
  "Medium Neutral 220",
);
const shade230Images = imgs(
  [
    '/images/revealer/shade-230.jpg',
    '/images/revealer/shade-230-extra-revealer-skin-improving-foundation-spf-25-230.jpg',
    '/images/revealer/shade-230-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade230-smudge.jpg',
  ],
  "Medium Neutral Warm 230",
);
const shade250Images = imgs(
  [
    '/images/revealer/shade-250.jpg',
    '/images/revealer/shade-250-extra-revealer-skin-improving-foundation-spf-25-250.jpg',
    '/images/revealer/shade-250-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade250-smudge.jpg',
  ],
  "Medium Tan Warm 250",
);
const shade260Images = imgs(
  [
    '/images/revealer/shade-260.jpg',
    '/images/revealer/shade-260-extra-revealer-skin-improving-foundation-spf-25-260.jpg',
    '/images/revealer/shade-260-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade260-smudge.jpg',
  ],
  "Medium Tan Neutral Olive 260",
);
const shade270Images = imgs(
  [
    '/images/revealer/shade-270.jpg',
    '/images/revealer/shade-270-extra-revealer-skin-improving-foundation-spf-25-270.jpg',
    '/images/revealer/shade-270-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade270-smudge.jpg',
  ],
  "Medium Tan Olive 270",
);
const shade280Images = imgs(
  [
    '/images/revealer/shade-280.jpg',
    '/images/revealer/shade-280-extra-revealer-skin-improving-foundation-spf-25-280.jpg',
    '/images/revealer/shade-280-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade280-smudge.jpg',
  ],
  "Medium Tan Neutral 280",
);
const shade290Images = imgs(
  [
    '/images/revealer/shade-290.jpg',
    '/images/revealer/shade-290-extra-revealer-skin-improving-foundation-spf-25-290.jpg',
    '/images/revealer/shade-290-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade290-smudge.jpg',
  ],
  "Medium Deep Neutral Olive 290",
);
const shade300Images = imgs(
  [
    '/images/revealer/shade-300.jpg',
    '/images/revealer/shade-300-extra-revealer-skin-improving-foundation-spf-25-300.jpg',
    '/images/revealer/shade-300-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade300-smudge.jpg',
  ],
  "Medium Deep Warm 300",
);
const shade310Images = imgs(
  [
    '/images/revealer/shade-310.jpg',
    '/images/revealer/shade-310-extra-revealer-skin-improving-foundation-spf-25-310.jpg',
    '/images/revealer/shade-310-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade310-smudge.jpg',
  ],
  "Medium Deep Neutral Cool 310",
);
const shade320Images = imgs(
  [
    '/images/revealer/shade-320.jpg',
    '/images/revealer/shade-320-extra-revealer-skin-improving-foundation-spf-25-320.jpg',
    '/images/revealer/shade-320-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade320-smudge.jpg',
  ],
  "Medium Deep Neutral 320",
);
const shade330Images = imgs(
  [
    '/images/revealer/shade-330.jpg',
    '/images/revealer/shade-330-extra-revealer-skin-improving-foundation-spf-25-330.jpg',
    '/images/revealer/shade-330-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade330-smudge.jpg',
  ],
  "Medium Deep Neutral Warm 330",
);
const shade340Images = imgs(
  [
    '/images/revealer/shade-340.jpg',
    '/images/revealer/shade-340-extra-revealer-skin-improving-foundation-spf-25-340.jpg',
    '/images/revealer/shade-340-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade340-smudge.jpg',
  ],
  "Medium Deep Neutral Warm 340",
);
const shade350Images = imgs(
  [
    '/images/revealer/shade-350.jpg',
    '/images/revealer/shade-350-extra-revealer-skin-improving-foundation-spf-25-350.jpg',
    '/images/revealer/shade-350-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade350-smudge.jpg',
  ],
  "Medium Deep Warm 350",
);
const shade360Images = imgs(
  [
    '/images/revealer/shade-360.jpg',
    '/images/revealer/shade-360-extra-revealer-skin-improving-foundation-spf-25-360.jpg',
    '/images/revealer/shade-360-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade360-smudge.jpg',
  ],
  "Medium Deep Neutral Olive 360",
);
const shade370Images = imgs(
  [
    '/images/revealer/shade-370.jpg',
    '/images/revealer/shade-370-extra-revealer-skin-improving-foundation-spf-25-370.jpg',
    '/images/revealer/shade-370-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade370-smudge.jpg',
  ],
  "Deep Warm 370",
);
const shade380Images = imgs(
  [
    '/images/revealer/shade-380.jpg',
    '/images/revealer/shade-380-extra-revealer-skin-improving-foundation-spf-25-380.jpg',
    '/images/revealer/shade-380-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade380-smudge.jpg',
  ],
  "Deep Neutral 380",
);
const shade390Images = imgs(
  [
    '/images/revealer/shade-390.jpg',
    '/images/revealer/shade-390-extra-revealer-skin-improving-foundation-spf-25-390.jpg',
    '/images/revealer/shade-390-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade390-smudge.jpg',
  ],
  "Deep Neutral Warm 390",
);
const shade400Images = imgs(
  [
    '/images/revealer/shade-400.jpg',
    '/images/revealer/shade-400-extra-revealer-skin-improving-foundation-spf-25-400.jpg',
    '/images/revealer/shade-400-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade400-smudge.jpg',
  ],
  "Deep Neutral Olive 400",
);
const shade410Images = imgs(
  [
    '/images/revealer/shade-410.jpg',
    '/images/revealer/shade-410-extra-revealer-skin-improving-foundation-spf-25-410.jpg',
    '/images/revealer/shade-410-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade410-smudge.jpg',
  ],
  "Deep Neutral Warm 410",
);
const shade420Images = imgs(
  [
    '/images/revealer/shade-420.jpg',
    '/images/revealer/shade-420-extra-revealer-skin-improving-foundation-spf-25-420.jpg',
    '/images/revealer/shade-420-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade420-smudge.jpg',
  ],
  "Rich Deep Cool 420",
);
const shade430Images = imgs(
  [
    '/images/revealer/shade-430.jpg',
    '/images/revealer/shade-430-extra-revealer-skin-improving-foundation-spf-25-430.jpg',
    '/images/revealer/shade-430-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade430-smudge.jpg',
  ],
  "Rich Deep Neutral Olive 430",
);
const shade440Images = imgs(
  [
    '/images/revealer/shade-440.jpg',
    '/images/revealer/shade-440-extra-revealer-skin-improving-foundation-spf-25-440.jpg',
  ],
  "Rich Deep Neutral 440",
);
const shade450Images = imgs(
  [
    '/images/revealer/shade-450.jpg',
    '/images/revealer/shade-450-extra-revealer-skin-improving-foundation-spf-25-450.jpg',
    '/images/revealer/shade-450-extra-revealer-skin-improving-foundation-spf-25-RevealerFoundation_pdp_Shade450-smudge.jpg',
  ],
  "Rich Deep Neutral 450",
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
      id: 'shade100',
      label: "Very Light Neutral 100",
      hex: '#F4E4D4',
      images: shade100Images,
    },
    {
      id: 'shade110',
      label: "Very Light Neutral 110",
      hex: '#F0DCC8',
      images: shade110Images,
    },
    {
      id: 'shade120',
      label: "Very Light Cool 120",
      hex: '#EBD4C0',
      images: shade120Images,
    },
    {
      id: 'shade130',
      label: "Light Neutral Warm 130",
      hex: '#E8CDB0',
      images: shade130Images,
    },
    {
      id: 'shade140',
      label: "Light Neutral 140",
      hex: '#E2C09A',
      images: shade140Images,
    },
    {
      id: 'shade150',
      label: "Light Cool 150",
      hex: '#DDB892',
      images: shade150Images,
    },
    {
      id: 'shade160',
      label: "Light+ Neutral Olive 160",
      hex: '#D4B08A',
      images: shade160Images,
    },
    {
      id: 'shade170',
      label: "Light+ Neutral Warm 170",
      hex: '#CFA67E',
      images: shade170Images,
    },
    {
      id: 'shade180',
      label: "Light+ Cool 180",
      hex: '#C89C76',
      images: shade180Images,
    },
    {
      id: 'shade190',
      label: "Light Medium Neutral Warm 190",
      hex: '#C0946C',
      images: shade190Images,
    },
    {
      id: 'shade200',
      label: "Light Medium Neutral 200",
      hex: '#B88A62',
      images: shade200Images,
    },
    {
      id: 'shade210',
      label: "Light Medium Neutral Olive 210",
      hex: '#B0825C',
      images: shade210Images,
    },
    {
      id: 'shade220',
      label: "Medium Neutral 220",
      hex: '#A87854',
      images: shade220Images,
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
      id: 'shade260',
      label: "Medium Tan Neutral Olive 260",
      hex: '#875C40',
      images: shade260Images,
    },
    {
      id: 'shade270',
      label: "Medium Tan Olive 270",
      hex: '#7E543A',
      images: shade270Images,
    },
    {
      id: 'shade280',
      label: "Medium Tan Neutral 280",
      hex: '#764E36',
      images: shade280Images,
    },
    {
      id: 'shade290',
      label: "Medium Deep Neutral Olive 290",
      hex: '#6E4A34',
      images: shade290Images,
    },
    {
      id: 'shade300',
      label: "Medium Deep Warm 300",
      hex: '#664430',
      images: shade300Images,
    },
    {
      id: 'shade310',
      label: "Medium Deep Neutral Cool 310",
      hex: '#5E3E2C',
      images: shade310Images,
    },
    {
      id: 'shade320',
      label: "Medium Deep Neutral 320",
      hex: '#563A2A',
      images: shade320Images,
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
      id: 'shade360',
      label: "Medium Deep Neutral Olive 360",
      hex: '#3C2A20',
      images: shade360Images,
    },
    {
      id: 'shade370',
      label: "Deep Warm 370",
      hex: '#36261C',
      images: shade370Images,
    },
    {
      id: 'shade380',
      label: "Deep Neutral 380",
      hex: '#30221A',
      images: shade380Images,
    },
    {
      id: 'shade390',
      label: "Deep Neutral Warm 390",
      hex: '#2A1E18',
      images: shade390Images,
    },
    {
      id: 'shade400',
      label: "Deep Neutral Olive 400",
      hex: '#261A16',
      images: shade400Images,
    },
    {
      id: 'shade410',
      label: "Deep Neutral Warm 410",
      hex: '#221814',
      images: shade410Images,
    },
    {
      id: 'shade420',
      label: "Rich Deep Cool 420",
      hex: '#1E1612',
      images: shade420Images,
    },
    {
      id: 'shade430',
      label: "Rich Deep Neutral Olive 430",
      hex: '#1A1210',
      images: shade430Images,
    },
    {
      id: 'shade440',
      label: "Rich Deep Neutral 440",
      hex: '#16100E',
      images: shade440Images,
    },
    {
      id: 'shade450',
      label: "Rich Deep Neutral 450",
      hex: '#120C0A',
      images: shade450Images,
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
