export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string; // We'll map string names to icons
}

export interface Testimonial {
  id: string;
  name: string;
  role?: string;
  content: string;
  avatarUrl: string;
}

export interface ContactInfo {
  address: string;
  whatsapp: string;
  whatsappDisplay: string;
  instagram: string;
  mapEmbedUrl: string;
}

export interface NavLink {
  label: string;
  href: string;
}