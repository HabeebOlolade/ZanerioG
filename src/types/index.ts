// src/types/index.ts
export interface ServiceCard {
  title: string;
  description: string;
  image?: string;
}

export interface SocialLink {
  label: string;
  icon: React.ReactNode;
  url: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  mapUrl: string;
}

export interface CompanyInfo {
  name: string;
  description: string;
  services: string[];
}