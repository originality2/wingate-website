import photo1 from '../../tmp-photos/photo-1.jpeg';
import photo2 from '../../tmp-photos/photo-2.jpg';
import photo3 from '../../tmp-photos/photo-3.jpg';
import photo4 from '../../tmp-photos/photo-4.jpg';

export const navItems = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Program', to: '/program' },
  { label: 'Enrolments', to: '/enrolments' },
  { label: 'Our People', to: '/our-people' },
  { label: 'Gallery', to: '/gallery' },
  { label: 'Parent Resources', to: '/parent-resources' },
  { label: 'Contact', to: '/contact' },
];

export const siteContact = {
  centreName: 'Wingate Childcare Co-operative',
  address: '13B Wingate Ave, Ascot Vale VIC 3032',
  email: 'admin@wingatecc.org',
  phone: '(03) 9376 8777',
  hours: [
    { day: 'Monday to Friday', time: '7:00am – 6:00pm' },
    { day: 'Saturday & Sunday', time: 'Closed' },
  ],
  mapLink: 'https://maps.google.com',
};

export const aboutPage = {
  title: 'About',
  intro:
    'Wingate Avenue Children’s Co-Operative is a not-for-profit, community-led early learning service focused on high-quality care, relationships, and inclusion.',
  sectionLinks: [
    { id: 'history', label: 'History' },
    { id: 'philosophy', label: 'Philosophy' },
  ],
};

export const programPage = {
  title: 'Program',
  intro:
    'Our program is play-based and emergent, informed by Reggio Emilia principles and the Victorian Early Years Learning Framework.',
  sectionLinks: [
    { id: 'pedagogy', label: 'Pedagogy' },
    { id: 'age-groups', label: 'Age Groups' },
    { id: 'meals', label: 'Meals & Nutrition' },
  ],
};

export const enrolmentsPage = {
  title: 'Enrolments',
  intro:
    'Families are encouraged to join the waitlist early. Offers are made throughout the year based on availability and Priority of Access.',
  sectionLinks: [
    { id: 'info', label: 'Enrolment Information' },
    { id: 'fees', label: 'Fees' },
    { id: 'tours', label: 'Tours' },
  ],
};

export const peoplePage = {
  title: 'Our People',
  intro:
    'Our educators, leaders, and support team create inclusive, diverse partnerships with children and community.',
  sectionLinks: [{ id: 'team', label: 'Team' }],
};

export const resourcesPage = {
  title: 'Parent Resources',
  intro:
    'Important family documents, policy links, and day-to-day information are grouped here for quick access.',
  sectionLinks: [
    { id: 'documents', label: 'Documents' },
    { id: 'daily', label: 'Daily Information' },
    { id: 'policies', label: 'Policies' },
  ],
};

export const contactPage = {
  title: 'Contact',
  intro:
    'Please call or email to discuss enrolments, organise a centre tour, or speak with our team.',
  sectionLinks: [
    { id: 'details', label: 'Contact Details' },
    { id: 'message', label: 'Message Us' },
  ],
};

export const sectionLinksByPath = {
  '/about': aboutPage.sectionLinks,
  '/program': programPage.sectionLinks,
  '/enrolments': enrolmentsPage.sectionLinks,
  '/our-people': peoplePage.sectionLinks,
  '/parent-resources': resourcesPage.sectionLinks,
  '/contact': contactPage.sectionLinks,
};

export const homePage = {
  title: 'Wingate Avenue Children\'s Co-Operative',
  subtitle:
    'High-quality, not-for-profit early learning in Ascot Vale with a strong community focus and welcoming, play-based environments.',
  tiles: [
    {
      title: 'About',
      text: 'History, philosophy, and how our co-operative is governed.',
      to: '/about',
      image: photo1,
      alt: 'Children and educators in a learning space',
    },
    {
      title: 'Program',
      text: 'Pedagogy, age groups, and meals across the day.',
      to: '/program',
      image: photo2,
      alt: 'Program activities in an early learning room',
    },
    {
      title: 'Enrolments',
      text: 'Waitlist, fees, tours, and orientation information.',
      to: '/enrolments',
      image: photo3,
      alt: 'Welcoming childcare environment for families',
    },
    {
      title: 'Our People',
      text: 'Meet our leadership and educator team.',
      to: '/our-people',
      image: photo4,
      alt: 'Educator engaging with children',
    },
    {
      title: 'Gallery',
      text: 'A visual look at our spaces, routines, and learning moments.',
      to: '/gallery',
      image: photo1,
      alt: 'Gallery style view of childcare spaces',
    },
    {
      title: 'Parent Resources',
      text: 'Family handbook, policies, and useful links in one place.',
      to: '/parent-resources',
      image: photo2,
      alt: 'Parent resources and service information',
    },
    {
      title: 'Contact',
      text: 'Get in touch for tours, questions, and enrolment support.',
      to: '/contact',
      image: photo3,
      alt: 'Contact and visit information section',
    },
  ],
};

export const teamMembers = [
  {
    name: 'Jandan Basaran',
    role: 'Centre Director / Educational Leader',
    bio: 'Leads day-to-day operations, mentors educators, and oversees teaching and learning quality.',
    image: photo1,
  },
  {
    name: 'Aditya Panchakshari',
    role: 'Curriculum Leader',
    bio: 'Supports curriculum design, documentation, and reflective practice across age groups.',
    image: photo2,
  },
  {
    name: 'Christine Mengato',
    role: 'Centre Administrator',
    bio: 'Coordinates family communication, enrolment administration, and orientation logistics.',
    image: photo3,
  },
  {
    name: 'Priscilla',
    role: 'Lead Educator - Seeds',
    bio: 'Supports the youngest children to build secure attachments through responsive routines and care.',
    image: photo4,
  },
  {
    name: 'Natalia',
    role: 'Room Leader - Seedlings',
    bio: 'Leads play-based learning that supports language, wellbeing, and growing independence.',
    image: photo1,
  },
  {
    name: 'Mira & Jules',
    role: 'Kindergarten Teachers',
    bio: 'Deliver funded kinder programs focused on school readiness, inclusion, and emotional wellbeing.',
    image: photo2,
  },
];

export const galleryImages = [
  { src: photo1, alt: 'Children and educators sharing a calm classroom moment' },
  { src: photo2, alt: 'Creative play setup in an early learning environment' },
  { src: photo3, alt: 'Outdoor learning and movement activity' },
  { src: photo4, alt: 'Cozy reading and rest area for children' },
  { src: photo2, alt: 'Hands-on sensory exploration at childcare' },
  { src: photo3, alt: 'Children collaborating in group play' },
  { src: photo4, alt: 'Warm and inviting learning spaces' },
  { src: photo1, alt: 'Educator-led storytelling and discussion' },
];

export const programGroups = [
  {
    name: 'Seeds',
    ages: '6 weeks to 18 months',
    summary:
      'Responsive care, consistent routines, and sensory-rich experiences for our youngest children.',
  },
  {
    name: 'Seedlings',
    ages: '18 months to 3 years',
    summary:
      'Language-rich, play-based learning with a focus on confidence, curiosity, and social development.',
  },
  {
    name: 'Sprouts',
    ages: '3 years to 6 years',
    summary:
      'Project-based exploration, funded kindergarten pathways, and school-readiness foundations.',
  },
];

export const parentResourceLinks = {
  documents: [
    {
      label: 'Family Handbook',
      href: 'https://www.wingatechildcare.org/_files/ugd/ac9d19_e42ae39ee67e4bf98a8791f0417eb713.pdf',
    },
    {
      label: 'Enrolment Policy',
      href: 'https://www.wingatechildcare.org/_files/ugd/ac9d19_511ffe5cf6d043f3a25f6e079afc5a11.pdf',
    },
    {
      label: 'Priority of Access',
      href: 'https://www.wingatechildcare.org/_files/ugd/ccdf24_65e80b9fe38d44a2b3279e7123f89365.pdf',
    },
    {
      label: 'Kinder Program Info',
      href: 'https://www.wingatechildcare.org/_files/ugd/ac9d19_7214e7d7fc4a4bf295bd151ed3b6c32d.pdf',
    },
  ],
  policies: [
    {
      label: 'Fee Payment Policy',
      href: 'https://www.wingatechildcare.org/_files/ugd/ac9d19_26df6b5ab281490f99ff37dba5489a18.pdf',
    },
    {
      label: 'Child Care Subsidy - How to Claim',
      href: 'https://www.servicesaustralia.gov.au/individuals/services/centrelink/child-care-subsidy/how-claim',
    },
    {
      label: 'Additional Child Care Subsidy',
      href: 'https://www.servicesaustralia.gov.au/how-to-apply-for-additional-child-care-subsidy?context=41866',
    },
  ],
};
