export type SectionLink = {
  id: string;
  label: string;
};

export type NavItem = {
  label: string;
  to: string;
};

export type ContactHour = {
  day: string;
  time: string;
};

export type SiteContact = {
  centreName: string;
  address: string;
  email: string;
  phone: string;
  hours: ContactHour[];
  mapLink: string;
};

export type PageMeta = {
  title: string;
  intro: string;
  sectionLinks: SectionLink[];
};

export type LocalGalleryImage = {
  src: string;
  alt: string;
};

export type HomeTile = {
  title: string;
  text: string;
  to: string;
  image: string;
  alt: string;
};

export type HomePageContent = {
  title: string;
  subtitle: string;
  tiles: HomeTile[];
};

export type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

export type ProgramGroup = {
  name: string;
  ages: string;
  summary: string;
};

export type ResourceLink = {
  label: string;
  href: string;
};

export type ParentResourceLinks = {
  documents: ResourceLink[];
  policies: ResourceLink[];
};
