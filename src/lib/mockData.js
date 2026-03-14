/**
 * Mock data used when the Contentful CMS is not configured.
 * This lets the site render with realistic content during development.
 */

export const mockPrograms = [
  {
    id: 'p1',
    title: 'Infant Care',
    ageRange: '6 weeks – 12 months',
    description:
      'Our nurturing infant program provides a safe, loving environment for your littlest ones. Experienced caregivers follow each baby\'s individual schedule for feeding, sleeping, and play.',
    icon: '👶',
    color: '#FFF3E0',
  },
  {
    id: 'p2',
    title: 'Toddler Program',
    ageRange: '1 – 3 years',
    description:
      'Our toddler classrooms are designed to spark curiosity and independence. Children explore through hands-on activities, sensory play, music, and language-rich storytelling.',
    icon: '🧒',
    color: '#E8F5E9',
  },
  {
    id: 'p3',
    title: 'Preschool',
    ageRange: '3 – 5 years',
    description:
      'Our preschool prepares children for kindergarten success. With a play-based curriculum, children build literacy, numeracy, social-emotional, and creative skills every day.',
    icon: '📚',
    color: '#E3F2FD',
  },
  {
    id: 'p4',
    title: 'Before & After School',
    ageRange: 'K – 5th grade',
    description:
      'We partner with local elementary schools to provide safe, enriching care before and after the school day, including homework help, outdoor play, and enrichment activities.',
    icon: '🌟',
    color: '#F3E5F5',
  },
];

export const mockTestimonials = [
  {
    id: 't1',
    quote:
      'Wingate Childcare has been such a blessing for our family. Our son absolutely loves going every morning – the staff is incredible and so caring!',
    authorName: 'Sarah M.',
    authorTitle: 'Parent of a 2-year-old',
  },
  {
    id: 't2',
    quote:
      'The preschool program here is outstanding. Our daughter came home singing songs and counting in Spanish within the first week. We couldn\'t be happier.',
    authorName: 'James & Lisa T.',
    authorTitle: 'Parents of a 4-year-old',
  },
  {
    id: 't3',
    quote:
      'From the moment we toured, we knew this was the right place. The classrooms are beautiful, the curriculum is thoughtful, and the communication from teachers is excellent.',
    authorName: 'Angela R.',
    authorTitle: 'Parent of twins, age 3',
  },
];

export const mockGalleryImages = [
  {
    id: 'g1',
    title: 'Art & Creativity',
    description: 'Children express themselves through painting and crafts',
    imageUrl:
      'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&q=80',
  },
  {
    id: 'g2',
    title: 'Outdoor Play',
    description: 'Exploring nature on our safe outdoor playground',
    imageUrl:
      'https://images.unsplash.com/photo-1555861496-0666c8981751?w=600&q=80',
  },
  {
    id: 'g3',
    title: 'Story Time',
    description: 'Building a love of reading through daily story time',
    imageUrl:
      'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&q=80',
  },
  {
    id: 'g4',
    title: 'Sensory Play',
    description: 'Hands-on sensory activities for toddlers',
    imageUrl:
      'https://images.unsplash.com/photo-1535572290543-960a8046f5af?w=600&q=80',
  },
  {
    id: 'g5',
    title: 'Music & Movement',
    description: 'Singing, dancing and making music together',
    imageUrl:
      'https://images.unsplash.com/photo-1516627145497-ae6968895b74?w=600&q=80',
  },
  {
    id: 'g6',
    title: 'Building & STEM',
    description: 'Early STEM exploration through block building',
    imageUrl:
      'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=600&q=80',
  },
];

export const mockHeroContent = {
  headline: 'A Place Where Little Ones\nLearn, Play & Thrive',
  subheading:
    'Wingate Childcare provides a warm, nurturing environment where children aged 6 weeks to 12 years grow into confident, curious learners.',
  primaryCta: { label: 'Explore Our Programs', href: '/programs' },
  secondaryCta: { label: 'Schedule a Tour', href: '/contact' },
};

export const mockAboutContent = {
  headline: 'About Wingate Childcare',
  body: `At Wingate Childcare, we believe every child deserves a joyful, safe, and stimulating start in life. 
Founded on the principles of respect, curiosity, and community, our centre has been a trusted partner 
for families for over 20 years.

Our qualified educators use a play-based approach rooted in early childhood research to support each 
child's development across cognitive, physical, social, and emotional domains. Small group sizes and 
low staff-to-child ratios ensure every child receives the individual attention they deserve.

We are fully licensed, DHS-accredited, and committed to continuous improvement.`,
  stats: [
    { value: '20+', label: 'Years of Service' },
    { value: '150+', label: 'Happy Families' },
    { value: '1:4', label: 'Infant Staff Ratio' },
    { value: '5★', label: 'Quality Rating' },
  ],
};

export const mockContactInfo = {
  address: '123 Wingate Way, Childcare Town, ST 12345',
  phone: '(555) 123-4567',
  email: 'hello@wingatechildcare.org',
  hours: [
    { day: 'Monday – Friday', time: '6:30 am – 6:00 pm' },
    { day: 'Saturday', time: 'Closed' },
    { day: 'Sunday', time: 'Closed' },
  ],
};
