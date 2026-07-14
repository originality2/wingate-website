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
import type {
  HomePageContent,
  LocalGalleryImage,
  NavItem,
  PageMeta,
  ParentResourceLinks,
  ProgramGroup,
  SectionLink,
  SiteContact,
  TeamMember,
} from "../types/content";

export const navItems: NavItem[] = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Program", to: "/program" },
  { label: "Enrolments", to: "/enrolments" },
  { label: "Our People", to: "/our-people" },
  { label: "Our Spaces", to: "/gallery" },
  { label: "Parent Resources", to: "/parent-resources" },
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
    "Wingate Avenue Children’s Co-Operative is a not-for-profit, community-led early learning service focused on high-quality care, relationships, and inclusion.",
  sectionLinks: [
    { id: "history", label: "History" },
    { id: "philosophy", label: "Philosophy" },
  ],
};

export const programPage: PageMeta = {
  title: "Program",
  intro:
    "Our program is play-based and emergent, informed by Reggio Emilia principles and the Victorian Early Years Learning Framework.",
  sectionLinks: [
    { id: "pedagogy", label: "Pedagogy" },
    { id: "age-groups", label: "Age Groups" },
    { id: "meals", label: "Meals & Nutrition" },
  ],
};

export const enrolmentsPage: PageMeta = {
  title: "Enrolments",
  intro:
    "Families are encouraged to join the waitlist early. Offers are made throughout the year based on availability and Priority of Access.",
  sectionLinks: [
    { id: "info", label: "Enrolment Information" },
    { id: "fees", label: "Fees" },
    { id: "tours", label: "Tours" },
  ],
};

export const peoplePage: PageMeta = {
  title: "Our People",
  intro:
    "Our educators, leaders, and support team create inclusive, diverse partnerships with children and community.",
  sectionLinks: [{ id: "team", label: "Team" }],
};

export const resourcesPage: PageMeta = {
  title: "Parent Resources",
  intro:
    "Important family documents, policy links, and day-to-day information are grouped here for quick access.",
  sectionLinks: [
    { id: "documents", label: "Documents" },
    { id: "daily", label: "Daily Information" },
    { id: "policies", label: "Policies" },
  ],
};

export const sectionLinksByPath: Record<string, SectionLink[]> = {
  "/about": aboutPage.sectionLinks,
  "/program": programPage.sectionLinks,
  "/enrolments": enrolmentsPage.sectionLinks,
  "/our-people": peoplePage.sectionLinks,
  "/parent-resources": resourcesPage.sectionLinks,
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
    name: "Jandan Basaran",
    role: "Centre Director / Educational Leader",
    bio: "Leads day-to-day operations, mentors educators, and oversees teaching and learning quality.",
    image: photo4,
  },
  {
    name: "Aditya Panchakshari",
    role: "Curriculum Leader",
    bio: "Supports curriculum design, documentation, and reflective practice across age groups.",
    image: photo4,
  },
  {
    name: "Christine Mengato",
    role: "Centre Administrator",
    bio: "Coordinates family communication, enrolment administration, and orientation logistics.",
    image: photo3,
  },
  {
    name: "Priscilla",
    role: "Lead Educator - Seeds",
    bio: "Supports the youngest children to build secure attachments through responsive routines and care.",
    image: photo4,
  },
  {
    name: "Natalia",
    role: "Room Leader - Seedlings",
    bio: "Leads play-based learning that supports language, wellbeing, and growing independence.",
    image: photo4,
  },
  {
    name: "Mira & Jules",
    role: "Kindergarten Teachers",
    bio: "Deliver funded kinder programs focused on school readiness, inclusion, and emotional wellbeing.",
    image: photo4,
  },
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

export const programGroups: ProgramGroup[] = [
  {
    name: "Seeds",
    ages: "6 weeks to 18 months",
    summary:
      "Responsive care, consistent routines, and sensory-rich experiences for our youngest children.",
  },
  {
    name: "Seedlings",
    ages: "18 months to 3 years",
    summary:
      "Language-rich, play-based learning with a focus on confidence, curiosity, and social development.",
  },
  {
    name: "Sprouts",
    ages: "3 years to 6 years",
    summary:
      "Project-based exploration, funded kindergarten pathways, and school-readiness foundations.",
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
