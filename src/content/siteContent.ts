import childWateringPlants from "../assets/photos/260615 Wingate - 0704.webp";
import classroomArtDisplay from "../assets/photos/260615 Wingate - 0069.webp";
import drawingTable from "../assets/photos/260615 Wingate - 0023.webp";
import playdoughTable from "../assets/photos/260615 Wingate - 0034.webp";
import languageActivity from "../assets/photos/260615 Wingate - 0067.webp";
import lightTable from "../assets/photos/260615 Wingate - 0092.webp";
import caterpillarProject from "../assets/photos/260615 Wingate - 0191.webp";
import sensoryMaterials from "../assets/photos/260615 Wingate - 0275.webp";
import farmersMarket from "../assets/photos/260615 Wingate - 0559.webp";
import blockConstruction from "../assets/photos/260615 Wingate - 0154.webp";
import tablePlaydoughSetting from "../assets/photos/260615 Wingate - 0033.webp";
import classroomActivityArea from "../assets/photos/260615 Wingate - 0205.webp";
import classroomInterior from "../assets/photos/260615 Wingate - 0039.webp";
import artRoom from "../assets/photos/260615 Wingate - 0025.webp";
import childGardening from "../assets/photos/260615 Wingate - 0684.webp";
import childOnPlayground from "../assets/photos/260615 Wingate - 0768.webp";
import gardenAndGreenhouse from "../assets/photos/260615 Wingate - 0876.webp";
import constructionMaterials from "../assets/photos/260615 Wingate - 0149.webp";
import supportEducatorMau from "../assets/staff/Support-Educator-Mau.webp";
import sproutsCoEducatorCourtney from "../assets/staff/Sprouts Co-educator Courtney .webp";
import seedsLeadEducatorPriscilla from "../assets/staff/Seeds Lead Educator - Priscilla .webp";
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
import blossomCoEducatorNasteho from "../assets/staff/Blossom Co-educator-Nasteho.webp";
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
  ProgramGroup,
  SiteContact,
  TeamMember,
  TeamMemberGroup,
} from "../types/content";

export const pageImages = {
  aboutHistory: artRoom,
  aboutPhilosophy: playdoughTable,
  childSafeCommitment: classroomActivityArea,
  childSafetyAdvocate: sensoryMaterials,
  enrolmentsJourney: gardenAndGreenhouse,
  enrolmentsSubsidy: lightTable,
  programLearningApproach: caterpillarProject,
  programExpressionAndInquiry: languageActivity,
  programMeals: farmersMarket,
};

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

export const homePage: HomePageContent = {
  title: "Wingate Avenue Children's Co-Operative",
  subtitle:
    "High-quality, not-for-profit early learning in Ascot Vale with a strong community focus and welcoming, play-based environments.",
  heroImage: childWateringPlants,
  tiles: [
    {
      title: "About",
      text: "History, philosophy, and how our co-operative is governed.",
      to: "/about",
      image: tablePlaydoughSetting,
      alt: "Children and educators in a learning space",
    },
    {
      title: "Program",
      text: "Pedagogy, age groups, and meals across the day.",
      to: "/program",
      image: classroomInterior,
      alt: "Program activities in an early learning room",
    },
    {
      title: "Enrolments",
      text: "Waitlist, fees, tours, and orientation information.",
      to: "/enrolments",
      image: childGardening,
      alt: "Welcoming childcare environment for families",
    },
    {
      title: "Child Safe Practice",
      text: "Wingate Avenue Children's Co-operative is committed to a child-safe culture where every child feels safe, respected, heard, and empowered.",
      to: "/child-safe-practice",
      image: childOnPlayground,
      alt: "Welcoming childcare environment for families",
    },
    {
      title: "Our People",
      text: "Meet our leadership and educator team.",
      to: "/our-people",
      image: classroomArtDisplay,
      alt: "Drawing of children and educators in a learning space",
    },
    {
      title: "Our Spaces",
      text: "A visual look at our spaces, routines, and learning moments.",
      to: "/gallery",
      image: drawingTable,
      alt: "Gallery style view of childcare spaces",
    },
  ],
};

export const teamMembers: TeamMember[] = [
  {
    name: "Jandan Basaran",
    role: "Centre Director",
    qualification: "Bachelor of Early Childhood (Honours)",
    bio: "",
    image: centreDirectorJandan,
  },
  {
    name: "Aditya Panchhakshari",
    role: "Educational Leader",
    qualification: "Master of Education (Early Childhood Specialty)",
    bio: "",
    image: educationalLeaderAdi,
  },
  {
    name: "Christine Mengato",
    role: "Centre Administrator",
    bio: "",
    image: adminChristine,
  },
  {
    name: "Priscilla",
    role: "Seeds Lead Educator",
    bio: "",
    image: seedsLeadEducatorPriscilla,
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
    name: "Nasteho",
    role: "Blossom Co-educator",
    bio: "",
    image: blossomCoEducatorNasteho,
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

const membersByName = (names: string[]) =>
  names.map((name) => {
    const member = teamMembers.find((teamMember) => teamMember.name === name);

    if (!member) {
      throw new Error(`Missing team member: ${name}`);
    }

    return member;
  });

export const teamMemberGroups: TeamMemberGroup[] = [
  {
    title: "Leadership",
    members: membersByName([
      "Jandan Basaran",
      "Aditya Panchhakshari",
      "Christine Mengato",
    ]),
  },
  {
    title: "Seeds",
    members: membersByName(["Priscilla", "Sellam", "Rashika", "Tarryn"]),
  },
  {
    title: "Seedlings",
    members: membersByName(["Natalia", "Tania", "Lambrini", "Greta"]),
  },
  {
    title: "Sprouts",
    members: membersByName(["Kenna", "Rachel", "Antonia", "Ngoc", "Courtney"]),
  },
  {
    title: "Stalks",
    members: membersByName(["Miro", "Cody", "Gayatri"]),
  },
  {
    title: "Blossoms",
    members: membersByName(["View", "Jules", "Maus", "Nasteho"]),
  },
  {
    title: "Support Staff",
    members: membersByName(["Mau", "Sara", "Alessia", "Jasmin"]),
  },
  {
    title: "Our Chefs",
    members: membersByName(["Einat", "Fay"]),
  },
];

export const galleryImages: LocalGalleryImage[] = [
  {
    src: drawingTable,
    alt: "Drawing table with clipboards, pencils and colourful art materials",
  },
  {
    src: artRoom,
    alt: "Room with toys in baskets, child-sized furniture and book corner for early learning",
  },
  {
    src: tablePlaydoughSetting,
    alt: "Playdough invitation in an early learning room",
  },
  {
    src: playdoughTable,
    alt: "Children's playdough table with natural materials",
  },
  {
    src: classroomInterior,
    alt: "Open early learning room with tables, chairs and activity areas",
  },
  {
    src: languageActivity,
    alt: "Language learning activity with pictures and letters",
  },
  {
    src: classroomArtDisplay,
    alt: "Children's artwork displayed throughout a learning space",
  },
  {
    src: lightTable,
    alt: "Light table with colourful translucent learning materials",
  },
  {
    src: constructionMaterials,
    alt: "Construction materials arranged for play-based learning",
  },
  {
    src: blockConstruction,
    alt: "Creative play setup in an early learning environment",
  },
  {
    src: caterpillarProject,
    alt: "Caterpillar investigation table with drawing and painting materials",
  },
  {
    src: classroomActivityArea,
    alt: "Bright learning space with sensory materials and child-sized tables",
  },
  {
    src: sensoryMaterials,
    alt: "Sensory play materials with reflective discs and natural objects",
  },
  { src: farmersMarket, alt: "Imaginative play at a farmers market" },
  { src: childGardening, alt: "Child exploring plants in the garden" },
  {
    src: childWateringPlants,
    alt: "Child watering plants in the outdoor garden",
  },
  { src: childOnPlayground, alt: "Our outdoor playground area" },
  {
    src: gardenAndGreenhouse,
    alt: "Outdoor garden and play area with a greenhouse",
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
