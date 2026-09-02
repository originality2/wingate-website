const cloudfrontImgBase = "https://d2kvbtvlrloztz.cloudfront.net/img";

const child_with_bucket = `${cloudfrontImgBase}/child_with_bucket.webp`;
const people_drawings = `${cloudfrontImgBase}/people_drawings.webp`;
const child_with_sand = `${cloudfrontImgBase}/child_with_sand.webp`;
const farmers_market = `${cloudfrontImgBase}/farmers_market.webp`;
const play_corner = `${cloudfrontImgBase}/play_corner.webp`;
const table_playdough_setting = `${cloudfrontImgBase}/table_playdough_setting.webp`;
const seeds_empty_room = `${cloudfrontImgBase}/seeds_empty_room.webp`;
const seedlings_empty_room = `${cloudfrontImgBase}/seedlings_empty_room.webp`;
const seedlings_empty_room_2 = `${cloudfrontImgBase}/seedlings_empty_room_2.webp`;
const child_gardening = `${cloudfrontImgBase}/child_gardening.webp`;
const child_on_playground = `${cloudfrontImgBase}/child_on_playground.webp`;
const resources = `${cloudfrontImgBase}/resources.webp`;
const many_people_drawing = `${cloudfrontImgBase}/many_people_drawing.webp`;
const outdoor_play_area = `${cloudfrontImgBase}/outdoor_play_area.webp`;
const tower_of_hanoi = `${cloudfrontImgBase}/tower_of_hanoi.webp`;
import photo3 from "../../tmp-photos/photo-3.jpg";
import photo4 from "../../tmp-photos/photo-4.jpg";
import supportEducatorMau from "../assets/staff/Support-Educator-Mau.webp";
import sproutsCoEducatorCourtney from "../assets/staff/Sprouts Co-educator Courtney .webp";
import seedsLeadEducatorPricila from "../assets/staff/Seeds Lead Educator - Pricila .webp";
import sproutsLeadEducatorKenna from "../assets/staff/Sprouts - Lead Educator Kenna .webp";
import supportEducatorJasmin from "../assets/staff/Support-Educator-Jasmin.webp";
import blossomEarlyChildhoodTeacherView from "../assets/staff/Blossom Early Childhood Teacher - View .webp";
import centreDirectorJandan from "../assets/staff/Centre Director Jandan.webp";
import einatCook from "../assets/staff/Einat -Cook .webp";
import blossomCoEducatorMaus from "../assets/staff/Blossom Co-educator Maus.webp";
import seedlingsCoEducatorGreta from "../assets/staff/Seedlings Co-educator Greta .webp";
import seedsCoEducatorRashika from "../assets/staff/Seeds Co-educator Rashika .webp";
import stalksCoEducatorCody from "../assets/staff/Stalks Co-educator Cody .webp";
import sproutsCoEducatorNgoc from "../assets/staff/Sprouts Co-educator Ngoc .webp";
import sproutsCoEducatorRachel from "../assets/staff/Sprouts Co Educator Rachel .webp";
import stalksCoEducatorGayatri from "../assets/staff/Stalks-Co-educator-Gayatri.webp";
import seedlingsCoEducatorLambrini from "../assets/staff/Seedlings Co-Educator Lambrini .webp";
import seedsCoEducatorSellam from "../assets/staff/Seeds Co-educator Sellam.webp";
import educationalLeaderAdi from "../assets/staff/Educational Leader - Adi.webp";
import supportEducatorNasteha from "../assets/staff/Support-Educator-Nasteha.webp";
import fayCook from "../assets/staff/Fay -Cook.webp";
import stalksEarlyChildhoodTeacherMiro from "../assets/staff/Stalks-Early-Childood-Teacher-Miro-.webp";
import blossomEarlyChildhoodTeacherJules from "../assets/staff/Blossom Early Childhood Teacher Jules .webp";
import seedlingsCoLeadEducatorTania from "../assets/staff/Seedlings Co-Lead Educator Tania .webp";
import seedsCoEducatorTarryn from "../assets/staff/Seeds Co-Educator Tarryn.webp";
import seedlingsLeadEducatorNatalia from "../assets/staff/Seedlings Lead educator Natalia .webp";
import adminChristine from "../assets/staff/Admin Christine .webp";
import supportEducatorSara from "../assets/staff/Support-Educator-Sara.webp";
import sproutsCoEducatorAntonia from "../assets/staff/Sprouts Co-Educator Antonia .webp";
import supportEducatorAlessia from "../assets/staff/Support-educator-Alessia-.webp";
import type {
  HomePageContent,
  LocalGalleryImage,
  NavItem,
  PageMeta,
  ParentResourceLinks,
  ProgramGroup,
  SiteContact,
  TeamMember,
} from "../types/content";

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Program", to: "/program" },
  { label: "Enrolments", to: "/enrolments" },
  { label: "Child Safe Practice", to: "/child-safe-practice" },
  { label: "Our People", to: "/our-people" },
  { label: "Our Spaces", to: "/gallery" },
];

export const siteContact: SiteContact = {
  centreName: "Wingate Childcare Co-operative",
  address: "13B Wingate Ave, Ascot Vale VIC 3032",
  email: "admin@wingatecc.org",
  phone: "(03) 9376 8777",
  hours: [
    { day: "Monday to Friday", time: "7:00am – 6:00pm" },
    { day: "Saturday & Sunday", time: "Closed" },
  ],
  mapLink: "https://maps.google.com",
};

export const aboutPage: PageMeta = {
  title: "About",
  intro:
    "Welcome to Wingate Avenue Children's Co-operative - a safe place where children, families and community have belonged for over 50 years.",
};

export const programPage: PageMeta = {
  title: "Program",
  intro:
    "Our program is play-based and emergent, informed by Reggio Emilia principles and the Victorian Early Years Learning Framework.",
};

export const enrolmentsPage: PageMeta = {
  title: "Enrolments",
  intro:
    "Families are encouraged to join the waitlist early. Offers are made throughout the year based on availability and Priority of Access.",
};

export const childSafePracticePage: PageMeta = {
  title: "Child Safe Practice",
  intro:
    "Wingate Avenue Children's Co-operative is committed to a child-safe culture where every child feels safe, respected, heard, and empowered.",
};

export const peoplePage: PageMeta = {
  title: "Our People",
  intro:
    "Our educators, leaders, and support team create inclusive, diverse partnerships with children and community.",
};

export const resourcesPage: PageMeta = {
  title: "Parent Resources",
  intro:
    "Important family documents, policy links, and day-to-day information are grouped here for quick access.",
};

export const homePage: HomePageContent = {
  title: "Wingate Avenue Children's Co-Operative",
  subtitle:
    "High-quality, not-for-profit early learning in Ascot Vale with a strong community focus and welcoming, play-based environments.",
  tiles: [
    {
      title: "About",
      text: "History, philosophy, and how our co-operative is governed.",
      to: "/about",
      image: table_playdough_setting,
      alt: "Children and educators in a learning space",
    },
    {
      title: "Program",
      text: "Pedagogy, age groups, and meals across the day.",
      to: "/program",
      image: seedlings_empty_room,
      alt: "Program activities in an early learning room",
    },
    {
      title: "Enrolments",
      text: "Waitlist, fees, tours, and orientation information.",
      to: "/enrolments",
      image: child_gardening,
      alt: "Welcoming childcare environment for families",
    },
    {
      title: "Our People",
      text: "Meet our leadership and educator team.",
      to: "/our-people",
      image: many_people_drawing,
      alt: "Drawing of children and educators in a learning space",
    },
    {
      title: "Our Spaces",
      text: "A visual look at our spaces, routines, and learning moments.",
      to: "/gallery",
      image: child_on_playground,
      alt: "Gallery style view of childcare spaces",
    },
    {
      title: "Parent Resources",
      text: "Family handbook, policies, and useful links in one place.",
      to: "/parent-resources",
      image: resources,
      alt: "Parent resources and service information",
    },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jandan",
    role: "Centre Director",
    bio: "",
    image: centreDirectorJandan,
  },
  {
    name: "Adi",
    role: "Educational Leader",
    bio: "",
    image: educationalLeaderAdi,
  },
  { name: "Christine", role: "Administrator", bio: "", image: adminChristine },
  {
    name: "Pricila",
    role: "Seeds Lead Educator",
    bio: "",
    image: seedsLeadEducatorPricila,
  },
  {
    name: "Rashika",
    role: "Seeds Co-educator",
    bio: "",
    image: seedsCoEducatorRashika,
  },
  {
    name: "Sellam",
    role: "Seeds Co-educator",
    bio: "",
    image: seedsCoEducatorSellam,
  },
  {
    name: "Tarryn",
    role: "Seeds Co-educator",
    bio: "",
    image: seedsCoEducatorTarryn,
  },
  {
    name: "Natalia",
    role: "Seedlings Lead Educator",
    bio: "",
    image: seedlingsLeadEducatorNatalia,
  },
  {
    name: "Tania",
    role: "Seedlings Co-Lead Educator",
    bio: "",
    image: seedlingsCoLeadEducatorTania,
  },
  {
    name: "Greta",
    role: "Seedlings Co-educator",
    bio: "",
    image: seedlingsCoEducatorGreta,
  },
  {
    name: "Lambrini",
    role: "Seedlings Co-educator",
    bio: "",
    image: seedlingsCoEducatorLambrini,
  },
  {
    name: "Kenna",
    role: "Sprouts Lead Educator",
    bio: "",
    image: sproutsLeadEducatorKenna,
  },
  {
    name: "Antonia",
    role: "Sprouts Co-educator",
    bio: "",
    image: sproutsCoEducatorAntonia,
  },
  {
    name: "Courtney",
    role: "Sprouts Co-educator",
    bio: "",
    image: sproutsCoEducatorCourtney,
  },
  {
    name: "Ngoc",
    role: "Sprouts Co-educator",
    bio: "",
    image: sproutsCoEducatorNgoc,
  },
  {
    name: "Rachel",
    role: "Sprouts Co-educator",
    bio: "",
    image: sproutsCoEducatorRachel,
  },
  {
    name: "Miro",
    role: "Stalks Early Childhood Teacher",
    bio: "",
    image: stalksEarlyChildhoodTeacherMiro,
  },
  {
    name: "Cody",
    role: "Stalks Co-educator",
    bio: "",
    image: stalksCoEducatorCody,
  },
  {
    name: "Gayatri",
    role: "Stalks Co-educator",
    bio: "",
    image: stalksCoEducatorGayatri,
  },
  {
    name: "View",
    role: "Blossom Early Childhood Teacher",
    bio: "",
    image: blossomEarlyChildhoodTeacherView,
  },
  {
    name: "Jules",
    role: "Blossom Early Childhood Teacher",
    bio: "",
    image: blossomEarlyChildhoodTeacherJules,
  },
  {
    name: "Maus",
    role: "Blossom Co-educator",
    bio: "",
    image: blossomCoEducatorMaus,
  },
  {
    name: "Alessia",
    role: "Support Educator",
    bio: "",
    image: supportEducatorAlessia,
  },
  {
    name: "Jasmin",
    role: "Support Educator",
    bio: "",
    image: supportEducatorJasmin,
  },
  { name: "Mau", role: "Support Educator", bio: "", image: supportEducatorMau },
  {
    name: "Nasteha",
    role: "Support Educator",
    bio: "",
    image: supportEducatorNasteha,
  },
  {
    name: "Sara",
    role: "Support Educator",
    bio: "",
    image: supportEducatorSara,
  },
  { name: "Einat", role: "Cook", bio: "", image: einatCook },
  { name: "Fay", role: "Cook", bio: "", image: fayCook },
];

export const galleryImages: LocalGalleryImage[] = [
  {
    src: seedlings_empty_room_2,
    alt: "Room with toys in baskets, child-sized furniture and book corner for early learning",
  },
  {
    src: play_corner,
    alt: "Creative play setup in an early learning environment",
  },
  { src: table_playdough_setting, alt: "Indoor sensory play with playdough" },
  { src: child_on_playground, alt: "Our outdoor playground area" },
  { src: farmers_market, alt: "Imaginative play at a farmers market" },
  {
    src: seeds_empty_room,
    alt: "Room for our seeds with cots, child-sized furniture and play areas",
  },
  { src: tower_of_hanoi, alt: "Warm and inviting learning spaces" },
  {
    src: outdoor_play_area,
    alt: "Outdoor play area with various equipment for children",
  },
];

export const toddlerClassroomGroups: ProgramGroup[] = [
  {
    name: "Seeds",
    ages: "6 weeks to 12 months",
    summary: "Capacity 10 children per day.",
  },
  {
    name: "Seedlings",
    ages: "12 months to 24 months",
    summary: "Capacity 12 children per day.",
  },
  {
    name: "Sprouts",
    ages: "2 years to 3 years",
    summary: "Capacity 12 children per day.",
  },
];

export const kindergartenClassroomGroups: ProgramGroup[] = [
  {
    name: "Stalks",
    ages: "3 to 4 years",
    summary: "Capacity 16 children per day.",
  },
  {
    name: "Blossoms",
    ages: "4 years to 5 years",
    summary: "Capacity 20 children per day.",
  },
];

export const toddlerSupportFocusAreas = [
  {
    title: "Building children's confidence",
    description:
      "Through small class sizes and consistent daily rhythms, children are given the time and space to try, explore and grow at their own pace.",
  },
  {
    title: "Active listening to children's voice and expressions",
    description:
      "Educators tune in to every coo, gesture and word, responding with warmth so children feel truly heard.",
  },
  {
    title: "Nurturing safety and belonging",
    description:
      "Strong, trusting relationships with educators help children feel secure enough to explore the world around them.",
  },
  {
    title: "Encouraging independence",
    description:
      'Everyday moments become opportunities for children to develop self-confidence and a sense of "I can do it."',
  },
  {
    title: "Fostering natural curiosity",
    description:
      "Children are seen as capable investigators, and educators walk alongside them as they test, taste, and discover.",
  },
];

export const kindergartenSupportFocusAreas = [
  {
    title: "Preparing for school and beyond",
    description:
      "Building skills that set children up not just for primary school, but for life.",
  },
  {
    title: "Strong language development",
    description:
      "Growing confident communicators through rich, everyday conversation and experiences.",
  },
  {
    title: "Self-regulation and emotional growth",
    description:
      "Supporting children to understand and manage their emotions with confidence.",
  },
  {
    title: "Social skills and respectful communication",
    description:
      "Nurturing meaningful friendships and strong, respectful relationships with peers and educators.",
  },
  {
    title: "Pre-literacy and pre-numeracy foundations",
    description:
      "Introducing early concepts in a natural, engaging and hands-on way.",
  },
  {
    title: "A responsive, curiosity-driven classroom",
    description:
      "Teachers scaffold learning around each child's interests, encouraging sustained attention and deeper thinking.",
  },
  {
    title: 'Exploring multiple "languages" of expression',
    description:
      "Through art, construction, clay, open-ended materials and imaginative play, children discover new ways to understand and express themselves.",
  },
];

export const parentResourceLinks: ParentResourceLinks = {
  documents: [
    {
      label: "Family Handbook",
      href: "https://www.wingatechildcare.org/_files/ugd/ac9d19_e42ae39ee67e4bf98a8791f0417eb713.pdf",
    },
    {
      label: "Enrolment Policy",
      href: "https://www.wingatechildcare.org/_files/ugd/ac9d19_511ffe5cf6d043f3a25f6e079afc5a11.pdf",
    },
    {
      label: "Priority of Access",
      href: "https://www.wingatechildcare.org/_files/ugd/ccdf24_65e80b9fe38d44a2b3279e7123f89365.pdf",
    },
    {
      label: "Kinder Program Info",
      href: "https://www.wingatechildcare.org/_files/ugd/ac9d19_7214e7d7fc4a4bf295bd151ed3b6c32d.pdf",
    },
  ],
  policies: [
    {
      label: "Fee Payment Policy",
      href: "https://www.wingatechildcare.org/_files/ugd/ac9d19_26df6b5ab281490f99ff37dba5489a18.pdf",
    },
    {
      label: "Child Care Subsidy - How to Claim",
      href: "https://www.servicesaustralia.gov.au/individuals/services/centrelink/child-care-subsidy/how-claim",
    },
    {
      label: "Additional Child Care Subsidy",
      href: "https://www.servicesaustralia.gov.au/how-to-apply-for-additional-child-care-subsidy?context=41866",
    },
  ],
};
