
export interface Location {
  slug: string;
  name: string;
  title: string;
  description: string;
  h1: string;
  intro: string;
  commonIssues: string[];
  nearbyNeighborhoods: string[];
  zipCodes: string[];
  arrivalWindow: string;
}

export const locations: Location[] = [
  {
    slug: 'lincoln-park',
    name: 'Lincoln Park',
    title: 'Plumber in Lincoln Park, Chicago | Callahan Pipe & Drain',
    description: 'Expert plumbing in Lincoln Park, Chicago. Historic home specialists — copper pipe repair, basement flooding, 24/7 emergency service. Call (312) 555-0199.',
    h1: 'Expert Plumber in Lincoln Park, Chicago',
    intro: "Lincoln Park's historic greystones and vintage brick homes are some of Chicago's most beautiful — and most plumbing-intensive. Galvanized pipes from the early 1900s, aging cast-iron drain stacks, and Chicago's clay sewer lines are all common in this neighborhood. Callahan Pipe & Drain has been diagnosing and fixing these unique challenges since 2008.",
    commonIssues: ['Galvanized pipe corrosion & replacement', 'Basement flooding & sump pump failure', 'Cast-iron drain stack repair', 'Water heater replacement in tight spaces', 'Old copper re-piping'],
    nearbyNeighborhoods: ['Lakeview', 'Bucktown', 'River North', 'Andersonville'],
    zipCodes: ['60614'],
    arrivalWindow: '45–75 min',
  },
  {
    slug: 'wicker-park',
    name: 'Wicker Park',
    title: 'Plumber in Wicker Park, Chicago | Callahan Pipe & Drain',
    description: 'Plumbing services in Wicker Park, Chicago. Mixed residential & commercial specialists. Sewer line repair, drain cleaning, 24/7 emergency. Call (312) 555-0199.',
    h1: 'Expert Plumber in Wicker Park, Chicago',
    intro: "Wicker Park's vibrant mix of vintage two-flats, renovated lofts, and commercial storefronts means diverse plumbing needs. Aging shared sewer laterals, grease trap maintenance for restaurants, and heavy-use fixture repair are all in a day's work for Callahan. We understand this neighborhood's unique plumbing profile.",
    commonIssues: ['Shared sewer lateral repair', 'Drain cleaning & hydro-jetting', 'Commercial grease trap service', 'Two-flat plumbing stack repair', 'Frozen pipe prevention & repair'],
    nearbyNeighborhoods: ['Bucktown', 'Logan Square', 'River North', 'Ukrainian Village'],
    zipCodes: ['60622'],
    arrivalWindow: '45–75 min',
  },
  {
    slug: 'logan-square',
    name: 'Logan Square',
    title: 'Plumber in Logan Square, Chicago | Callahan Pipe & Drain',
    description: 'Plumbing in Logan Square, Chicago. Bungalow & greystone specialists. Water heater replacement, drain clearing, 24/7 emergency service. Call (312) 555-0199.',
    h1: 'Expert Plumber in Logan Square, Chicago',
    intro: "Logan Square is classic Chicago bungalow country — and those beautiful 1920s homes come with aging water heaters tucked in tight mechanical rooms, original cast-iron radiator systems, and drain lines that haven't been hydro-jetted in decades. Callahan's technicians know every inch of Logan Square's housing stock.",
    commonIssues: ['Water heater replacement (gas & tankless)', 'Bungalow drain clearing', 'Radiator & boiler repair', 'Toilet & fixture repair', 'Sump pump installation'],
    nearbyNeighborhoods: ['Wicker Park', 'Bucktown', 'Andersonville', 'Irving Park'],
    zipCodes: ['60647'],
    arrivalWindow: '45–75 min',
  },
  {
    slug: 'lakeview',
    name: 'Lakeview',
    title: 'Plumber in Lakeview, Chicago | Callahan Pipe & Drain',
    description: 'Plumbing services in Lakeview & Wrigleyville, Chicago. Condo & high-rise specialists. 24/7 emergency, flat-rate pricing. Call (312) 555-0199.',
    h1: 'Expert Plumber in Lakeview, Chicago',
    intro: "Lakeview and Wrigleyville run the full range from 1890s vintage flats to modern high-rise condos. Shared plumbing stacks in multi-unit buildings, condo association water shut-off coordination, and high-rise pressure regulation are specialties of the Callahan team. We work with building managers and individual condo owners alike.",
    commonIssues: ['Condo & shared-stack plumbing', 'High-rise water pressure regulation', 'Garbage disposal repair & install', 'Bathroom & kitchen remodel rough-in', 'Emergency shut-off & isolation'],
    nearbyNeighborhoods: ['Lincoln Park', 'Andersonville', 'Ravenswood', 'Rogers Park'],
    zipCodes: ['60613', '60657'],
    arrivalWindow: '45–75 min',
  },
  {
    slug: 'bucktown',
    name: 'Bucktown',
    title: 'Plumber in Bucktown, Chicago | Callahan Pipe & Drain',
    description: 'Plumbing in Bucktown, Chicago. Vintage home & renovation specialists. Leak detection, pipe replacement, 24/7 emergency service. Call (312) 555-0199.',
    h1: 'Expert Plumber in Bucktown, Chicago',
    intro: "Bucktown's blend of century-old workers' cottages and extensively renovated townhomes creates unique plumbing challenges. Renovation projects often uncover hidden pipe failures, outdated materials, or improper prior repairs. Callahan's team handles everything from complete re-pipes on flip properties to simple leak fixes on beloved vintage homes.",
    commonIssues: ['Renovation & remodel plumbing', 'Leak detection in walls & floors', 'Full home re-pipe projects', 'Backflow preventer installation', 'Outdoor hose bib & irrigation'],
    nearbyNeighborhoods: ['Wicker Park', 'Logan Square', 'Lincoln Park', 'Ukrainian Village'],
    zipCodes: ['60647'],
    arrivalWindow: '45–75 min',
  },
  {
    slug: 'andersonville',
    name: 'Andersonville',
    title: 'Plumber in Andersonville, Chicago | Callahan Pipe & Drain',
    description: 'Plumbing in Andersonville, Chicago. Boiler & steam heat specialists for older buildings. 24/7 emergency, licensed & insured. Call (312) 555-0199.',
    h1: 'Expert Plumber in Andersonville, Chicago',
    intro: "Andersonville's charming commercial strip and dense residential blocks sit atop some of the oldest plumbing infrastructure on Chicago's North Side. Steam boilers, cast-iron radiators, and 1920s-era commercial supply lines are the norm here. Callahan's boiler-certified technicians are the go-to choice for Andersonville building owners.",
    commonIssues: ['Steam boiler maintenance & repair', 'Cast-iron radiator bleeding & repair', 'Commercial building supply lines', 'Sewer camera inspection', 'Main water line repair'],
    nearbyNeighborhoods: ['Lakeview', 'Rogers Park', 'Lincoln Square', 'Edgewater'],
    zipCodes: ['60640'],
    arrivalWindow: '60–90 min',
  },
  {
    slug: 'river-north',
    name: 'River North',
    title: 'Plumber in River North, Chicago | Callahan Pipe & Drain',
    description: 'Commercial & luxury residential plumbing in River North, Chicago. High-rise condo specialists. 24/7 emergency service. Call (312) 555-0199.',
    h1: 'Expert Plumber in River North, Chicago',
    intro: "River North is Chicago's luxury residential and hospitality core — high-rise condos, boutique hotels, and fine dining establishments all need plumbing that works flawlessly. Callahan's commercial-certified team understands the complexity of high-rise mechanical rooms, hotel booster systems, and restaurant kitchen rough-ins.",
    commonIssues: ['High-rise mechanical room service', 'Commercial kitchen plumbing', 'Luxury fixture installation', 'Backflow certification & testing', 'Grease interceptor maintenance'],
    nearbyNeighborhoods: ['Lincoln Park', 'Wicker Park', 'The Loop', 'Gold Coast'],
    zipCodes: ['60654'],
    arrivalWindow: '45–75 min',
  },
  {
    slug: 'hyde-park',
    name: 'Hyde Park',
    title: 'Plumber in Hyde Park, Chicago | Callahan Pipe & Drain',
    description: 'Plumbing in Hyde Park, Chicago. University area & large building specialists. Sewer inspection, heating systems, 24/7 emergency. Call (312) 555-0199.',
    h1: 'Expert Plumber in Hyde Park, Chicago',
    intro: "Hyde Park's large vintage apartment buildings, co-ops, and University of Chicago properties present large-scale plumbing challenges. Multi-unit drain stack issues, aging clay sewer mains, and complex hot water recirculation systems in large buildings all require the kind of experience Callahan has built over 15 years serving Chicago's South Side.",
    commonIssues: ['Multi-unit drain stack diagnosis', 'Clay sewer main inspection & lining', 'Hot water recirculation systems', 'Large building water meter service', 'Apartment building fixture repair'],
    nearbyNeighborhoods: ['Kenwood', 'Bronzeville', 'Woodlawn', 'South Shore'],
    zipCodes: ['60615', '60637'],
    arrivalWindow: '60–90 min',
  },
];

export const getLocation = (slug: string): Location | undefined =>
  locations.find(l => l.slug === slug);
